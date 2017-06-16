var fs = require('fs');

if(fs.existsSync('db/games')) {
  console.log("File db/games already exists. Please delete this file if you want to re-initialize the database.");
  process.exit(1);
}

var tingodb=require('tingodb')();
var db=new tingodb.Db(__dirname + '/db', {});
var games = db.collection("games");

games.insert(
[
  /**
   * ROUND 1
   */
  {
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
            "audio_answer":"sounds/texttosong/bohemian_rhapsody_solution.mp3",
            "image_answer":"sounds/texttosong/bohemian_rhapsody_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/sweet_home_alabama.mp3",
            "answer":"Lynyrd Skynyrd - Sweet Home Alabama",
            "audio_answer":"sounds/texttosong/sweet_home_alabama_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/sweet_home_alabama_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/eye_of_the_tiger.mp3",
            "answer":"Survivor - Eye of the Tiger",
            "audio_answer":"sounds/texttosong/eye_of_the_tiger_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/eye_of_the_tiger_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/billie_jean.mp3",
            "answer":"Michael Jackson - Billie Jean",
            "audio_answer":"sounds/texttosong/billie_jean_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/billie_jean_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/pretty_fly.mp3",
            "answer":"Offspring - Pretty fly (for a white guy)",
            "audio_answer":"sounds/texttosong/pretty_fly_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/pretty_fly_solution.jpg",
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
            "question":"...In general the kind of guy yer mamma always warned you about.",
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
            "answer":"Moved permanently",
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
      {
        "name":"Test1",
        "score":0
      },
      {
        "name":"Test2",
        "score":0
      },
      {
        "name":"Test3",
        "score":0
      },
      {
        "name":"Test4",
        "score":0
      }
    ]
  },
/**
 * ROUND 2
 */
  {
    "name":"Round 2",
    "categories":[
      {
        "name":"Hello World",
        "questions":[
          {
            "question":"",
            "image":"images/helloworld/javascript.png",
            "answer":"JavaScript",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/helloworld/java.png",
            "answer":"Java",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/helloworld/x86asm.png",
            "answer":"ASM (x86)",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/helloworld/brainfuck.png",
            "answer":"Brainfuck",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/helloworld/lolcode.png",
            "answer":"Lolcode",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Oh my it's an AI",
        "questions":[
          {
            "question":"He feels sorry for dave for not being able to do what he's been asked",
            "answer":"HAL (2001 a space odyssey)",
            "points":100,
            "played":false
          },
          {
            "question":"This golden boy is not afraid to suggest new strategies even if it means defeat",
            "answer":"C-3PO (Star Wars)",
            "points":200,
            "played":false
          },
          {
            "question":"Do not trust her when it comes to bakery products",
            "answer":"GLaDOS (Portal)",
            "points":300,
            "played":false
          },
          {
            "question":"He is \"Just A Rather Very Intelligent System\" belonging to a genius, billionaire, playboy, philanthropist",
            "answer":"J.A.R.V.I.S. (Iron Man)",
            "points":400,
            "played":false
          },
          {
            "question":"Named after IBMs first CEO this AI was specifically developed to answer questions on Jeopardy",
            "answer":"Watson",
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
            "audio":"sounds/texttosong/basket_case.mp3",
            "answer":"Green Day - Basket Case",
            "audio_answer":"sounds/texttosong/basket_case_solution.mp3",
            "image_answer":"sounds/texttosong/basket_case_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/walking_on_sunshine.mp3",
            "answer":"Katrina & The Waves - Walking On Sunshine",
            "audio_answer":"sounds/texttosong/walking_on_sunshine_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/walking_on_sunshine_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/never_gonna_give_you_up.mp3",
            "answer":"Rick Astley - Never Gonna Give You Up",
            "audio_answer":"sounds/texttosong/never_gonna_give_you_up_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/never_gonna_give_you_up_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/in_the_end.mp3",
            "answer":"Linkin Park - In The End",
            "audio_answer":"sounds/texttosong/in_the_end_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/in_the_end_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/chop_suey.mp3",
            "answer":"System of a down - Chop Suey",
            "audio_answer":"sounds/texttosong/chop_suey_solution.mp3",
            "image_answer":"sounds/texttosong/chop_suey_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Who are they?",
        "questions":[
          {
            "question":"",
            "image":"images/whoarethey/Micha_Bjoern_Jochen.jpg",
            "image_answer":"images/whoarethey/Micha_Bjoern_Jochen_solution.jpg",
            "answer":"Micha, Björn, Jochen",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Caro_Francie_Michael.jpg",
            "image_answer":"images/whoarethey/Caro_Francie_Michael_solution.jpg",
            "answer":"Caro, Francie, Michael Augustin",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Marcus_Markus_Marcus.jpg",
            "image_answer":"images/whoarethey/Marcus_Markus_Marcus_solution.jpg",
            "answer":"Marcus Weiss, Markus Koske, Marcus Hammer",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Oskar_Halil_Jens.jpg",
            "image_answer":"images/whoarethey/Oskar_Halil_Jens_solution.jpg",
            "answer":"Oskar, Halil, Jens",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Sebastian_Cipi_Anton.jpg",
            "image_answer":"images/whoarethey/Sebastian_Cipi_Anton_solution.jpg",
            "answer":"Sebastian Faust, Cipi, Anton",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Recursive acronyms",
        "questions":[
          {
            "question":"... Not Unix Not Unix Not Unix Not Unix Not Unix",
            "answer":"GNU",
            "points":100,
            "played":false
          },
          {
            "question":"... Hypertext Processor Hypertext Processor Hypertext Processor Hypertext Processor",
            "answer":"PHP",
            "points":200,
            "played":false
          },
          {
            "question":"... URL Request Library URL Request Library URL Request Library URL Request Library URL Request Library",
            "answer":"cURL",
            "points":300,
            "played":false
          },
          {
            "question":"... Package Manager Package Manager Package Manager Package Manager Package Manager Package Manager",
            "answer":"RPM",
            "points":400,
            "played":false
          },
          {
            "question":"... Installs Packages Installs Packages Installs Packages Installs Packages Installs Packages Installs Packages",
            "answer":"PIP",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Three letter extensions",
        "questions":[
          {
            "question":".csv",
            "answer":"Comma Seperated Values",
            "points":100,
            "played":false
          },
          {
            "question":".css",
            "answer":"Cascading Style Sheets",
            "points":200,
            "played":false
          },
          {
            "question":".pdf",
            "answer":"Portable Document Format",
            "points":300,
            "played":false
          },
          {
            "question":".xml",
            "answer":"Extensible Markup Language",
            "points":400,
            "played":false
          },
          {
            "question":".tar",
            "answer":"Tape Archive",
            "points":500,
            "played":false
          }
        ]
      }
    ],
    "players":[
      {
        "name":"Michael Augustin",
        "score":0
      },
      {
        "name":"Guillermo",
        "score":0
      },
      {
        "name":"Miriam Maier",
        "score":0
      },
      {
        "name":"Test4",
        "score":0
      }
    ]
  }
]
);