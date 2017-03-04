var bodyParser=require('body-parser');
var express=require('express');
try {
  var gpio = require('rpi-gpio');
  console.log("GPIO Initialized.");
}catch(e){
  var gpio = false;
  console.log("GPIO set to false.");
}

var tingodb=require('tingodb')();
var app=express();
var http = require('http').Server(app);
var io=require("socket.io")(http);

// Initializing Database and Table games
var db=new tingodb.Db(__dirname + '/db', {});
var games = db.collection("games");

// Variable to store current Gamedata serverside
var curGameData;

// Add folder /public to HTTP Server
app.use(express.static(__dirname + "/public"));
// Configure JSON Parser for HTTP Server
app.use(bodyParser.json());

// Define GameMaster view at /gm
app.get("/gm", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Initialize Socket.IO connection and setup Socket
io.on('connection', function(socket){
  console.log('a client connected');
  
  // On initial connect send Games List and Current Game State to connected client
  games.find().toArray(function(err, docs) {
    // Initialize Games List
    socket.emit('initGamesList', docs);
    // Set Gamemaster Mode based on URI
    socket.emit('setgm', socket.handshake.headers.referer && socket.handshake.headers.referer.endsWith("/gm"));
    // Send current Game State
    socket.emit('gamedata', curGameData);
  });

  socket.on('buzz', function(buzzdata) {
    console.log("BUZZ!");
    console.log(buzzdata);
    io.emit('buzz', buzzdata);
  });

  // When an update to the current Game State is received...
  socket.on('gamedata', function(gamedata) {
    console.log("Publishing Gamedata...");
    console.log(gamedata);
    // ...save Game State in Database
    games.save(gamedata, function(err, doc){
        console.log("Saved");
        console.log(err);
        console.log(doc);
      });
    // ...publish Game State to all clients connected
    io.emit('gamedata', gamedata);
    // ...update Game State in runtime server
    curGameData=gamedata;
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
