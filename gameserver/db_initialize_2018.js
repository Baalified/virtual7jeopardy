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
        "name":"Fußballer Zitate",
        "questions":[
          {
            "question":"Struuuunz. Was erlauben Struuuunz?",
            "answer":"Giovanni Trappatoni",
            "points":100,
            "played":false
          },
          {
            "question":"Mailand oder Madrid - Hauptsache Italien!",
            "answer":"Andreas Möller",
            "points":200,
            "played":false
          },
          {
            "question":"Das habe ich ihm dann auch verbal gesagt.",
            "answer":"Mario Basler",
            "points":300,
            "played":false
          },
          {
            "question":"Das Chancenplus war ausgeglichen.",
            "answer":"Lothar Matthäus",
            "points":400,
            "played":false
          },
          {
            "question":"Football is a simple game; 22 men chase a ball for 90 minutes and at the end, the Germans always win.",
            "answer":"Gery Lineker",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Who am I?",
        "questions":[
          {
            "question":"Together with my girlfriend we are taking part in World Ultimate Club Championship in July.",
            "answer":"Filip Stepniak",
            "image_answer":"images/employees/filip.jpg",
            "points":100,
            "played":false
          },
          {
            "question":"He runs 6.41 km with an average pace 4:38 minutes / km.",
            "answer":"Tom Seidel",
            "image_answer":"images/employees/tom.jpg",
            "points":200,
            "played":false
          },
          {
            "question":"Most of my time I try to hike through the Sauerland or use my motorcycle.",
            "answer":"Enno Schulte",
            "image_answer":"images/employees/enno.jpg",
            "points":300,
            "played":false
          },
          {
            "question":"I’m a morning person – so 5 o’clock is no big deal. Let me know if I stress you with this.",
            "answer":"Micha Prinz-Hübert",
            "image_answer":"images/employees/micha.jpg",
            "points":400,
            "played":false
          },
          {
            "question":"I can ride my bike with no handlebars.",
            "answer":"Tobias Melcher",
            "image_answer":"images/employees/tobiasmelcher.jpg",
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
 * ROUND 2
 */
  {
    "name":"Round 2",
    "categories":[
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
        "name":"Lyrik",
        "questions":[
          {
            "question":"",
			"image":"images/2018/lyrik/hotelcalifornia.png",
            "answer":"Hotel California",
            "points":100,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/dancingqueen.png",
            "answer":"Dancing Queen",
            "points":200,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/smoothcriminal.png",
            "answer":"Smooth Criminal",
            "points":300,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/eyeofthetiger.png",
            "answer":"Eye of the tiger",
            "points":400,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/summerjam.png",
            "answer":"Summer Jam",
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
            "image":"images/2018/KlassischeLogos/burgerking.jpg",
            "answer":"Burger King",
            "image_answer":"images/2018/KlassischeLogos/burgerkingsolution.jpg",
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
        "name":"FIFA WM Rekorde",
        "questions":[
          {
            "question":"Der jüngste Torschütze mit 17 Jahren (1958)",
            "answer":"Pelé",
            "points":100,
            "played":false
          },
          {
            "question":"Den Rekord für die meisten Teilnahmen (20) hält diese Mannschaft",
            "answer":"Brasilien",
            "points":200,
            "played":false
          },
          {
            "question":"Dieser Spieler hält mit 25 Einsätzen den Rekord für die meisten WM Einsätze",
            "answer":"Lothar Matthäus",
            "points":300,
            "played":false
          },
          {
            "question":"In Minute 121 erzielte dieser Spieler 2006 das späteste Tor bei einer Weltmeisterschaft",
            "answer":"Alessandro Del Piero",
            "points":400,
            "played":false
          },
          {
            "question":"Dieser ehemalige kolumbianische Nationalspieler Hält seit seinem Einsatz 2014 den Rekord als ältester WM Spieler",
            "answer":"Faryd Mendragón",
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
 * ROUND 3
 */
  {
    "name":"Round 3",
    "categories":[
      {
        "name":"Netflix",
        "questions":[
          {
            "question":"Die sechste und letzte Staffel dieser Serie muss ohne ihren Hauptdarsteller auskommen. Dieser wurde der sexuellen Belästigung beschuldigt und daraufhin aus der Serie ausgeschlossen.",
            "answer":"House of Cards",
            "points":100,
            "played":false
          },
          {
            "question":"Eine Kriminal- und Historien-Dramaserie über Drogenkartelle in den 1980er und 1990er Jahren in Kolumbien",
            "answer":"Narcos",
            "points":200,
            "played":false
          },
          {
            "question":"Eine britische Science-Fiction-Serie, die verschiedenartige Auswirkungen der Verwendung von Technik und Medien auf die Gesellschaft thematisiert",
            "answer":"Black Mirror",
            "points":300,
            "played":false
          },
          {
            "question":"Die erste durch Netflix in Deutschland produzierte Serie",
            "answer":"Dark",
            "points":400,
            "played":false
          },
          {
            "question":"Die Fortsetzung einer erfolgreichen Sitcom aus den 80er und 90er Jahren jedoch ohne Mary-Kate und Ashley Olsen",
            "answer":"Fuller House",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Marvel",
        "questions":[
          {
            "question":"Dieser aus Asgard stammende Avenger kann Blitz und Donner kontrollieren",
            "answer":"Thor",
            "points":100,
            "played":false
          },
          {
            "question":"Ein Schild aus Vibranium ist treuer Begleiter dieses übermenschlich starken Superhelden",
            "answer":"Captain America",
            "points":200,
            "played":false
          },
          {
            "question":"Trotz einer Hautkrebs-Erkrankung ist dieser Superheld unsterblich",
            "answer":"Deadpool",
            "points":300,
            "played":false
          },
          {
            "question":"Dieser Superheld ist in der Lage seine Größe zu variieren",
            "answer":"Ant Man",
            "points":400,
            "played":false
          },
          {
            "question":"Nicolas Cage spielte diesen von Mephistopheles verfluchten Kopfgeldjäger",
            "answer":"Ghost Rider",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"DSGVO",
        "questions":[
          {
            "question":"Unter anderem Name, Adresse, Größe, IP-Adresse",
            "answer":"Personenbezogene Daten",
            "points":100,
            "played":false
          },
          {
            "question":"Die englische Bezeichnung für die DSGVO",
            "answer":"GDPR",
            "points":200,
            "played":false
          },
          {
            "question":"Erhebung, Verarbeitung oder Nutzung personenbezogener Daten durch einen Auftragnehmer, der die Daten im Auftrag des Verantwortlichen verarbeitet",
            "answer":"Auftragsdatenverarbeitung",
            "points":300,
            "played":false
          },
          {
            "question":"Innerhalb dieser Frist muss ein Datenverstoß gemeldet werden",
            "answer":"72 Stunden",
            "points":400,
            "played":false
          },
          {
            "question":"Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit in Baden-Württemberg",
            "answer":"Dr Stefan Brink",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Fußballer Zitate",
        "questions":[
          {
            "question":"Der Ball ist rund.",
            "answer":"Sepp Herberger",
            "points":100,
            "played":false
          },
          {
            "question":"Das nächste Spiel ist immer das nächste.",
            "answer":"Matthias Sammer",
            "points":200,
            "played":false
          },
          {
            "question":"Das Tor steht in der Mitte.",
            "answer":"Franz Beckenbauer",
            "points":300,
            "played":false
          },
          {
            "question":"Das wird alles von den Medien hochsterilisiert.",
            "answer":"Bruno Labbadia",
            "points":400,
            "played":false
          },
          {
            "question":"Da kam dann das Elfmeterschießen. Wir hatten alle die Hosen voll, aber bei mir lief's ganz flüssig.",
            "answer":"Paul Breitner",
            "points":500,
            "played":false
          }
        ]
      },
      {
        "name":"Apple",
        "questions":[
          {
            "question":"April 1976",
            "answer":"Apple-Gründung",
            "points":100,
            "played":false
          },
          {
            "question":"Januar 2007",
            "answer":"Vorstellung erstes iPhone/Apple TV",
            "points":200,
            "played":false
          },
          {
            "question":"Oktober 2001",
            "answer":"Vorstellung erster iPod",
            "points":300,
            "played":false
          },
          {
            "question":"September 1985",
            "answer":"Steve Jobs verlässt Apple",
            "points":400,
            "played":false
          },
          {
            "question":"Mai 1998",
            "answer":"Vorstellung erster iMac",
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
            "answer":"House of the rising Sun",
            "points":100,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/everybreatheyoutake.png",
            "answer":"Every Breathe you take",
            "points":200,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/bad.png",
            "answer":"Bad",
            "points":300,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/heyjude.png",
            "answer":"Hey Jude",
            "points":400,
            "played":false
          },
          {
            "question":"",
			"image":"images/2018/lyrik/teenspirit.png",
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
            "question":"TODO",
            "answer":"TODO",
            "points":100,
            "played":false
          },
          {
            "question":"TODO",
            "answer":"TODO",
            "points":200,
            "played":false
          },
          {
            "question":"TODO",
            "answer":"TODO",
            "points":300,
            "played":false
          },
          {
            "question":"TODO",
            "answer":"TODO",
            "points":400,
            "played":false
          },
          {
            "question":"TODO",
            "answer":"TODO",
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