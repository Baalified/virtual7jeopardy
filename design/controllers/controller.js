var v7jeopardy = angular.module('v7jeopardy', []);

v7jeopardy.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");
  
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
    gameState.playedquestions.push(id);
    //temp test stuff
    gameState.players[2].score += 100;
  };

}]).filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});