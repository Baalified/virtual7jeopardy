

var v7jeopardy = angular.module('v7jeopardy', []);
var buzzerSound = new Audio("sounds/gamesounds/buzzer.mp3");

v7jeopardy.controller('AppCtrl', ['$scope', '$http', '$location', 'socketio', function($scope, $http, $location, socketio) {
  $scope.gamemaster=false;
  
  /* Getting the initial Games List.
  The list will be emitted when the client connects. */
  socketio.on('initGamesList', function(gameslist) {
    console.log("Initializing GamesList...");
    $scope.games = gameslist;
  });
  
  $scope.choseQuestion = function(question) {
    // If there is an active question already, return
    if($scope.currentgame.activequestion)
      return
    
    // Mark question as active question
    question.played=true;
    $scope.currentgame.activequestion = question;
    
    emitGameData();
  };
  
  $scope.closeQuestion = function() {
    delete $scope.currentgame.activequestion;
    delete $scope.currentgame.activeplayer;
    emitGameData();
  };
  
  $scope.reopenQuestion = function() {
    delete $scope.currentgame.activeplayer
    emitGameData();
  };
  
  $scope.correctAnswer = function() {
    // increase points of active player, close question
    $scope.currentgame.activeplayer.score = parseInt($scope.currentgame.activeplayer.score) + parseInt($scope.currentgame.activequestion.points);
    $scope.closeQuestion();
    emitGameData();
  };
  
  $scope.wrongAnswer = function() {
    // decrease points of active player, reopen question
    $scope.currentgame.activeplayer.score = parseInt($scope.currentgame.activeplayer.score) - parseInt($scope.currentgame.activequestion.points);
    $scope.reopenQuestion();
    emitGameData();
  };
  
  $scope.buzz = function(player) {
//    if($scope.currentgame.activequestion && !$scope.currentgame.activeplayer) {
//      $scope.currentgame.activeplayer = player;
//      emitGameData();
//    }
    socketio.emit('buzz', {'player':player});
  }
  
  var emitGameData = function() {
    socketio.emit('gamedata', JSON.parse(angular.toJson($scope.currentgame)));
  };
  
  socketio.on('gamedata', function(game) {
    $scope.currentgame = game;
  });

  socketio.on('buzz', function(buzzdata) {
    console.log('Received buzz.');
    if($scope.currentgame.activequestion && !$scope.currentgame.activeplayer) {
      $scope.currentgame.activeplayer = $scope.currentgame.players[buzzdata.player];
      console.log('Active player set.');
      buzzerSound.play();
      //emitGameData();
    }
  });
  
  socketio.on('setgm', function(gm) {
    $scope.gamemaster=gm;
  });
  
  $scope.loadGame = function(selgame) {
    $scope.currentgame = selgame;
    emitGameData();
    $scope.showloadgame = false;
  }
  
  $scope.saveGame = function() {
    $scope.showeditplayers = false;
    emitGameData();
  }
  
  $scope.addPlayer = function() {
    if($scope.currentgame) {
      $scope.currentgame.players.push($scope.newplayer)
      emitGameData();
      $scope.newplayer = "";
    }
  }

  $scope.reloadGames = function() {
    socketio.emit("getGameList");
  }
  
  $scope.buzzerTest = function() {
    console.log("buzzerTest()");
    if(!$scope.currentgame.activequestion) {
      $scope.currentgame.activequestion = {question: 'BUZZERTEST', answer: '', points: 0, player: false};
      emitGameData();
    }
  }
  
}]).filter('range', function() {
  // Range filter for implementing sequence 0..4 in Angular ng-repeat tag
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
}).factory('socketio', ['$rootScope', function ($rootScope) {
  // socket.io factory from http://briantford.com/blog/angular-socket-io
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);;
