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
        "name":"CEOs",
        "questions":[
          {
            "question":"Mark Zuckerberg",
            "answer":"Facebook",
            "points":100,
            "played":false
          },
          {
            "question":"Larry Ellison",
            "answer":"Oracle",
            "points":200,
            "played":false
          },
          {
            "question":"Steve Ballmer",
            "answer":"Microsoft",
            "points":300,
            "played":false
          },
          {
            "question":"Tim Cook",
            "answer":"Apple",
            "points":400,
            "played":false
          },
          {
            "question":"Jack Dorsey",
            "answer":"Twitter",
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
            "audio":"sounds/2018/themes/titanic.mp3",
            "answer":"Titanic",
            "audio_answer":"sounds/2018/themes/titanic.mp3",
            "image_answer":"sounds/2018/themes/titanic.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/potc.mp3",
            "answer":"Piraten der Karibik",
            "audio_answer":"sounds/2018/themes/potc.mp3",
            "image_answer":"sounds/2018/themes/potc.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/knightrider.mp3",
            "answer":"Knight Rider",
            "audio_answer":"sounds/2018/themes/knightrider.mp3",
            "image_answer":"sounds/2018/themes/knightrider.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/pinkpanther.mp3",
            "answer":"The Pink Panther",
            "audio_answer":"sounds/2018/themes/pinkpanther.mp3",
            "image_answer":"sounds/2018/themes/pinkpanther.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2018/themes/grease.mp3",
            "answer":"Grease",
            "audio_answer":"sounds/2018/themes/grease.mp3",
            "image_answer":"sounds/2018/themes/grease.jpg",
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
            "image_answer":"images/employees/roland.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"I love it to laugh I also love to have deep conversations about politics or about the world.",
            "answer":"Selim Kus",
            "image_answer":"images/employees/selim.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"...In general the kind of guy yer mamma always warned you about.",
            "answer":"Pall Eggerz",
            "image_answer":"images/employees/pall.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"I have turtles at home.",
            "answer":"Manuela Di Miceli",
            "image_answer":"images/employees/manuela.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"I like cooking and eating !!! Most of the time just eating.",
            "answer":"Cosmin Giru",
            "image_answer":"images/employees/cosmin.jpg",
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
            "question":"500",
            "answer":"Internal Server Error",
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
        "name":"Michael Augustin",
        "score":0,
        "answers":0
      },
      {
        "name":"Marco Hornung",
        "score":0,
        "answers":0
      },
      {
        "name":"Christian Bolat",
        "score":0,
        "answers":0
      },
      {
        "name":"Arkadiusz Gmyrek",
        "score":0,
        "answers":0
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
        "name":"TV Themes",
        "questions":[
          {
            "question":"",
            "audio":"sounds/bwtvthemes/twd.mp3",
            "answer":"The walking dead",
            "audio_answer":"sounds/bwtvthemes/twd_solution.mp3",
            "image_answer":"sounds/bwtvthemes/twd_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwtvthemes/jeopardy.mp3",
            "answer":"Jeopardy!",
            "audio_answer":"sounds/bwtvthemes/jeopardy_solution.mp3",
            "image_answer":"sounds/bwtvthemes/jeopardy_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwtvthemes/got.mp3",
            "answer":"Game of Thrones",
            "audio_answer":"sounds/bwtvthemes/got_solution.mp3",
            "image_answer":"sounds/bwtvthemes/got_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwtvthemes/drwho.mp3",
            "answer":"Dr Who",
            "audio_answer":"sounds/bwtvthemes/drwho_solution.mp3",
            "image_answer":"sounds/bwtvthemes/drwho_solution.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwtvthemes/gummibears.mp3",
            "answer":"The Gummibears",
            "audio_answer":"sounds/bwtvthemes/gummibears_solution.mp3",
            "image_answer":"sounds/bwtvthemes/gummibears_solution.jpg",
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
        "name":"Miriam Maier",
        "score":0,
        "answers":0
      },
      {
        "name":"Anton Thome",
        "score":0,
        "answers":0
      },
      {
        "name":"Roger Austin",
        "score":0,
        "answers":0
      },
      {
        "name":"Adrian Bartos",
        "score":0,
        "answers":0
      }
    ]
  },
  /**
 * ROUND 3
 */
  {
    "name":"Round 3",
    "categories":[
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
      {
        "name":"Virtual",
        "questions":[
          {
            "question":"An emulated computer system running inside a so called hypervisor",
            "answer":"Virtual Machine",
            "points":100,
            "played":false
          },
          {
            "question":"Since the acquisition of Sun Microsystems in 2010 this is Oracles Main Desktop Virtualization Application",
            "answer":"VirtualBox",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/virtual7.png",
            "answer":"Virtual7",
            "points":300,
            "played":false
          },
          {
            "question":"An LDAP service that provides a single, abstracted view of enterprise directory servers and databases from a variety of vendors",
            "answer":"Oracle Virtual Directory",
            "points":400,
            "played":false
          },
          {
            "question":"This 1995 nintendo gaming console was arguably the first virtual reality headset",
            "answer":"VirtualBoy",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Seven",
        "questions":[
          {
            "question":"The code number of her majesty's most famous spy",
            "answer":"007",
            "points":100,
            "played":false
          },
          {
            "question":"Brad Pitt and Morgan Freeman starred in this 1995 thriller",
            "answer":"Seven",
            "points":200,
            "played":false
          },
          {
            "question":"A list containing the Lighthouse of Alexandria and the Temple of Artemis among others",
            "answer":"Seven Wonders of (the Ancient) World",
            "points":300,
            "played":false
          },
          {
            "question":"This single from the album \"Elephant\" by the White Stripes won a Grammy Award for Best Rock Song",
            "answer":"Seven Nations Army",
            "points":400,
            "played":false
          },
          {
            "question":"This former Borg drone joined the crew of the Federation starship Voyager",
            "answer":"Seven of Nine",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Movie Themes",
        "questions":[
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/pulp_fiction.mp3",
            "answer":"Pulp Fiction",
            "audio_answer":"sounds/bwmoviethemes/pulp_fiction_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/pulp_fiction_solution.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/star_wars.mp3",
            "answer":"Star Wars",
            "audio_answer":"sounds/bwmoviethemes/star_wars_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/star_wars_solution.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/ghostbusters.mp3",
            "answer":"Ghostbusters",
            "audio_answer":"sounds/bwmoviethemes/ghostbusters_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/ghostbusters_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/bttf.mp3",
            "answer":"Back to the future",
            "audio_answer":"sounds/bwmoviethemes/bttf_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/bttf_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/terminator.mp3",
            "answer":"The Terminator",
            "audio_answer":"sounds/bwmoviethemes/terminator_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/terminator_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Recursive Acronyms",
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
      }
    ],
    "players":[
      {
        "name":"Jochen Rieg",
        "score":0,
        "answers":0
      },
      {
        "name":"Roland Seidelt",
        "score":0,
        "answers":0
      },
      {
        "name":"Björn Möllers",
        "score":0,
        "answers":0
      },
      {
        "name":"Guillermo Orranita",
        "score":0,
        "answers":0
      }
    ]
  },
  /**
 * ROUND 4
 */
  {
    "name":"Round 4",
    "categories":[
      {
        "name":"Text 2 Song",
        "questions":[
          {
            "question":"",
            "audio":"sounds/texttosong/all_star.mp3",
            "answer":"Smash Mouth - Allstar",
            "audio_answer":"sounds/texttosong/all_star_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/all_star_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/final_countdown.mp3",
            "answer":"Europe - Final Countdown",
            "audio_answer":"sounds/texttosong/final_countdown_solution.mp3",
            "image_answer":"sounds/texttosong/final_countdown_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/highway_to_hell.mp3",
            "answer":"ACDC - Highway to Hell",
            "audio_answer":"sounds/texttosong/highway_to_hell_solution.mp3",
            "image_answer":"sounds/texttosong/highway_to_hell_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/last_christmas.mp3",
            "answer":"Wham - Last Christmas",
            "audio_answer":"sounds/texttosong/last_christmas_solution.mp3",
            "image_answer":"sounds/texttosong/last_christmas_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/scatman.mp3",
            "answer":"Scatman John - Scatman",
            "audio_answer":"sounds/texttosong/scatman_solution.mp3",
            "image_answer":"sounds/texttosong/scatman_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Iconic Icons",
        "questions":[
          {
            "question":"",
            "image":"images/icons/winamp.jpg",
            "answer":"Winamp",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/icons/ICQ.jpg",
            "answer":"ICQ",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/icons/firefox.jpg",
            "answer":"Firefox",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/icons/aolim.png",
            "answer":"AOL Instant Messanger",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/icons/napster.gif",
            "answer":"Napster",
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
            "image":"images/waybackmachine/youtube_20050813.jpg",
            "answer":"Youtube (2005-08-13)",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/waybackmachine/twitter_20070420.jpg",
            "answer":"Twitter (2007-04-20)",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/waybackmachine/myspace_20041101.jpg",
            "answer":"Myspace (2004-11-01)",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/waybackmachine/microsoft_19990203.jpg",
            "answer":"Microsoft (1999-02-03)",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/waybackmachine/yahoo_19961220.jpg",
            "answer":"Yahoo! (1996-12-20)",
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
            "image":"images/whoarethey/Ero_Mihai_Oliver.jpg",
            "image_answer":"images/whoarethey/Ero_Mihai_Oliver_solution.jpg",
            "answer":"Ero, Mihai, Oliver",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Guillermo_Enno_Vlad.jpg",
            "image_answer":"images/whoarethey/Guillermo_Enno_Vlad_solution.jpg",
            "answer":"Guillermo, Enno, Vlad",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Pall_SebastianD_TobiL.jpg",
            "image_answer":"images/whoarethey/Pall_SebastianD_TobiL_solution.jpg",
            "answer":"Pall, Sebastian Dorn, Tobi Laube",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Cristian_Cosmin_Danny.jpg",
            "image_answer":"images/whoarethey/Cristian_Cosmin_Danny_solution.jpg",
            "answer":"Cristian Bolat, Cosmin, Danny",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/whoarethey/Selim_Tom_Roland.jpg",
            "image_answer":"images/whoarethey/Selim_Tom_Roland_solution.jpg",
            "answer":"Selim, Tom, Roland",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Unix Commands",
        "questions":[
          {
            "question":"This command returns all passed arguments",
            "answer":"echo",
            "points":100,
            "played":false
          },
          {
            "question":"This program joins multiple files but is usualy only used to display the content",
            "answer":"cat",
            "points":200,
            "played":false
          },
          {
            "question":"This program tells you if two files have the same content",
            "answer":"diff, cmp",
            "points":300,
            "played":false
          },
          {
            "question":"This tool parses and transforms text using a simple programming language",
            "answer":"sed",
            "points":400,
            "played":false
          },
          {
            "question":"This command repeats its output until killed using 100% of one cpu core",
            "answer":"yes",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Movie Themes",
        "questions":[
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/et.mp3",
            "answer":"E.T.",
            "audio_answer":"sounds/bwmoviethemes/et_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/et_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/forrest_gump.mp3",
            "answer":"Forrest Gump",
            "audio_answer":"sounds/bwmoviethemes/forrest_gump_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/forrest_gump_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/indiana_jones.mp3",
            "answer":"Indiana Jones",
            "audio_answer":"sounds/bwmoviethemes/indiana_jones_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/indiana_jones_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/godfather.mp3",
            "answer":"The Godfather",
            "audio_answer":"sounds/bwmoviethemes/godfather_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/godfather_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/jaws.mp3",
            "answer":"Jaws",
            "audio_answer":"sounds/bwmoviethemes/jaws_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/jaws_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      }
    ],
    "players":[
      {
        "name":"Ciprian Iancu",
        "score":0,
        "answers":0
      },
      {
        "name":"Markus Koske",
        "score":0,
        "answers":0
      },
      {
        "name":"Tobias Melcher",
        "score":0,
        "answers":0
      },
      {
        "name":"Dezsö Kovacs",
        "score":0,
        "answers":0
      }
    ]
  },
  /**
 * FIANLE
 */
  {
    "name":"FINALE",
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
        "name":"Text 2 Song",
        "questions":[
          {
            "question":"",
            "audio":"sounds/texttosong/clint_eastwood.mp3",
            "answer":"Gorillaz - Clint Eastwood",
            "audio_answer":"sounds/texttosong/clint_eastwood_solution.mp3",
            "image_answer":"sounds/texttosong/clint_eastwood_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/nothing_else_matters.mp3",
            "answer":"Metallica - Nothin else matters",
            "audio_answer":"sounds/texttosong/nothing_else_matters_solution.mp3",
            "image_answer":"sounds/texttosong/nothing_else_matters_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/stayin_alive.mp3",
            "answer":"Bee Gees - Stayin Alive",
            "audio_answer":"sounds/texttosong/stayin_alive_solution.mp3",
            "image_answer":"sounds/texttosong/stayin_alive_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/we_didnt_start_the_fire.mp3",
            "answer":"Billy Joel - We didn't start the fire",
            "audio_answer":"sounds/texttosong/we_didnt_start_the_fire_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/we_didnt_start_the_fire_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/texttosong/smells_like_teenspirit.mp3",
            "answer":"Nirvana - Smells like teenspirit",
            "audio_answer":"sounds/texttosong/smells_like_teenspirit_solution_chorus.mp3",
            "image_answer":"sounds/texttosong/smells_like_teenspirit_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Those Guys",
        "questions":[
          {
            "question":"Janice Rand, Pavel Checkov, Nyota Uhura, Montgomery Scott, Commander Spock, Captain Kirk",
            "answer":"Star Trek",
            "points":100,
            "played":false
          },
          {
            "question":"Sasha Williams, Tara Chambler, Glenn Rhee, Daryl Dixon, Michonne, Rick Grimes",
            "answer":"The walking dead",
            "points":200,
            "played":false
          },
          {
            "question":"Jackie Sharp, Tom Hammerschmidt, Linda Vasquez, Peter Russo, Doug Stamper, Francis Underwood",
            "answer":"House of Cards",
            "points":300,
            "played":false
          },
          {
            "question":"George Merkert, Tyrus Kitt, Todd Alquist, Hank Schrader, Jesse Pinkman, Walter White",
            "answer":"Breaking Bad",
            "points":400,
            "played":false
          },
          {
            "question":"Valerie Gordon, Larry Zito, Trudy Joplin, Martin Castillo, Ricardo Tubbs, Sonny Crockett",
            "answer":"Miami Vice",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Movie Themes",
        "questions":[
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/lion_king.mp3",
            "answer":"The lion king",
            "audio_answer":"sounds/bwmoviethemes/lion_king_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/lion_king_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/mission_impossible.mp3",
            "answer":"Mission Impossible",
            "audio_answer":"sounds/bwmoviethemes/mission_impossible_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/mission_impossible_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/james_bond.mp3",
            "answer":"James Bond",
            "audio_answer":"sounds/bwmoviethemes/james_bond_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/james_bond_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/jurassic_park.mp3",
            "answer":"Jurassic Park",
            "audio_answer":"sounds/bwmoviethemes/jurassic_park_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/jurassic_park_solution.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/bwmoviethemes/2001_space_odyssey.mp3",
            "answer":"2001 A Space Odyssey",
            "audio_answer":"sounds/bwmoviethemes/2001_space_odyssey_solution.mp3",
            "image_answer":"sounds/bwmoviethemes/2001_space_odyssey_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Oracle Ports",
        "questions":[
          {
            "question":"1521",
            "answer":"Oracle Net Listener (Database)",
            "points":100,
            "played":false
          },
          {
            "question":"7001",
            "answer":"WebLogic AdminServer",
            "points":200,
            "played":false
          },
          {
            "question":"9704",
            "answer":"BIEE Managed Server",
            "points":300,
            "played":false
          },
          {
            "question":"16200",
            "answer":"WCC Managed Server",
            "points":400,
            "played":false
          },
          {
            "question":"6200",
            "answer":"OPMN / Oracle Notification Service Remote Port",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Who Am I?",
        "questions":[
          {
            "question":"Riding my motorbike and do handicraft with it",
            "answer":"Oskar Anders",
            "image_answer":"images/employees/oskar.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"To crochet headbands and beanies, to sew Bags",
            "answer":"Denise Bender",
            "image_answer":"images/employees/denise.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"Ask Google, They know everything!",
            "answer":"Timo Hahn",
            "image_answer":"images/employees/timo.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"I hate cooking! It makes just everything dirty...",
            "answer":"Marcus Hammer",
            "image_answer":"images/employees/marcus_hammer.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"I like collecting returnable bottles, as I learned, that treats might be inside",
            "answer":"Homer",
            "image_answer":"images/employees/homer.jpg",
            "points":500,
            "played":false
          }
        ]
      }
    ],
    "players":[
      {
        "name":"Winner Round 1",
        "score":0,
        "answers":0
      },
      {
        "name":"Winner Round 2",
        "score":0,
        "answers":0
      },
      {
        "name":"Winner Round 3",
        "score":0,
        "answers":0
      },
      {
        "name":"Winner Round 4",
        "score":0,
        "answers":0
      }
    ]
  }
]
);