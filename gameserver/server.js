var bodyParser=require('body-parser');
var express=require('express');

var tingodb=require('tingodb')();
var app=express();
var http = require('http').Server(app);
var io=require("socket.io")(http);

var db=new tingodb.Db(__dirname + '/db', {});
var games = db.collection("games");

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
    socket.emit('initGamesList', JSON.stringify(docs));
    socket.emit('setgm', socket.handshake.headers.referer.endsWith("/gm"));
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
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
