//song data = Number,Year,Album,Artist,Genre,Subgenre
let songs = `
1,1967,Sgt. Pepper's Lonely Hearts Club Band,The Beatles,Rock,"Rock & Roll, Psychedelic Rock"
2,1966,Pet Sounds,The Beach Boys,Rock,"Pop Rock, Psychedelic Rock"
3,1966,Revolver,The Beatles,Rock,"Psychedelic Rock, Pop Rock"
4,1965,Highway 61 Revisited,Bob Dylan,Rock,"Folk Rock, Blues Rock"
5,1965,Rubber Soul,The Beatles,"Rock, Pop",Pop Rock
6,1971,What's Going On,Marvin Gaye,Funk / Soul,Soul
7,1972,Exile on Main St.,The Rolling Stones,Rock,"Blues Rock, Rock & Roll, Classic Rock"
8,1979,London Calling,The Clash,Rock,"Punk, New Wave"
9,1966,Blonde on Blonde,Bob Dylan,"Rock, Blues","Folk Rock, Rhythm & Blues"
10,1968,"The Beatles (""The White Album"")",The Beatles,Rock,"Rock & Roll, Pop Rock, Psychedelic Rock, Experimental"
11,1976,The Sun Sessions,Elvis Presley,Rock,Rock & Roll
12,1959,Kind of Blue,Miles Davis,Jazz,Modal
13,1967,The Velvet Underground & Nico,The Velvet Underground,Rock,"Garage Rock, Art Rock, Experimental"
14,1969,Abbey Road,The Beatles,Rock,"Psychedelic Rock, Classic Rock, Pop Rock"
15,1967,Are You Experienced,The Jimi Hendrix Experience,"Rock, Blues","Blues Rock, Psychedelic Rock"
16,1975,Blood on the Tracks,Bob Dylan,Rock,"Folk Rock, Acoustic, Ballad"
17,1991,Nevermind,Nirvana,Rock,"Alternative Rock, Grunge"
18,1975,Born to Run,Bruce Springsteen,Rock,Pop Rock
19,1968,Astral Weeks,Van Morrison,"Jazz, Rock, Blues, Folk, World, & Country","Acoustic, Classic Rock, Free Improvisation"
20,1982,Thriller,Michael Jackson,"Funk / Soul, Pop",Disco
21,1982,The Great Twenty_Eight,Chuck Berry,Rock,Rock & Roll
22,1990,The Complete Recordings,Robert Johnson,Blues,Delta Blues
23,1970,John Lennon/Plastic Ono Band,John Lennon / Plastic Ono Band,Rock,Pop Rock
24,1973,Innervisions,Stevie Wonder,Funk / Soul,Soul
25,1963,"Live at the Apollo, 1962",James Brown,Funk / Soul,"Rhythm & Blues, Soul"
26,1977,Rumours,Fleetwood Mac,Rock,Pop Rock
27,1987,The Joshua Tree,U2,Rock,"Alternative Rock, Pop Rock"
28,1971,Who's Next,The Who,Rock,"Hard Rock, Mod, Prog Rock, Psychedelic Rock"
29,1969,Led Zeppelin,Led Zeppelin,Rock,"Blues Rock, Hard Rock"
30,1971,Blue,Joni Mitchell,Pop,"Acoustic, Ballad, Folk"
31,1965,Bringing It All Back Home,Bob Dylan,"Rock, Folk, World, & Country","Folk Rock, Folk"
32,1969,Let It Bleed,The Rolling Stones,Rock,"Blues Rock, Hard Rock"
33,1976,Ramones,Ramones,Rock,"Rock & Roll, Punk"
34,1968,Music From Big Pink,The Band,Rock,"Folk Rock, Acoustic, Blues Rock"
35,1972,The Rise and Fall of Ziggy Stardust and the Spiders From Mars,David Bowie,Rock,"Classic Rock, Glam"
36,1971,Tapestry,Carole King,"Rock, Pop","Folk Rock, Soft Rock"
37,1976,Hotel California,Eagles,Rock,Classic Rock
38,2001,The Anthology,Muddy Waters,"Folk, World, & Country",Folk
39,1963,Please Please Me,The Beatles,Rock,"Beat, Rock & Roll"
40,1967,Forever Changes,Love,Rock,"Folk Rock, Psychedelic Rock"
41,1977,Never Mind the Bollocks Here's the Sex Pistols,Sex Pistols,Rock,Punk
42,1967,The Doors,The Doors,Rock,Psychedelic Rock
43,1973,The Dark Side of the Moon,Pink Floyd,Rock,Prog Rock
44,1975,Horses,Patti Smith,Rock,Art Rock
45,1969,"The Band (""The Brown Album"")",The Band,"Classical, Stage & Screen","Soundtrack, Modern Classical, Contemporary, Score"
46,1984,Legend: The Best of Bob Marley and The Wailers,Bob Marley & The Wailers,Reggae,"Reggae, Roots Reggae"
47,1965,A Love Supreme,John Coltrane,Jazz,"Free Jazz, Hard Bop, Modal"
48,1988,It Takes a Nation of Millions to Hold Us Back,Public Enemy,Hip Hop,Conscious
49,1971,At Fillmore East,The Allman Brothers Band,"Rock, Blues",Blues Rock
50,1957,Here's Little Richard,Little Richard,"Rock, Blues","Rock & Roll, Rhythm & Blues"
51,1970,Bridge Over Troubled Water,Simon & Garfunkel,Rock,"Folk Rock, Classic Rock"
52,1975,Greatest Hits,Al Green,Funk / Soul,Soul
53,1964,Meet The Beatles!,The Beatles,Rock,"Beat, Rock & Roll"
54,1991,The Birth of Soul,Ray Charles,"Jazz, Funk / Soul","Rhythm & Blues, Big Band, Soul, Soul-Jazz"
55,1968,Electric Ladyland,The Jimi Hendrix Experience,"Rock, Blues","Electric Blues, Psychedelic Rock"
56,1956,Elvis Presley,Elvis Presley,Rock,"Rock & Roll, Rockabilly"
57,1976,Songs in the Key of Life,Stevie Wonder,Funk / Soul,"Soul, Disco"
58,1968,Beggars Banquet,The Rolling Stones,"Rock, Funk / Soul, Pop","Blues Rock, Southern Rock, Classic Rock"
59,1976,Chronicle: The 20 Greatest Hits,Creedence Clearwater Revival,Rock,None
60,1969,Trout Mask Replica,Captain Beefheart & His Magic Band,"Rock, Blues","Dialogue, Field Recording, Avantgarde, Electric Blues, Psychedelic Rock, Experimental"
61,1970,Greatest Hits,Sly & The Family Stone,Funk / Soul,"Rhythm & Blues, Funk"
62,1987,Appetite for Destruction,Guns N' Roses,Rock,"Hard Rock, Heavy Metal"
63,1991,Achtung Baby,U2,"Electronic, Rock","Pop Rock, Synth-pop, Alternative Rock, Arena Rock"
64,1971,Sticky Fingers,The Rolling Stones,Rock,Classic Rock
65,1991,Back to Mono (1958-1969),Phil Spector,"Rock, Funk / Soul, Pop","Doo Wop, Pop Rock, Ballad, Rhythm & Blues"
66,1970,Moondance,Van Morrison,"Jazz, Rock, Funk / Soul, Folk, World, & Country","Folk Rock, Rhythm & Blues, Classic Rock, Contemporary Jazz"
67,2000,Kid A,Radiohead,"Electronic, Rock","Alternative Rock, IDM, Experimental"
68,1979,Off the Wall,Michael Jackson,"Funk / Soul, Pop","Disco, Soul, Ballad"
69,1971,[Led Zeppelin IV],Led Zeppelin,Rock,"Hard Rock, Classic Rock, Blues Rock"
70,1977,The Stranger,Billy Joel,Rock,Pop Rock
71,1986,Graceland,Paul Simon,"Jazz, Rock, Funk / Soul, Pop, Folk, World, & Country","Folk Rock, Pop Rock, African, Afrobeat, Zydeco, Funk, Rhythm & Blues"
72,1972,Superfly,Curtis Mayfield,"Funk / Soul, Stage & Screen","Soundtrack, Soul"
73,1975,Physical Graffiti,Led Zeppelin,Rock,Classic Rock
74,1970,After the Gold Rush,Neil Young,Rock,"Rock & Roll, Country Rock"
75,1991,Star Time,James Brown,Funk / Soul,"Soul, Funk, Disco"
76,1984,Purple Rain,Prince and the Revolution,"Electronic, Rock, Funk / Soul, Stage & Screen","Pop Rock, Funk, Soundtrack, Synth-pop"
77,1980,Back in Black,AC/DC,Rock,Hard Rock
78,1965,Otis Blue: Otis Redding Sings Soul,Otis Redding,Funk / Soul,Soul
79,1969,Led Zeppelin II,Led Zeppelin,Rock,"Blues Rock, Classic Rock, Hard Rock"
80,1971,Imagine,John Lennon,Rock,Pop Rock
81,1977,The Clash,The Clash,Rock,Punk
82,1972,Harvest,Neil Young,Rock,"Folk Rock, Country Rock, Classic Rock"
83,1967,Axis: Bold as Love,The Jimi Hendrix Experience,Rock,"Psychedelic Rock, Electric Blues"
84,1967,I Never Loved a Man the Way I Love You,Aretha Franklin,Funk / Soul,Soul
85,1968,Lady Soul,Aretha Franklin,Funk / Soul,Soul
86,1984,Born in the U.S.A.,Bruce Springsteen,Rock,Pop Rock
87,1979,The Wall,Pink Floyd,Rock,"Alternative Rock, Prog Rock"
88,1968,At Folsom Prison,Johnny Cash,"Folk, World, & Country",Country
89,1969,Dusty in Memphis,Dusty Springfield,"Rock, Funk / Soul","Pop Rock, Soul"
90,1972,Talking Book,Stevie Wonder,Funk / Soul,"Soul, Funk"
91,1973,Goodbye Yellow Brick Road,Elton John,Rock,"Pop Rock, Classic Rock"
92,1978,20 Golden Greats,Buddy Holly,Rock,Rock & Roll
93,1987,"Sign ""Peace"" the Times",Prince,"Rock, Reggae","Ska, Reggae-Pop"
94,1984,40 Greatest Hits,Hank Williams,"Folk, World, & Country",Country
95,1970,Bitches Brew,Miles Davis,Jazz,Fusion
96,1969,Tommy,The Who,Rock,Psychedelic Rock
97,1963,The Freewheelin' Bob Dylan,Bob Dylan,"Folk, World, & Country",Folk
98,1978,This Year's Model,Elvis Costello,Rock,New Wave
99,1971,There's a Riot Goin' On,Sly & The Family Stone,Funk / Soul,"Rhythm & Blues, Funk"
100,1968,Odessey and Oracle,The Zombies,Rock,Psychedelic Rock
101,1955,In the Wee Small Hours,Frank Sinatra,"Jazz, Pop","Big Band, Ballad"
102,1966,Fresh Cream,Cream,"Rock, Blues","Blues Rock, Electric Blues"
103,1959,Giant Steps,John Coltrane,Jazz,Hard Bop
104,1970,Sweet Baby James,James Taylor,Rock,"Folk Rock, Acoustic, Soft Rock"
105,1962,Modern Sounds in Country and Western Music,Ray Charles,"Funk / Soul, Folk, World, & Country","Country, Rhythm & Blues"
106,1977,Rocket to Russia,Ramones,Rock,"Rock & Roll, Punk"
107,2003,Portrait of a Legend 1951-1964,Sam Cooke,"Latin, Funk / Soul","Soul, Rhythm & Blues, Gospel, Cha-Cha"
108,1971,Hunky Dory,David Bowie,Rock,"Classic Rock, Glam"
109,1966,Aftermath,The Rolling Stones,Rock,"Blues Rock, Pop Rock"
110,1970,Loaded,The Velvet Underground,Rock,"Art Rock, Classic Rock"
111,1995,The Bends,Radiohead,Rock,Alternative Rock
112,1966,If You Can Believe Your Eyes and Ears,The Mamas and the Papas,Rock,"Folk Rock, Pop Rock"
113,1974,Court and Spark,Joni Mitchell,Rock,"Soft Rock, Pop Rock"
114,1967,Disraeli Gears,Cream,Rock,"Psychedelic Rock, Blues Rock"
115,1967,The Who Sell Out,The Who,Rock,"Psychedelic Rock, Mod"
116,1965,Out of Our Heads,The Rolling Stones,Rock,"Blues Rock, Rock & Roll"
117,1970,Layla and Other Assorted Love Songs,Derek and the Dominos,Rock,Blues Rock
118,2005,Late Registration,Kanye West,Hip Hop,None
119,1960,At Last!,Etta James,"Funk / Soul, Blues","Rhythm & Blues, Soul"
120,1968,Sweetheart of the Rodeo,The Byrds,Rock,"Folk Rock, Country Rock"
121,1969,Stand!,Sly & The Family Stone,Funk / Soul,"Funk, Psychedelic, Disco"
122,1972,The Harder They Come,Various Artists,"Reggae,�Pop,�Folk, World, & Country,�Stage & Screen","Reggae,�Roots Reggae,�Rocksteady,�Contemporary,�Soundtrack"
123,1986,Raising Hell,Run D.M.C.,Hip Hop,None
124,1967,Moby Grape,Moby Grape,Rock,"Folk Rock, Psychedelic Rock"
125,1971,Pearl,Janis Joplin,"Rock, Blues",Blues Rock
126,1973,Catch a Fire,The Wailers,Reggae,Roots Reggae
127,1967,Younger Than Yesterday,The Byrds,Rock,"Folk Rock, Psychedelic Rock"
128,1973,Raw Power,Iggy and The Stooges,Rock,"Garage Rock, Hard Rock, Punk"
129,1980,Remain in Light,Talking Heads,"Electronic, Rock","New Wave, Art Rock, Funk"
130,1977,Marquee Moon,Television,Rock,"New Wave, Punk"
131,1970,Paranoid,Black Sabbath,Rock,"Hard Rock, Heavy Metal"
132,1977,Saturday Night Fever: The Original Movie Sound Track,Various Artists,"Electronic,�Stage & Screen","Soundtrack,�Disco"
133,1973,"The Wild, the Innocent & the E Street Shuffle",Bruce Springsteen,Rock,None
134,1994,Ready to Die,The Notorious B.I.G.,Hip Hop,Thug Rap
135,1992,Slanted and Enchanted,Pavement,Rock,Alternative Rock
136,1974,Greatest Hits,Elton John,Rock,Classic Rock
137,1985,Tim,The Replacements,Rock,Indie Rock
138,1992,The Chronic,Dr. Dre,Hip Hop,Gangsta
139,1974,Rejuvenation,The Meters,Funk / Soul,"Bayou Funk, Soul"
140,1978,Parallel Lines,Blondie,"Electronic, Rock","New Wave, Pop Rock, Punk, Disco"
141,1965,Live at the Regal,B.B. King,Blues,Chicago Blues
142,1963,A Christmas Gift for You From Phil Spector,Phil Spector,"Rock, Funk / Soul, Pop",Pop Rock
143,1968,Gris-Gris,"Dr. John, the Night Tripper","Jazz, Rock, Funk / Soul, Blues","Soul-Jazz, Louisiana Blues, Fusion, Bayou Funk"
144,1988,Straight Outta Compton,N.W.A,Hip Hop,Gangsta
145,1977,Aja,Steely Dan,"Jazz, Rock","Jazz-Rock, Classic Rock"
146,1967,Surrealistic Pillow,Jefferson Airplane,Rock,"Folk Rock, Psychedelic Rock"
147,1970,Deja vu,"Crosby, Stills, Nash & Young",Rock,Classic Rock
148,1973,Houses of the Holy,Led Zeppelin,Rock,Classic Rock
149,1969,Santana,Santana,"Rock, Latin, Funk / Soul","Afro-Cuban, Psychedelic Rock"
150,1978,Darkness on the Edge of Town,Bruce Springsteen,Rock,Pop Rock
151,2004,Funeral,Arcade Fire,Rock,Indie Rock
152,1979,The B 52's / Play Loud,The B 52's,"Electronic, Rock, Pop","New Wave, Punk, Mod"
153,1991,The Low End Theory,A Tribe Called Quest,Hip Hop,Conscious
154,1958,Moanin' in the Moonlight,Howlin' Wolf,Blues,Chicago Blues
155,1980,Pretenders,Pretenders,Rock,"Alternative Rock, New Wave"
156,1989,Paul's Boutique,Beastie Boys,"Hip Hop, Rock, Funk / Soul","Alternative Rock, Pop Rap, Psychedelic"
157,1980,Closer,Joy Division,Rock,"Post-Punk, New Wave"
158,1975,Captain Fantastic and the Brown Dirt Cowboy,Elton John,Rock,"Pop Rock, Classic Rock"
159,1975,Alive!,KISS,Rock,"Hard Rock, Glam"
160,1971,Electric Warrior,T. Rex,Rock,"Glam, Classic Rock"
161,1968,The Dock of the Bay,Otis Redding,Funk / Soul,"Rhythm & Blues, Soul"
162,1997,OK Computer,Radiohead,"Electronic, Rock",Alternative Rock
163,1982,1999,Prince,"Funk / Soul, Pop",None
164,2002,The Very Best of Linda Ronstadt,Linda Ronstadt,"Rock, Pop","Soft Rock, Pop Rock"
165,1973,Let's Get It On,Marvin Gaye,Funk / Soul,Soul
166,1982,Imperial Bedroom,Elvis Costello & The Attractions,Rock,"Alternative Rock, New Wave"
167,1986,Master of Puppets,Metallica,Rock,"Thrash, Speed Metal"
168,1977,My Aim Is True,Elvis Costello,Rock,"New Wave, Pop Rock"
169,1977,Exodus,Bob Marley & The Wailers,Reggae,"Reggae, Roots Reggae"
170,1970,Live at Leeds,The Who,Rock,"Classic Rock, Blues Rock, Hard Rock"
171,1968,The Notorious Byrd Brothers,The Byrds,Rock,"Psychedelic Rock, Folk Rock, Country Rock, Pop Rock"
172,1971,Every Picture Tells a Story,Rod Stewart,Rock,Pop Rock
173,1972,Something/Anything?,Todd Rundgren,Rock,"Power Pop, Pop Rock, Prog Rock"
174,1976,Desire,Bob Dylan,Rock,Folk Rock
175,1970,Close to You,Carpenters,"Rock, Pop","Pop Rock, Vocal"
176,1976,Rocks,Aerosmith,Rock,"Hard Rock, Classic Rock"
177,1978,One Nation Under a Groove,Funkadelic,Funk / Soul,P.Funk
178,1992,The Anthology: 1961-1977,Curtis Mayfield and The Impressions,Funk / Soul,"Rhythm & Blues, Soul, Funk"
179,2001,The Definitive Collection,ABBA,"Electronic, Pop","Europop, Synth-pop, Disco"
180,1965,"The Rolling Stones, Now!",The Rolling Stones,"Rock, Blues, Pop","Pop Rock, Rhythm & Blues, Rock & Roll"
181,1974,Natty Dread,Bob Marley & The Wailers,Reggae,"Reggae, Roots Reggae"
182,1975,Fleetwood Mac,Fleetwood Mac,"Rock, Pop","Folk Rock, Pop Rock"
183,1975,Red Headed Stranger,Willie Nelson,"Folk, World, & Country",Country
184,1990,The Immaculate Collection,Madonna,"Electronic, Pop",Synth-pop
185,1969,The Stooges,The Stooges,Rock,"Garage Rock, Punk"
186,1973,Fresh,Sly & The Family Stone,Funk / Soul,"Rhythm & Blues, Funk"
187,1986,So,Peter Gabriel,"Electronic, Rock, Funk / Soul, Pop","Art Rock, Pop Rock, Synth-pop, Funk"
188,1967,Buffalo Springfield Again,Buffalo Springfield,"Rock, Pop",Country Rock
189,1969,Happy Trails,Quicksilver Messenger Service,Rock,"Acid Rock, Psychedelic Rock"
190,1969,From Elvis in Memphis,Elvis Presley,"Rock, Funk / Soul, Folk, World, & Country","Country, Soul"
191,1970,Fun House,The Stooges,Rock,"Garage Rock, Punk"
192,1969,The Gilded Palace of Sin,The Flying Burrito Brothers,"Rock, Folk, World, & Country",Country Rock
193,1994,Dookie,Green Day,Rock,"Alternative Rock, Pop Punk, Punk"
194,1972,Transformer,Lou Reed,Rock,Glam
195,1966,"Blues Breakers With Eric Clapton (""The Beano Album"")",John Mayall & The Bluesbreakers,"Rock,�Blues","Blues Rock,�Electric Blues,�Harmonica Blues"
196,1998,"Nuggets: Original Artyfacts From the First Psychedelic Era, 1965-1968",Various Artists,Rock,"Garage Rock,�Psychedelic Rock"
197,1983,Murmur,R.E.M.,Rock,Alternative Rock
198,1967,The Best of Little Walter,Little Walter,Blues,Chicago Blues
199,2001,Is This It,The Strokes,Rock,Indie Rock
200,1979,Highway to Hell,AC/DC,Rock,Hard Rock
201,1994,The Downward Spiral,Nine Inch Nails,"Electronic, Rock",Industrial
202,1966,"Parsley, Sage, Rosemary and Thyme",Simon & Garfunkel,"Rock, Pop, Folk, World, & Country","Folk Rock, Pop Rock"
203,1987,Bad,Michael Jackson,"Funk / Soul, Pop","Pop Rock, Ballad, Funk, Soul"
204,2006,Modern Times,Bob Dylan,Rock,"Blues Rock, Folk Rock"
205,1968,Wheels of Fire,Cream,"Rock, Blues","Blues Rock, Psychedelic Rock, Classic Rock"
206,1980,Dirty Mind,Prince,Funk / Soul,None
207,1970,Abraxas,Santana,"Rock, Latin","Fusion, Hard Rock, Psychedelic Rock"
208,1970,Tea for the Tillerman,Cat Stevens,"Rock, Stage & Screen","Folk Rock, Pop Rock"
209,1991,Ten,Pearl Jam,Rock,Grunge
210,1969,Everybody Knows This Is Nowhere,Neil Young & Crazy Horse,Rock,"Folk Rock, Country Rock, Classic Rock"
211,1975,Wish You Were Here,Pink Floyd,Rock,"Classic Rock, Prog Rock"
212,1994,Crooked Rain Crooked Rain,Pavement,Rock,"Alternative Rock, Indie Rock"
213,1981,Tattoo You,The Rolling Stones,Rock,Classic Rock
214,1991,Proud Mary: The Best of Ike and Tina Turner,Ike & Tina Turner,Funk / Soul,"Rhythm & Blues, Bayou Funk, Soul"
215,1973,New York Dolls,New York Dolls,Rock,Glam
216,1986,Bo Diddley / Go Bo Diddley,Bo Diddley,"Rock, Blues","Rhythm & Blues, Rock & Roll"
217,1961,Two Steps From the Blues,"Bobby ""Blue"" Bland","Funk / Soul, Blues","Rhythm & Blues, Soul"
218,1986,The Queen Is Dead,The Smiths,"Rock, Pop",Indie Rock
219,1986,Licensed to Ill,Beastie Boys,Hip Hop,None
220,1970,Look-Ka Py Py,The Meters,Funk / Soul,"Bayou Funk, Soul, Funk"
221,1991,Loveless,My Bloody Valentine,Rock,"Alternative Rock, Shoegaze"
222,1972,New Orleans Piano,Professor Longhair,"Funk / Soul, Blues",Piano Blues
223,1983,War,U2,Rock,Pop Rock
224,1999,The Neil Diamond Collection,Neil Diamond,"Rock, Pop","Soft Rock, Ballad"
225,2004,American Idiot,Green Day,Rock,"Pop Rock, Punk"
226,1982,Nebraska,Bruce Springsteen,Rock,Acoustic
227,1989,Doolittle,Pixies,Rock,Indie Rock
228,1987,Paid in Full,Eric B. & Rakim,Hip Hop,None
229,1975,Toys in the Attic,Aerosmith,Rock,"Hard Rock, Blues Rock"
230,1989,Nick of Time,Bonnie Raitt,"Rock, Pop","Blues Rock, Pop Rock"
231,1975,A Night at the Opera,Queen,Rock,"Hard Rock, Pop Rock, Prog Rock"
232,1972,The Kink Kronikles,The Kinks,Rock,"Rock & Roll, Pop Rock"
233,1965,Mr. Tambourine Man,The Byrds,Rock,"Folk Rock, Garage Rock, Pop Rock"
234,1968,Bookends,Simon & Garfunkel,Rock,"Folk Rock, Classic Rock"
235,2000,The Ultimate Collection,Patsy Cline,"Folk, World, & Country",None
236,1992,Mr. Excitement!,Jackie Wilson,Funk / Soul,None
237,1965,My Generation,The Who,Rock,Mod
238,1962,Howlin' Wolf,Howlin' Wolf,Blues,None
239,1989,Like a Prayer,Madonna,"Electronic, Pop",Synth-pop
240,1972,Can't Buy a Thrill,Steely Dan,Rock,Classic Rock
241,1984,Let It Be,The Replacements,Rock,"Alternative Rock, Power Pop, Punk, Indie Rock"
242,1984,Run D.M.C.,Run D.M.C.,Hip Hop,None
243,1970,Black Sabbath,Black Sabbath,Rock,"Blues Rock, Heavy Metal"
244,2000,The Marshall Mathers LP,Eminem,Hip Hop,"Pop Rap, Hardcore Hip-Hop, Horrorcore"
245,1993,All Killer No Filler! The Jerry Lee Lewis Anthology,Jerry Lee Lewis,"Rock, Blues, Folk, World, & Country","Country Blues, Rock & Roll, Rhythm & Blues"
246,1966,Freak Out!,The Mothers of Invention,"Electronic, Rock","Musique Concr?te, Avantgarde, Symphonic Rock, Rhythm & Blues, Psychedelic Rock, Experimental, Parody"
247,1969,Live/Dead,The Grateful Dead,Rock,"Folk Rock, Country Rock, Psychedelic Rock, Experimental"
248,1959,The Shape of Jazz to Come,Ornette Coleman,Jazz,Free Jazz
249,1992,Automatic for the People,R.E.M.,Rock,Alternative Rock
250,1996,Reasonable Doubt,Jay Z,Hip Hop,None
251,1977,Low,David Bowie,"Electronic, Rock","Art Rock, Ambient, Experimental"
252,2001,The Blueprint,Jay Z,Hip Hop,None
253,1980,The River,Bruce Springsteen,Rock,"Folk Rock, Pop Rock, Classic Rock"
254,1966,Complete & Unbelievable: The Otis Redding Dictionary of Soul,Otis Redding,Funk / Soul,Soul
255,1991,"Metallica (""The Black Album"")",Metallica,Rock,Heavy Metal
256,1977,Trans Europa Express,Kraftwerk,Electronic,Electro
257,1985,Whitney Houston,Whitney Houston,"Funk / Soul, Pop","Synth-pop, Rhythm & Blues"
258,1968,The Kinks Are The Village Green Preservation Society,The Kinks,Rock,"Psychedelic Rock, Pop Rock"
259,1997,The Velvet Rope,Janet,"Electronic, Funk / Soul, Pop","RnB/Swing, Downtempo"
260,1978,Stardust,Willie Nelson,"Pop, Folk, World, & Country",Vocal
261,1970,American Beauty,Grateful Dead,Rock,Folk Rock
262,1969,"Crosby, Stills & Nash","Crosby, Stills & Nash","Rock, Folk, World, & Country","Folk Rock, Classic Rock"
263,1988,Tracy Chapman,Tracy Chapman,Rock,None
264,1970,Workingman's Dead,Grateful Dead,Rock,"Folk Rock, Country Rock, Classic Rock"
265,1959,The Genius of Ray Charles,Ray Charles,"Jazz, Pop","Soul-Jazz, Big Band"
266,1968,Child Is Father to the Man,"Blood, Sweat & Tears",Rock,"Blues Rock, Jazz-Rock, Classic Rock"
267,1973,Quadrophenia,The Who,Rock,"Hard Rock, Classic Rock, Mod"
268,1972,Paul Simon,Paul Simon,Rock,"Folk Rock, Pop Rock"
269,1985,Psychocandy,The Jesus and Mary Chain,Rock,Noise
270,1978,Some Girls,The Rolling Stones,Rock,"Blues Rock, Rock & Roll, Classic Rock, Disco"
271,1965,The Beach Boys Today!,The Beach Boys,Rock,"Pop Rock, Psychedelic Rock"
272,1997,Dig Me Out,Sleater Kinney,Rock,Indie Rock
273,1966,Going to a Go-Go,Smokey Robinson & The Miracles,Funk / Soul,Soul
274,1974,Nightbirds,LaBelle,Funk / Soul,"Funk, Disco"
275,1999,The Slim Shady LP,Eminem,Hip Hop,None
276,1975,Mothership Connection,Parliament,Funk / Soul,"P.Funk, Funk"
277,1989,Rhythm Nation 1814,Janet Jackson,"Electronic, Hip Hop, Pop","RnB/Swing, Downtempo, Synth-pop"
278,1997,Anthology of American Folk Music,Various,"Blues, Folk, World, & Country","Cajun, Country, Field Recording, Gospel, Delta Blues, Folk"
279,1973,Aladdin Sane,David Bowie,Rock,Glam
280,2000,All That You Can't Leave Behind,U2,Rock,Pop Rock
281,1994,My Life,Mary J. Blige,Hip Hop,RnB/Swing
282,1964,Folk Singer,Muddy Waters,Blues,Delta Blues
283,1974,Can't Get Enough,Barry White,Funk / Soul,"Soul, Disco"
284,1978,The Cars,The Cars,"Electronic, Rock","New Wave, Pop Rock, Synth-pop"
285,1972,Music of My Mind,Stevie Wonder,Funk / Soul,"Soul-Jazz, Soul"
286,1972,I'm Still in Love With You,Al Green,Funk / Soul,"Rhythm & Blues, Soul"
287,1980,Los Angeles,X,Rock,"Punk, Rock & Roll"
288,1968,Anthem of the Sun,Grateful Dead,Rock,Psychedelic Rock
289,1967,Something Else by The Kinks,The Kinks,Rock,"Pop Rock, Psychedelic Rock, Mod"
290,1973,Call Me,Al Green,Funk / Soul,"Rhythm & Blues, Soul"
291,1977,Talking Heads: 77,Talking Heads,Rock,New Wave
292,1975,The Basement Tapes,Bob Dylan and the Band,Rock,"Folk Rock, Country Rock, Classic Rock"
293,1968,White Light/White Heat,The Velvet Underground,Rock,"Avantgarde, Experimental"
294,1969,Kick Out the Jams,MC5,Rock,"Garage Rock, Hard Rock, Punk, Blues Rock"
295,1970,Songs of Love and Hate,Leonard Cohen,"Folk, World, & Country","Folk Rock, Folk, Ballad"
296,1985,Meat Is Murder,The Smiths,Rock,"Alternative Rock, Indie Rock"
297,1968,We're Only in It for the Money,The Mothers of Invention,"Electronic, Rock","Modern Classical, Avantgarde, Psychedelic Rock, Experimental, Parody"
298,2003,The College Dropout,Kanye West,Hip Hop,"Pop Rap, Conscious, Contemporary R&B"
299,1994,Weezer (Blue Album),Weezer,Rock,"Alternative Rock, Emo"
300,1971,Master of Reality,Black Sabbath,Rock,"Hard Rock, Heavy Metal"
301,1971,Coat of Many Colors,Dolly Parton,"Folk, World, & Country",Country
302,1990,Fear of a Black Planet,Public Enemy,Hip Hop,Conscious
303,1967,John Wesley Harding,Bob Dylan,Rock,"Folk Rock, Country Rock"
304,1994,Grace,Jeff Buckley,Rock,"Alternative Rock, Folk Rock"
305,1998,Car Wheels on a Gravel Road,Lucinda Williams,"Folk, World, & Country","Country, Folk"
306,1996,Odelay,Beck,"Electronic, Hip Hop, Funk / Soul, Pop","Electro, Downtempo, Hip Hop, Disco, Afrobeat, Abstract"
307,1964,A Hard Day's Night,The Beatles,"Rock, Stage & Screen","Soundtrack, Beat, Pop Rock"
308,1956,Songs for Swingin' Lovers!,Frank Sinatra,"Jazz, Pop","Vocal, Easy Listening"
309,1969,Willy and the Poor Boys,Creedence Clearwater Revival,Rock,"Blues Rock, Rock & Roll, Classic Rock"
310,1991,Blood Sugar Sex Magik,Red Hot Chili Peppers,Rock,"Alternative Rock, Funk Metal"
311,1994,The Sun Records Collection,Various,"Rock, Funk / Soul, Blues, Pop, Folk, World, & Country","Country Blues, Rock & Roll, Rockabilly"
312,1988,Nothing's Shocking,Jane's Addiction,Rock,Alternative Rock
313,1994,MTV Unplugged in New York,Nirvana,Rock,"Folk Rock, Acoustic, Grunge"
314,1998,The Miseducation of Lauryn Hill,Lauryn Hill,Hip Hop,"RnB/Swing, Conscious"
315,1979,Damn the Torpedoes,Tom Petty and the Heartbreakers,Rock,"Soft Rock, Hard Rock, Pop Rock"
316,1969,The Velvet Underground,The Velvet Underground,Rock,"Garage Rock, Art Rock, Experimental"
317,1988,Surfer Rosa,Pixies,Rock,Alternative Rock
318,1972,Back Stabbers,The O'Jays,Funk / Soul,Soul
319,1973,Burnin',The Wailers,Reggae,Reggae
320,2001,Amnesiac,Radiohead,"Electronic, Rock","Alternative Rock, Experimental"
321,1972,Pink Moon,Nick Drake,"Rock, Folk, World, & Country","Folk, Folk Rock, Acoustic"
322,1972,Sail Away,Randy Newman,"Rock, Pop",None
323,1981,Ghost in the Machine,The Police,"Rock, Pop","Alternative Rock, New Wave, Pop Rock"
324,1976,Station to Station,David Bowie,"Rock, Funk / Soul","Classic Rock, Soul, Funk, Art Rock"
325,1977,Slowhand,Eric Clapton,Rock,None
326,1989,Disintegration,The Cure,"Electronic, Rock","New Wave, Alternative Rock"
327,1993,Exile in Guyville,Liz Phair,Rock,"Lo-Fi, Indie Rock"
328,1988,Daydream Nation,Sonic Youth,Rock,"Alternative Rock, Indie Rock"
329,1986,In the Jungle Groove,James Brown,Funk / Soul,"Soul, Funk"
330,1975,Tonight's the Night,Neil Young,Rock,"Blues Rock, Folk Rock, Classic Rock"
331,1965,Help!,The Beatles,"Rock, Stage & Screen","Beat, Soundtrack, Pop Rock"
332,1982,Shoot Out the Lights,Richard & Linda Thompson,"Rock, Folk, World, & Country",Folk Rock
333,1981,Wild Gift,X,Rock,"Rock & Roll, Punk"
334,1979,Squeezing Out Sparks,Graham Parker & The Rumour,"Rock, Blues",None
335,1994,Superunknown,Soundgarden,Rock,Alternative Rock
336,2007,In Rainbows,Radiohead,"Electronic, Rock","Alternative Rock, Art Rock"
337,1971,Aqualung,Jethro Tull,Rock,"Classic Rock, Prog Rock"
338,1968,Cheap Thrills,Big Brother & the Holding Company,Rock,"Folk Rock, Blues Rock, Psychedelic Rock"
339,1974,The Heart of Saturday Night,Tom Waits,"Jazz, Pop, Folk, World, & Country","Contemporary Jazz, Spoken Word"
340,1981,Damaged,Black Flag,Rock,"Hardcore, Punk"
341,1999,Play,Moby,Electronic,"Breakbeat, Leftfield, Downtempo"
342,1990,Violator,Depeche Mode,Electronic,Synth-pop
343,1977,Bat Out of Hell,Meat Loaf,Rock,Pop Rock
344,1973,Berlin,Lou Reed,Rock,Hard Rock
345,1984,Stop Making Sense,Talking Heads,"Rock, Funk / Soul","Funk, Indie Rock, New Wave"
346,1989,3 Feet High and Rising,De La Soul,Hip Hop,None
347,1967,The Piper at the Gates of Dawn,Pink Floyd,Rock,Psychedelic Rock
348,1960,Muddy Waters at Newport 1960,Muddy Waters,"Rock, Blues","Blues Rock, Chicago Blues"
349,2003,The Black Album,Jay Z,Hip Hop,None
350,1966,Roger the Engineer,The Yardbirds,"Rock, Blues","Blues Rock, Pop Rock"
351,1979,Rust Never Sleeps,Neil Young & Crazy Horse,Rock,"Hard Rock, Arena Rock"
352,1985,Brothers in Arms,Dire Straits,Rock,"AOR, Classic Rock"
353,2010,My Beautiful Dark Twisted Fantasy,Kanye West,Hip Hop,None
354,1978,52nd Street,Billy Joel,"Jazz, Rock, Pop","Pop Rock, Ballad, Latin Jazz"
355,1965,Having a Rave Up,The Yardbirds,Rock,"Blues Rock, Psychedelic Rock"
356,1970,12 Songs,Randy Newman,"Rock, Pop","Pop Rock, Vocal"
357,1967,Between the Buttons,The Rolling Stones,Rock,"Blues Rock, Psychedelic Rock, Pop Rock"
358,1960,Sketches of Spain,Miles Davis,Jazz,Modal
359,1972,Honky Ch�teau,Elton John,Rock,"Pop Rock,�Classic Rock"
360,1979,Singles Going Steady,Buzzcocks,Rock,Punk
361,2000,Stankonia,OutKast,"Hip Hop, Funk / Soul","Gangsta, P.Funk, Crunk, Conscious"
362,1993,Siamese Dream,The Smashing Pumpkins,Rock,Alternative Rock
363,1987,Substance 1987,New Order,Electronic,Synth-pop
364,1971,L.A. Woman,The Doors,Rock,"Blues Rock, Classic Rock"
365,1992,Rage Against the Machine,Rage Against the Machine,"Hip Hop, Rock",Funk Metal
366,1994,American Recordings,Johnny Cash,"Folk, World, & Country","Country, Gospel, Folk"
367,1998,Ray of Light,Madonna,"Electronic, Pop","House, Techno, Downtempo, Vocal, Ambient"
368,1972,Eagles,Eagles,Rock,"Country Rock, Classic Rock"
369,1987,Louder Than Bombs,The Smiths,Rock,"Alternative Rock, Indie Rock"
370,1973,Mott,Mott the Hoople,Rock,Classic Rock
371,2006,"Whatever People Say I Am, That's What I'm Not",Arctic Monkeys,Rock,Indie Rock
372,1979,Reggatta de Blanc,The Police,"Rock, Pop","New Wave, Pop Rock"
373,1969,Volunteers,Jefferson Airplane,Rock,"Psychedelic Rock, Folk Rock, Country Rock, Honky Tonk"
374,1975,Siren,Roxy Music,Rock,"Art Rock, Pop Rock, Glam"
375,1974,Late for the Sky,Jackson Browne,Rock,Pop Rock
376,1995,Post,Bjork,Electronic,"Breakbeat, IDM, Electro"
377,1991,The Ultimate Collection: 1948-1990,John Lee Hooker,Blues,"Country Blues, Electric Blues, Chicago Blues, Jump Blues"
378,1995,(What's the Story) Morning Glory?,Oasis,"Rock, Pop",Brit Pop
379,1994,CrazySexyCool,TLC,"Electronic, Hip Hop, Funk / Soul",RnB/Swing
380,1973,Funky Kingston,Toots & The Maytals,Reggae,"Reggae Gospel, Reggae, Roots Reggae, Rocksteady"
381,2011,The Smile Sessions,The Beach Boys,Rock,"Pop Rock, Psychedelic Rock"
382,1976,The Modern Lovers,The Modern Lovers,Rock,"Art Rock, Indie Rock"
383,1978,More Songs About Buildings and Food,Talking Heads,Rock,"New Wave, Indie Rock"
384,1966,A Quick One,The Who,Rock,"Mod, Beat, Psychedelic Rock"
385,2001,"""Love and Theft""",Bob Dylan,Rock,"Folk Rock, Blues Rock"
386,1974,Pretzel Logic,Steely Dan,"Jazz, Rock","Jazz-Rock, Pop Rock, Classic Rock"
387,1993,Enter the Wu_Tang: 36 Chambers,Wu Tang Clan,Hip Hop,Gangsta
388,1985,The Indestructible Beat of Soweto,Various Artists,"Funk / Soul,�Folk, World, & Country",African
389,1989,The End of the Innocence,Don Henley,Rock,Pop Rock
390,2003,Elephant,The White Stripes,Rock,"Blues Rock, Garage Rock, Alternative Rock"
391,1976,The Pretender,Jackson Browne,Rock,"Soft Rock, Pop Rock"
392,1970,Let It Be,The Beatles,Rock,Pop Rock
393,2007,Kala,M.I.A.,"Electronic, Hip Hop, Reggae, Pop","Grime, Bollywood, Hip Hop, Dancehall"
394,1974,Good Old Boys,Randy Newman,"Rock, Pop","Pop Rock, Vocal"
395,2007,Sound of Silver,LCD Soundsystem,"Electronic, Rock","Leftfield, Alternative Rock, Electro, Disco"
396,1973,For Your Pleasure,Roxy Music,Rock,"Art Rock, Avantgarde, Glam"
397,1991,Blue Lines,Massive Attack,"Electronic, Reggae","Dub, Downtempo"
398,1983,Eliminator,ZZ Top,Rock,Pop Rock
399,1985,Rain Dogs,Tom Waits,"Rock, Blues",Blues Rock
400,1995,Anthology: The Best of The Temptations,The Temptations,"Electronic, Funk / Soul","Soul, Disco"
401,1999,Californication,Red Hot Chili Peppers,Rock,"Alternative Rock, Funk Metal"
402,1994,Illmatic,Nas,Hip Hop,None
403,1973,(pronounced 'leh-'nerd 'skin-'nerd),Lynyrd Skynyrd,Rock,"Blues Rock, Hard Rock, Southern Rock"
404,1972,Dr. John's Gumbo,Dr. John,Funk / Soul,"Bayou Funk, Funk, Rhythm & Blues"
405,1974,Radio City,Big Star,Rock,Power Pop
406,1993,Rid of Me,PJ Harvey,Rock,Indie Rock
407,1980,Sandinista!,The Clash,"Rock, Reggae","Rock & Roll, Dub, Punk"
408,1989,I Do Not Want What I Haven't Got,Sinead O'Connor,"Rock, Funk / Soul, Blues","Blues Rock, Rhythm & Blues, Soul"
409,1967,Strange Days,The Doors,Rock,Psychedelic Rock
410,1997,Time Out of Mind,Bob Dylan,"Rock, Blues",Blues Rock
411,1974,461 Ocean Boulevard,Eric Clapton,Rock,Blues Rock
412,1977,Pink Flag,Wire,Rock,Punk
413,1984,Double Nickels on the Dime,Minutemen,Rock,"Alternative Rock, Hardcore, Punk"
414,1981,Beauty and the Beat,The Go Go's,Rock,Pop Rock
415,1978,Van Halen,Van Halen,Rock,Hard Rock
416,1999,Mule Variations,Tom Waits,"Electronic, Rock","Abstract, Art Rock"
417,1980,Boy,U2,Rock,"New Wave, Pop Rock"
418,1973,Band on the Run,Paul McCartney & Wings,Rock,Pop Rock
419,1994,Dummy,Portishead,Electronic,"Trip Hop, Downtempo"
420,1957,"The ""Chirping"" Crickets",The Crickets,"Rock, Pop","Rockabilly, Rock & Roll"
421,1990,"The Best of the Girl Groups, Volume 1",Various Artists,"Rock,�Pop","Pop Rock, Vocal"
422,1963,Presenting the Fabulous Ronettes Featuring Veronica,The Ronettes,"Rock, Pop","Rock & Roll, Vocal"
423,2001,Anthology,Diana Ross & The Supremes,"Electronic, Funk / Soul","Pop Rock, Soul, Disco"
424,2002,The Rising,Bruce Springsteen,Rock,"Folk Rock, Classic Rock"
425,1974,Grievous Angel,Gram Parsons,"Rock, Folk, World, & Country","Country Rock, Honky Tonk"
426,1978,Cheap Trick at Budokan,Cheap Trick,Rock,"Power Pop, Pop Rock, Arena Rock, Hard Rock"
427,2002,Sleepless,Peter Wolf,"Rock, Blues, Pop","Blues Rock, Pop Rock, Ballad"
428,1978,Outlandos d'Amour,The Police,Rock,"Alternative Rock, New Wave, Punk"
429,1975,Another Green World,Brian Eno,Electronic,"Experimental, Ambient"
430,2007,Vampire Weekend,Vampire Weekend,Rock,Indie Rock
431,2000,"Stories From the City, Stories From the Sea",PJ Harvey,Rock,Indie Rock
432,1973,Here Come the Warm Jets,Brian Eno,Rock,"Art Rock, Glam"
433,1970,All Things Must Pass,George Harrison,Rock,Pop Rock
434,1972,#1 Record,Big Star,Rock,Power Pop
435,1993,In Utero,Nirvana,Rock,"Grunge, Alternative Rock"
436,2002,Sea Change,Beck,Rock,"Alternative Rock, Post Rock"
437,2008,Tha Carter III,Lil Wayne,"Hip Hop, Funk / Soul","RnB/Swing, Screw, Pop Rap, Thug Rap"
438,1979,Boys Don't Cry,The Cure,Rock,"New Wave, Post-Punk"
439,1985,"Live at the Harlem Square Club, 1963",Sam Cooke,Funk / Soul,Soul
440,1985,Rum Sodomy & the Lash,The Pogues,"Rock, Folk, World, & Country","Folk Rock, Celtic, Punk"
441,1977,Suicide,Suicide,"Electronic, Rock","New Wave, Experimental"
442,1978,Q: Are We Not Men? A: We Are Devo!,DEVO,Rock,New Wave
443,1977,In Color,Cheap Trick,Rock,"Power Pop, Pop Rock, Hard Rock"
444,1972,The World Is a Ghetto,War,Funk / Soul,Funk
445,1976,Fly Like an Eagle,Steve Miller Band,Rock,Pop Rock
446,1970,Back in the USA,MC5,Rock,"Garage Rock, Rock & Roll"
447,1964,Getz / Gilberto,Stan Getz�/�Joao Gilberto�featuring�Antonio Carlos Jobim,Jazz,"Bossa Nova,�Latin Jazz"
448,1983,Synchronicity,The Police,"Rock, Pop","New Wave, Pop Rock"
449,1978,Third/Sister Lovers,Big Star,Rock,"Lo-Fi,�Indie Rock"
450,1973,For Everyman,Jackson Browne,Rock,"Pop Rock, Classic Rock"
451,2006,Back to Black,Amy Winehouse,"Funk / Soul, Pop",Soul
452,1971,John Prine,John Prine,"Folk, World, & Country","Country, Folk"
453,1987,Strictly Business,EPMD,Hip Hop,None
454,1971,Love It to Death,Alice Cooper,Rock,Classic Rock
455,1984,How Will the Wolf Survive?,Los Lobos,"Rock, Latin",Blues Rock
456,1978,"Here, My Dear",Marvin Gaye,Funk / Soul,Soul
457,2005,Z,My Morning Jacket,Rock,Alternative Rock
458,1970,Tumbleweed Connection,Elton John,"Rock, Folk, World, & Country","Soft Rock, Country Rock"
459,1968,The Drifters' Golden Hits,The Drifters,"Rock, Funk / Soul","Rhythm & Blues, Soul"
460,1994,Live Through This,Hole,Rock,Grunge
461,1979,Metal Box,Public Image Ltd.,"Electronic, Rock","Post-Punk, Dub, Avantgarde, Experimental"
462,1987,Document,R.E.M.,Rock,None
463,1981,Heaven Up Here,Echo and The Bunnymen,Rock,"New Wave, Indie Rock"
464,1987,Hysteria,Def Leppard,Rock,"Hard Rock, Arena Rock"
465,1999,69 Love Songs,The Magnetic Fields,"Electronic, Rock","Synth-pop, Indie Rock"
466,2002,A Rush of Blood to the Head,Coldplay,Rock,"Alternative Rock, Pop Rock"
467,1987,Tunnel of Love,Bruce Springsteen,Rock,None
468,1965,The Paul Butterfield Blues Band,The Paul Butterfield Blues Band,"Rock, Blues","Blues Rock, Electric Blues, Chicago Blues, Modern Electric Blues, Harmonica Blues"
469,1996,The Score,Fugees,Hip Hop,"Pop Rap, Conscious"
470,1985,Radio,L.L. Cool J,Hip Hop,None
471,1974,I Want to See the Bright Lights Tonight,Richard & Linda Thompson,Rock,"Classic Rock, Folk Rock"
472,1987,Faith,George Michael,"Electronic, Rock, Funk / Soul, Blues, Pop","Downtempo, Soft Rock, Pop Rock, Synth-pop"
473,1984,The Smiths,The Smiths,Rock,Indie Rock
474,2001,Proxima estacion: Esperanza,Manu Chao,"Rock, Reggae, Latin","Folk Rock, Reggae, Reggae-Pop"
475,1979,Armed Forces,Elvis Costello & The Attractions,Rock,"New Wave, Pop Rock"
476,1997,Life After Death,The Notorious B.I.G.,Hip Hop,None
477,1996,Down Every Road,Merle Haggard,"Folk, World, & Country",Country
478,2002,All Time Greatest Hits,Loretta Lynn,"Folk, World, & Country",Country
479,1971,Maggot Brain,Funkadelic,"Rock, Funk / Soul","P.Funk, Psychedelic Rock"
480,1995,Only Built 4 Cuban Linx,Raekwon,Hip Hop,None
481,2000,Voodoo,D'Angelo,"Hip Hop, Funk / Soul","Soul, Funk, Neo Soul"
482,1986,Guitar Town,Steve Earle,"Rock, Folk, World, & Country","Country, Honky Tonk"
483,1979,Entertainment!,Gang of Four,Rock,"Post-Punk, New Wave"
484,1972,All the Young Dudes,Mott the Hoople,Rock,"Classic Rock, Glam"
485,1994,Vitalogy,Pearl Jam,Rock,"Alternative Rock, Hard Rock"
486,1975,That's the Way of the World,"Earth, Wind & Fire",Funk / Soul,"Soul, Funk, Disco"
487,1983,She's So Unusual,Cyndi Lauper,"Electronic, Rock","Pop Rock, Synth-pop"
488,1985,New Day Rising,Husker Du,Rock,"Alternative Rock, Hardcore, Punk"
489,1976,Destroyer,KISS,Rock,Hard Rock
490,1973,Tres hombres,ZZ Top,Rock,"Blues Rock, Classic Rock"
491,1967,Born Under a Bad Sign,Albert King,"Funk / Soul, Blues","Electric Blues, Rhythm & Blues, Soul"
492,1983,Touch,Eurythmics,"Electronic, Pop","New Wave, Synth-pop"
493,2002,Yankee Hotel Foxtrot,Wilco,Rock,Alternative Rock
494,2007,Oracular Spectacular,MGMT,"Electronic, Rock, Pop","Synth-pop, Indie Rock"
495,1972,Give It Up,Bonnie Raitt,Rock,Blues Rock
496,1969,Boz Scaggs,Boz Scaggs,Rock,Pop Rock
497,2001,White Blood Cells,The White Stripes,Rock,"Indie Rock, Alternative Rock, Blues Rock, Garage Rock"
498,1989,The Stone Roses,The Stone Roses,Rock,Indie Rock
499,1971,Live in Cook County Jail,B.B. King,Blues,Electric Blues
500,1998,Aquemini,OutKast,Hip Hop,"Reggae, Gangsta, Soul, Conscious"`

SONGS = SONGS.split('\n');
SONGS = SONGS.map(song => song.split(','));
export default SONGS;