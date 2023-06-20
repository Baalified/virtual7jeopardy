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
        "name":"Music Videos",
        "questions":[
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/LouBega_MamboNo5.mp4",
            "video_answer": "videos/90smusicvideos/LouBega_MamboNo5_Solution.mp4",
            "answer":"Lou Bega - Mambo No 5",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/GreenDay_BasketCase.mp4",
            "video_answer": "videos/90smusicvideos/GreenDay_BasketCase_Solution.mp4",
            "answer":"Green Day - Basket Case",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/MichaelJackson_EarthSong.mp4",
            "video_answer": "videos/90smusicvideos/MichaelJackson_EarthSong_Solution.mp4",
            "answer":"Michael Jackson - Earth Song",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Metallica_EnterSandman.mp4",
            "video_answer": "videos/90smusicvideos/Metallica_EnterSandman_Solution.mp4",
            "answer":"Metallica - Enter Sandman",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/4NonBlondes_Whats_up.mp4",
            "video_answer": "videos/90smusicvideos/4NonBlondes_Whats_up_Solution.mp4",
            "answer":"4 Non Blondes - Whats up?",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Movie Posters",
        "questions":[
          {
            "question":"",
            "image": "images/2022/movieposters/AmericanPie.png",
            "image_answer": "images/2022/movieposters/AmericanPie_Solution.png",
            "answer":"American Pie",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/FightClub.png",
            "image_answer": "images/2022/movieposters/FightClub_Solution.png",
            "answer":"Fight Club",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/GoodWIllHunting.png",
            "image_answer": "images/2022/movieposters/GoodWIllHunting_Solution.png",
            "answer":"Good Will Hunting",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/PointBreak.png",
            "image_answer": "images/2022/movieposters/PointBreak_Solution.png",
            "answer":"Point Break",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/ShakespeareInLove.png",
            "image_answer": "images/2022/movieposters/ShakespeareInLove_Solution.png",
            "answer":"Shakespeare In Love",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Cartoons",
        "questions":[
          {
            "question":"",
            "image": "images/2022/cartoons/Alles-was-wir-uber-Animaniacs-Staffel-3-wissen-Bildschirm-Rant.jpg",
            "answer":"Animaniacs",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/Beetlejuice.webp",
            "answer":"Beeteljuice",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/chipndalerescuerangers.webp",
            "answer":"Chip'n'Dale Rescue Rangers",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/heyarnold.jpg",
            "answer":"Hey Arnold",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/doug.jpg",
            "answer":"Doug",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Lyrics Ahoy!",
        "questions":[
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Creep-Radiohead.mp4",
            "video_answer": "videos/2023/lyrics/Creep-Radiohead_Solution.mp4",
            "answer":"I'm a weirdo",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/BackstreetBoys-IWantItThatWay.mp4",
            "video_answer": "videos/2023/lyrics/BackstreetBoys-IWantItThatWay_Solution.mp4",
            "answer":"I never wanna hear you say",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Wonderwall-Oasis.mp4",
            "video_answer": "videos/2023/lyrics/Wonderwall-Oasis_Solution.mp4",
            "answer":"I dont believe that anybody feels the way i do",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/IsraelKamakawiwo-SomewhereOvertheRainbow.mp4",
            "video_answer": "videos/2023/lyrics/IsraelKamakawiwo-SomewhereOvertheRainbow_Solution.mp4",
            "answer":"Once in a lullaby",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Coolio-GangstasParadise.mp4",
            "video_answer": "videos/2023/lyrics/Coolio-GangstasParadise_Solution.mp4",
            "answer":"Even my momma thinks that my mind is gone",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"AI Movie Poems",
        "questions":[
          {
            "question":"A love story amidst ocean's embrace,\nFate's cruel hand, tragedy's chase,\nA vessel's demise, hearts entwined,\nMemories sunk, in depths confined.",
            "image": "",
            "answer":"Titanic",
            "points":100,
            "played":false
          },
          {
            "question":"An epic battle in galaxies unknown,\nForces clash, destinies sown,\nLight and dark dance in cosmic array,\nLegends born, forever in fray.",
            "image": "",
            "answer":"Star Wars",
            "points":200,
            "played":false
          },
          {
            "question":"In the Capitol's splendor, excess gleams,\nSpectators cheer, oblivious to screams,\nA girl on fire, defying the norms,\nRising against hunger, against all storms.",
            "image": "",
            "answer":"The hunger games",
            "points":300,
            "played":false
          },
          {
            "question":"Bowling lanes and tangled schemes,\nA stoner's quest, lost in dreams,\nRugs and nihilists, a twisted brew,\nA man's journey, life askew.",
            "image": "",
            "answer":"The big lebowsky",
            "points":400,
            "played":false
          },
          {
            "question":"A life confined, a staged façade,\nCameras capture, every applaud,\nIllusion shattered, truth unfurled,\nEscape beckons, from the scripted world.",
            "image": "",
            "answer":"Truman Show",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name": "Name that song",
        "questions":[
          {
            "question":"",
            "audio": "sounds/2023/songnames/Blur-Song2.mp3",
            "answer":"Song 2 (Blur)",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/songnames/Metallica-EnterSandman.mp3",
            "answer":"Enter Sandman (Metallica)",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/songnames/RedHotChiliPeppers-UnderTheBridge.mp3",
            "answer":"Under the Bridge (Red Hot Chilli Peppers)",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/songnames/Chumbawamba-Tubthumping.mp3",
            "answer":"Tubthumping (Chumbawamba)",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/songnames/SirMixALot-BabyGotBack.mp3",
            "answer":"Baby got back (Sir Mix-A-Lot)",
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
  {
    "name":"Round 2",
    "categories":[
      {
        "name":"Music Videos",
        "questions":[
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Eiffel65_Blue.mp4",
            "video_answer": "videos/90smusicvideos/Eiffel65_Blue_Solution.mp4",
            "answer":"Eiffel65 - Blue",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/DaftPunk_AroundTheWorld.mp4",
            "video_answer": "videos/90smusicvideos/DaftPunk_AroundTheWorld_Solution.mp4",
            "answer":"Daft Punk - Around The World",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/ChristinaAguilera_GenieInABottle.mp4",
            "video_answer": "videos/90smusicvideos/ChristinaAguilera_GenieInABottle_Solution.mp4",
            "answer":"Christina Aguilera - Genie In A Bottle",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Evanescence_BringMeToLife.mp4",
            "video_answer": "videos/90smusicvideos/Evanescence_BringMeToLife_Solution.mp4",
            "answer":"Evanescence - Bring Me To Life",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/REM_Losing_My_Religion.mp4",
            "video_answer": "videos/90smusicvideos/REM_Losing_My_Religion_Solution.mp4",
            "answer":"REM - Losing My Religion",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Who's that band",
        "questions":[
          {
            "question":"",
            "image": "images/2022/bandimages/DaftPunk.png",
            "image_answer": "images/2022/bandimages/DaftPunk_Solution.png",
            "answer":"Daft Punk",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/BackstreetBoys.png",
            "image_answer": "images/2022/bandimages/BackstreetBoys_Solution.png",
            "answer":"Backstreet Boys",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/GunsNRoses.png",
            "image_answer": "images/2022/bandimages/GunsNRoses_Solution.png",
            "answer":"Guns N Roses",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/Metallica.png",
            "image_answer": "images/2022/bandimages/Metallica_Solution.png",
            "answer":"Metallica",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/LinkinPark.png",
            "image_answer": "images/2022/bandimages/LinkinPark_Solution.png",
            "answer":"Linkin Park",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"One Hit Wonders",
        "questions":[
          {
            "question":"",
            "audio": "sounds/2023/onehitwonders/TheProclaimers-ImGonnaBe.mp3",
            "answer":"The Proclaimers",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/onehitwonders/NatalieImbruglia-Torn.mp3",
            "answer":"Natalie Imbruglia",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/onehitwonders/Haddaway-WhatIsLove.mp3",
            "answer":"Haddaway",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/onehitwonders/SpinDoctors-TwoPrinces.mp3",
            "answer":"Spin Doctors",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio": "sounds/2023/onehitwonders/InnerCircle-BadBoys.mp3",
            "answer":"Inner Circle",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"AI Movie Posters",
        "questions":[
          {
            "question":"",
			      "image":"images/2023/aimovieposters/jurassicpark.png",
            "answer":"Jurassic Park",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/matrix.png",
            "answer":"The Matrix",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/terminator.png",
            "answer":"Terminator",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/titanic.png",
            "answer":"Titanic",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/wolfofwallstreet.png",
            "answer":"The wolf of wallstreet",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Who am I?",
        "questions":[
          {
            "question":"I am a passionate musician and DJ who revels in exploring new places",
            "answer":"Evgeny Pekler",
            "points":100,
            "played":false
          },
          {
            "question":"Twice a week I am a dance coach for a group of 30 boys and girls.",
            "answer":"Angelina Kary",
            "points":200,
            "played":false
          },
          {
            "question":"I'm a big weather report fan. My favorite meteorologist even follows me on Instagram.",
            "answer":"Nina Gasper",
            "points":300,
            "played":false
          },
          {
            "question":"My passion is Bike Trips, in 2021 I cycled 3000 km from the Netherlands to Portugal.",
            "answer":"Jens Eckert",
            "points":400,
            "played":false
          },
          {
            "question":"Sometimes people confuse me with a sailor from the far north.",
            "answer": "Jan Kaltenbacher",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Lyrics Ahoy!",
        "questions":[
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/BabyOneMoreTime-BritneySpears.mp4",
            "video_answer": "videos/2023/lyrics/BabyOneMoreTime-BritneySpears_Solution.mp4",
            "answer":"My loneliness is killing me",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Eminem-LoseYourself.mp4",
            "video_answer": "videos/2023/lyrics/Eminem-LoseYourself_Solution.mp4",
            "answer":"Moms Spaghetti",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Zombie-TheCranberries.mp4",
            "video_answer": "videos/2023/lyrics/Zombie-TheCranberries_Solution.mp4",
            "answer":"It's not my family",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/Eagles-HotelCalifornia.mp4",
            "video_answer": "videos/2023/lyrics/Eagles-HotelCalifornia_Solution.mp4",
            "answer":"You can find it here",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/ABBA-DancingQueen.mp4",
            "video_answer": "videos/2023/lyrics/ABBA-DancingQueen_Solution.mp4",
            "answer":"Feel the beat from the tamborine",
            "points":500,
            "played":false
          },
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
  {
    "name":"Round 3",
    "categories":[
      {
        "name":"My very first song",
        "questions":[
          {
            "question":"",
            "audio":"sounds/2023/firstsongs/Eminem-JustDontGiveAFuck.mp3",
            "answer":"Eminem (Just dont give a fuck)",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2023/firstsongs/MichaelJackson-GotToBeThere.mp3",
            "answer":"Michael Jackson (Got to be there)",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2023/firstsongs/TheRollingStones-ComeOn.mp3",
            "answer":"The Rolling Stones (Come On)",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2023/firstsongs/ACDC-CanISitNextToYouGirl.mp3",
            "answer":"AC/DC (Can I sit next to you girl)",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "audio":"sounds/2023/firstsongs/Nirvana-LoveBuzz.mp3",
            "answer":"Nirvana (Love Buzz)",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Who's that band",
        "questions":[
          {
            "question":"",
            "image": "images/2022/bandimages/Nsync.png",
            "image_answer": "images/2022/bandimages/Nsync_Solution.png",
            "answer":"NSync",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/nirvana.png",
            "image_answer": "images/2022/bandimages/nirvana_Solution.png",
            "answer":"Nirvana",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/Aerosmith.png",
            "image_answer": "images/2022/bandimages/Aerosmith_Solution.png",
            "answer":"Aerosmith",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/BoyzIIMen.png",
            "image_answer": "images/2022/bandimages/BoyzIIMen_Solution.png",
            "answer":"Boyz II Men",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/FooFighters.png",
            "image_answer": "images/2022/bandimages/FooFighters_Solution.png",
            "answer":"Foo Fighters",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Movie Quotes",
        "questions":[
          {
            "question":"May the force be with you!",
            "answer":"Star Wars",
            "points":100,
            "played":false
          },
          {
            "question":"You're gonna need a bigger boat.",
            "answer":"Jaws",
            "points":200,
            "played":false
          },
          {
            "question":"Roads? Where we're going we don't need roads.",
            "answer":"Back to the future",
            "points":300,
            "played":false
          },
          {
            "question":"You've got to ask yourself one question: Do I feel lucky? Well, do ya, Punk?",
            "answer":"Dirty Harry",
            "points":400,
            "played":false
          },
          {
            "question":"You can't handle the truth!",
            "answer":"A few good men",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Games",
        "questions":[
          {
            "question":"",
			      "image":"images/2022/games/sims.jpg",
            "answer":"The Sims",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/supermario64.jpg",
            "answer":"Super Mario 64",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/halflife.jpg",
            "answer":"Half Life",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/diablo.jpg",
            "answer":"Diablo",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/quake.webp",
            "answer":"Quake",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"What's it called",
        "questions":[
          {
            "question":"",
            "image": "images/2022/whatsthat/playstation.png",
            "answer":"Playstation",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/friends.webp",
            "answer":"Friends",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/snake.png",
            "answer":"Snake",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/n64.png",
            "answer":"N64",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/doc-martens.webp",
            "answer":"Doc Martens",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"AI Movie Posters",
        "questions":[
          {
            "question":"",
			      "image":"images/2023/aimovieposters/piratesofthecaribbean.png",
            "answer":"Pirates of the Caribbean",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/ironman.png",
            "answer":"Ironman",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/transformers.png",
            "answer":"Transformers",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/killbill.png",
            "answer":"Kill Bill",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2023/aimovieposters/300.png",
            "answer":"300",
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
  {
    "name":"Round 4",
    "categories":[
      {
        "name":"Lyrics Ahoy!",
        "questions":[
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/michaeljackson_billiejean.mp4",
            "video_answer": "videos/2023/lyrics/michaeljackson_billiejean_solution.mp4",
            "answer":"Don't go around breaking young girls hearts",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/takethat_backforgood.mp4",
            "video_answer": "videos/2023/lyrics/takethat_backforgood_solution.mp4",
            "answer":"This time it's forever",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/rickymartin_livinlavidaloca.mp4",
            "video_answer": "videos/2023/lyrics/rickymartin_livinlavidaloca_solution.mp4",
            "answer":"Like a bullet to your brain",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/willsmith_miami.mp4",
            "video_answer": "videos/2023/lyrics/willsmith_miami_solution.mp4",
            "answer":"All night on the beach till the break of dawn",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "",
            "video": "videos/2023/lyrics/aceofbase_thesign.mp4",
            "video_answer": "videos/2023/lyrics/aceofbase_thesign_solution.mp4",
            "answer":"Life is demanding, without understanding",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Movie Trivia",
        "questions":[
          {
            "question":"The first rule of Fight Club",
            "answer":"You do not talk about Fight Club",
            "points":100,
            "played":false
          },
          {
            "question":"According to Forrest Gump life is like this",
            "answer":"A Box of chocolates",
            "points":200,
            "played":false
          },
          {
            "question":"The highest grossing movie of the 90s",
            "answer":"Titanic",
            "points":300,
            "played":false
          },
          {
            "question":"The bomb will explode if the bus drops below this speed in the movie 'Speed'",
            "answer":"50 mph",
            "points":400,
            "played":false
          },
          {
            "question":"He played Batman in 1997s 'Batman and Robin'",
            "answer":"George Clooney",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Movie Posters",
        "questions":[
          {
            "question":"",
            "image": "images/2022/movieposters/6thSense.png",
            "image_answer": "images/2022/movieposters/6thSense_Solution.png",
            "answer":"The 6th Sense",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/FearAndLoathing.png",
            "image_answer": "images/2022/movieposters/FearAndLoathing_Solution.png",
            "answer":"Fear And Loathing in Las Vegas",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/TheBigLebowski.png",
            "image_answer": "images/2022/movieposters/TheBigLebowski_Solution.png",
            "answer":"The Big Lebowski",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/JerryMaguire.png",
            "image_answer": "images/2022/movieposters/JerryMaguire_Solution.png",
            "answer":"Jerry Maguire",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/10Things.png",
            "image_answer": "images/2022/movieposters/10Things_Solution.png",
            "answer":"10 Things I hate about you",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Cartoons",
        "questions":[
          {
            "question":"",
            "image": "images/2022/cartoons/renandstimpy.jpg",
            "answer":"The Ren and Stimpy Show",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/rugrats-der-rugrats-film-10_b-w-970.jpg.jpg",
            "answer":"Rugrats",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/rockosmodernlife.jpg",
            "answer":"Rockos Modern Life",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/tinytoonadventures.webp",
            "answer":"Tiny Toon Adventures",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/powerpuffgirls.png",
            "answer":"Powerpuff Girls",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Games",
        "questions":[
          {
            "question":"",
			      "image":"images/2022/games/pokemonred.jpg",
            "answer":"Pokemon (Red)",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/warcraft.jpg",
            "answer":"Warcraft",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/starcraft.jpg",
            "answer":"Starcraft",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/duke-nukem-3d.jpg",
            "answer":"Duke Nukem 3d",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/needforspeed.webp",
            "answer":"Need for Speed",
            "points":500,
            "played":false
          },
        ]
      },
      {
        "name":"Music Videos",
        "questions":[
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/MCHammer_UCantTouchThis.mp4",
            "video_answer": "videos/90smusicvideos/MCHammer_UCantTouchThis_Solution.mp4",
            "answer":"MC Hammer - U Cant Touch This",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Rednex_CottonEyeJoe.mp4",
            "video_answer": "videos/90smusicvideos/Rednex_CottonEyeJoe_Solution.mp4",
            "answer":"Rednex - Cotton Eye Joe",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Rammstein_DuHast.mp4",
            "video_answer": "videos/90smusicvideos/Rammstein_DuHast_Solution.mp4",
            "answer":"Rammstein - Du Hast",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Hanson_MMMBop.mp4",
            "video_answer": "videos/90smusicvideos/Hanson_MMMBop_Solution.mp4",
            "answer":"Hanson - MMMBop",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/BackstreetBoys_Everybody.mp4",
            "video_answer": "videos/90smusicvideos/BackstreetBoys_Everybody_Solution.mp4",
            "answer":"Backstreet Boys - Everybody",
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