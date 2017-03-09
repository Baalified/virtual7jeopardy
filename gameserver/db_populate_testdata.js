var fs = require('fs');

if(fs.existsSync('db/games')) {
  console.log("File db/games already exists. Please delete this file if you want to re-initialize the database.");
  process.exit(1);
}

var tingodb=require('tingodb')();
var db=new tingodb.Db(__dirname + '/db', {});
var games = db.collection("games");

games.insert(
  [{
  "name":"Round 1",
  "categories":[
    {
      "name":"Code Names",
      "questions":[
        {
          "question":"Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream Sandwich, Jelly Bean",
          "answer":"Android",
          "points":100,
          "played":false
        },
        {
          "question":"Hardy Heron, Jaunty Jackalope, Lucid Lynx, Natty Narwhal, Precise Pangolin, Xenial Xerus",
          "answer":"Ubuntu",
          "points":200,
          "played":false
        },
        {
          "question":"Jaguar, Panther, Tiger, Leopard, Snow Leopard, Lion, Mountain Lion",
          "answer":"Mac OS X",
          "points":300,
          "played":false
        },
        {
          "question":"Chicago, Daytona, Memphis, Whistler, Longhorn, Blackcomb, Blue",
          "answer":"Microsoft Windows",
          "points":400,
          "played":false
        },
        {
          "question":"Oak, Playground, Kestrel, Merlin, Tiger, Mustang, Dolphin",
          "answer":"Java",
          "points":500,
          "played":false
        }
      ]
    },
    {
      "name":"Text 2 Song",
      "questions":[
        {
          "question":"",
          "audio":"sounds/texttosong/bohemian_rhapsody.mp3",
          "answer":"Queen - Bohemian Rhapsody",
          "points":100,
          "played":false
        },
        {
          "question":"",
          "audio":"sounds/texttosong/sweet_home_alabama.mp3",
          "answer":"Lynyrd Skynyrd - Sweet Home Alabama",
          "points":200,
          "played":false
        },
        {
          "question":"",
          "audio":"sounds/texttosong/eye_of_the_tiger.mp3",
          "answer":"Survivor - Eye of the Tiger",
          "points":300,
          "played":false
        },
        {
          "question":"",
          "audio":"sounds/texttosong/billie_jean.mp3",
          "answer":"Michael Jackson - Billie Jean",
          "points":400,
          "played":false
        },
        {
          "question":"",
          "audio":"sounds/texttosong/pretty_fly.mp3",
          "answer":"Offspring - Pretty fly (for a white guy)",
          "points":500,
          "played":false
        }
      ]
    },
    {
      "name":"Way Back Machine",
      "questions":[
        {
          "question":"",
          "image":"images/waybackmachine/fb_20051127.jpg",
          "answer":"Facebook (2005-11-27)",
          "points":100,
          "played":false
        },
        {
          "question":"",
          "image":"images/waybackmachine/ebay_20000615.jpg",
          "answer":"Ebay (2000-06-15)",
          "points":200,
          "played":false
        },
        {
          "question":"",
          "image":"images/waybackmachine/amazon_19990827.jpg",
          "answer":"Amazon (1999-08-27)",
          "points":300,
          "played":false
        },
        {
          "question":"",
          "image":"images/waybackmachine/v7_20011130.jpg",
          "answer":"virtual7 (2001-11-30)",
          "points":400,
          "played":false
        },
        {
          "question":"",
          "image":"images/waybackmachine/oracle_19961219.jpg",
          "answer":"Oracle (1996-12-19)",
          "points":500,
          "played":false
        }
      ]
    },
    {
      "name":"Who am I?",
      "questions":[
        {
          "question":"I go every 2 years to WACKEN because of the Rock'n'Roll feeling and I would like to do a world tour again.",
          "answer":"Roland Seidelt",
          "points":100,
          "played":false
        },
        {
          "question":"I love it to laugh I also love to have deep conversations about politics or about the world.",
          "answer":"Selim Kus",
          "points":200,
          "played":false
        },
        {
          "question":"I am a veteran of the cod wars and survivor of the banking crash - in general the kind of guy yer mamma always warned you about.",
          "answer":"Pall Eggerz",
          "points":300,
          "played":false
        },
        {
          "question":"I have turtles at home.",
          "answer":"Manuela Di Miceli",
          "points":400,
          "played":false
        },
        {
          "question":"I like cooking and eating !!! Most of the time just eating.",
          "answer":"Cosmin Giru",
          "points":500,
          "played":false
        }
      ]
    },
    {
      "name":"Name that state",
      "questions":[
        {
          "question":"404",
          "answer":"Not found",
          "points":100,
          "played":false
        },
        {
          "question":"200",
          "answer":"OK",
          "points":200,
          "played":false
        },
        {
          "question":"503",
          "answer":"Service unavailable",
          "points":300,
          "played":false
        },
        {
          "question":"301",
          "answer":"Move permanently",
          "points":400,
          "played":false
        },
        {
          "question":"418",
          "answer":"I'm a teapot",
          "points":500,
          "played":false
        }
      ]
    },
    {
      "name":"Abbreviations",
      "questions":[
        {
          "question":"ADF",
          "answer":"Application Development Framework",
          "points":100,
          "played":false
        },
        {
          "question":"AJAX",
          "answer":"Asynchronous JavaScript and XML",
          "points":200,
          "played":false
        },
        {
          "question":"JET",
          "answer":"(Oracle) JavaScript Extension Toolkit",
          "points":300,
          "played":false
        },
        {
          "question":"SOAP",
          "answer":"Simple Object Access Protocol",
          "points":400,
          "played":false
        },
        {
          "question":"REST",
          "answer":"Representational State Transfer",
          "points":500,
          "played":false
        }
      ]
    }
  ],
  "players":[

  ]
},
  {"name":"Round 2","categories":[{"name":"Blablablubb","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]},{"name":"Name that state","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]},{"name":"Name that state","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]},{"name":"Name that state","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]},{"name":"Name that state","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]},{"name":"Name that state","questions":[{"question":"404","answer":"Not found","points":100,"played":false},{"question":"200","answer":"OK","points":200,"played":false},{"question":"503","answer":"Service unavailable","points":300,"played":false},{"question":"301","answer":"Move permanently","points":400,"played":false},{"question":"418","answer":"I'm a teapot","points":500,"played":false}]}],"players":[]}]
);