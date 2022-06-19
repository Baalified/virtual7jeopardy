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
            "video": "videos/90smusicvideos/Aqua_Barbie_Girl.mp4",
            "video_answer": "videos/90smusicvideos/Aqua_Barbie_Girl_Solution.mp4",
            "answer":"Aqua - Barbie Girl",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/BomfunkMCs_Freestyler.mp4",
            "video_answer": "videos/90smusicvideos/BomfunkMCs_Freestyler_Solution.mp4",
            "answer":"Bombfunk MCs - Freestyler",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Coolio_GangstasParadise.mp4",
            "video_answer": "videos/90smusicvideos/Coolio_GangstasParadise_Solution.mp4",
            "answer":"Coolio - Gangstas Paradise",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/BonJovi_BedOfRoses.mp4",
            "video_answer": "videos/90smusicvideos/BonJovi_BedOfRoses_Solution.mp4",
            "answer":"Bon Jovi - Bed of Roses",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Eminem_MyNameIs.mp4",
            "video_answer": "videos/90smusicvideos/Eminem_MyNameIs_Solution.mp4",
            "answer":"Eminem - My Name is",
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
            "image": "images/2022/bandimages/Spicegirls.png",
            "image_answer": "images/2022/bandimages/Spicegirls_Solution.png",
            "answer":"Spice Girls",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/ACDC.png",
            "image_answer": "images/2022/bandimages/ACDC_Solution.png",
            "answer":"AC/DC",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/DestinysChild.png",
            "image_answer": "images/2022/bandimages/DestinysChild_Solution.png",
            "answer":"Destinys Child",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/GreenDay.png",
            "image_answer": "images/2022/bandimages/GreenDay_Solution.png",
            "answer":"Green Day",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/bandimages/Radiohead.png",
            "image_answer": "images/2022/bandimages/Radiohead_Solution.png",
            "answer":"Radiohead",
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
            "image": "images/2022/movieposters/HomeAlone.png",
            "image_answer": "images/2022/movieposters/HomeAlone_Solution.png",
            "answer":"Home Alone",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/Matrix.png",
            "image_answer": "images/2022/movieposters/Matrix_Solution.png",
            "answer":"Matrix",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/MissionImpossible.png",
            "image_answer": "images/2022/movieposters/MissionImpossible_Solution.png",
            "answer":"Mission Impossible",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/MrsDoubtfire.png",
            "image_answer": "images/2022/movieposters/MrsDoubtfire_Solution.png",
            "answer":"Mrs. Doubtfire",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/Se7en.png",
            "image_answer": "images/2022/movieposters/Se7en_Solution.png",
            "answer":"Se7en",
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
            "image": "images/2022/cartoons/sailor-moon.jpg",
            "answer":"Sailor Moon",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/pinkybrainheader.jpg",
            "answer":"Pinky and the Brain",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/Adventures-Of-The-Gummi-Bears.webp",
            "answer":"Adventures of the Gummi Bears",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/Gargoyles.webp",
            "answer":"Gargoyles",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/I-Am-Weasel.webp",
            "answer":"I am Weasel",
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
			      "audio":"sounds/2022/themes/LionKing.mp3",
            "image_answer": "sounds/2022/themes/LionKing_Solution.jpg",
            "answer":"The Lion King",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "audio":"sounds/2022/themes/MissionImpossible.mp3",
            "image_answer": "sounds/2022/themes/MissionImpossible_Solution.jpg",
            "answer":"Mission Impossible",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "audio":"sounds/2022/themes/ForrestGump.mp3",
            "image_answer": "sounds/2022/themes/ForrestGump_Solution.jpg",
            "answer":"Forrest Gump",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "audio":"sounds/2022/themes/AustinPowerss.mp3",
            "image_answer": "sounds/2022/themes/AustinPowerss_Solution.jpg",
            "answer":"Austin Powers",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "audio":"sounds/2022/themes/MIB.mp3",
            "image_answer": "sounds/2022/themes/MIB_Solution.jpg",
            "answer":"Men in Black",
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
            "image": "images/2022/whatsthat/gameboy.png",
            "answer":"Gameboy",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/vcr.png",
            "answer":"VCR / VHS",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/pda.png",
            "answer":"PDA",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/dreamcast.png",
            "answer":"Dreamcast",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/pollypocket.png",
            "answer":"Polly Pocket",
            "points":500,
            "played":false
          }
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
            "image": "images/2022/cartoons/darkwingduck.jpg",
            "answer":"Darkwing Duck",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/tmnt.jpg",
            "answer":"Teenage Mutant Ninja Turtles",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/Dexters-Laboratory.jpg",
            "answer":"Dexters Laboratory",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/Attack-Of-The-Killer-Tomatoes.webp",
            "answer":"Attack of the Killer Tomatoes",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/cartoons/The-Mighty-Ducks.webp",
            "answer":"The Mighty Ducks",
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
			      "image":"images/2022/games/timeline-sonic.png",
            "answer":"Sonic the Hedgehog",
            "points":100,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/Supermariokart.webp",
            "answer":"Super Mario Kart",
            "points":200,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/residentevil.jpg",
            "answer":"Resident Evil",
            "points":300,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/wow.jpg",
            "answer":"World of Warcraft",
            "points":400,
            "played":false
          },
          {
            "question":"",
			      "image":"images/2022/games/unrealtournament.jpg",
            "answer":"Unreal Tournament",
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
            "image": "images/2022/whatsthat/furby.png",
            "answer":"Furby",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/tamagotchi.png",
            "answer":"Tamagotchi",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/pager.png",
            "answer":"Pager",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/discman.png",
            "answer":"Discman",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/whatsthat/imac.png",
            "answer":"iMac",
            "points":500,
            "played":false
          }
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
    "name":"Round 3",
    "categories":[
      {
        "name":"Music Videos",
        "questions":[
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/BritneySpears_BabyOneMoreTime.mp4",
            "video_answer": "videos/90smusicvideos/BritneySpears_BabyOneMoreTime_Solution.mp4",
            "answer":"Britney Spears - Baby One More Time",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Aerosmith_IDontWantToMissAThing.mp4",
            "video_answer": "videos/90smusicvideos/Aerosmith_IDontWantToMissAThing_Solution.mp4",
            "answer":"Aerosmith - I Dont Want To Miss A Thing",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/GreenDay_AmericanIdiot.mp4",
            "video_answer": "videos/90smusicvideos/GreenDay_AmericanIdiot_Solution.mp4",
            "answer":"Green Day - American Idiot",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/GwenStefani_HollabackGirl.mp4",
            "video_answer": "videos/90smusicvideos/GwenStefani_HollabackGirl_Solution.mp4",
            "answer":"Gwen Stefani - Hollaback Girl",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image":"",
            "video": "videos/90smusicvideos/Vengaboys_WereGoingtoIbiza.mp4",
            "video_answer": "videos/90smusicvideos/Vengaboys_WereGoingtoIbiza_Solution.mp4",
            "answer":"Vengaboys - Were Going to Ibiza",
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
        "name":"Movie Posters",
        "questions":[
          {
            "question":"",
            "image": "images/2022/movieposters/BlairWitchProject.png",
            "image_answer": "images/2022/movieposters/BlairWitchProject_Solution.png",
            "answer":"Blair Witch Project",
            "points":100,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/RomeoAndJuliet.png",
            "image_answer": "images/2022/movieposters/RomeoAndJuliet_Solution.png",
            "answer":"Romeo And Juliet",
            "points":200,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/GroundhogDay.png",
            "image_answer": "images/2022/movieposters/GroundhogDay_Solution.png",
            "answer":"Groundhog Day",
            "points":300,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/Fargo.png",
            "image_answer": "images/2022/movieposters/Fargo_Solution.png",
            "answer":"Fargo",
            "points":400,
            "played":false
          },
          {
            "question":"",
            "image": "images/2022/movieposters/HalfBaked.png",
            "image_answer": "images/2022/movieposters/HalfBaked_Solution.png",
            "answer":"Half Baked",
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
        "name":"More Music Videos",
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