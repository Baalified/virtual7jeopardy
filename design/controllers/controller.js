var v7jeopardy = angular.module('v7jeopardy', []);

v7jeopardy.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.gamemaster=true;

  // TESTDATA
  var games = [
    {
    name: "Round 1",
    categories: [
      {
        name:"Code Names",
        questions: [
          {
            question:"Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream Sandwich, Jelly Bean",
            answer:"Android",
            points:100,
            played:false
          },{
            question:"Hardy Heron, Jaunty Jackalope, Lucid Lynx, Natty Narwhal, Precise Pangolin, Xenial Xerus",
            answer:"Ubuntu",
            points:200,
            played:false
          },{
            question:"Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, Mountain Lion",
            answer:"Mac OS X",
            points:300,
            played:false
          },{
            question:"Chicago, Daytona, Memphis, Whistler, Longhorn, Blackcomb, Blue",
            answer:"Microsoft Windows",
            points:400,
            played:false
          },{
            question:"Oak, Playground, Kestrel, Merlin, Tiger, Mustang, Dolphin",
            answer:"Java",
            points:500,
            played:false
          }
        ]
      },
      {
        name:"Unix commands",
        questions: [
          {
            question:"This command returns all passed arguments",
            answer:"echo",
            points:100,
            played:false
          },{
            question:"This program joins multiple files but is usualy only used to display the content",
            answer:"cat",
            points:200,
            played:false
          },{
            question:"This program tells you if two files have the same content",
            answer:"diff or cmp",
            points:300,
            played:false
          },{
            question:"This tool parses and transforms text using a simple programming language",
            answer:"sed",
            points:400,
            played:false
          },{
            question:"This command repeats its output until killed using 100% of one cpu core",
            answer:"yes",
            points:500,
            played:false
          }
        ]
      },{
        name:"Way Back Machine",
        questions: [
          {
            question:"",
            image:"images/waybackmachine/fb_20051127.jpg",
            answer:"Facebook (2005-11-27)",
            points:100,
            played:false
          },{
            question:"",
            image:"images/waybackmachine/ebay_20000615.jpg",
            answer:"Ebay (2000-06-15)",
            points:200,
            played:false
          },{
            question:"",
            image:"images/waybackmachine/amazon_19990827.jpg",
            answer:"Amazon (1999-08-27)",
            points:300,
            played:false
          },{
            question:"",
            image:"images/waybackmachine/v7_20011130.jpg",
            answer:"virtual7 (2001-11-30)",
            points:400,
            played:false
          },{
            question:"",
            image:"images/waybackmachine/oracle_19961219.jpg",
            answer:"Oracle (1996-12-19)",
            points:500,
            played:false
          }
        ]
      },{
        name:"Who am I?",
        questions: [
          {
            question:"I go every 2 years to WACKEN because of the Rock'n'Roll feeling and I would like to do a world tour again.",
            answer:"Roland Seidelt",
            points:100,
            played:false
          },{
            question:"I love it to laugh I also love to have deep conversations about politics or about the world.",
            answer:"Selim Kus",
            points:200,
            played:false
          },{
            question:"Big family: 4 sons, 3 grandchildren, and an extended family of 330 thousand Icelanders. I am a veteran of the cod wars and survivor of the banking crash - in general the kind of guy yer mamma always warned you about.",
            answer:"Pall Eggerz",
            points:300,
            played:false
          },{
            question:"I have turtles at home.",
            answer:"Manuela Di Miceli",
            points:400,
            played:false
          },{
            question:"I like cooking and eating !!! Most of the time just eating.",
            answer:"Cosmin Giru",
            points:500,
            played:false
          }
        ]
      },{
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },{
        name:"Abbreviations",
        questions: [
          {
            question:"ADF",
            answer:"Application Development Framework",
            points:100,
            played:false
          },{
            question:"AJAX",
            answer:"Asynchronous JavaScript and XML",
            points:200,
            played:false
          },{
            question:"JET",
            answer:"(Oracle) JavaScript Extension Toolkit",
            points:300,
            played:false
          },{
            question:"SOAP",
            answer:"Simple Object Access Protocol",
            points:400,
            played:false
          },{
            question:"REST",
            answer:"Representational State Transfer",
            points:500,
            played:false
          }
        ]
      }
    ],
    players: [ ]
  },
  {
    name: "Round 2",
    categories: [
      {
        name:"Blablablubb",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },
      {
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },{
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },{
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },{
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      },{
        name:"Name that state",
        questions: [
          {
            question:"404",
            answer:"Not found",
            points:100,
            played:false
          },{
            question:"200",
            answer:"OK",
            points:200,
            played:false
          },{
            question:"503",
            answer:"Service unavailable",
            points:300,
            played:false
          },{
            question:"301",
            answer:"Move permanently",
            points:400,
            played:false
          },{
            question:"418",
            answer:"I'm a teapot",
            points:500,
            played:false
          }
        ]
      }
    ],
    players: [ ]
  }
  ];
  
  var game;
  
  var refreshBoard = function() {
    $scope.currentgame = game;
    $scope.games = games;
  };
  
  refreshBoard();
  
  $scope.choseQuestion = function(question) {
    // If there is an active question already, return
    if(game.activequestion)
      return
    
    // Mark question as active question
    question.played=true;
    game.activequestion = question;
    
    // TODO: Send game Update to server via socket.io
    // Server will put actual question and answer on
    // game.activequestion.question/answer and publish via socket.io
    
    //temp test stuff
    refreshBoard();
  };
  
  $scope.closeQuestion = function() {
    delete game.activequestion;
    delete game.activeplayer;
    // TODO: Send game Update to server via socket.io
    
    //temp - will be triggered by socket.io receiving game
    refreshBoard();
  };
  
  $scope.reopenQuestion = function() {
    delete game.activeplayer
    // TODO: Send game Update to server via socket.io
    
    //temp - will be triggered by socket.io receiving game
    refreshBoard();
  };
  
  $scope.correctAnswer = function() {
    // increase points of active player, close question
    game.activeplayer.score += game.activequestion.points;
    $scope.closeQuestion();
  };
  
  $scope.wrongAnswer = function() {
    // decrease points of active player, reopen question
    game.activeplayer.score -= game.activequestion.points;
    $scope.reopenQuestion();
  };
  
  $scope.buzz = function(player) {
    if(game.activequestion && !game.activeplayer) {
      game.activeplayer = player;
      refreshBoard();
    }
  }
  
  $scope.loadGame = function(selgame) {
    game = selgame;
    $scope.showloadgame = false;
    
    // TODO: Send game Update to server via socket.io
    
    //temp - will be triggered by socket.io receiving game
    refreshBoard();
  }
  
  $scope.saveGame = function() {
    $scope.showeditplayers = false;
    
    // TODO: Send game Update to server via socket.io
    
    //temp - will be triggered by socket.io receiving game
    refreshBoard();
  }
  
  $scope.addPlayer = function() {
    if(game) {
      game.players.push($scope.newplayer)
      $scope.newplayer = "";
    }
  }
  
  // TODO: Socket.io receive game update
  // Only one receive function should be enough as every
  // event should send all game data and all game data
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