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
            "question":"This songs title came from a grafiti sprayed on a wall in the singer's bedroom by a friend. The grafiti referenced the singer's gilfriend deodorant.",
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
        "name":"Gerhard Höll",
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
        "name":"Text 2 Song",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2019/texttosong/born_to_be_wild.mp3",
            "answer":"Born to be wild",
            "image_answer":"sounds/2019/texttosong/born_to_be_wild_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/born_to_be_wild_solution.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/i_dont_want_to_miss_a_thing.mp3",
            "answer":"I dont want to miss a thing",
            "image_answer":"sounds/2019/texttosong/i_dont_want_to_miss_a_thing_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/i_dont_want_to_miss_a_thing_solution.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/hold_the_line.mp3",
            "answer":"Hold the line",
            "image_answer":"sounds/2019/texttosong/hold_the_line_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/hold_the_line_solution.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/help.mp3",
            "answer":"Help",
            "image_answer":"sounds/2019/texttosong/help_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/help_solution.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/careless_whisper.mp3",
            "answer":"Careless Whisper",
            "image_answer":"sounds/2019/texttosong/careless_whisper_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/careless_whisper_solution.mp3",
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
            "audio":"sounds/2019/anthems/USA.ogg",
            "answer":"USA",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Italy.ogg",
            "answer":"Italy",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Brazil.ogg",
            "answer":"Brazil",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Australia.ogg",
            "answer":"Australia",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/anthems/Japan.ogg",
            "answer":"Japan",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Branding Classic",
        "questions":[
          {
            "question":"",
            "image":"images/2019/klassischelogos/pizzahut.jpg",
            "answer":"Pizza Hut",
            "image_answer":"images/2019/klassischelogos/pizzahutsolution.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/klassischelogos/audi.png",
            "answer":"Audi",
            "image_answer":"images/2019/klassischelogos/audisolution.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/klassischelogos/ibm.jpg",
            "answer":"IBM",
            "image_answer":"images/2019/klassischelogos/ibmsolution.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/klassischelogos/nintendo.jpg",
            "answer":"Nintendo",
            "image_answer":"images/2019/klassischelogos/nintendosolution.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/klassischelogos/kodak.jpg",
            "answer":"Kodak",
            "image_answer":"images/2019/klassischelogos/kodaksolution.jpg",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Who am I?",
        "questions":[
          {
            "question":"I'm married and have two cats, I'm a bit crazy but always passionate about the things I do!",
            "answer":"Anja Hinlang",
            "image_answer":"images/2019/whoami/2019-06-22 23_30_59-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":100,
            "played":false
          },
          {
            "question":"Because of my advances age and numerous injuries, I have been playing folg for about 5 years. I live in Eastwestfalia. They are supposed to be worse off the Swabians.",
            "answer":"Bodo Ermshaus",
            "image_answer":"images/2019/whoami/2019-06-22 23_25_19-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":200,
            "played":false
          },
          {
            "question":"Passionate about Machine Learning, AI and bringing Data into Life.",
            "answer":"Valentin Göttisheim",
            "image_answer":"images/2019/whoami/2019-06-22 23_28_20-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":300,
            "played":false
          },
          {
            "question":"I have to go immediately, otherwise I miss...",
            "answer":"Dorin Gligor",
            "image_answer":"images/2019/whoami/2019-06-22 23_26_41-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":400,
            "played":false
          },
          {
            "question":"I'm good in telling bad jokes.",
            "answer":"Ruben Lehmann",
            "image_answer":"images/2019/whoami/2019-06-22 23_35_32-Programmheft_conference_19.pdf - Adobe Acrobat Pro.png",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Branding",
        "questions":[
          {
            "question":"",
            "image":"images/2019/branding/nissan-half Kopie.png",
            "answer":"Nissan",
            "image_answer":"images/2019/branding/nissan-full Kopie.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/bacardi-half Kopie.png",
            "answer":"Bacardi",
            "image_answer":"images/2019/branding/bacardi-full Kopie.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/amd-half.png",
            "answer":"AMD",
            "image_answer":"images/2019/branding/amd-full.png",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/poloralphlauren-half Kopie.png",
            "answer":"Polo Ralph Lauren",
            "image_answer":"images/2019/branding/poloralphlauren-full Kopie.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/yamaha-half Kopie.png",
            "answer":"Yamaha",
            "image_answer":"images/2019/branding/yamaha-full Kopie.png",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Lead Singers",
        "questions":[
          {
            "question":"Sting",
            "answer":"The Police",
            "points":100,
            "played":false
          },
          {
            "question":"Jared Leto",
            "answer":"Thirty Seconds to Mars",
            "points":200,
            "played":false
          },
          {
            "question":"Billie Joe Armstrong",
            "answer":"Green Day",
            "points":300,
            "played":false
          },
          {
            "question":"Chris Martin",
            "answer":"Coldplay",
            "points":400,
            "played":false
          },
          {
            "question":"Syd Barrett",
            "answer":"Pink Floyd",
            "points":500,
            "played":false
          }
        ]
      },
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
        "name":"Best second",
        "score":0,
        "answers":0
      }
    ]
  },
  /**
 * BONUS
 */
  {
    "name":"Bonus",
    "categories":[
      {
        "name":"Branding",
        "questions":[
          {
            "question":"",
            "image":"images/2019/branding/barbie-half Kopie.png",
            "answer":"Barbie",
            "image_answer":"images/2019/branding/barbie-full Kopie.png",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/oreo-half Kopie.png",
            "answer":"Oreo",
            "image_answer":"images/2019/branding/oreo-full Kopie.png",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/pokemon-half Kopie.png",
            "answer":"Pokemon",
            "image_answer":"images/2019/branding/pokemon-full Kopie.png",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/skoda-half Kopie.png",
            "answer":"Skoda",
            "image_answer":"images/2019/branding/skoda-full Kopie.png",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/branding/dreamworks-half Kopie.png",
            "answer":"Dreamworks",
            "image_answer":"images/2019/branding/dreamworks-full Kopie.png",
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
        "name":"Text 2 Song",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2019/texttosong/blue_suede_shoes.mp3",
            "answer":"Blue Suede Shoes",
            "image_answer":"sounds/2019/texttosong/blue_suede_shoes_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/blue_suede_shoes_solution.mp3",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/mad_world.mp3",
            "answer":"Mad World",
            "image_answer":"sounds/2019/texttosong/mad_world_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/mad_world_solution.mp3",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/my_way.mp3",
            "answer":"My Way",
            "image_answer":"sounds/2019/texttosong/my_way_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/my_way_solution.mp3",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/something_stupid.mp3",
            "answer":"Something Stupid",
            "audio_answer":"sounds/2019/texttosong/something_stupid_solution.mp3",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2019/texttosong/sandstorm.mp3",
            "answer":"Sandstorm",
            "image_answer":"sounds/2019/texttosong/sandstorm_solution.jpg",
            "audio_answer":"sounds/2019/texttosong/sandstorm_solution.mp3",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Doctor Who?",
        "questions":[
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor Evil.png",
            "answer":"Doctor Evil",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Hannibal_Lecter.png",
            "answer":"Hannibal Lecter",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor Dolittle.jpg",
            "answer":"Doctor Dolittle",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor Cox.jpg",
            "answer":"Doctor Cox",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"images/2019/doctorwho/Doctor McCoy.jpg",
            "answer":"Doctor McCoy",
            "points":500,
            "played":false
          },
        ]
      },
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
]
);