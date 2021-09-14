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
      },
      {
        "name":"My Talent",
        "questions":[
          {
            "question":"a + b = c<br/>\
            3a-2a+3b-2b = 3c-2c<br/>\
            3a+3b-3c = 2a+2b-2c<br/>\
            3(a+b-c) = 2(a+b-c)<br/>\
            3 = 2",
            "answer":"Jonas Köster",
            "points":100,
            "played":false
          },
          {
            "question":"I learned to juggle with 3 balls with different moves. :D",
            "answer":"Marcus Hammer",
            "points":200,
            "played":false
          },
          {
            "question":"I would be challenging you – give me a word or a scene and with almost 100% certainty I will find you a fitting song for it. And heads up – most likely I will also perform the song for you right away so that you can’t get it out of your head anymore.",
            "answer":"Micha Prinz-Hübert",
            "points":300,
            "played":false
          },
          {
            "question":"I would be one of the judges. ;)",
            "answer":"Florian Biberschik",
            "points":400,
            "played":false
          },
          {
            "question":"A TED Talk on any of my pet peeves. Alternatively some type of standup probably.",
            "answer":"Tobias Melcher",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"TLDs",
        "questions":[
          {
            "question":".es",
            "answer":"Spain",
            "points":100,
            "played":false
          },
          {
            "question":".dk",
            "answer":"Denmark",
            "points":200,
            "played":false
          },
          {
            "question":".no",
            "answer":"Norway",
            "points":300,
            "played":false
          },
          {
            "question":".va",
            "answer":"Vatikan City",
            "points":400,
            "played":false
          },
          {
            "question":".su",
            "answer":"Soviet Union",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Emoji 2 Song",
        "questions":[
          {
            "question":"",
			      "image":"images/2018/emojisongs/99luftbalons.jpg",
            "answer":"99 Luftbalons",
            "points":100,
            "played":false
          },
          {
            "question":"",
      			"image":"images/2018/emojisongs/highwaytohell.jpg",
            "answer":"Highway to Hell",
            "points":200,
            "played":false
          },{
            "question":"",
			      "image":"images/2018/emojisongs/iceicebaby.jpg",
            "answer":"Ice Ice Baby",
            "points":300,
            "played":false
          },{
            "question":"",
      			"image":"images/2018/emojisongs/videokilledtheradiostar.jpg",
            "answer":"Video killed the Radiostar",
            "points":400,
            "played":false
          },{
            "question":"",
			      "image":"images/2018/emojisongs/novemberrain.jpg",
            "answer":"November Rain",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Those Guys",
        "questions":[
          {
            "question":"Leslie Winkle, Stuart Bloom, Penny, Howard Wolowitz, Leonard Hofstadter, Sheldon Cooper",
            "answer":"The Big Bang Theory",
            "points":100,
            "played":false
          },
          {
            "question":"Stella Zinman, Quinn Garvey, Lily Aldrin, Marshall Eriksen, Robin Schebartsky, Barney Stinson",
            "answer":"How I met your mother",
            "points":200,
            "played":false
          },
          {
            "question":"Ethan Kanin, James Heller, Morris O'Brian, Nina Myers, David Palmer, Jack Bauer",
            "answer":"24",
            "points":300,
            "played":false
          },
          {
            "question":"Dorothy Halligan, Lucky, Trevor Ochmonek, Brian Tanner, William Tanner, Gordon Shumway",
            "answer":"ALF",
            "points":400,
            "played":false
          },
          {
            "question":"Steve Harrington, Barbara Holland, Dustin Henderson, Jim Hopper, Will Byers, Jane Ives",
            "answer":"Stranger Things",
            "points":500,
            "played":false
          }
        ]
      },
    ],
    "players":[]
  },
  {
    "name":"Round 2",
    "categories":[
      {
        "name":"Numbers",
        "questions":[
          {
            "question":"2^10 in decimal",
            "answer":"1024",
            "points":100,
            "played":false
          },
          {
            "question":"The product of all integers form -10 to 10",
            "answer":"0",
            "points":200,
            "played":false
          },
          {
            "question":"The metric system prefix for 10^-6",
            "answer":"Micro",
            "points":300,
            "played":false
          },
          {
            "question":"This is 2^10 in hexadecimal",
            "answer":"0x400",
            "points":400,
            "played":false
          },
          {
            "question":"The next two terms in the sequence kilo, mega, giga, tera, peta",
            "answer":"Exa, Zetta",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Car Models",
        "questions":[
          {
            "question":"",
			"image":"images/2018/Autos/smartroadster.jpg",
            "answer":"Smart Roadster",
            "points":100,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/vwpolo.jpg",
            "answer":"VW Polo",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/Autos/mercedesaklasse.jpg",
			"answer":"Mercedes A Klasse",
            "points":300,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/bugattichiron.jpg",
            "answer":"Bugatti Chiron",
            "points":400,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/ferrarilaferrari.jpg",
            "answer":"La Ferrari",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Sidekicks",
        "questions":[
          {
            "question":"Luigi",
            "answer":"Mario",
            "points":100,
            "played":false
          },
          {
            "question":"Mini-Me",
            "answer":"Dr Evil",
            "points":200,
            "played":false
          },
          {
            "question":"Tails",
            "answer":"Sonic",
            "points":300,
            "played":false
          },
          {
            "question":"Passepartout",
            "answer":"Phileas Fogg",
            "points":400,
            "played":false
          },
          {
            "question":"Wong",
            "answer":"Doctor Strange",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"My Talent",
        "questions":[
          {
            "question":"How to NOT train your cat.",
            "answer":"Anja Hinlang",
            "points":100,
            "played":false
          },
          {
            "question":"Recognising smarties colour by taste.",
            "answer":"Francie Krause",
            "points":200,
            "played":false
          },
          {
            "question":"You’ve seen the guy who puts baby powder on his butt and then farts? I think I can do that…",
            "answer":"Marek Hubatka",
            "points":300,
            "played":false
          },
          {
            "question":"I can read very fast.",
            "answer":"Paula Procenko",
            "points":400,
            "played":false
          },
          {
            "question":"I’d try some musical comedy. It would either be hilarious or it would be devastatingly bad, but I myself would have a lot of fun anyway.",
            "answer":"Matthias (Gonzo) Grobarek",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Logos",
        "questions":[
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/amazon.jpg",
            "answer":"Amazon",
            "image_answer":"images/2018/KlassischeLogos/amazonsolution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/pizzahut.jpg",
            "answer":"Burger King",
            "image_answer":"images/2018/KlassischeLogos/pizzahutsolution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/firefox.jpg",
            "answer":"Firefox",
            "image_answer":"images/2018/KlassischeLogos/firefoxsolution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/twitter.jpg",
            "answer":"Twitter",
            "image_answer":"images/2018/KlassischeLogos/twittersolution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/samsung.jpg",
            "answer":"Samsung",
            "image_answer":"images/2018/KlassischeLogos/samsungsolution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Gender Bender",
        "questions":[
          {
            "question":"",
            "image":"images/2021/genderbender/andreas_staerkel.png",
            "answer":"Andreas Stärkel",
            "image_answer":"images/2021/genderbender/andreas_staerkel_solution.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2021/genderbender/anja_hinlang.png",
            "answer":"Anja Hinlang",
            "image_answer":"images/2021/genderbender/anja_hinlang_solution.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2021/genderbender/bogdan_moza.png",
            "answer":"Bogdan Moza",
            "image_answer":"images/2021/genderbender/bogdan_moza_solution.png",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2021/genderbender/christopher_lienemann.png",
            "answer":"Christopher Lienemann",
            "image_answer":"images/2021/genderbender/christopher_lienemann_solution.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2021/genderbender/cosmin_giru.png",
            "answer":"Cosmin Giru",
            "image_answer":"images/2021/genderbender/cosmin_giru_solution.png",
            "points":500,
            "played":false
          },
        ]
      },
    ],
    "players":[]
  },
  {
    "name":"Round 3",
    "categories":[
      {
        "name":"Hair",
        "questions":[
          {
            "question":"",
            "image":"images/2019/hair/Julia.png",
            "answer":"Julia",
            "image_answer":"images/2019/hair/Julia_Sol.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/hair/Michael.png",
            "answer":"Michael Augustin",
            "image_answer":"images/2019/hair/MichaelSol.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/hair/PeterMeissner.png",
            "answer":"Peter Meissner",
            "image_answer":"images/2019/hair/PeterMeissnerSol.png",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/hair/TobiWeigel.png",
            "answer":"Tobias Weigel",
            "image_answer":"images/2019/hair/TobiWeigel_Sol.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/hair/Michaela.png",
            "answer":"Michaela Hahn",
            "image_answer":"images/2019/hair/MichaelaSol.png",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Under the cover",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2019/underthecover/final_countdown.mp3",
            "answer":"Europe - The final countdown",
            "audio_answer":"sounds/2019/underthecover/final_countdown_sol.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/all_star.mp3",
            "answer":"Smashmouth - All Star",
            "audio_answer":"sounds/2019/underthecover/all_star_sol.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/thriller.mp3",
            "answer":"Michael Jackson - Thriller",
            "audio_answer":"sounds/2019/underthecover/thriller_sol.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/hipsdontlie.mp3",
            "answer":"Shakira - Hips dont lie",
            "audio_answer":"sounds/2019/underthecover/hipsdontlie_sol.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/videokilledtheradiostar.mp3",
            "answer":"The Buggles - Video killed the radio star",
            "audio_answer":"sounds/2019/underthecover/videokilledtheradiostar_sol.mp3",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Lead Singers",
        "questions":[
          {
            "question":"Freddie Mercury",
            "answer":"Queen",
            "points":100,
            "played":false
          },
          {
            "question":"Angus Young",
            "answer":"AC/DC",
            "points":200,
            "played":false
          },
          {
            "question":"Steven Tyler",
            "answer":"Aerosmith",
            "points":300,
            "played":false
          },
          {
            "question":"Mick Jagger",
            "answer":"The Rolling Stones",
            "points":400,
            "played":false
          },
          {
            "question":"Bono",
            "answer":"U2",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Not my presentation",
        "questions":[
          {
            "question":"May I introduce myself",
            "answer":"Micha Prinz-Hübert",
            "points":100,
            "played":false
          },
          {
            "question":"Rrrrridiculous language wars - R and Pythen BF4ever",
            "answer":"Peter Meißner",
            "points":200,
            "played":false
          },
          {
            "question":"WebAssembly - The promised land of native speed in browsers",
            "answer":"Bogdan Zegheanu",
            "points":300,
            "played":false
          },
          {
            "question":"Domain Driven Design - real basic onboarding",
            "answer":"Christoph Münch & Ralph Geyer",
            "points":400,
            "played":false
          },
          {
            "question":"Home-made smart home",
            "answer":"Bogdan Moza",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Themes",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2018/themes/ghostbusters.mp3",
            "answer":"Ghostbusters",
            "audio_answer":"sounds/2018/themes/ghostbusters.mp3",
            "image_answer":"sounds/2018/themes/ghostbusters.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/rocky.mp3",
            "answer":"Rocky",
            "audio_answer":"sounds/2018/themes/rocky.mp3",
            "image_answer":"sounds/2018/themes/rocky.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/ateam.mp3",
            "answer":"The A-Team",
            "audio_answer":"sounds/2018/themes/ateam.mp3",
            "image_answer":"sounds/2018/themes/ateam.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/austinpowers.mp3",
            "answer":"Austin Powers",
            "audio_answer":"sounds/2018/themes/austinpowers.mp3",
            "image_answer":"sounds/2018/themes/austinpowers.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/dexter.mp3",
            "answer":"Dexter",
            "audio_answer":"sounds/2018/themes/dexter.mp3",
            "image_answer":"sounds/2018/themes/dexter.jpg",
            "points":500,
            "played":false
          }
        ]
      }
    ],
    "players":[]
  },
  {
    "name":"Round 4",
    "categories":[
      {
        "name":"Emoji 2 Song",
        "questions":[
          {
            "question":"",
            "image":"images/2019/emojisongs/lemontree.jpg",
            "answer":"Lemontree",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/emojisongs/sunglassesatnight.jpg",
            "answer":"Sunglasses at night",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/emojisongs/bedsareburning.jpg",
            "answer":"Beds are burning",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/emojisongs/flymetothemoon.jpg",
            "answer":"Fly me to the moon",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/emojisongs/hitmebabyonemoretime.jpg",
            "answer":"Hit me baby one more time",
            "points":500,
            "played":false
          },
        ]
      },
    ],
    "players":[]
  },
]
);