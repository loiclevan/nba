/**
 * Created by levan on 11/01/2016.
 */
// data via http://www.spotrac.com/nba

var data = [
    {
        name: "Atlanta Hawks",
        players: [
            { name: "Al Horford", salary: 12000000 },
            { name: "Paul Millsap", salary: 9500000	},
            { name: "Jeff Teague", salary: 8000000 },
            { name: "Kyle Korver", salary: 6253521 },
            { name: "Thabo Sefolosha", salary: 4150000 },
            { name: "Mike Scott", salary: 3333333 },
            { name: "DeMarre Carroll", salary: 2442455 },
            { name: "Shelvin Mack",	salary: 2433333	},
            { name: "Kent Bazemore", salary: 2000000 },
            { name: "Elton Brand",	salary:	2000000 },
            { name: "Dennis Schröder", salary: 1690680 },
            { name: "John Jenkins",	salary:	1312920 },
            { name: "Pero Antic", salary: 1250000 },
            { name: "Mike Muscala", salary: 816482 },
            { name: "Austin Daye",	salary:	62552 }
        ]
    },
    {
        name: "Boston Celtics",
        players: [
            { name: "Gerald Wallace", salary: 10105855 },
            { name: "Isaiah Thomas", salary: 7238606	},
            { name: "Avery Bradley", salary: 7191011 },
            { name: "Brandon Bass", salary: 6900000 },
            { name: "Jonas Jerebko",	salary: 4500000	},
            { name: "Marcus Smart",	salary:	3283320 },
            { name: "Evan Turner", salary: 3278000 },
            { name: "Kelly Olynyk", salary: 2075760 },
            { name: "Luigi Datome", salary: 1750000 },
            { name: "Tyler Zeller", salary: 1703760 },
            { name: "James Young", salary: 1674480 },
            { name: "Jared Sullinger", salary: 1424520 },
            { name: "Jae Crowder",	salary: 915243 },
            { name: "Phil Pressey", salary: 816482 },
            { name: "Chris Babb", salary: 48028 }
        ]
    },
    {
        name: "Brooklyn Nets",
        players: [
            { name: "Joe Johnson", salary: 23180890 },
            { name: "Deron Williams", salary: 19554465 },
            { name: "Brook Lopez", salary: 15719063 },
            { name: "Thaddeus Young", salary: 9160869 },
            { name: "Jarret Jack", salary: 6300000 },
            { name: "Mirza Teletovic", salary: 3368100 },
            { name: "Bojan Bogdanovic", salary: 3278000 },
            { name: "Sergey Karasev", salary: 1533840 },
            { name: "Mason Plumlee", salary: 1357080 },
            { name: "Alan Anderson", salary: 1276061 },
            { name: "Jerome Jordan", salary: 816482 },
            { name: "Darius Morris", salary: 702756 },
            { name: "Markel Brown", salary: 507336 },
            { name: "Corey Jefferson", salary: 507336 },
            { name: "Earl Clark", salary: 62552 }
        ]
    },
    {
        name: "Charlotte Hornets",
        players: [
            { name: "Al Jefferson", salary: 13500000 },
            { name: "Lance Stephenson", salary: 9000000 },
            { name: "Marvin Williams", salary: 7000000 },
            { name: "Gerald Henderson", salary: 6000000 },
            { name: "Michael Kid-Gilchrist", salary: 5016960 },
            { name: "Cody Zeller", salary: 4030560 },
            { name: "Mo Williams", salary: 3965074 },
            { name: "Bismack Biyombo", salary: 3873398 },
            { name: "Kemba Walker", salary: 3272091 },
            { name: "Brian Roberts", salary: 2734200 },
            { name: "Noah Vonleh", salary: 2524200 },
            { name: "P.J Hairston", salary: 1149720 },
            { name: "Jason Maxiell", salary: 1316809 },
            { name: "Jeff Taylor", salary: 915243 },
            { name: "Troy Daniels", salary: 816482 }
        ]
    },
    {
        name: "Chicago Bulls",
        players: [
            { name: "Derrick Rose", salary:18862876 },
            { name: "Joakim Noah", salary: 12200000 },
            { name: "Taj Gibson", salary: 8000000 },
            { name: "Pau Gasol", salary: 7128000 },
            { name: "Nikola Mirotic", salary: 5305000 },
            { name: "Mike Dunleavy", salary: 3326235 },
            { name: "Kirk Hinrich", salary: 2732000 },
            { name: "Doug McDermott", salary: 2277960 },
            { name: "Jimmy Butler", salary: 2008748 },
            { name: "Tony Snell", salary: 1472400 },
            { name: "E'twaun Moore", salary: 948163 },
            { name: "Nazr Mohammed", salary: 1448490 },
            { name: "Aaron Brooks", salary: 1145658 },
            { name: "Cameron Bairstow", salary: 507336 },
        ]
    },
    {
        name: "Cleveland Cavaliers",
        players: [
            { name: "LeBron James", salary: 20644400 },
            { name: "Kevin Love", salary: 15719063 },
            { name: "Anderson Varejao", salary: 9704545 },
            { name: "Kyrie Irving", salary: 7070730 },
            { name: "J.R Smith", salary: 5982375 },
            { name: "Tristan Thompson", salary: 5138430 },
            { name: "Timofey Mozgov", salary: 4650000 },
            { name: "Mike Miller", salary: 2732000 },
            { name: "Iman Shumpert", salary: 2616957 },
            { name: "Brendan Haywood", salary: 2213688 },
            { name: "James Jones", salary: 1448490 },
            { name: "Shawn Marion", salary: 1448490 },
            { name: "Joe Harris", salary: 884879 },
            { name: "Matt Dellavedova", salary: 816482 },
            { name: "Kendrick Perkins", salary:434573 }
        ]
    },
    {
        name: "Dallas Mavericks",
        players: [
            { name: "Tyson Chandler", salary: 14596887 },
            { name: "Chandler Parsons", salary: 14700000 },
            { name: "Rajon Rondo", salary: 12909000 },
            { name: "Monta Ellis", salary: 8360000 },
            { name: "Dirk Nowitzki", salary: 7974482 },
            { name: "Devin Harris", salary: 3878896 },
            { name: "Raymond Felton", salary: 3793893 },
            { name: "Al-Farouq Aminu", salary: 981084 },
            { name: "Greg Smith", salary: 948163 },
            { name: "Richard Jefferson", salary: 1448490 },
            { name: "Charlie Villanueva", salary: 1316809 },
            { name: "Jose Barea", salary: 1302578 },
            { name: "Dwight Powell", salary: 507336 },
            { name: "Amar'e Stoudemire", salary: 485670 },
            { name: "Bernard James", salary: 236886 }
        ]
    },
    {
        name: "Denver Nuggets",
        players: [
            { name: "Ty Lawson", salary: 11595506 },
            { name: "Danilo Gallinari", salary: 10854850 },
            { name: "Wilson Chandler", salary: 6757913 },
            { name: "J.J Hickson", salary: 5381750 },
            { name: "Darrel Arthur", salary: 3457149 },
            { name: "Randy Foye", salary: 3000000 },
            { name: "Jameer Nelson", salary: 2732000 },
            { name: "Kenneth Faried", salary: 2249746 },
            { name: "Joffrey Lauvergne", salary: 1790281 },
            { name: "Jusuf Nurkic", salary: 1762790 },
            { name: "Gary Harris", salary: 1519200 },
            { name: "Will Barton", salary: 915243 },
            { name: "Ian Clark", salary: 816482 },
            { name: "Erick Green", salary: 507336 },
            { name: "Jamaal Franklin", salary: 19211 }
        ]
    },
    {
        name: "Detroit Pistons",
        players: [
            { name: "Brandon Jennings", salary: 8000000 },
            { name: "Tayshaun Prince", salary: 7707865 },
            { name: "Jodie Meeks", salary: 6000000 },
            { name: "Greg Monroe", salary:5479933 },
            { name: "Caron Butler", salary: 4500000 },
            { name: "Joel Anthony", salary: 3800000 },
            { name: "Anthony Tolliver", salary: 3000000 },
            { name: "Kentavious Caldwell-Pope", salary: 2653080 },
            { name: "Andre Drummond", salary: 2568360 },
            { name: "Reggie Jackson", salary: 2204370 },
            { name: "Shawne Williams", salary: 1227957 },
            { name: "Cartier Martin", salary: 1145886 },
            { name: "Spencer Dinwiddle", salary: 700000 },
            { name: "John Lucas III", salary: 336966 },
            { name: "Quincy Miller", salary: 193745 }
        ]
    },
    {
        name: "Golden State Warriors",
        players: [
            { name: "David Lee", salary: 15000000 },
            { name: "Andrew Bogut", salary: 12972973 },
            { name: "Andre Iguodala", salary: 12289544 },
            { name: "Stephen Curry", salary: 10629213 },
            { name: "Shaun Livingston", salary: 5305000 },
            { name: "Marreese Speights", salary: 3500000 },
            { name: "Klay Thompson", salary: 3075880 },
            { name: "Harrison Barnes", salary: 3049000 },
            { name: "Brandon Rush", salary: 1145658 },
            { name: "Festus Ezeli", salary: 1112880 },
            { name: "Leandro Barbosa", salary: 1448490 },
            { name: "Draymond Green", salary:915482 },
            { name: "Justin Holiday", salary: 818482 },
            { name: "Ognjen Kuzmic", salary: 816482 },
            { name: "James McAdoo", salary: 167122 }
        ]
    },
    {
        name: "Houston Rockets",
        players: [
            { name: "Dwight Howard", salary: 21426271 },
            { name: "James Harden", salary: 14728844 },
            { name: "Trevor Ariza", salary: 8579089 },
            { name: "Jason Terry", salary: 5450000 },
            { name: "Kostas Papanikolaou", salary: 4694365 },
            { name: "Corey Brewer", salary: 4702500 },
            { name: "Josh Smith", salary: 2077000 },
            { name: "Pablo Prigioni", salary: 1662961 },
            { name: "Terrence Jones", salary: 1618660 },
            { name: "Donatas Motiejunas", salary: 1483920 },
            { name: "Clint Capela", salary: 1189200 },
            { name: "Joey Dorsey", salary: 948163 },
            { name: "Patrick Beverley", salary: 915243 },
            { name: "Nick Johnson", salary: 507336 },
            { name: "K.J. McDaniels", salary: 507336 },
        ]
    },
    {
        name: "Indiana Pacers",
        players: [
            { name: "Paul George", salary: 15925670 },
            { name: "Roy Hibbert", salary: 14898938 },
            { name: "David West", salary: 12000000 },
            { name: "Geroge Hill", salary: 8000000 },
            { name: "Luis Scola", salary: 4508504 },
            { name: "C.J. Miles", salary: 4205000 },
            { name: "Ian Mahinmi", salary: 4000000 },
            { name: "Chris Copeland", salary: 3060000 },
            { name: "Chris Copeland", salary: 3000000 },
            { name: "C.J. Watson", salary: 2016000 },
            { name: "Solomon Hill", salary: 1246680 },
            { name: "Damjan Rudez", salary: 1005000 },
            { name: "Donald Sloan", salary: 948163 },
            { name: "Rodney Stuckey", salary: 1227952 },
            { name: "LaVoy Allen", salary: 948163 },
            { name: "Shayne Whittington", salary: 507336 }
        ]
    },
    {
        name: "Los Angeles Clippers",
        players: [
            { name: "Chris Paul", salary: 20068563 },
            { name: "Blake Griffin", salary: 17374613 },
            { name: "DeAndre Jordan", salary: 11440123 },
            { name: "Spencer Hawes", salary: 6305000 },
            { name: "Jamal Crawford", salary: 5225000 },
            { name: "Matt Barnes", salary: 3250000 },
            { name: "Austin Rivers", salary: 2439840 },
            { name: "C.J. Wilcox", salary: 1109760 },
            { name: "Hedo Turkoglu", salary: 1448490 },
            { name: "Glen Davis", salary: 1227985 },
            { name: "Ekpe Udoh", salary: 981084 },
            { name: "Dahntay Jones", salary: 613478 },
            { name: "Jordan Hamilton", salary: 150591 },
            { name: "Lester Hudson", salary: 27887 }
        ]
    },
    {
        name: "Los Angeles Lakers",
        players: [
            { name: "Kobe Bryant", salary: 23500000 },
            { name: "Jordan Hill", salary:	9000000 },
            { name: "Jeremy Lin", salary: 14898938 },
            { name: "Nick Young", salary: 4994420 },
            { name: "Carlos Boozer", salary: 3251000 },
            { name: "Julius Randle", salary: 2997360 },
            { name: "Ryan Kelly", salary: 1650000 },
            { name: "Ed Davis", salary: 981083 },
            { name: "Ronnie Price", salary: 1316809 },
            { name: "Wayne Ellington", salary: 1063384 },
            { name: "Robert Sacre", salary: 915243 },
            { name: "Tarik Black", salary: 507336 },
            { name: "Jordan Clarkson", salary: 507336 },
            { name: "Jabari Brown", salary:44759 },
            { name: "Vander Blue", salary: 14409 }
        ]
    },
    {
        name: "Memphis Grizzlies",
        players: [
            { name: "Zach Randolph", salary: 16500000 },
            { name: "Marc Gasol", salary: 15829688 },
            { name: "Jeff Green", salary: 9200000 },
            { name: "Mike Conley", salary: 8493216 },
            { name: "Courtney Lee", salary: 5225000 },
            { name: "Tony Allen", salary: 4494383 },
            { name: "Vince Carter", salary: 3911981 },
            { name: "Kosta Koufos", salary: 3000000 },
            { name: "Beno Udrih", salary: 2077000 },
            { name: "Jordan Adams", salary: 1344120 },
            { name: "Jon Leuer", salary: 967500 },
            { name: "Nick Calathes", salary: 816482 },
            { name: "Jarnell Stokes", salary: 725000 },
            { name: "Russ Smith", salary: 535000 },
            { name: "JaMychal Green", salary: 134295 }
        ]
    },
    {
        name: "Miami Heat",
        players: [
            { name: "Chris Bosh", salary: 20633400 },
            { name: "Dwyane Wade", salary: 15000000 },
            { name: "Luol Deng", salary: 9714461 },
            { name: "Goran Dragic", salary: 7500000 },
            { name: "Chris Andersen", salary: 5375000 },
            { name: "Josh McRoberts", salary: 5305000 },
            { name: "Mario Chalmers", salary: 4000000 },
            { name: "Udonis Haslem", salary: 2732000 },
            { name: "Zoran Dragic", salary: 1500000 },
            { name: "Shabazz Napier", salary: 1238640 },
            { name: "Hassan Whiteside", salary: 769881 },
            { name: "James Ennis", salary: 507336 },
            { name: "Tyler Johnson", salary: 199217 },
            { name: "Henry Walker", salary: 196217 },
            { name: "Michael Beasley", salary: 196217 }
        ]
    },
    {
        name: "Milwaukee Bucks",
        players: [
            { name: "O.J. Mayo", salary: 8000000 },
            { name: "Ersan Ilyasova", salary: 7900000 },
            { name: "Zaza Pachulia", salary: 5200000 },
            { name: "Jabari Parker", salary: 4930000 },
            { name: "Jared Dudley", salary: 4250000 },
            { name: "Jerryd Bayless", salary: 3000000 },
            { name: "Michael Carter-Williams", salary: 2300040 },
            { name: "John Henson", salary: 	1905360 },
            { name: "Giannis Antetokounmpo", salary: 1792560 },
            { name: "Tyler Ennis", salary: 1500000 },
            { name: "Miles Plumlee", salary: 1169880 },
            { name: "Khris Middleton", salary: 915243 },
            { name: "Damien Inglis", salary: 820000 },
            { name: "Johnny O'Bryant", salary: 600000 },
            { name: "Jorge Gutierrez", salary: 43226 }
        ]
    },
    {
        name: "Minnesota Timberwolves",
        players: [
            { name: "Nikola Pekovic", salary: 12100000 },
            { name: "Kevin Garnett", salary: 12000000 },
            { name: "Kevin Martin", salary: 6792500 },
            { name: "Anthony Bennett", salary: 5563920 },
            { name: "Andrew Wiggins", salary: 5510640 },
            { name: "Chase Budinger", salary: 5000000 },
            { name: "Ricky Rubio", salary: 4660479 },
            { name: "Gary Neal", salary: 3250000 },
            { name: "Zach LaVine", salary: 2055840 },
            { name: "Shabazz Muhammad", salary: 1887120 },
            { name: "Adreian Payne", salary: 1855320 },
            { name: "Gorgui Dieng", salary: 1352640 },
            { name: "Robbie Hummel", salary: 880000 },
            { name: "Justin Hamilton", salary: 816482 },
            { name: "Lorenzo Brown", salary: 268959 },
            { name: "Arinze Onuaku", salary: 43226 }
        ]
    },
    {
        name: "New Orleans Pelicans",
        players: [
            { name: "Eric Gordon", salary: 14283844 },
            { name: "Tyreke Evans", salary: 11796247 },
            { name: "Jrue Holiday", salary: 9713484 },
            { name: "Ryan Anderson", salary: 8308500 },
            { name: "Omer Asik", salary: 14898938 },
            { name: "Anthony Davis", salary: 5375760 },
            { name: "Quincy Pondexter", salary: 3146068 },
            { name: "Norris Cole", salary: 2038620 },
            { name: "Alexis Ajinca", salary: 981084 },
            { name: "Luke Babbitt", salary: 981084 },
            { name: "Jimmer Fredette", salary: 981084 },
            { name: "Jeff Withey", salary: 816482 },
            { name: "Dante Cunningham", salary: 816482 },
            { name: "Toney Douglas", salary: 143870 },
        ]
    },
    {
        name: "New York Knicks",
        players: [
            { name: "Carmelo Anthony", salary: 22458401 },
            { name: "Andrea Bargnani", salary: 11500000 },
            { name: "Jose Calderon", salary: 7097191 },
            { name: "Alexey Shved", salary: 3637073 },
            { name: "Jason Smith", salary: 3278000 },
            { name: "Shane Larkin", salary: 1591350 },
            { name: "Tim Hardaway Jr.", salary: 1196760 },
            { name: "Cole Aldrich", salary: 884293 },
            { name: "Quincy Acy", salary: 915243 },
            { name: "Cleanthony Early", salary: 507336 },
            { name: "Travis Wear", salary: 507336 },
            { name: "Louis Amundson", salary: 507336 },
            { name: "Lance Thomas", salary: 432885 },
            { name: "Langston Galloway", salary: 235762 },
            { name: "Rickey Ledo", salary: 38423 }
        ]
    },
    {
        name: "Oklahoma City Thunder",
        players: [
            { name: "Kevin Durant", salary: 18995623 },
            { name: "Russell Westbrook", salary: 15719062 },
            { name: "Serge Ibaka", salary: 12350000 },
            { name: "Enes Kanter", salary: 5693674 },
            { name: "Dion Waiters", salary: 4062000 },
            { name: "Steve Novak", salary: 3445972 },
            { name: "Anhtony Morrow", salary: 3200000 },
            { name: "D.J. Augustin", salary: 3000000 },
            { name: "Nick Collison", salary: 2242003 },
            { name: "Jeremy Lamb", salary: 2202000 },
            { name: "Steve Adams", salary: 2184960 },
            { name: "Mitch McGary", salary: 1400040 },
            { name: "Andre Roberson", salary: 1160880 },
            { name: "Perry Jones III", salary: 1129200 },
            { name: "Kyle Singler", salary: 1090000 }
        ]
    },
    {
        name: "Orlando Magic",
        players: [
            { name: "Channing Frye", salary: 8579088 },
            { name: "Victor Oladipo", salary: 4978200 },
            { name: "Ben Gordon", salary: 4500000 },
            { name: "Aaron Gordon", salary: 3992040 },
            { name: "Nikola Vucevic", salary: 2751260 },
            { name: "Luke Ridnour", salary: 2750000 },
            { name: "Elfrid Payton", salary: 2397840 },
            { name: "Tobias Harris", salary: 2380594 },
            { name: "Maurice Harkless", salary: 1887840 },
            { name: "Andrew Nicholson", salary: 1545840 },
            { name: "Evan Fournier", salary: 1483920 },
            { name: "Willie Green", salary: 1448490 },
            { name: "Kyle O'Quinn", salary: 915234 },
            { name: "Roy Devyn Marble", salary: 884879 },
            { name: "Dewayne Dedmon", salary: 816482 }
        ]
    },
    {
        name: "Philadelphia 76ers",
        players: [
            { name: "Jason Richardson", salary: 6204250 },
            { name: "Joel Embiid", salary: 4427640 },
            { name: "Luc Richard Mbah a Moute", salary: 3956095 },
            { name: "Thomas Robinson.", salary: 3678360 },
            { name: "Nerlens Noel", salary: 3315120 },
            { name: "Furkan Aldemir", salary: 2810305 },
            { name: "Ronny Turiaf", salary: 1500000 },
            { name: "Tony Wroten Jr.", salary: 1210080 },
            { name: "Robert Covington", salary: 1000000 },
            { name: "Henry Sims", salary: 915243 },
            { name: "Jerami Grant", salary: 884879 },
            { name: "Ishmael Smith", salary: 923373 },
            { name: "Isaiah Canaan", salary: 816482 },
            { name: "Hollis Thompson", salary: 816482 },
            { name: "Glen Robinson III", salary: 507336 },
            { name: "JaKarr Sampson", salary: 507336 }
        ]
    },
    {
        name: "Phoenix Suns",
        players: [
            { name: "Eric Bledsoe", salary: 13000000 },
            { name: "Marcus Thornton", salary: 8575000 },
            { name: "R.J. Tucker", salary: 5700000 },
            { name: "Brandon Wright", salary: 5000000 },
            { name: "Alex Len", salary: 3492720 },
            { name: "Brandon Knight", salary: 3553917 },
            { name: "Gerald Green", salary: 3500000 },
            { name: "Markieff Morris", salary: 2987320 },
            { name: "Marcus Morris", salary: 2943221 },
            { name: "Danny Granger", salary: 2077000 },
            { name: "T.J. Warren", salary: 1951463 },
            { name: "Reggie Bullock", salary: 1200720 },
            { name: "Archie Goodwin", salary: 1112280 },
            { name: "Earl Barron", salary: 262057 },
            { name: "Jerel McNeal", salary: 26919 }
        ]
    },
    {
        name: "Portland Trail Blazers",
        players: [
            { name: "LaMarcus Aldridge", salary: 15256000 },
            { name: "Nicolas Batum", salary: 11295250 },
            { name: "Arron Afflalo", salary: 7362500 },
            { name: "Wesley Matthews", salary: 6107640 },
            { name: "Robin Lopez", salary: 5340229 },
            { name: "Chris Kaman", salary: 4800000 },
            { name: "Damian Lillard", salary: 3340920 },
            { name: "Dorell Wright", salary: 3135000 },
            { name: "Joel Freeland", salary: 2652000 },
            { name: "C.J. McCollum", salary: 2316720 },
            { name: "Meyers Leonard", salary: 2222160 },
            { name: "Steve Blake", salary: 2077000 },
            { name: "Alonzo Gee", salary: 1063383 },
            { name: "Allen Crabbe", salary: 825000 },
            { name: "Tim Frazier", salary: 50734 }
        ]
    },
    {
        name: "Sacramento Kings",
        players: [
            { name: "Rudy Gay", salary: 19317326 },
            { name: "DeMarcus Cousins", salary: 14746000 },
            { name: "Carl Landry", salary: 6500000 },
            { name: "Derrick Williams", salary: 6331404 },
            { name: "Jason Thompson", salary: 6016960 },
            { name: "Darren Collison", salary: 4916974 },
            { name: "Andre Miller", salary: 4625000 },
            { name: "Ben McLemore", salary: 3026280 },
            { name: "Nik Stauskas", salary: 2745840 },
            { name: "Reggie Evans", salary: 1695635 },
            { name: "Ryan Hollins", salary: 1310286 },
            { name: "Omri Casspi", salary: 1063384 },
            { name: "Ray McCallum", salary: 824616 },
            { name: "Eric Moreland", salary: 507336 },
            { name: "David Stockton", salary: 11937 }
        ]
    },
    {
        name: "San Antonio Spurs",
        players: [
            { name: "Tony Parker", salary: 12500000 },
            { name: "Tim Duncan", salary: 10361446 },
            { name: "Tiago Splitter", salary: 9250000 },
            { name: "Boris Diaw", salary: 7500000 },
            { name: "Manu Ginobili", salary: 7000000 },
            { name: "Danny Green", salary: 3762500 },
            { name: "Patrick Mills", salary: 3508772 },
            { name: "Kawhi Leonard", salary: 2887840 },
            { name: "Marco Belinelli", salary: 2873750 },
            { name: "Aron Baynes", salary: 2077000 },
            { name: "Cory Joseph", salary: 2120920 },
            { name: "Jeff Ayres", salary: 1828750 },
            { name: "Kyle Anderson", salary: 1093680 },
            { name: "Matt Bonner", salary: 1448490 },
            { name: "Reggie Williams", salary: 344036 }
        ]
    },
    {
        name: "Toronto Raptors",
        players: [
            { name: "Kyle Lowry", salary: 12000000 },
            { name: "DeMar DeRozan", salary: 9500000 },
            { name: "Amir Johnson", salary: 7000000 },
            { name: "Greivis Vasquez", salary: 6400000 },
            { name: "Landry Fields", salary: 6250000 },
            { name: "Chuck Hayes", salary: 5722500 },
            { name: "Patrick Patterson", salary: 5831326 },
            { name: "Louis Williams", salary: 5450000 },
            { name: "Jonas Valanciunas", salary: 3183000 },
            { name: "Tyler Hansbrough", salary: 3105301 },
            { name: "Terrence Ross", salary: 2678640 },
            { name: "James Johnson", salary: 2500000 },
            { name: "Lucas Nogueira", salary: 1463000 },
            { name: "Bruno Cabocio", salary: 1458360 },
            { name: "Greg Stiemsma", salary: 981084 }
        ]
    },
    {
        name: "Utah Jazz",
        players: [
            { name: "Gordon Hayward", salary: 14746000 },
            { name: "Derrick Favors", salary: 12650000 },
            { name: "Trevor Booker", salary: 5000000 },
            { name: "Dante Exum", salary: 3615000 },
            { name: "Alec Burks", salary: 3034356 },
            { name: "Trey Burke", salary: 2438760 },
            { name: "Jeremy Evans", salary: 1794871 },
            { name: "Rodney Hood", salary: 1660257 },
            { name: "Rudy Gobert", salary: 1078800 },
            { name: "Grant Jerrett", salary: 816482 },
            { name: "Joe Ingles", salary: 507336 },
            { name: "Elijah MIllsap", salary: 241731 },
            { name: "Christapher Johnson", salary: 113059 },
            { name: "Bryce Cotton", salary: 92514 },
            { name: "Jack Cooley", salary: 62671 }
        ]
    },
    {
        name: "Washington Wizards",
        players: [
            { name: "John Wall", salary: 14746000 },
            { name: "Nene Hilario", salary: 13000000 },
            { name: "Marcin Gortat", salary: 10434472 },
            { name: "Martell Webster", salary: 5381750 },
            { name: "Paul Pierce", salary: 5305000 },
            { name: "Bradley Beal", salary: 4505280 },
            { name: "Otto Porter Jr.", salary: 4319280 },
            { name: "Kris Humphries", salary: 4278000 },
            { name: "Kevin Seraphin", salary: 3898691 },
            { name: "Ramon Sessions", salary: 2350820 },
            { name: "Dejuan Blair", salary: 2000000 },
            { name: "Garret Temple", salary: 981084 },
            { name: "Rasual Butler", salary: 1448490 },
            { name: "Drew Gooden", salary: 1448490 },
            { name: "Will Bynum", salary: 72234 }
        ]
    }
]