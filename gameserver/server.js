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
var exec = require('child_process').exec;

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
    curGameData.activeplayer = curGameData.players[buzzdata.player];
    lightsOff(buzzdata.player);
  });

  // When an update to the current Game State is received...
  socket.on('gamedata', function(gamedata) {
    console.log("Publishing Gamedata...");
    console.log(gamedata);
    // ...save Game State in Database
    // TEMP FOR TESTING - DISABLE SAVING
    /*games.save(gamedata, function(err, doc){
        console.log("Saved");
        console.log(err);
        console.log(doc);
      });*/
    // ...publish Game State to all clients connected
    io.emit('gamedata', gamedata);
    // ...update Game State in runtime server
    curGameData=gamedata;

    updateBuzzerState();
  });

  // Reload Games List
  socket.on("getGameList", function() {
    games.find().toArray(function(err, docs) {
      io.emit('initGamesList', docs);
    });
  });
  
  socket.on("audioQuestionPlay", function() {
    io.emit('audioQuestionPlay');
  });
  
  socket.on("audioQuestionStop", function() {
    io.emit('audioQuestionStop');
  });

  socket.on("toggleSplash", function(splash) {
    io.emit('toggleSplash', splash);
  });

  socket.on("showSolution", function() {
    io.emit("showSolution");
  });

  socket.on("themePlay", function() {
    io.emit("themePlay");
  });

  socket.on("themeStop", function() {
    io.emit("themeStop");
  });

  socket.on("themeToggle", function(vol) {
    io.emit('themeToggle', vol);
  });
  
});

if(gpio) {
  var buzzers = [
    {
      buzzpin: 12,
      lightpin: 11
    },
    {
      buzzpin: 13,
      lightpin: 15
    },
    {
      buzzpin: 16,
      lightpin: 18
    },
    {
      buzzpin: 22,
      lightpin: 32
    }
  ];

  buzzers.forEach(function(buzzer, idx) {
    exec("python set_pull_up.py "+buzzer.buzzpin);
    gpio.setup(buzzer.buzzpin, gpio.DIR_IN, gpio.EDGE_BOTH);
    gpio.setup(buzzer.lightpin, gpio.DIR_OUT);
  });

  // Listen for state changes in GPIO and buzz if appropriate
  gpio.on("change", function(channel, value) {
    if(value == false) {
      if(curGameData && curGameData.activequestion && !curGameData.activeplayer) {
        buzzers.forEach(function(buzzer, idx) {
          if(buzzer.buzzpin == channel) {
            io.emit("buzz", {player: idx});
            lightsOff(idx);
            curGameData.activeplayer = curGameData.players[idx];
          }
        });
      }
    }
  });
}

function updateBuzzerState() {
  if(!curGameData || !gpio)
    return;

  // If there is no active question, disable Buzzers and turn all lights off
  if(!curGameData.activequestion) {
    lightsOff();
  }

  // If there is an active question but no active Player yet, turn all lights on
  if(curGameData.activequestion && !curGameData.activeplayer) {
    lightsOn();
  }

  if(curGameData.activequestion && curGameData.activeplayer) {
    lightsOff( curGameData.players.indexOf(curGameData.activeplayer) );
  }
}

// Turn lights on all Buzzers off - if keepOn is supplied, keep that buzzers light on
function lightsOff(keepOn) {
  if(!curGameData || !gpio)
    return;
  buzzers.forEach(function(buzzer, idx) {
    if(idx != keepOn) {
      // Surrounding with try/catch as gpio can throw exceptions when not fully initialized yet
      try {
        gpio.write(buzzer.lightpin, false);
      }catch(e){
        console.log(e);
      }
    }
  });
}

// Turn lights on all Buzzers on - if keepOn is supplied, keep that buzzers light on
function lightsOn() {
  if(!curGameData || !gpio)
    return;
  buzzers.forEach(function(buzzer, idx) {
    // Surrounding with try/catch as gpio can throw exceptions when not fully initialized yet
    try {
      gpio.write(buzzer.lightpin, true);
    }catch(e){
      console.log(e);
    }
  });
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
