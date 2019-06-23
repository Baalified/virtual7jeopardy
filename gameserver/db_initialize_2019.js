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
        "name":"Fun with Flags",
        "questions":[
          {
            "question":"",
            "image":"images/2019/funwithflags/brasil.png",
            "answer":"Brazil",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_France.svg.webp",
            "answer":"France",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_India.svg.png",
            "answer":"India",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_New_Zealand.svg.png",
            "answer":"New Zealand",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/492px-Flag_of_Nepal.svg.png",
            "answer":"Nepal",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Lead Singers",
        "questions":[
          {
            "question":"Kurt Cobain",
            "answer":"Nirvana",
            "points":100,
            "played":false
          },
          {
            "question":"James Hetfield",
            "answer":"Metallica",
            "points":200,
            "played":false
          },
          {
            "question":"Ozzy Osbourne",
            "answer":"Black Sabbath",
            "points":300,
            "played":false
          },
          {
            "question":"Chester Bennington",
            "answer":"Linkin Park",
            "points":400,
            "played":false
          },
          {
            "question":"Serj Tankian",
            "answer":"System of a Down",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Who am I?",
        "questions":[
          {
            "question":"I'm a passionate daddy, like to drive my very red and very fast car, listen to Heavy Metal, Rock & Classical Music and I burn my energy by shooting at fast moving things.",
            "answer":"Jochen Rieg",
            "image_answer":"images/2019/whoami/2019-06-22 23_38_42-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":100,
            "played":false
          },
          {
            "question":"In some situations, I'm compared to the white cat of Ernst Stavro Blofeld, the villain from James Bond movies...",
            "answer":"Homer",
            "image_answer":"images/2019/whoami/2019-06-22 23_32_15-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":200,
            "played":false
          },
          {
            "question":"Tobias Laube once said I am 80% jokes and 20% serious. I am furious about how one can even think that I am that serious.",
            "answer":"Jonas Köster",
            "image_answer":"images/2019/whoami/2019-06-22 23_33_31-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":300,
            "played":false
          },
          {
            "question":"Some call me weird for getting up at 2 o'clock in the morning, but a sunrise in the mountains or taking a picture of the milky-way is definitely worth it.",
            "answer":"Andreas Goller",
            "image_answer":"images/2019/whoami/2019-06-22 23_27_51-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":400,
            "played":false
          },
          {
            "question":"I have two cats.",
            "answer":"Danny Datemasch",
            "image_answer":"images/2019/whoami/2019-06-22 23_23_48-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Doctor Who?",
        "questions":[
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor Strange.jpg",
            "answer":"Doctor Strange",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doc Brown.jpg",
            "answer":"Doc Brown",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor Manhattan.png",
            "answer":"Doctor Manhattan",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor No.png",
            "answer":"Doctor No",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doc Hollywood.jpg",
            "answer":"Doc Hollywood",
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
            "audio":"sounds/2019/underthecover/last_christmas.mp3",
            "answer":"Wham - Last Christmas",
            "audio_answer":"sounds/2019/underthecover/last_christmas_sol.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/Call Me Maybe.mp3",
            "answer":"Carly Rae Jepsen - Call me maybe",
            "audio_answer":"sounds/2019/underthecover/Call Me Maybe_Sol.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/Bohemian Rhapsody.mp3",
            "answer":"Queen - Bohemian Rhapsody",
            "audio_answer":"sounds/2019/underthecover/Bohemian Rhapsody_Sol.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/Chop Suey.mp3",
            "answer":"System of a Down - Chop Suey",
            "audio_answer":"sounds/2019/underthecover/Chop Suey_sol.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/Despacito.mp3",
            "answer":"Luis Fonsi - Despacito",
            "audio_answer":"sounds/2019/underthecover/Despacito_Sol.mp3",
            "points":500,
            "played":false
          },
        ]
      }
    ],
    "players":[
      {
        "name":"Tobias Melcher",
        "score":0,
        "answers":0
      },
      {
        "name":"Anja Hinlang",
        "score":0,
        "answers":0
      },
      {
        "name":"Anton Thome",
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
 * ROUND 2
 */
  {
    "name":"Round 2",
    "categories":[
      {
        "name":"TLDs",
        "questions":[
          {
            "question":".ca",
            "answer":"Canada",
            "points":100,
            "played":false
          },
          {
            "question":".au",
            "answer":"Australia",
            "points":200,
            "played":false
          },
          {
            "question":".br",
            "answer":"Brazil",
            "points":300,
            "played":false
          },
          {
            "question":".ar",
            "answer":"Argentinia",
            "points":400,
            "played":false
          },
          {
            "question":".fj",
            "answer":"Fiji",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Captain What?",
        "questions":[
          {
            "question":"",
            "image":"images/2019/captainwhat/captainamerica.jpg",
            "answer":"Captain America",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/captainwhat/captain-james-t-kirk.jpg",
            "answer":"Captain James T. Kirk",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/captainwhat/5249898-16063826358169908970.jpg",
            "answer":"Captain Morgan",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/captainwhat/maxresdefault.jpg",
            "answer":"Captain Jean-Luc Picard",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/captainwhat/pirates-of-the-caribbean-at-world-s-end-wallpaper-hd-1080p-69236.jpg",
            "answer":"Captain Barbossa",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Origin Story",
        "questions":[
          {
            "question":"This song ended up in the top 10 of Rolling Stone Magazines '500 Greatest songs of All Time' list. Its title came from a grafiti sprayed on a wall in the singer's bedroom by a friend. The grafiti referenced the singer's gilfriend deodorant.",
            "answer":"Nirvana - Smells like teen spirit",
            "image_answer":"sounds/2019/originstory/smellsliketeenspirit.jpg",
            "audio_answer":"sounds/2019/originstory/smellsliketeenspirit.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"The number in this song does not actually stand for a year but rather for the singers favoured sexual position.",
            "answer":"Bryan Adams - Summer of 69",
            "image_answer":"sounds/2019/originstory/summerof69.jpg",
            "audio_answer":"sounds/2019/originstory/summerof69.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"This upbeat song was inspired by a news report the singer saw about a man standing on a tall building threatening to commit suicide.",
            "answer":"Van Halen - Jump",
            "image_answer":"sounds/2019/originstory/jump.jpg",
            "audio_answer":"sounds/2019/originstory/jump.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"This song might sound romantic... until you listen to the lyrics and find out that it is about a stalker.",
            "answer":"The Police - Every Breath you take",
            "image_answer":"sounds/2019/originstory/everybreatheyoutake.jpg",
            "audio_answer":"sounds/2019/originstory/everybreatheyoutake.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"	This classic 'Muppets' Hit is actually a cover. The song was originally written for the italian porn film 'Sweden: Heaven And Hell'.",
            "answer":"Mahna Mahna",
            "image_answer":"sounds/2019/originstory/mahnamahna.jpg",
            "audio_answer":"sounds/2019/originstory/mahnamahna.mp3",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Anthems",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2019/anthems/France.ogg",
            "answer":"France",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/UK.ogg",
            "answer":"UK",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Greece.oga",
            "answer":"Greece",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Russia.ogg",
            "answer":"Russia",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/China.ogg",
            "answer":"China",
            "points":500,
            "played":false
          },
        ]
      },
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
      }
    ],
    "players":[
      {
        "name":"Raphael Wagner",
        "score":0,
        "answers":0
      },
      {
        "name":"Micha Prinz-Hübert",
        "score":0,
        "answers":0
      },
      {
        "name":"Jochen Rieg",
        "score":0,
        "answers":0
      },
      {
        "name":"Mihai Constantiniu",
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
        "name":"GoT",
        "questions":[
          {
            "question":"",
            "image":"images/2019/got/AryaStark.png",
            "answer":"Arya Stark",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/got/RamsayBolton.png",
            "answer":"Ramsay Bolton",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/got/MargaeryTyrell.png",
            "answer":"Margaery Tyrell",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/got/SandorClegane.png",
            "answer":"Sandor Clegane",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/got/JorahMormont.png",
            "answer":"Jorah Mormont",
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
            "audio":"sounds/2019/underthecover/NEVER GONNA GIVE YOU UP.mp3",
            "answer":"Rick Astley - Never gonna give you up",
            "audio_answer":"sounds/2019/underthecover/Never Gonna Give You Up_sol.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/Smells Like Teen Spirit.mp3",
            "answer":"Nirvana - Smells like teen spirit",
            "audio_answer":"sounds/2019/underthecover/Smells Like Teen Spirit_sol.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/eminem_lose_yourself.mp3",
            "answer":"Eminem - Lose yourself",
            "audio_answer":"sounds/2019/underthecover/eminem_lose_yourself_sol.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/du_hast.mp3",
            "answer":"Rammstein - Du hast",
            "audio_answer":"sounds/2019/underthecover/du_hast_sol.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/underthecover/let_it_go.mp3",
            "answer":"Disneys Frozen - Let it go",
            "audio_answer":"sounds/2019/underthecover/let_it_go_sol.mp3",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Branding",
        "questions":[
          {
            "question":"",
            "image":"images/2019/branding/youtube-half.png",
            "answer":"YouTube",
            "image_answer":"images/2019/branding/youtube-full.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/rayban-half.png",
            "answer":"RayBan",
            "image_answer":"images/2019/branding/rayban-full.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/mastercard-half Kopie.png",
            "answer":"MasterCard",
            "image_answer":"images/2019/branding/mastercard-full Kopie.png",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/pirelli-half Kopie.png",
            "answer":"Pirelli",
            "image_answer":"images/2019/branding/pirelli-full Kopie.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/panasonic-half Kopie.png",
            "answer":"Panasonic",
            "image_answer":"images/2019/branding/panasonic-full Kopie.png",
            "points":500,
            "played":false
          },
        ]
      },
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
      {
        "name":"Fun with Flags",
        "questions":[
          {
            "question":"",
            "image":"images/2019/funwithflags/740px-Flag_of_Denmark.svg.png",
            "answer":"Denmark",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_Russia.svg.webp",
            "answer":"Russia",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/1920px-Flag_of_South_Africa.svg.png",
            "answer":"South Africa",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_Saudi_Arabia.svg.png",
            "answer":"Saudi Arabia",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/funwithflags/800px-Flag_of_Ecuador.svg.png",
            "answer":"Equador",
            "points":500,
            "played":false
          },
        ]
      }
    ],
    "players":[
      {
        "name":"Maximilian Braun",
        "score":0,
        "answers":0
      },
      {
        "name":"Björn Möllers",
        "score":0,
        "answers":0
      },
      {
        "name":"Peter Meißner",
        "score":0,
        "answers":0
      },
      {
        "name":"Player 4",
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
        "name":"Bootlogos",
        "questions":[
          {
            "question":"",
            "image":"images/2018/Bootlogos/windows98.jpg",
            "answer":"Windows 98",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/Bootlogos/macos.jpg",
            "answer":"Mac OS",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/Bootlogos/ubuntu.jpg",
            "answer":"Ubuntu",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/Bootlogos/cyanogenmod.jpg",
            "answer":"Cyanogenmod",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/Bootlogos/gentoo.jpg",
            "answer":"Gentoo",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"CEOs",
        "questions":[
          {
            "question":"Marcus Weiss",
            "answer":"virtual7",
            "points":100,
            "played":false
          },
          {
            "question":"Larry Page",
            "answer":"Google",
            "points":200,
            "played":false
          },
          {
            "question":"Elon Musk",
            "answer":"Paypal/Tesla/SpaceX/Hyperloop",
            "points":300,
            "played":false
          },
          {
            "question":"Jeff Bezos",
            "answer":"Amazon",
            "points":400,
            "played":false
          },
          {
            "question":"Richard Branson",
            "answer":"Virgin (Airlines/Group/Racing/...)",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"T Shirts",
        "questions":[
          {
            "question":"",
            "image":"images/2018/lastexittonowhere/terminator.jpg",
            "answer":"Terminator",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/lastexittonowhere/2001aspaceodyssey.jpg",
            "answer":"2001 Odyssee im Weltraum",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/lastexittonowhere/ghostbusters.jpg",
            "answer":"Ghostbusters",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/lastexittonowhere/bttf2.jpg",
            "answer":"Zurück in die Zukunft 2",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/lastexittonowhere/strangerthings.jpg",
            "answer":"Stranger Things",
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
            "image":"images/2018/emojisongs/walkingonsunshine.jpg",
            "answer":"Walking on sunshine",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/emojisongs/einszweipolizei.jpg",
            "answer":"Eins Zwei Polizei",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/emojisongs/pokerface.jpg",
            "answer":"Pokerface",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/emojisongs/atemlosdurchdienacht.jpg",
            "answer":"Atemlos durch die Nacht",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/emojisongs/partyrockanthem.jpg",
            "answer":"Party Rock Anthem",
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
    "players":[
      {
        "name":"Player 1",
        "score":0,
        "answers":0
      },
      {
        "name":"Player 2",
        "score":0,
        "answers":0
      },
      {
        "name":"Player 3",
        "score":0,
        "answers":0
      },
      {
        "name":"Player 4",
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
        "name":"Sidekicks",
        "questions":[
          {
            "question":"Ratchet",
            "answer":"Clank",
            "points":100,
            "played":false
          },
          {
            "question":"War Machine",
            "answer":"Iron Man",
            "points":200,
            "played":false
          },
          {
            "question":"Bucky",
            "answer":"Captain America",
            "points":300,
            "played":false
          },
          {
            "question":"Alyx Vance",
            "answer":"Gordon Freeman",
            "points":400,
            "played":false
          },
          {
            "question":"Hit-Girl",
            "answer":"Big Daddy (Kickass)",
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
            "image":"images/2018/KlassischeLogos/playboy.jpg",
            "answer":"Playboy",
			"image_answer":"images/2018/KlassischeLogos/playboysolution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/ard.jpg",
            "answer":"ARD",
			"image_answer":"images/2018/KlassischeLogos/ardsolution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/canon.jpg",
            "answer":"Canon",
			"image_answer":"images/2018/KlassischeLogos/canonsolution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/Apple.jpg",
            "answer":"Apple",
			"image_answer":"images/2018/KlassischeLogos/AppleSolution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/KlassischeLogos/nokia.jpg",
            "answer":"Nokia",
			"image_answer":"images/2018/KlassischeLogos/nokiasolution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Lyrik",
        "questions":[
          {
            "question":"",
			"image":"images/2018/lyrik/houseoftherisingsun.png",
            "image_answer":"images/2018/lyrik/houseoftherisingsun.png",
            "audio_answer":"images/2018/lyrik/houseoftherisingsunsolution.mp3",
            "answer":"House of the rising Sun",
            "points":100,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/everybreatheyoutake.png",
            "image_answer":"images/2018/lyrik/everybreatheyoutake.png",
            "audio_answer":"images/2018/lyrik/everybreatheyoutakesolution.mp3",
            "answer":"Every Breathe you take",
            "points":200,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/bad.png",
            "image_answer":"images/2018/lyrik/bad.png",
            "audio_answer":"images/2018/lyrik/badsolution.mp3",
            "answer":"Bad",
            "points":300,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/heyjude.png",
            "image_answer":"images/2018/lyrik/heyjude.png",
            "audio_answer":"images/2018/lyrik/heyjudesolution.mp3",
            "answer":"Hey Jude",
            "points":400,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/teenspirit.png",
            "image_answer":"images/2018/lyrik/teenspirit.png",
            "audio_answer":"images/2018/lyrik/smellsliketeenspiritsolution.mp3",
            "answer":"Smells like teen spirit",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Who Are They",
        "questions":[
          {
            "question":"",
            "image":"images/2018/whoarethey/Daulet_Bodo_Andreas.jpg",
            "answer":"Daulet, Bodo, Andreas",
            "image_answer":"images/2018/whoarethey/Daulet_Bodo_Andreas_solution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/whoarethey/Chrstine_David_Anja.jpg",
            "answer":"Christine, David, Anja",
            "image_answer":"images/2018/whoarethey/Chrstine_David_Anja_solution.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/whoarethey/Katja_Danny_Marek.jpg",
            "answer":"Katja, Danny, Marek",
            "image_answer":"images/2018/whoarethey/Katja_Danny_Marek_solution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/whoarethey/Manuela_Maximilian_Filip.jpg",
            "answer":"Manuela, Maximilian, Filip",
            "image_answer":"images/2018/whoarethey/Manuela_Maximilian_Filip_solution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/whoarethey/Paula_Raphael_Maurice.jpg",
            "answer":"Paula, Raphael, Maurice",
            "image_answer":"images/2018/whoarethey/Paula_Raphael_Maurice_solution.jpg",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Autos",
        "questions":[
          {
            "question":"",
			"image":"images/2018/Autos/audir8.jpg",
            "answer":"Audi R8",
            "points":100,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/nissanqashqai.jpg",
            "answer":"Nissan Qashqai",
            "points":200,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/toyotaprius.jpg",
            "answer":"Toyota Prius",
            "points":300,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/rollsroycephantom.jpg",
            "answer":"Rolls Royce Phantom",
            "points":400,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/Autos/bmwi8.jpg",
            "answer":"BMW i8",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Rollennamen",
        "questions":[
          {
            "question":"",
            "image":"images/2018/rollennamen/walterwhite.jpg",
            "answer":"Walter White",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/rollennamen/daryldixon.jpg",
            "answer":"Daryl Dixon",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/rollennamen/petyrbaelish.jpg",
            "answer":"Petyr Baelish",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/rollennamen/jaxteller.jpg",
            "answer":"Jax Teller",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2018/rollennamen/oswaldcobblepot.jpg",
            "answer":"Oswald Cobblepot",
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