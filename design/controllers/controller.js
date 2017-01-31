var v7jeopardy = angular.module('v7jeopardy', []);

v7jeopardy.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");
  
  // Testdata
  var gameDefinition = {
    name: "Round 1",
    categories: [
      {
        id:"1",
        name:"Name that state",
        questions: [
          {
            id:"11"
          },{
            id:"12"
          },{
            id:"13"
          },{
            id:"14"
          },{
            id:"15"
          }
        ]
      },
      {
        id:"2",
        name:"Abbreviations",
        questions: [
          {
            id:"21"
          },{
            id:"22"
          },{
            id:"23"
          },{
            id:"24"
          },{
            id:"25"
          }
        ]
      },
      {
        id:"3",
        name:"Oracle Ports",
        questions: [
          {
            id:"31"
          },{
            id:"32"
          },{
            id:"33"
          },{
            id:"34"
          },{
            id:"35"
          }
        ]
      },
      {
        id:"4",
        name:"Code Names",
        questions: [
          {
            id:"41"
          },{
            id:"42"
          },{
            id:"43"
          },{
            id:"44"
          },{
            id:"45"
          }
        ]
      },
      {
        id:"5",
        name:"Unix commands",
        questions: [
          {
            id:"51"
          },{
            id:"52"
          },{
            id:"53"
          },{
            id:"54"
          },{
            id:"55"
          }
        ]
      },
      {
        id:"6",
        name:"Way Back Machine",
        questions: [
          {
            id:"61"
          },{
            id:"62"
          },{
            id:"63"
          },{
            id:"64"
          },{
            id:"65"
          }
        ]
      }
    ]
  };
  
  // Testdata
  var gameState = {
    playedquestions: ["22","24","44","63"],
    players: [
      {
        name: "Marcus",
        color: "green",
        score: 600
      },
      {
        name: "Tobias",
        color: "red",
        score: -400
      },
      {
        name: "Manuela",
        color: "darkviolet",
        score: 500
      },
      {
        name: "Cosmin",
        color: "Orange",
        score: 0
      }
    ]
  };
  
  var refreshBoard = function() {
    console.log("Categories: ");
    console.log(gameDefinition);
    
    $scope.categories = gameDefinition.categories;
    $scope.playedquestions = gameState.playedquestions;
    $scope.players = gameState.players;
  };
  
  refreshBoard();
  
  $scope.choseQuestion = function(id) {
    // Mark question as played
    gameState.playedquestions.push(id);
    // Mark question as active question
    gameState.activequestion = {id: id};
    
    // TODO: Send gameState Update to server via socket.io
    // Server will put actual question and answer on
    // gameState.activequestion.question/answer and publish via socket.io
    
    //temp test stuff
    gameState.players[2].score += 100;
  };
  
  // TODO: Socket.io receive gameState update
  // Only one receive function should be enough as every
  // event should send all gameState data and all gameState data
  // will be processed on clients on each event
  // This will keep clients in sync and recovering from server/client
  // failure very easy.

}]).filter('range', function() {
  // Range filter for implementing sequence 0..4 in Angular ng-repeat tag
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});