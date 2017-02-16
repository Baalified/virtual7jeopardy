var bodyParser=require('body-parser');
var express=require('express');

var tingodb=require('tingodb')();
var app=express();
var http = require('http').Server(app);
var io=require("socket.io")(http);

var db=new tingodb.Db(__dirname + '/db', {});
var games = db.collection("games");

var testText = "Das ist ein Test Text 456";

var curGameData;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/gm", function(req, res) {
  console.log("GET /gm");
  res.sendFile(__dirname + "/public/index.html");
});

io.on('text', function(socket){
	console.log('ist text online?');
});

io.on('connection', function(socket){
  console.log('a client connected');
  
  games.find().toArray(function(err, docs) {
    console.log(docs);
    socket.emit('initGamesList', docs);
    socket.emit('setgm', socket.handshake.headers.referer && socket.handshake.headers.referer.endsWith("/gm"));
    socket.emit('gamedata', curGameData);
  });
  
  socket.on('add-message', (text) => {
  	console.log("add-message: " + text);
  	testText = text;
  	//falsch: socket.emit('get-message', testText);
  	io.emit('get-message', testText);
  });

  socket.on('buzz', function(buzzdata) {
    console.log("BUZZ!");
    console.log(buzzdata);
    io.emit('buzz', buzzdata);
  });

  
  socket.on('gamedata', function(gamedata) {
    console.log("Publishing Gamedata...");
    console.log(gamedata);
    games.save(gamedata, function(err, doc){
        console.log("Saved");
        console.log(err);
        console.log(doc);
      });
    io.emit('gamedata', gamedata);
    curGameData=gamedata;
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
