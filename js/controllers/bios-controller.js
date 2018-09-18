(function() {
    angular.module('CSM')
        .controller('BiosController', function($scope) {
            bios = [{
                "name": "Jonathan Shi",
                "email": "jhshi@berkeley.edu",
                "details": "Hello there! I'm Jonathan, a sophomore EECS major hailing from Mountain View, CA. My favorite thing about EECS courses is the part where I write code and it eventually works. My favorite programming languages are Kotlin and Rust, because the compiler yells at you until you write code that probably works.\nI'm a member of the avionics subteam of CalSTAR (the school's only competitive rocketry team), and I play alto and soprano saxophone for the Intermission Orchestra. I also have a secret hatred of tapioca pearls. Boba as a concept is pretty ok though.",
                "imgName": "img/people/jonathan-shi.jpeg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Sanchit Kapoor",
                "email": "sanchitkapoor5100@berkeley.edu",
                "details": "Hi everyone! I am a sophomore EECS major hailing from Dubai, UAE. Besides being involved with EE 16A as a CSM Junior Mentor, i am also a part of EE 16A course staff as a Lab ASE. Apart from teaching 16A, my hobbies include eating, working out, The Weeknd and competitIve Scrabble!",
                "imgName": "img/people/sanchit-kapoor.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Lotta Meriluoto",
                "email": "lmeriluoto@berkeley.edu",
                "details": "Hiya! My name is Lotta and I'm a third year CS major. I'm from New Jersey but originally from Finland. I am a big fan of art and design, flat-faced dogs and falafel, and I'm involved with UCB Basic Needs on campus. 61B is a great time so I'm excited to do it all over again this semester!",
                "imgName": "img/people/lotta-meriluoto.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Ke Huang",
                "email": "kennyhuang9@berkeley.edu",
                "details": "Hey, my name is Kenny, a sophomore studying CS + Applied Math. I'm originally from Shenzhen, China but spent 4 years in New Jersey, so for anyone who has international background or New Yorkers, please hit me up. I love playing all sorts of things. Those include video games (League, Hearthstone, Assassin's Creed, Civilizations...name a game that I never played), card games, pokers, mafia, puzzle boxes, Rubik's Cube, jigsaws, chess...and lastly, data structures! I will probably bring one of my collections to the section each month if my mentees request. I love watching movies! Any movie fans please join my team as well. (My family used to watch at least one per week when I was young, so that was at least 52 per year) Last but not the least, poke is the best (non-Chinese) food in the world. ",
                "imgName": "img/people/ke-huang.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Emily Zhong",
                "email": "emily.zhong@berkeley.edu",
                "details": "Hello friends! I'm a third year computer science major from the Bay Area. Once I wrote an essay comparing trees (the data structure) to Mondrian's tree paintings. My favorite one is Gray Tree from 1911. When I'm not doing that, I enjoy discovering beautiful websites, dabbling in illustrator, playing board games, and dogspotting \ud83d\udc40\ud83d\udc36. Come say hi to me \u2014 I love a good conversation!",
                "imgName": "img/people/emily-zhong.jpeg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Omar Khan",
                "email": "omarnabikhan@berkeley.edu",
                "details": "I'm a sophomore EECS major from Petaluma, California. I absolutely love GOT (so hit me up with season 8 predictions) and I'm a huge COD fan so if you have a ps4 and WW2 then let's play. I'm also a GSW fan and so you'll probably see me wearing my Klay Thompson jersey ~13 days in a row because I love him so much. I took 61B in the spring of 2018 and had an awesome time, so that's why I want to make sure everyone has the same, if not better, experience in the course! ",
                "imgName": "img/people/omar-khan.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Harini Rajan",
                "email": "hrajan@berkeley.edu",
                "details": "Hello hello! I'm a second year from the Bay Area studying Computer Science. In my spare time, I enjoy listening to music of languages that I can't understand, working out, and reading autobiographies(always looking for book suggestions!). CS61B has been my favorite class at Cal so far and I look forward to reliving the experience with y'all. ",
                "imgName": "img/people/harini-rajan.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Patrick Lee",
                "email": "p.lee@berkeley.edu",
                "details": "Hey everyone! I'm a fourth year CS^2 major (CS/Cog Sci) from the Bay Area. I like to be outside a lot, but you'd most likely catch me procrastinating my assignments by watching videos or hanging out with friends. Some of my friends say I am never doing homework while others call me a happy camper. Feel free to email me with any questions!",
                "imgName": "img/people/patrick-lee.png",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Kobe Wang",
                "email": "wangyimeng98@berkeley.edu",
                "details": "Hi everyone! This is Kobe, a second year majoring in CS, Data Science (possibly Math as well). I really enjoy CS70 and intend to pursue graduate school education in algorithms and applied probability after graduation. Outside of school, I watch a lot of soccer (diehard Liverpool fan) and basketball. I'm A big fan of tv shows (Games of Thrones, the Crown, Silicon Valley etc). Feel free to ask me anything. Learning while having fun, that's my motto haha!",
                "imgName": "img/people/kobe-wang.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Shayna Kothari",
                "email": "shayna.kothari@berkeley.edu",
                "details": "Hello! I'm Shayna, and I'm a second-year EECS major and Human Rights minor from the Bay. I love dogs, poetry, and superheroes; in my free time, I enjoy perusing the aisles of Trader Joe's and listening to political podcasts. CS61A is one of my favorite courses (it converted me to EECS!) and I hope it becomes yours as well!",
                "imgName": "img/people/shayna-kothari.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Aaron Chen",
                "email": "aaron_chen@berkeley.edu",
                "details": "Hey, I'm Aaron! I'm a computer science major from the Bay Area. Some things I like are dogs, the Office, and Melee. When I\u2019m not doing teaching things, you can find me around campus playing cello with Celli@Berkeley. ",
                "imgName": "img/people/aaron-chen.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Manan Khattar",
                "email": "mkhattar@berkeley.edu",
                "details": "Hi! I'm Manan Khattar, a second-year studying CS and Applied Math. I've lived half my life in India and half here in the US; as a result, my two favorite foods are French fries and Paneer Tikka Masala. I loved CS70 so much that it motivated me to switch majors\u2014hopefully I can make you just as excited about it as I am! Outside of school, I love browsing Reddit, playing Hearthstone, watching the NBA, or reading random trivia. Did you know the average married woman in seventeenth-century America gave birth to thirteen children?",
                "imgName": "img/people/manan-khattar.jpeg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Saharsh Agrawal",
                "email": "saharshagrawal@berkeley.edu",
                "details": "Hey everyone! I'm a second year EECS major from Florida. I enjoy singing Hindi songs, playing ping-pong, and getting boba (specifically mango milk tea with mango jelly) with friends. Catch me creating a new ICO every weekend or using deep learning with big data analytics for autonomous toy cars all on a quantum blockchain for my new startup. We're hiring!",
                "imgName": "img/people/saharsh-agrawal.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Albert Yu",
                "email": "albertyu@berkeley.edu",
                "details": "Hey there! I'm a second-time CS61A mentor from Orange County, CA. I'm a big fan of Stephen Colbert's Late Show, sleeping late at night, napping in the library, original-flavor Cheerios, peanut farming, and smiling peanuts. Despite his nut allergies, my brother likes peanuts too! Most of all, though, I really care about making 61A enjoyable, thought-provoking, and meaningful for you, and I'll do my best to help you! Can't wait to have some funny and quirky conversations about lambda functions and tail contexts with you during section!",
                "imgName": "img/people/albert-yu.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Stella Lu",
                "email": "stellalu@berkeley.edu",
                "details": "Kia ora! I'm Stella and I'm a sophomore computer science major from New Zealand. In my spare time, I like to eat, study (hahaha), scuba dive, travel, and learn German. I'm also a member of Codeology, a CS club on campus, so feel free to talk to me about that or anything else :)",
                "imgName": "img/people/stella-lu.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Kate Sanders",
                "email": "katesanders@berkeley.edu",
                "details": "Hello! My name is Kate, and I\u2019m a second year CS major from the Bay Area. In my free time I like to play video games with friends, make green tea, and play the electric guitar! Feel free to reach out to me if you have any cs-related questions or just want to talk! Looking forward to a great semester \ud83c\udf38",
                "imgName": "img/people/kate-sanders.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Sherry Luo",
                "email": "sherry.z.luo123@berkeley.edu",
                "details": "Heyo! I'm a second year EECS student from Sunnyvale, CA. I've coded for a while (5 years now 0.0) and also spent a lot of time tutoring people last year, so, hopefully, I'll be a good tutor. In my free time, I really like doodling, reading manga (Death Note is still my favorite :D), and playing card games. Look forward to meeting you!",
                "imgName": "img/people/sherry-luo.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Kyle Tse",
                "email": "tse.kylekobie@berkeley.edu",
                "details": "Hi, I'm a 3rd year CS major from LA! I love singing 2000s R&B, playing board games, and watching the NBA in my free time. Hit me up if you like any of those or if you just want to say hi!",
                "imgName": "img/people/kyle-tse.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Lauren Meier",
                "email": "laurenmeier@berkeley.edu",
                "details": "Hi there, I'm Lauren! My pronouns are are she/her. When I'm not in Soda or Cory, I love spending time outdoors and listening to music. I am also a huge fan of Oreos (they often make an appearance at my sections). See you around!",
                "imgName": "img/people/lauren-meier.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Jason Chang",
                "email": "jr44chang@berkeley.edu",
                "details": "Hey everyone! I'm Jason, and I'm a sophomore majoring in CS and Mathematics. I enjoy cooking and reading, along with teaching CS. I've previously been a lab assistant for 61A and 61B, and did one-on-one tutoring through CS 370. I also have a habit of falling asleep at my desk. \u00af\\_(\u30c4)_/\u00af",
                "imgName": "img/people/jason-chang.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Sasha Khazatsky",
                "email": "khazatsky@berkeley.edu",
                "details": "Hi y\u2019all!\n\nMy name is Alexander Khazatsky, and most people call me Sasha, except for my girlfriend, who just calls me \u201cUgly\u201d. On another note, I\u2019ve raised two baby cockatiels, and they raised me. \n\nWhen I'm not coding on my computer with what my non-STEM housemates call \"my nerd fingers\", I'm listening to Lose Yourself while running to the Big C (literally only that song), helping the staff for CS61B/CS70 confuse students, saying \u201csorry\u201d in unnecessary situations, reporting my collected data on the Americans back to the motherland, or trying to come up with ways to put buzzwords on my resume like everyone else on campus.\n\nFun fact about me, I was actually supposed to doing an internship at Google this semester, but I couldn\u2019t BEAR to leave you guys! Furthermore, my academic interests include Machine Learning and Artificial Intelligence, because that\u2019s what my father told me I should be interested in.\n\nOn one last note, I\u2019m trying to to stop saying the word \u201clike\u201d. So, if you\u2019re in my section, were going to keep track of how many times I say it. If I say it over 100 times in the semester, I\u2019ll give you guys the solutions to the final exam. Just kidding, but I will bake you guys a cake!\n\nSo there you have it, some stuff about me :-)",
                "imgName": "img/people/sasha-khazatsky.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Mahesh Murag",
                "email": "maheshmurag@berkeley.edu",
                "details": "I'm a second year EECS major and I love teaching/honing my teaching ability! I love listening to music (<3 Daniel Caesar, Tom Misch, Childish Gambino, and lots more), and I've played the guitar for a while (although I'm pretty out of practice). I also watch a lot of Netflix (I specifically love HIMYM, The Office, and Black Mirror). I go to La Burrita (specifically the one on south side) VERY often but am looking for recommendations for other restaurants at Cal. I'm also a member of Sigma Eta Pi and can talk about it for a long time if you're interested. I look forward to being your CSM mentor and also am happy to talk about anything outside whether it be about other classes or just life!",
                "imgName": "img/people/mahesh-murag.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Amy Hung",
                "email": "amy.hung@berkeley.edu",
                "details": "Hey! I'm a second year EECS major from San Jose, CA. I took CS 61A in Fall 2017, and this will be my second time tutoring for this course. Some things I enjoy are singing, eating sushi, and laughing at bad jokes. I'm also in an acapella group, so feel free to say hi if you see me around campus! My pronouns are she/her.",
                "imgName": "img/people/amy-hung.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Eric Ying",
                "email": "eying@berkeley.edu",
                "details": "HI everyone! My name is Eric, and I am a second year EECS major at Berkeley. I am from Cupertino (very close by). Some things I enjoy include eating and watching anime. I recently decided to start going to RSF as well. I honestly believe that CS61A is a very important and challenging course, and it lays a lot of important fundamentals that you will encounter later on in your other CS courses. As a mentor, I hope to always be available as a potential source of help! ",
                "imgName": "img/people/eric-ying.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Debayan Bandyopadhyay",
                "email": "debayanband@berkeley.edu",
                "details": "Cal Themed Two Truths, One Lie\n1. I'm actually a physics major, but I like to tell people I study CS because I'm mediocre at physics. \n2. While taking CS70 during Summer 2018, I walked all the way to the Marina past midnight, on my own. \n3. A year ago, I spent 36 hours straight inside Moffitt during Dead Week as a first semester freshman. ",
                "imgName": "img/people/debayan-bandyopadhyay.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Alan Ton",
                "email": "alanton@berkeley.edu",
                "details": "Hi!! I\u2019m a 3rd year EECS major from Walnut, CA and this will be my 3rd semester teaching CS61B with CSM.  ",
                "imgName": "img/people/alan-ton.jpeg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Saketh Kurnool",
                "email": "kurnoolsaketh@berkeley.edu",
                "details": "Hello! My name is Saketh Kurnool and I am a 2nd year, Computer Science major. I am passionate about teaching, and I'm excited to share what I know with you. Apart from nerding about CS/math, I sing and am an avid football fan. Feel free to reach out to me \u2013 I seek to help you in any way I can to achieve your goals in CS classes at Berkeley! :)",
                "imgName": "img/people/saketh-kurnool.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Annie Ro",
                "email": "anniero@berkeley.edu",
                "details": "Hi! I\u2019m a third-year EECS major from the 626 area in LA. I love Asian food and am super excited to be studying abroad in Hong Kong next spring! My favorite Facebook sticker pack is Yarukizero ( \u00b4 \u25bd ` ) and on Sundays I go to church. This will be my third semester as a 61A mentor and I also happen to be a TA this semester! Looking forward to it (:",
                "imgName": "img/people/annie-ro.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Kartik Kapur",
                "email": "kapurkartik@berkeley.edu",
                "details": "I'm Kartik, a third year studying Computer Science and Cereal Consumption (unofficially). I'm a fan of social interactions, witty (and non witty) puns, taking photos with bodacious fruits, swimming in swimmable liquids, and the NBA. \n\nMy current goal in life is to ride a Yak up the Himalayas and then surf down the mountains on a life raft.\n\n \"I'm a Walking Talking Enigma\"\n ~Larry David \n\nAlso I wrote a textbook for 61B. It's on the 61B tab of my website.",
                "imgName": "img/people/kartik-kapur.png",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Jemmy Zhou",
                "email": "jemmyzhou@berkeley.edu",
                "details": "Hi! I'm Jemmy! I'm a second-year CS major from the Bay Area. I took CS 61A in Fall 2017 and was a tutor in Summer 2018. This is my first time with CSM and first as a JM. Outside of CS, I'm a huge martial arts nerd and have been practicing wushu for over 14 years. I also follow the NFL and NBA (go Dubs and Niners!). Recently, I've picked up cooking and enjoy testing new recipes whenever I catch a break from classes. Can't wait to help make 61A a better experience for you!",
                "imgName": "img/people/jemmy-zhou.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Neil Lugovoy",
                "email": "nflugovoy@berkeley.edu",
                "details": "Hi! I\u2019m a junior Computer Science (ex physics) major. CS 70 is an amazing class that taught me so much. I hope you'll like it as much as I did! I work in BAIR under Claire Tomlin on reinforcement learning research for safety in robots. Some of my favorite music artists include Sure Sure, Pink Floyd, Cosmo Pyke, and Daniel Caesar. In my free time I play ultimate frisbee, Spikeball, juggle, and break world records. Socks and sandals are acceptable footwear, change my mind.",
                "imgName": "img/people/neil-lugovoy.jpg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Vibha Seshadri",
                "email": "vibhaseshadri@berkeley.edu",
                "details": "Hello! I'm a third year CS major at Cal and I'm looking forward to working with and getting to know you this semester! CS61B is my favorite class here at Cal, and I'm really excited to be a mentor for the class again! Outside of school I love to read, watch movies, go on hikes, and eat! Also, I loveee coffee so if you ever discover an awesome coffee shop pls let me know! Feel free to reach out to me for anything, always down to have a chat or grab a bite to eat :)",
                "imgName": "img/people/vibha-seshadri.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Nalin Chopra",
                "email": "nalin.chopra@berkeley.edu",
                "details": "Hiya! I'm a second year EECS student from New Jersey. My spirit animal is a corg. Not corgi, corg. Smol corgs are the best. I love to run long distance and follow basketball and football. My favorite restaurant in Berkeley is Croads, 11/10 would do again.  Sadly, I can't eat there everyday, but I recently got a slow cooker so I'm basically a top-notch chef. If you have any cooking tips hmu. Really excited to work with you all this semester! ",
                "imgName": "img/people/nalin-chopra.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Ajay Raj",
                "email": "araj@berkeley.edu",
                "details": "Heads of jumbo antelopes are sent to the center of the army (4)",
                "imgName": "img/people/ajay-raj.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Anita Cu",
                "email": "anitacu5@berkeley.edu",
                "details": "Hello! I'm Anita and I'm a third-year CS major from the Bay Area who loves listening to music, planning+organizing, and teaching! I enjoy drinking fruit smoothies+milkshakes & watching/rewatching Disney movies with my friends and family :D I've been involved with CS 61A for the past two semesters, so I'm beyond excited to teach CS 61B this semester! :)",
                "imgName": "img/people/anita-cu.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Kevin Yu",
                "email": "kevin.j.yu@berkeley.edu",
                "details": "Hello there! I\u2019m Kevin and I\u2019m a second year from Fremont, CA pursuing computer science and data science. Taking 61A is one of the greatest decisions I have ever made in my life, and I\u2019m excited to be sharing its wonders. My favorite pastime is hanging out with my spoiled dog (she\u2019s a maltipoo). I also love to cook/bake as well as binge watch any sort of TV show. I hope you all enjoy 61A! ",
                "imgName": "img/people/kevin-yu.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Allan Yu",
                "email": "allan15@berkeley.edu",
                "details": "My favorite language is Assembly.",
                "imgName": "img/people/allan-yu.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Megan Kawakami",
                "email": "megankawakami@berkeley.edu",
                "details": "Hello! I\u2019m a second year EECS major from Fresno, CA.   CS70 has been my favorite class so far, and I am really excited to teach it for CSM! I love to explore Berkeley, eat ice cream, listen to new music, and I am currently attempting to train for a half marathon.  I am also a huge fan of Logic - both propositional and the rapper.  Come talk to me about anything :)",
                "imgName": "img/people/megan-kawakami.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Shubha Jagannatha",
                "email": "shubhaj@berkeley.edu",
                "details": "I'm Shubha and I'm a second year EECS major. My interests include design of all types,  data structures, education, cats, playing a 4.5 foot long ancient Indian guitar, boba, dance, and Waluigi memes. I am from the Bay,  am always cold, and will be your friend! ",
                "imgName": "img/people/shubha-jagannatha.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "William Zhuk",
                "email": "williamzhuk@berkeley.edu",
                "details": "Senior at Berkeley, Math & CS Double Major. Mentoring at CSM for the past 2 years or so.\nMy active hobbies are sailing, diving, and skiing. My typical hobbies are gaming and listening to podcasts.\n",
                "imgName": "img/people/william-zhuk.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Darren Huang",
                "email": "darren.y.huang@berkeley.edu",
                "details": "Hello! I'm a Junior studying computer science and math. I spend most of my time training to become a master chef under the guidance of Gordon Ramsay and Binging with Babish, but in my free time I like playing video games, watching dog videos, and sleeping. Oh yeah I guess I do some classes and studying here and there too x_x",
                "imgName": "img/people/darren-huang.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Dhruv Kathuria",
                "email": "dkathuria@berkeley.edu",
                "details": "Hey everyone! I'm a third-year from NJ studying EECS. I loved CS70 but I also struggled a lot - I definitely understand how some of the stuff seems to derive from thin air, so don't hesitate to ask for help! I enjoy looking at memes and watching vines in my free time and pretending to be somewhat athletic! Come talk to me about school, data ethics, public policy, food, or anything else that is on your mind!",
                "imgName": "img/people/dhruv-kathuria.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Chris Niu",
                "email": "chrniu@berkeley.edu",
                "details": "Hello- I'm a second-year CS major from around DC. I spend too much time at home, help me change that",
                "imgName": "img/people/chris-niu.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Carl Qi",
                "email": "daguqihanwen@berkeley.edu",
                "details": "Hi everyone! I'm a second year CS and Applied Math major at Berkeley. I was born and raised from the capital of China, Beijing, but I have been studied in the US for almost 4 years. I enjoy playing the guitar and singing, and I'm also a big fan of sports. Looking forward to seeing all of you. Hit me up if you want to talk about anything!",
                "imgName": "img/people/carl-qi.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Neil Palleti",
                "email": "neilmrp@berkeley.edu",
                "details": "Hello everyone! I'm Neil, a sophomore studying Computer Science. Apart from coding, I love watching movies, doing weird math problems, and hanging out with friends. I'm also a HUGE sports player/fan (tennis, soccer, basketball), so I'm always down to talk about teams and players. I'm looking forward to a fantastic semester!",
                "imgName": "img/people/neil-palleti.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Jack Coyle",
                "email": "coylejack1@berkeley.edu",
                "details": "Hey! My name is Jack and I am a third year EECS major. I actually came to Cal as a Mechanical Engineer, then switched to IEOR, and now I'm EECS (if you haven't switched your major at least once, try it out). I am really excited to be a CSM mentor for CS 61A this semester! Outside of classes, I enjoy hiking, listening to music, finding new food in Berkeley, and watching movies. I have a pretty varied music taste, but if you like Frank Ocean I think we'll be friends.",
                "imgName": "img/people/jack-coyle.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Dominic Carrano",
                "email": "dcarrano@berkeley.edu",
                "details": "Hi there! I'm Dominic! I'm a 3rd year EECS major from Livermore, CA focused mainly in signal processing, but also interested in all the other math-y areas of EE/CS and systems programming/computer security. This is my 2nd semester in CSM for EE 16A, and I'm also a TA for EE 120. Huge soccer fan and I've also played the sport my entire life. If I'm not studying or exercising, your best bet is that I'm listening to music; my favorites include Justin Timberlake, Maroon 5, Green Day, and more. Looking forward to a great semester!",
                "imgName": "img/people/dominic-carrano.jpg",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Austin Do",
                "email": "austincqdo@berkeley.edu",
                "details": "Hi! I\u2019m an EECS junior from Huntington Beach, CA. I enjoy reading, backpacking the Sierra, tending to plants, running, fishing, and listening to music. Some favorites of mine are Songs: Ohia (band), Federico Fellini (film director), and The Pale King (novel).",
                "imgName": "img/people/austin-do.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Joy Tang",
                "email": "j-tang@berkeley.edu",
                "details": "Hi my name is Joy, and I'm a 4th year computer science major. This is my 4th semester mentoring for 61B, and I can't wait to meet you! I'm obsessed with dance, cybersecurity, standup, and food, so come talk to me if you think I'm interesting or cool :) or just come talk to me :) I promise I'm fun",
                "imgName": "img/people/joy-tang.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Rachel De Jaen",
                "email": "rdejaen@berkeley.edu",
                "details": "Hi friends! I'm Rachel and I'm a second-year computer science and spanish major from Seattle. I'm really passionate about teaching and super excited to be working with you all this semester! In my free time, you can probably find me watching NCAA gymnastics meets, cooking moderately decent food, or looking at cat pictures.  My pronouns are she/her.",
                "imgName": "img/people/rachel-de-jaen.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Ryan Roggenkemper",
                "email": "rroggenkemper@berkeley.edu",
                "details": "I'm a 3rd year CogSci & CS major from Los Gatos, CA. I enjoy cooking (because it usually leads to eating things, which is pretty great), music, and playing a sport/game called jugger. I'm also a bit too good at procrastinating (please don't follow my example).",
                "imgName": "img/people/ryan-roggenkemper.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Eric Fu",
                "email": "ericfu@berkeley.edu",
                "details": "Hi everyone, I\u2019m a second year from just outside of Chicago majoring in computer science and this is my first semester on CSM. I took CS61B during Spring 2018 and my favorite data structure is a heap. Whenever I\u2019m not coding or working on schoolwork, you can find me at Cal Wushu or eating too much ramen in my room.\n",
                "imgName": "img/people/eric-fu.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Diana Tu",
                "email": "dianatu@berkeley.edu",
                "details": "Hiya, I'm a third year CS and Applied Math double major from Chino Hills, CA. I have lab assisted for CS 61A and CS 61B 4 times and taught for CS 188, but now I'm a CSM mentor here for you! :-) I spend my free time reading library books (love a good memoir, historical fiction, or YA novel), running, and eating anything with chili sauce on it. Talk to me about absolutely anything that excites you \ud83d\udc12",
                "imgName": "img/people/diana-tu.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Akshit Annadi",
                "email": "aannadi@berkeley.edu",
                "details": "Hey! I'm a second year EECS student from Dublin, CA. In my free time, I love to binge T.V. and movies(This is Us, GoT, HIMYM, Shark Tank, etc.) or go to a Zumba class! 61B is one of my favorite classes I've taken because I constantly find that it bridges the gap between academic knowledge and real-life industry practices in CS. Also, I used to be a BioE major, and 61B was also the class that truly convinced me to switch to EECS. I'm excited to meet you all!",
                "imgName": "img/people/akshit-annadi.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "George Zhang",
                "email": "georgeluzhang@berkeley.edu",
                "details": "Hello! I'm a junior studying CS from the bay area. In my free time, I love playing board games, following the NBA, and listening to music (some of my favorite artists are The Weeknd and Majid Jordan). Go bears!!\n",
                "imgName": "img/people/george-zhang.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Abhinav Ashar",
                "email": "abhinav_ashar@berkeley.edu",
                "details": "Hey everyone! My name is Abhinav and I'm a second-year EECS + Business student from Houston, Texas. When it comes to things I love, I am all over the place! I'm a huge basketball fan and have been a Kevin Durant fan since his UT Austin and Seattle SuperSonics days (guaranteed non-bandwagon). Throughout high school, I was crazy about marching band and my clarinet section (the best section tbh). I have not yet gotten addicted to coffee and boba but if you want to know where to get the best mango lassi, I'm your guy. As for other activities, I'm currently in Berkeley Business Society as a Startup Project Manager. I used CSM tutoring when I did 61A and loved knowing that I had a helping hand to reach out to whenever I felt lost. Now I'd love to return the favor and help out you all!",
                "imgName": "img/people/abhinav-ashar.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Nicky Tsai",
                "email": "boren.tsai@berkeley.edu",
                "details": "Wazzah! My name is Nicky and I'm from the Far East Bay of Tampa, Florida. I'm a proud owner of a corgi, an enthusiast of all things outdoorsy, and a proponent of the Oxford comma. From Scoby-Wan Kenobi to Scheme, feel free to talk to me about anything!",
                "imgName": "img/people/nicky-tsai.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Katherine Liu",
                "email": "katherineliu28@berkeley.edu",
                "details": "Hi! My name's Katherine, and I'm a third year studying Computer Science. I love reading and writing, with a particular emphasis on slam poetry. I also love alternative music and dark pop (which lends itself to a lot of indie artists), podcasts (Still Processing and Serial are my absolute favorites, but I'm always open to more suggestions), not-cardio workouts (except for indoor cycling), and parentheses (except in Scheme). 61A holds a really special place in my heart. I'm really excited for this semester with y'all!",
                "imgName": "img/people/katherine-liu.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Ida Liu",
                "email": "liuhh@berkeley.edu",
                "details": "Hey! I'm a sophomore CS student and I'm really excited to teach at CSM. I love CS70 because it's so fun and you'll definitely love it too!! In my free time I enjoy singing and playing the ocarina. My favorite artists are Sia, Coldplay and Maria Callas, and my favorite movie character is Olaf from Frozen. ;)  ",
                "imgName": "img/people/ida-liu.jpeg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Tian Qin",
                "email": "tianqin@berkeley.edu",
                "details": "Hello! I'm a third-year EECS major. Favorite things in life are basketball and dark chocolate (never tried both at the same time though). I also like to cook by mixing together random ingredients I scrape from the fridge and fortunately they often turn out pretty okay. CS 70 is a great class and I really enjoy teaching it. Isn't probability nothing but magic? I look forward to meeting you!",
                "imgName": "img/people/tian-qin.jpg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Kevin Yang",
                "email": "kevinyang8@berkeley.edu",
                "details": "Hey guys, my name is Kevin and I'm a 2nd year Computer Science and Data Science major from Granite Bay, California (basically Sacramento). I love playing volleyball and I'm a part of the club volleyball team! When I'm not doing computer science stuff or playing volleyball, you can probably find me watching Friends for the 10th time, playing video games, or leading some people on a tour as a Campus Ambassador. I'm looking forward to meeting you all! ",
                "imgName": "img/people/kevin-yang.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Maryam Sabeti",
                "email": "msabeti5@berkeley.edu",
                "details": "Hello! My name is Maryam and I am a third year CS major. In my free time, I like to (git) pull people into taking CS classes and (git) push said people into studying for said CS classes. I love 61B and teaching so please reach out if you want to (git) merge ideas or if you're feeling lost in the (public static) void!! ",
                "imgName": "img/people/maryam-sabeti.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Samy Cherfaoui",
                "email": "scherfaoui@berkeley.edu",
                "details": "I'm a second year majoring in Computer Science with a planned minor in Geospatial Information Science and Technology. I grew up in Cupertino in the Bay Area but I do have triple citizenship so I am a man of culture. My hobbies include playing sports, reading about the most random subjects, and of course teaching new students CS61A. If you have any questions about anything, feel free to contact me! Fun fact: I've qualified for the Jeopardy auditions in Los Angeles twice. When I inevitably make it onto the show at some point, you will have the privilege of saying that you know me.",
                "imgName": "img/people/samy-cherfaoui.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Alan Chuang",
                "email": "alanchuang@berkeley.edu",
                "details": "Hello!  I'm a third year majoring in Computer Science and Statistics.  I love discrete math and probability, and I hope you will too! :)",
                "imgName": "img/people/alan-chuang.jpg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Drew Kaul",
                "email": "drewkaul@berkeley.edu",
                "details": "My perfect woman is Gayle Laakmann McDowell.",
                "imgName": "img/people/drew-kaul.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Taejong Kim",
                "email": "taejongkim@berkeley.edu",
                "details": "Hello! I'm a second year CS major from San Jose. In my free time, I enjoy playing video games, reading books, and listening to music. I'm always down to chat about anything, so hit me up! I took CS 61B last semester and it was a blast; I hope that I can help make it fun for you as well :)",
                "imgName": "img/people/taejong-kim.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Andrew Tang",
                "email": "tang.andrew99@berkeley.edu",
                "details": "Hi guys! I am a second year computer science major and I absolutely loved 61B! I am from San Jose, forcing me to passionately believe that NorCal > SoCal despite only being in southern California once in my life...for two days. I am a super chill, down to earth, and sarcastic dude who loves to play some basketball and Catan. I am so excited to meet you all and learn your favorite memes. xD",
                "imgName": "img/people/andrew-tang.jpeg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Kyle Su",
                "email": "kylesu98@berkeley.edu",
                "details": "Hello Hello! I'm a 3rd year Computer Science major from Albany (California) and this will be my second time CSMing 61B! In my free time I enjoy running, potatoing, smash, Rick and Morty, and Marvel movies. Look forward to meeting everyone :) ",
                "imgName": "img/people/kyle-su.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Jeffrey Liu",
                "email": "jeffrey.y.liu@berkeley.edu",
                "details": "Hi guys! I'm a second year EECS major from the Bay Area. I'm an avid basketball and soccer fan, and during my spare time I enjoy playing some pickup whenever I can. I'm also a huge fan of hip hop, although lately I've been trying to branch out and listen to a wider variety. If anyone has any music recommendations, feel free to let me know! In the past I previously lab-assisted for 61A, and I look forward to   applying that experience with all you guys in the future!",
                "imgName": "img/people/jeffrey-liu.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Albert Xu",
                "email": "albertxu3@berkeley.edu",
                "details": "Hi everyone! I'm Albert, a sophomore CS major from Fayetteville, Arkansas. Some of my skills include planning naps but failing to set alarms, doing binge reads of irredeemable young adult fiction, and having neat conversations with my uber drivers. My more praiseworthy pastimes are ice skating, playing ping pong, and taking photos. I'm really excited to meet y'all, and it's gonna be a fun semester in 61a! ",
                "imgName": "img/people/albert-xu.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Alex Chang",
                "email": "alex.y.chang@berkeley.edu",
                "details": "Hello, I'm Alex and I'm a 2nd year CS and linguistics major from Massachusetts.  I was scared of 70's reputation at the beginning, but was pleasantly surprised by how much I liked the class - my goal is to help you enjoy it as well.  You can almost always find me studying or dancing in Eshleman Hall, and some of my other interests include photography, video editing, and trying a different kind of bread every day at Sheng Kee. ",
                "imgName": "img/people/alex-chang.jpeg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Khadijah Flowers",
                "email": "khadijah.flowers@berkeley.edu",
                "details": "Hi, my name is Khadijah and I am a Computer Science major who is also interested in pursuing a double major with Applied Math. I've been a tutor/AI since sophomore year for CS61A and CS61B and I'm excited to teach some CS70 as it is an amazing class! I like to ride my skateboard and play XBox and I spend my weekends walking my dog. I am currently apart of a group on campus called Gamescrafters which houses an environment for students to do game related projects and I hope to solve a board game in the next few months!",
                "imgName": "img/people/khadijah-flowers.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Omkar Waingankar",
                "email": "omkar.waingankar@berkeley.edu",
                "details": "Hi everyone! I'm a second year EECS/BioE major from Atlanta, Georgia. I love anything and everything tennis, I'm a huge Marvel fan, and Sherlock is the greatest show ever don't @ me. My favorite artists are Migos, BROCKHAMPTON, and The Strokes. Currently, I'm an undergraduate researcher at GoodlyLabs & BIDS in the open-source \u201cLiberating Archives\u201d project. Our group\u2019s focus is to gather, parse, and publicly share digital archives that are currently inaccessible for research purposes, and draw insights from them to further social good (check us out at searchlight.goodlylabs.org). I'm excited to be a senior mentor for the first time this semester!",
                "imgName": "img/people/omkar-waingankar.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Danelle Nachum",
                "email": "dnachum@berkeley.edu",
                "details": "Hi! I'm Danelle and I'm a 4th year bioengineering major. Outside of school, I love to cook, read, and watch Star Trek at weird hours of the night. My pronouns are she/her.",
                "imgName": "img/people/danelle-nachum.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Ajuney Hora",
                "email": "ajuney.hora@berkeley.edu",
                "details": "Hi everyone, I'm Ajuney! I got through some of my lower division EE/CS courses primarily because my friends and the course staff really believed I could succeed. Allow me to be one of those people for you!",
                "imgName": "img/people/ajuney-hora.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Kevin Wang",
                "email": "kwang626@berkeley.edu",
                "details": "Hi! I'm a fourth year Computer Science major from Socal. When I'm not binging on TV shows, I enjoy swimming, hiking, and turning off my wifi to play that dinosaur game on Chrome. I can usually be found in the depths of Soda hall late at night with unhealthy amounts of caffeine. If you can't find a spot in Soda, I probably took it. Sorry! I do enjoy teaching Computer Science, and look forward to meeting you! ",
                "imgName": "img/people/kevin-wang.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Sophia Qin",
                "email": "sophia.qin@berkeley.edu",
                "details": "Hi there! I'm Sophia, a second-year EECS major from sunny SoCal. In my free time, I like to jam to all types of music, explore new food places around the Bay Area, binge-watch the Office, and take photos with friends. I'm also a director for Cal Hacks, helping to organize the hackathon in the fall. CS 61A was one of my favorite classes at Cal, and I'm looking forward to meeting you all! :) ",
                "imgName": "img/people/sophia-qin.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Olivia Shiah",
                "email": "oshiah@berkeley.edu",
                "details": "Hi everyone! I'm Olivia, a 2nd year CS major from sunny San Diego. In my free time, I enjoy eating chocolate, hiking, and anything crafty (especially knitting and crocheting). CS 61A has been my favorite class so far at Berkeley, so I'm excited to mentor for it this semester. Looking forward to meeting everyone!",
                "imgName": "img/people/olivia-shiah.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Albert Huang",
                "email": "albert168@berkeley.edu",
                "details": "Hi! I\u2019m a third year studying cs from freakmont, ca. I like to swim, play basketball, and enjoy a pretty wide range of music. cs is aight too :) I\u2019m looking forward to the semester and hopefully help make 61a a fun experience for you!",
                "imgName": "img/people/albert-huang.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Michelle Mao",
                "email": "michelle.mao@berkeley.edu",
                "details": "I was born in Michigan but spent most of my life in Shanghai--the best city in the world. On campus when I'm not EECS-ing you'll find me working with AWE or beatboxing for the California Golden Overtones. Off campus I love cooking, biking, and snowboarding. Hit me up to chat!",
                "imgName": "img/people/michelle-mao.jpg",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Luke Mujica",
                "email": "lukemujica@berkeley.edu",
                "details": "Hello! My name is Luke and I'm a 2nd year EECS major. I love sports and follow the NBA and NFL the most, and I stay active with sports such as volleyball, basketball, skiing, watersports, etc. I've also started playing the guitar in college and listen to lots of types of music; hopefully I'll be writing my own soon. CS61B teaches cool concepts that I have even gotten to use in a personal project, and it is my favorite class so far so I am excited to help others enjoy the class as well.",
                "imgName": "img/people/luke-mujica.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Max Banister",
                "email": "maxbanister@berkeley.edu",
                "details": "Hi! My name is Max and I'm a second year M.E.T. student studying EECS and Business. I spent this past summer as a software engineering intern for a VR medical technology startup and taking care of dogs. Prior to being a CS Mentor, I was an Academic Intern for 61A and am concurrently taking CS 370 - Intro to Teaching CS. In my spare time, I like playing soccer, learning languages (I have learned Latin, Greek, French, Italian, and Dutch to varying degrees of competency), and cooking, though I don't get the chance to do it much anymore. I have been told memes can be elitist, but if you beg to differ please join me on a quest to learn CS and keep Berkeley dank.",
                "imgName": "img/people/max-banister.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Kelvin Jue",
                "email": "kelvinjue@berkeley.edu",
                "details": "Hello everyone! I'm a second year CS and Business major from Dallas, Texas. I really enjoy all sorts of exercise, which is a bit of a problem because it's kinda hard for me to motivate myself to walk all the way to the RSF. I may one day attain the drive I need to work out on a daily basis. Other than that, I enjoy hanging out with friends, trying new places to eat, and recently I picked up photography too! If you think I'm cool or you're interested in learning 61A, hit me up!",
                "imgName": "img/people/kelvin-jue.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Neil Kulkarni",
                "email": "neil.kulkarni@berkeley.edu",
                "details": "I am a second year CS and Applied Math major. This semester I am TAing and SMing for 61A and am looking forward to getting to know you all! My favorite show is The Office and in my free time I like to play tennis.",
                "imgName": "img/people/neil-kulkarni.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Richard Roggenkemper",
                "email": "rroggenkemper22@berkeley.edu",
                "details": "Hi! My name is Richard. I'm a first year student from Los Gatos, California. I'm hoping to major in CS and Business. In addition to CSM, I'm also lab assisting for CS 61a and taking CS 370.  I love skiing,  cooking, and anything related to food. I loved CS 61a when I took it, so I'm excited to teach it this semester.",
                "imgName": "img/people/richard-roggenkemper.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Aman Sidhant",
                "email": "amansidhant@berkeley.edu",
                "details": "Hey everyone! I like watches, cars, and video games. I also liked 16A, and hope that you all have a fun semester and we all learn new things together!",
                "imgName": "img/people/aman-sidhant.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Alex Yang",
                "email": "yangalex@berkeley.edu",
                "details": "Hello! My name is Alex and I'm a junior studying CS. I like hiking around the world, playing intramural soccer, and going to the occasional rave. Super excited to meet you!",
                "imgName": "img/people/alex-yang.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Arjun Srinivasan",
                "email": "arjunsrinivasan@berkeley.edu",
                "details": "Hello! My name is Arjun Srinivasan, and I am a 3rd year CS major from Tampa Florida who took 61B 2 years ago and loved it so much I keep coming back to teach it! I am an extremely avid gamer, football and basketball fan, and love playing sports with friends. Ask me about what game is currently occupying my free time (currently its Destiny 2), about my favorite sports or gaming moments of my childhood, or about how to see the secret Easter egg in the python language. Looking forward to having a great semester with you all!.",
                "imgName": "img/people/arjun-srinivasan.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Sarika Madhvapathy",
                "email": "smadhv@berkeley.edu",
                "details": "Hey guys! I'm a 3rd year EECS major from San Jose. I am a discussion TA for EE 16A and I am interested in RF and signal processing. I enjoy binge-watching Archer, drinking overpriced coffee, and listening to System of a Down. Can't wait to meet you all!",
                "imgName": "img/people/sarika-madhvapathy.jpg",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Shriya Vohra",
                "email": "shriya.vohra@berkeley.edu",
                "details": "Hi there! I\u2019m Shriya, a third-year EECS major from North Carolina. I love listening to Bollywood music, going to the beach, and eating ice cream. When I\u2019m not convincing the world that CS rules, you will find me watching Tasty videos or tagging people in memes. I'm super passionate about CS, and I can't wait to share that with all of you :)",
                "imgName": "img/people/shriya-vohra.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Jessica Meng",
                "email": "jessica_meng@berkeley.edu",
                "details": "hi all :)) I'm Jessica and I'm a sophomore CS major from Toronto, Canada. I really love traveling (ask about my travel stories!!) and finding good tea and good food.  I had a really good time in CS70 and I'm looking forward to meet you all:)) ",
                "imgName": "img/people/jessica-meng.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Catherine Cang",
                "email": "catherinecang@berkeley.edu",
                "details": "Hi! My name is Catherine, and I'm a Computer Science major from San Diego. Some things I enjoy but am bad at include playing piano, video games, and making food. I'm good at binge watching sitcoms and getting my money's worth at all you can eat sushi places. I like teaching and CS 61A was my favorite class ever, so I look forward to meeting all of you!",
                "imgName": "img/people/catherine-cang.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Julian Kung",
                "email": "julianrkung@berkeley.edu",
                "details": "Hi! I am a second year computer science major from Millbrae, California (near SFO). I came into Berkeley without any CS experience but have come to enjoy the field a lot! When I'm not doing schoolwork, you can find me hanging out with friends or relaxing at home. CS61B was one of my most favorite classes last year and I hope you end up loving it as much as I did!",
                "imgName": "img/people/julian-kung.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Sebastien Whetsel",
                "email": "sebastien.whetsel@berkeley.edu",
                "details": "Hello! I'm Sebastien, a 3rd year mechanical engineering major from LA. In my free time I like listening to music, building things, and taking naps - usually in that order. I'm also a huge fan of puzzles (crosswords especially), board games, chess, and poker. Other than that, you can probably find me in the Jacobs Makerspace blowing stuff up or playing an extremely large number of sports at an extremely average level. Talk to me about outer space, probability theory, and the superiority of the metric system \u00af\\_(\u30c4)_/\u00af",
                "imgName": "img/people/sebastien-whetsel.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Imaani Choudhuri",
                "email": "imaanic@berkeley.edu",
                "details": "Hi there! My name is Imaani, and I'm a second-year intended CS major from SoCal. I enjoy making pancakes, playing video games (I love Overwatch and Skyrim), supporting my favorite (kpop) music groups, watching horror movies, and occasionally trying to draw something. I'm looking forward to teaching this semester and getting to know you all!",
                "imgName": "img/people/imaani-choudhuri.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Daniel Mao",
                "email": "daniel.mao@berkeley.edu",
                "details": "Hi there, I'm a Senior studying Cognitive Science and Computer Science. I enjoy spontaneous trips with friends, going to the gym, and trying to learn new, random life skills. My goal before I graduate is to visit every dorm on campus and be swiped into late night one more time. So if you happen to live in Blackwell and have meal points for days let me know. This will be my second time tutoring with CSM and my third time tutoring for CS61A as a course tutor! My pronouns are he/him.",
                "imgName": "img/people/daniel-mao.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Josh Yang",
                "email": "joshua.yang@berkeley.edu",
                "details": "Heyo! My name is Josh, and I'm a CS and Music double major in my second year at Berkeley. I'm from Vancouver Canada, so people say I'm nice and that I say sorry too much. I really enjoy teaching 61B as the course material is both interesting and applicable. After class, feel free to talk to me about anything! I'm particularly interested in chatting about music or VR, as I'm a team lead at VR at Berkeley. In my free time, I like to compose jazz/choral music, sing, sleep, and code :D",
                "imgName": "img/people/josh-yang.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Jose Chavez",
                "email": "jrocker3@berkeley.edu",
                "details": "Hello! I am senior studying Computer Science and Film. I recently finished a software internship at General Motors, where I built an Android app in Java. I am also a bass drum in the Cal Band, a scuba diver, a golfer, and an independent filmmaker. I spend my free time cooking, going to church, exercising, and working on personal projects.",
                "imgName": "img/people/jose-chavez.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Annie Huang",
                "email": "anniexhuang@berkeley.edu",
                "details": "Hi there! I'm a third-year CS major from the Bay Area, and this will be my second semester teaching 61B with CSM. I specialize in gasping loudly every time I see a dog. Other things I enjoy include breakfast foods, dancing, trying all the food places in Berkeley, watching movies, and teaching! ",
                "imgName": "img/people/annie-huang.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Nikhil Pimpalkhare",
                "email": "nikhil.pimpalkhare@berkeley.edu",
                "details": "Hello! I'm Nikhil, a sophomore from Los Altos, CA. In my free time, I enjoy piano, throwing frisbees, playing board games, and Model UN. If you ever want to talk about life, international relations, or the intricacies of matrix multiplication, I'm your guy!",
                "imgName": "img/people/nikhil-pimpalkhare.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Katya Brooun",
                "email": "katyabrooun@berkeley.edu",
                "details": "Hello! My name is Katya and I'm a senior majoring in Computer Science. This will be my fourth semester mentoring through CSM, and I'm stoked to be back after spending a semester studying abroad in Spain. My favorite CS classes at Berkeley have been CS 61B and CS 170. I've interned at two different tech companies (Lucid Software and Atlassian) the past two summers, working mostly on user interfaces for web applications. This semester I'm really looking forward to being involved with a URAP project dealing with computational cognitive science. In my free time, I love being outside-- hiking, camping, climbing, swimming, you name it, and I'm involved in CHAOS. I also love love trying new foods. I've recently gotten very into the Burmese food at Berkeley. I'd highly recommend a place on Telegraph called Royal Rangoon. Can't wait to meet y'all soon and take on a semester of hip & funky data structures and algorithms!",
                "imgName": "img/people/katya-brooun.png",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Joey Hejna",
                "email": "jhejna@berkeley.edu",
                "details": "Hi! I'm Joey and I'm a sophomore interested in the mathy side of EECS, so CS 70 was one of my favorite classes! I spend a lot of my free time listening to music, playing guitar, or going to concerts. Catch me on south side getting tacos or Japanese curry. ",
                "imgName": "img/people/joey-hejna.jpeg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Kevin Zhang",
                "email": "hjklhjklhjkl2008@berkeley.edu",
                "details": "Hey! I'm Kevin, a sophomore Computer Science major at Berkeley. A few of my hobbies are playing piano, rock climbing, and reading. I really enjoyed CS 70 when I took the course, and I hope I can share some of my passion for the course with you!",
                "imgName": "img/people/kevin-zhang.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Cathy Lu",
                "email": "cathylu@berkeley.edu",
                "details": "Hi! I am a second year EECS major. This is my first semester mentoring for CS 70, but I really loved the course and it's been my favorite class at Berkeley so far. In addition to CS 70 and teaching, I really enjoy fluffy animals, boba, taking walks,    and listening to music. I'm looking forward to a great semester! Please come say hi :)",
                "imgName": "img/people/cathy-lu.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Aakash Shukla",
                "email": "aakash.shukla@berkeley.edu",
                "details": "Hey everyone! I'm Aakash, and I'm a second year CS major from northern Virginia. I love Taco Bell, listening to new music, and wasting time on r/AnimalsBeingBros/. I also pride myself in being a master at getting lost on campus and starting side projects but never finishing them. I loved 61B and can't wait to work with you!",
                "imgName": "img/people/aakash-shukla.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Mary Xu",
                "email": "ruili.xu@berkeley.edu",
                "details": "Hello! My name is Mary and I'm a second year CS major from Fremont, CA. Some of my hobbies include listening to music, attempting to dance, and getting my 8 hours of sleep during lectures. Outside of cooking gourmet instant noodles and hot pockets at home, my go-to restaurant at Berkeley is Famous Bao. CS 61A has been my favorite class at Berkeley so far, and I\u2019m really excited to be a mentor for it this semester! ",
                "imgName": "img/people/mary-xu.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Preethi Kandappan",
                "email": "preethi.k@berkeley.edu",
                "details": "Hi! I'm a 2nd year intended CS and DS major from San Jose. I love listening to music, watching my shiba inu ignore me, spending 26 hours in a day binge-watching netflix in bed, playing board games, and eating at the same restaurants over and over again (hmu with some recommendations pls I need more variety). If you ever want to talk/vent about anything at all, feel free to reach out to me. Looking forward to a great semester and meeting you all!",
                "imgName": "img/people/preethi-kandappan.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Kevin Ko",
                "email": "kevin.ko@berkeley.edu",
                "details": "I'm a third year CS major and I've been academic interning/mentoring for 61A for three semesters! ",
                "imgName": "img/people/kevin-ko.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Candace Chiang",
                "email": "chiang.candace@berkeley.edu",
                "details": "Hi! I'm Candace, and I'm a sophomore EECS major from the bay area. When I'm not spending my time avoiding showers, I drink an unhealthy amount of boba and pet any dog I see (sadly, I have no other hobbies). In terms of music, I listen exclusively to Denero's lectures. I'm looking forward to a great semester with everyone :).",
                "imgName": "img/people/candace-chiang.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Amy Mendelsohn",
                "email": "amymendelsohn@berkeley.edu",
                "details": "I\u2019m a fourth year CS and History double major. I came to Berkeley as a history major, but then 61A happened. I've been hanging around 61A since last fall. I'm also part of ReUSE, a volunteer-run club/store in MLK next to the OCF that gives away free stuff (feel free to say hi if you see me there!) You can also find me in Soda and Cory a bit too often.",
                "imgName": "img/people/amy-mendelsohn.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Jade Singh",
                "email": "jadesingh17@berkeley.edu",
                "details": "Hi, I\u2019m Jade, a sophomore intending computer science. (Wish me luck in CS 70 this semester!) I\u2019m from Ellicott City, Maryland, born and raised on the East Coast. In addition to CS and teaching, I love swimming, Game of Thrones, food, and music (which I\u2019m also minoring in). I didn't come to Berkeley with much CS experience, and made it through 61A thanks to the help of some amazing CS mentors, so I look forward to providing you guys with the same support I had. I'm always happy to talk to you if you feel behind or stressed :)",
                "imgName": "img/people/jade-singh.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Mounica Putrevu",
                "email": "mounicaputrevu@berkeley.edu",
                "details": "Hi! I'm Mounica, a third year studying Computer Science. CS61b was one of my favorite classes at Berkeley, and I hope you'll enjoy it just as much :) ",
                "imgName": "img/people/mounica-putrevu.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Reese Gyllenhammer",
                "email": "rgyllenhammer@berkeley.edu",
                "details": "Im reeeeseee I like to sk8board and take pictures. I also really like cOmpUTers, MaTH and ProGrAmmING. I took CS61A spring semester so my knowledge is fresh out of the oven and I am so reaAdY to help you learn. I also wear a hat everyday, and you will have to deal with it. ",
                "imgName": "img/people/reese-gyllenhammer.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Michael Lum",
                "email": "michaellum@berkeley.edu",
                "details": "hey hey",
                "imgName": "img/people/michael-lum.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Robert Wang",
                "email": "robertwang1999@berkeley.edu",
                "details": "Hello! My name is Robert Wang, and I\u2019m from Vancouver, Canada, which is objectively the best place in the world. I like hiking, snowboarding, singing, studying biology, and, unfortunately, playing smash bros (I like to play as Ryu but I\u2019m not that good) so if you\u2019re interested in any of these things, feel free to come chat with me. Cs70 was really eye-opening for me, and I hope that with my help, you\u2019ll have lots of fun in this course :)",
                "imgName": "img/people/robert-wang.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Theo Shiao",
                "email": "theo.shiao@berkeley.edu",
                "details": "Hi! I'm a sophomore from LA majoring in CS and economics. I'm a big fan of basketball (go Lakers) and music, specifically hip hop (Kanye's the GOAT) and r&b. I also enjoy traveling and trying new foods.",
                "imgName": "img/people/theo-shiao.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Noah Kuo",
                "email": "nkuo@berkeley.edu",
                "details": "Hello! My name is Noah and I'm a second-year EECS student from San Diego. In my free time, I like playing basketball, cooking dinner, and taking care of my dog Baxter.",
                "imgName": "img/people/noah-kuo.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "David Wang",
                "email": "kaiyue.wang@berkeley.edu",
                "details": "Hi! I'm a third year majoring in Computer Science coming from Davis. In my free time I enjoy binge watching Netflix shows, kdramas, and anime. Outside of that, I enjoy playing tennis, basketball, reading sci-fi, and hanging with friends. If you see me around say hi! I'm a pretty relaxed guy. ",
                "imgName": "img/people/david-wang.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Max Yao",
                "email": "bojinyao@berkeley.edu",
                "details": "Hi guys, I'm Max. I'm a third year CS major from the Bay Area. I'm pretty into netflix and hbo, and passionate about boba and memes. This is my second semester with CSM and can't wait to meet all of you!!",
                "imgName": "img/people/max-yao.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Vishal Ambavaram ",
                "email": "ambavar98@berkeley.edu",
                "details": "Hi! My name is Vishal and I'm a sophomore studying Data Science. I love burgers, boba (especially the black milk tea from sweethearts, but I've yet to find someone who shares the same opinion ;_;), basketball and my bed. 61B is my favorite class I've taken at Berkeley so far and I can't wait to meet you guys :). ",
                "imgName": "img/people/vishal-ambavaram-.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Gina Condotti",
                "email": "ginacondotti2021@berkeley.edu",
                "details": "Hello! I\u2019m a 2nd year intended CS major from Santa Cruz. I was a student in CSM for CS 61A and B and I am really excited to be a mentor this semester! Outside of school, I like learning languages, making desserts, and color palettes, and exclamation points!",
                "imgName": "img/people/gina-condotti.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "John Chin-Jew",
                "email": "johnchinjew@berkeley.edu",
                "details": "Heyo! I'm John, a Junior transfer studying EECS. 61A is a fun and challenging course; I took it this past summer and am excited to be able to help you master the content this semester! I'm interested in FP, UX, and AI. In my free time I like to code up games, listen to and make music, and hang out with friends!",
                "imgName": "img/people/john-chin-jew.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Eashaan Katiyar",
                "email": "eashaank@berkeley.edu",
                "details": "Hi, my name is Eashaan and I'm a second year EECS major. I really enjoyed this class's material, and I hope to help you gain that same appreciation. I really enjoy burgers, and think Snack Shack is the best burger in Berkeley. I also enjoy playing board games, browsing Reddit, and napping. My roommate likes baking, so you'll probably get homemade cookies once in a while if you join my section!",
                "imgName": "img/people/eashaan-katiyar.jpg",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Joe Deatrick",
                "email": "einzelganger@berkeley.edu",
                "details": "Hey folks! I\u2019m a senior CS major from Florida, mainly interested in theory and security. When I\u2019m not doing 61B, I\u2019m probably playing some nintendo game from the 90\u2019s, \u201cplaying\u201d guitar, or DHCP-spoofing my friends. CSM and 61B changed my entire college experience (for the better \ud83d\udc4c) so I can\u2019t wait to meet you all!",
                "imgName": "img/people/joe-deatrick.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "AJ Sales",
                "email": "ajsales@berkeley.edu",
                "details": "Hi, I'm AJ and I'm a third-year CS and CogSci major from Sacramento, CA (916 ayyy)! If I am not engrossed/procrastinating in CS, you can find me listening to almost every genre on Spotify (can't honestly choose a favorite artist/genre/song but I definitely like old school R&B, movie scores, great singers, 90s power ballads, etc.), playing with Cal Band (I play piccolo!), or starting yet another TV/book series (rewatching Good Place rn but I also just finished To All the Boys I've Loved Before, movie and books)!",
                "imgName": "img/people/aj-sales.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Aivant Goyal",
                "email": "aivantg@berkeley.edu",
                "details": "Hi everyone! I'm a 2nd year CS Major maybe minoring in Education. I absolutely love music \u2014\u00a0I sing and play guitar (favorite artist: Ed Sheeran), and I have an unhealthy addiction to Boba. One unexpected thing about me (I hope?) is that I live in Kansas! ",
                "imgName": "img/people/aivant-goyal.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Alex Stennet",
                "email": "alexstennet@berkeley.edu",
                "details": "Hi there, asphalt is the most recycled material in the world, with 99% getting recycled amounting to 62 million tons each year. It's easily recycled because it's a liquid that can be melted out of asphalt roads. It has a viscosity of 230 billion times higher than water, a measurement made via the longest still running experiment, which started in 1927, called the pitch drop experiment (it's actually live streamed).",
                "imgName": "img/people/alex-stennet.jpg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Christian Wu",
                "email": "christian.wu@berkeley.edu",
                "details": "What's up it's Christian ... I like all the standard stuff like eating, music, data structures, and long walks on the beach.  Very normal human being.",
                "imgName": "img/people/christian-wu.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Patricia Ouyang",
                "email": "patriciaouyang@berkekey.edu",
                "details": "Hi! I'm a second-year EECS major from San Diego. I spend my free time playing video games, watching anime, drawing, and listening to music. I really like Nintendo--my favorite franchise is Pokemon. Feel free to ask me anything!",
                "imgName": "img/people/patricia-ouyang.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "CiCi Huang",
                "email": "cicihuang@berkeley.edh",
                "details": "Hey there! I am a second year CS major from Guilin, China. When I have free time, I enjoy cooking different cuisines, watching Wong Fu Productions, grabbing a huge amount of boba with my peers. CS 61B has always been my favorite class and I hope y'all enjoy it too! I look forward to seeing everyone!  \u2570(\u25cb'\u25e1'\u25cb)\u256e ",
                "imgName": "img/people/cici-huang.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Karen Tu",
                "email": "karentu@berkeley.edu",
                "details": "Hello! I am a 3rd year CS major and I took EE16A in fall 2017.\nIn my spare time I cube & watch an unhealthy amount of korean dramas.\nLooking forward to help you enjoy EE16A as much as I did :)",
                "imgName": "img/people/karen-tu.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "George Zhou",
                "email": "han_zhou@berkeley.edu",
                "details": "I'm boring, join my section to learn more about me :)",
                "imgName": "img/people/george-zhou.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Brian Mi",
                "email": "bmi@berkeley.edu",
                "details": "Hi! I'm a second year majoring in Computer Science. I grew up in Indiana and enjoy playing tennis and badminton in my free time. Other than sports, you'll most likely find me napping. However, I also love getting lost in a good album or watching a thought provoking movie so I'm always taking new music or movie suggestions. I'm excited to meet all of you this semester!",
                "imgName": "img/people/brian-mi.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Evan Corriere",
                "email": "evancorriere@berkeley.edu",
                "details": "Hello! I am currently studying CS and Math - and while I really enjoy computer science, I am also familiar with how difficult and tricky it can be. Even though it was tough, I feel like 61A was the most rewarding class I've taken at Berkeley; I want to help others get as much out of it as possible! In my free time I enjoy skateboarding, going to the beach, and playing games. ",
                "imgName": "img/people/evan-corriere.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Christopher Zheng",
                "email": "c.zheng@berkeley.edu",
                "details": "Hey, I'm a 4th-year Political Science major from the great state of New York with a few too many interests and never learned how to narrow it down. I took CS 61A two years ago and the CS life just kept going from there. Come chat with me if you are ever confused (about school, about what you're doing, about life) because I am too. ",
                "imgName": "img/people/christopher-zheng.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Varun Jhunjhunwalla",
                "email": "varunj@berkeley.edu",
                "details": "Hello everyone! I\u2019m a second year EECS + Music major and am super excited to tutor for 61A this Fall. Outside of teaching, my interests include making music, consuming far too much food, and playing squash. I\u2019ve had a lot of experience as an academic intern and tutor for 61A, and am looking forward to helping students gain a strong understanding of the concepts covered in this class. Feel free to hit me up with any questions about 61A or to rant about how much you hate scheme (even if you aren\u2019t a part of my section)!",
                "imgName": "img/people/varun-jhunjhunwalla.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Starr Yang",
                "email": "starrtyang@berkeley.edu",
                "details": "Hi, I'm a second year CS student. I enjoy cooking, mindlessly reading reddit, taking walks, and video games. I had a blast in CS70 and I hope you do too.",
                "imgName": "img/people/starr-yang.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Yi Zhao",
                "email": "yi@berkeley.edu",
                "details": "Hi, I'm Yi! I'm a 3rd year EECS major from New York. This is my second time mentoring for 61B and a first time senior mentor. My favorite data structure is a heap. In my free time, I like hiking and watching cooking videos. ",
                "imgName": "img/people/yi-zhao.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Griffin Prechter",
                "email": "griffinprechter@berkeley.edu",
                "details": "Hi, I'm Griffin. I'm a Junior from Los Angeles, CA. I love teaching! It's my goal to share all the excitement that the wonderful world of Computer Science has to offer. I like cooking, baking, Shiba Inus, and maximizing gains. My pronouns are he/him.",
                "imgName": "img/people/griffin-prechter.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Dexter Lee",
                "email": "dexterlee@berkeley.edu",
                "details": "Hi everyone!   My name is Dexter and I am a 3rd year majoring in Engineering Physics and minoring in EECS.  I really enjoy EE and have taken several upper division EE courses, so feel free to hmu if you have any questions.  In my spare time, I love watching/playing basketball, hiking, biking, and cooking.  Looking forward to being a part of CSM this semester!  ",
                "imgName": "img/people/dexter-lee.png",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Anirvin Sikha",
                "email": "anirvin@berkeley.edu",
                "details": "My name is Anirvin Sikha. I'm a junior computer science major. I have been in CSM for 3 semesters now and am an Associate Mentor for CS 61A and a Junior Mentor for CS 61B. In my free time I like to listen to music, play video games, and hang out with my friends. We're a fun bunch of rascals who like to urban explore and play hide and seek on campus on the weekends. Hit me up if you wanna swap stories of \"daring\" adventures. ",
                "imgName": "img/people/anirvin-sikha.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Allison Yeh",
                "email": "allisonjyeh@berkeley.edu",
                "details": "Hi! I'm Allison, and I'm a third-year CS major from the Bay Area. In my free time I like to read and be with friends and family. My current favorite food is Thai pumpkin curry. I look forward to meeting you! :)",
                "imgName": "img/people/allison-yeh.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Star Jin",
                "email": "xingyu.jin21@berkeley.edu",
                "details": "Hey everyone! My name is Star, and I'm a second year CS/probably Stats/probably Japanese Language student. I am an international student from China, so fell free to ask me anything about being a international CS major at CAL! Fun fact about me is I am tri-lingual and still look forward to learn more languages! I love cooking, making Tik-Tok (Musical.ly-ish) videos, and playing robotics! Don't forget to ask me what happened in both of the robotics competitions I was in [laughCry] [laughCry].",
                "imgName": "img/people/star-jin.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Daniel Zhang",
                "email": "daniel_zhang@berkeley.edu",
                "details": "Hello everybody! I\u2019m currently a junior at Berkeley studying Computer Science (I think), and am also serving as a TA for CS61C this semester. Going onto Facebook, photography, playing the harmonica, and reading about 19th century European revolutionary political history are some of the hobbies I have. Usually I spend my weekends travelling around the Bay Area exploring different neighborhoods or hiking, though I also love spending time watching movies (Citizen Kane is my favorite)! You can find me studying in one of the many coffee shops in Berkeley during the week though. Some people think I phrase my bios weird, but what they don\u2019t know is that I like inserting hidden messages in the first letter of every single one of my sentences! :)",
                "imgName": "img/people/daniel-zhang.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Catherine Chi",
                "email": "catherinechi@berkeley.edu",
                "details": "Hello everyone! I\u2019m a 2nd year EECS Major, and I\u2019ve started coding ever since freshman year of high school. In my spare time, I really enjoy activities such as dancing, getting lost in my reading, dreaming and napping, looking at aesthetic things such as beautiful flowers, and hanging out with my friends and family, regardless of the occasion.",
                "imgName": "img/people/catherine-chi.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Arin Nair",
                "email": "arinnair@berkeley.edu",
                "details": "Hello! I am a second year C.S. major. I grew up in a large suburb of Chicago but I love it here at Berkeley. I enjoy hanging out with friends and playing video games.  I also love rap music and listening while I work on C.S.",
                "imgName": "img/people/arin-nair.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Stephen Costello",
                "email": "scostello55@berkeley.edu",
                "details": "Hey everyone! I'm a senior studying computer science. I transferred as a junior last year from a community college in Stockton, CA. My main goal is to get 61A students as excited about CS as I am! When I'm not studying CS, you might catch me playing video games or jamming on guitar, bass, or piano with friends. I have also been known to perform in musical theater. I hope that everyone has a great semester!",
                "imgName": "img/people/stephen-costello.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Julianna White",
                "email": "julianna@berkeley.edu",
                "details": "I'm a fourth year from LA and am so excited to help you all learn 61A !! Teaching is something I am really passionate about / have been very involved with at Cal (Course Staff, CS Scholars teacher, ANova, etc.), and I am so pumped to be a CS Mentor again this semester. When I'm not studying or teaching, I'm usually hanging out with friends, eating at one of my favorite restaurants or attempting to cook (i'm a total foodie sos), watching a movie, or getting a sunburn from biking / hiking / exploring SF / doing anything outside.  Looking forward to meeting you all! :)",
                "imgName": "img/people/julianna-white.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Yiling Kao",
                "email": "ylkao@berkeley.edu",
                "details": "Hello! I'm Yiling (pronounced Ee-ling), a third year Computer Science & Cognitive Science major, and I'm from Irvine, CA, a <20-minute drive away from Disneyland, good boba, and dog beaches(!!!) a.k.a all my favorite things. I like swimming, sleeping, fruits, and corny jokes and am always down for music and book recommendations :) Looking forward to meeting you all!",
                "imgName": "img/people/yiling-kao.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Taejin Hwang",
                "email": "taejin@berkeley.edu",
                "details": "Hello everyone! My name is Taejin Hwang and I am a junior majoring in Computer Science and Mathematics. Outside of my busy study schedule,  some wholesome activities I enjoy are watching soccer (football), playing strategy games, and running. Feel free to talk to me about anything but preferably EECS/Math related or sports related. ",
                "imgName": "img/people/taejin-hwang.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Surya Duggirala",
                "email": "suryad96@berkeley.edu",
                "details": "Hey I'm Surya. I like soccer, electronic dance music (talk to me about big room/future bass/electro house), my bed, and my momma. I've been doing this stuff for three years. I'll put money on the fact that you'll pass this course with a good grade. Refund guaranteed if product not up to standards (*Some restrictions may apply). Add me on LinkedIn.",
                "imgName": "img/people/surya-duggirala.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Jessica Yeh",
                "email": "jessicayeh@berkeley.edu",
                "details": "Hi there! I'm Jessica, and I'm a junior EECS major from San Mateo, CA. In my free time, I like to go to concerts, take photos, struggle to keep my succulents alive, and bake pastries. Looking forward to meeting all of you!",
                "imgName": "img/people/jessica-yeh.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Joshua Yang",
                "email": "joshua91214@berkeley.edu",
                "details": "Hiya folks! I'm Josh but I go by Joshie Boshie for reasons LOL. I took 61B during Spring 2018 and it was really fun to take and so I wanted to stay with it for as long as I can haha. I love love love to listen to all types of music; Korean, Contemporary Christian, city pop, vaporwave, etc. If you guys ever want music recommendations, let me know! Sundays are reserved for Church for and if you ever want to talk about life's bigger questions, I'm definitely down to talk about that with you! Regardless of if you're in my section or not, I hope you guys have a great time with 61B and CSM!",
                "imgName": "img/people/joshua-yang.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Jeffrey Chen",
                "email": "jeffreydchen@berkeley.edu",
                "details": "Hi, I'm a 3rd year Computer Science major from New Jersey. My hobbies and interests include volleyball, CS 70 (lol), clothes & sneakers, Rocket League, looking at memes, and binge-watching TV shows. I also (try to) do urban dance, so any tips for that would be greatly appreciated <_< I look forward to working with you all and helping you through CS 70!",
                "imgName": "img/people/jeffrey-chen.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Ashley Chien",
                "email": "ashleychien@berkeley.edu",
                "details": "I'm not teaching a section",
                "imgName": "img/people/ashley-chien.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Kevin Svetlitski",
                "email": "kevin_svetlitski@berkeley.edu",
                "details": "Hi! I'm Kevin and I'm a second year CS major from Houston, Texas. Besides computer science some things I'm passionate about are fighting for students' rights as part of the Student Advocate's Office and sleeping. Looking forward to teaching this semester!",
                "imgName": "img/people/kevin-svetlitski.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Michelle Cheung",
                "email": "micheung@berkeley.edu",
                "details": "Hello! I'm Michelle, a third year EECS major from Redwood City, CA. My favorite food is ice cream and if you have any tips on how to cure my milk tea/iced latte addiction, pls lemme know :o This is my third semester mentoring for 61A and I'm excited to get to know you all! :)",
                "imgName": "img/people/michelle-cheung.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Daniel Lujan",
                "email": "dnlujan@berkeley.edu",
                "details": "Hi! I am a second year studying computer science and data science. Currently, I do 1-on-1 tutoring for CS61A as a part of CS370. In my free time, I enjoy cooking and experimenting with different ingredients. Sometimes, you will see me getting food from Halal Guys or Chipotle. I also play the viola and was part of UCBSO last year. I am very excited for this semester, and can't wait to meet you all!",
                "imgName": "img/people/daniel-lujan.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Ajan Adriano",
                "email": "superdoyboy@berkeley.edu",
                "details": "I'm a third year CompSci/CogSci double and Music minor from Livermore. I enjoy learning various instruments and making music on violin, ukulele, mandolin, etc. I played cymbals in Cal Band, have been a part of various gamelan groups, and dance with AFX. I came in physics intending ME/MSE but switched last summer! When I have time, I like to squeeze in an episode of Bachelor in Paradise or World of Dance. As of now, I've been into the restaurants in the elmwood area. I'm looking forward to teaching you all and being a part of your CS 61A adventure!",
                "imgName": "img/people/ajan-adriano.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Ryan Tjitro",
                "email": "ryan.tjitro@berkeley.edu",
                "details": "Hi everybody! I\u2019m Ryan and I am a second year CS major from San Diego, CA. In my free time, I like learning how to make new foods and binging all sorts of shows on Netflix (especially CW shows in the Arrowverse). I can\u2019t wait to meet you all and hope I can help you learn EE16A this semester!",
                "imgName": "img/people/ryan-tjitro.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Sam Cui",
                "email": "samuelxcui@berkeley.edu",
                "details": "Hi everyone! I'm a second year EECS major, born in Austin, raised in Houston, and matured in LA. Besides doing p-sets, I also spend my time playing guitar, singing in For Christ's Sake A Cappella, and browsing Reddit. I also have a large repertoire of Christmas song lyrics that I know by heart, and I once made myself a giant cheese costume for Halloween that I ended up wearing 4 years in a row (like one of those big Whopper costumes they wear in Burger King commercials back in the day). I really wanna learn French so if you can speak the language of love please come to my section and bestow upon me your experience! <3",
                "imgName": "img/people/sam-cui.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Adam Loeffler",
                "email": "aross.1311@berkeley.edu",
                "details": "Hey everyone! I really want to help you do well in computer science (take it from someone who totally struggled at the beginning of cs61a...and now I'm tutoring! Woah!). I'm funny and I love making myself laugh. Hopefully you think I'm funny too or it could be awkward (oh well). I also really like rock climbing. And food. I look forward to working with you!",
                "imgName": "img/people/adam-loeffler.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Steven Cen",
                "email": "cen.steven@berkeley.edu",
                "details": "Hi! I'm a sophomore who took CS61B last semester studying EECS, although I still have no idea what I specifically want to do with technology. I enjoy the outdoors (Oregon does that to people :) also, I got this picture from Emigrant Wilderness!), watching cooking videos on YouTube, learning about languages, and making music.",
                "imgName": "img/people/steven-cen.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Tina Zhao",
                "email": "tinazhao@berkeley.edu",
                "details": "Hi pals! I\u2019m a third year CS major from Los Angeles, CA. This is my third time teaching CS 61B! Besides teaching, I like listening to indie pop, reading webtoons, taking long naps in the afternoon, and consuming an unhealthy amount of spicy food. CS 61B is an awesome course and I hope I get to share my excitement with ya\u2019ll this semester! ",
                "imgName": "img/people/tina-zhao.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Brian Lee",
                "email": "cluesbj@berkeley.edu",
                "details": "Hi everyone! I am Beom Jin, a sophomore computer science major, but if that is a mouthful for you, please call me Brian. It is a little hard to say where I am from, since I was born in Korea and raised in a beautiful country called Singapore. I love walking around campus and taking pictures of squirrels (often with very little success), and I am an avid reader - recently, I've been really into reading memoirs.  Also, I probably drink an unhealthy amount of Snapple. I am really excited to be a mentor this semester, and whether you have questions on the best food in town or you just want to rant about computer science, come say hi! ",
                "imgName": "img/people/brian-lee.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Chenyu Shi",
                "email": "chenyu.shi@berkeley.edu",
                "details": "Hello, I am a second year CS major. I was born and raised in Ningbo, China and lived in the DMV area before coming to Cal. I really enjoy outdoor activities like hiking and hammocking, and I am trying to pick up parkour and climbing. Come to my section if you are down to go up with me!",
                "imgName": "img/people/chenyu-shi.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Jeremy Mui",
                "email": "jeremymui@berkeley.edu",
                "details": "Hi! I'm a second-year CS major from the LA area. Music and programming have been an important part of my life, and I've had the pleasure of developing a touchless musical instrument using Arduino and photoresistors. I enjoy listening to Zedd, Alan Walker, Marshmello, and Gryffin. I like eating root beer floats and drinking boba. When I'm not busy, I play League of Legends, browse Reddit, and watch Philip DeFranco. Looking forward to meeting you!",
                "imgName": "img/people/jeremy-mui.jpg",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Ryan Nuqui",
                "email": "ryannuqui@berkeley.edu",
                "details": "Hey y'all!\nMy name is Ryan and I'm a second year studying CS and Math. When I'm not doing copious amounts of school work, I enjoy reading, playing badminton, and going out with friends. Feel free to talk to me about anything CS or really anything you're passionate about (I love to learn and I hope you do too :D)!",
                "imgName": "img/people/ryan-nuqui.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Suraj Rampure",
                "email": "suraj.rampure@berkeley.edu",
                "details": "Hey, I'm a third year EECS major from Windsor, Ontario (right across the border from Detroit). I like cars, tech, men's fashion, teaching and rooting for LeBron (go Cavs Lakers!) In addition to being on CSM exec, I also am a TA for Data 100, and teach Introduction to Mathematical Thinking, a new DeCal meant to teach students introductory discrete math concepts.",
                "imgName": "img/people/suraj-rampure.png",
                "course": "Exec",
                "role": "External V"
            }, {
                "name": "Keon Tsang",
                "email": "keonktsang@berkeley.edu",
                "details": "Hey there! I'm a fourth year CS major that switched over from English in my second year after taking 61A. When I'm not teaching, you'll probably find me napping, gaming, or singing poorly to Cantonese music. I hope I can make 61A as enjoyable for you as it was for me!",
                "imgName": "img/people/keon-tsang.jpg",
                "course": "CS61A",
                "role": "Senior Mentor"
            }, {
                "name": "Hannah Yan",
                "email": "hannah.yan@berkeley.edu",
                "details": "Hello! I'm Hannah, a current sophomore CS major from near Chicago. 61b is my favorite class (closely followed by 70), and I honestly loved it. I want to help make the class as fun and fulfilling for you as it was for me. In my free time, I dance a ton, so if you're into that too let's take classes together?? I'm also enjoy problem solving, photography, sharing music, and personal growth, so feel free to start a conversation with me about any of that! At the end of the day, I just want to be here and help y'all be ur best selves :') ",
                "imgName": "img/people/hannah-yan.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Ryan Tran",
                "email": "bobotran@berkeley.edu",
                "details": "Hi everyone! I'm a second-year EECS major from SoCal. My hobbies are hiking, playing the piano, and watching too much YouTube. Games and shows I like include Kingdom Hearts(January 25, 2019 HERE WE COME), Fullmetal Alchemist: Brotherhood, and Avatar: The Last Airbender. I also love roller coasters, cool factoids about space, and of course CS 61B :) I can't wait to meet all of you!",
                "imgName": "img/people/ryan-tran.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Asli Akalin",
                "email": "asliakalin@berkeley.edu",
                "details": "Hello from your favorite Turkish (delight?) person! I am junior studying Computer Science, Economics and Math. This semester I am tutoring for CS70 and CS61A, and I am also in the course staff for CS170! I have tutored CS61A for two semesters and TAd for CS70. I love teaching and I am so happy to meet you all. I like reading, playing chess and making weird noises to communicate with cats. I own 4 Game of Thrones shirts and I know Mandarin Chinese. If I am not teaching or learning I am probably sleeping, I only love my bed and my mom I'm sorry.",
                "imgName": "img/people/asli-akalin.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Owen Bai",
                "email": "obai@berkeley.edu",
                "details": "I'm a sophomore EECS major from Thunder Bay, Canada and CS 70 is by far my favourite class at Berkeley. I love teaching, traveling, and watching tennis. My favourite artist is Eminem. My favourite meal is the $5 lunch special @ King Dong. I hope you'll like CS 70 as much as I do!",
                "imgName": "img/people/owen-bai.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Andrew Lee",
                "email": "andrew_lee@berkeley.edu",
                "details": "Hey everyone! I'm a 3rd-year CS major from Boston, MA! Outside of school I love playing ultimate frisbee, cooking (hmu with cool recipes), following the NFL, and playing all kinds of boardgames (Avalon, Secret Hitler, Codenames...). Wishing you the best of luck in CS 70! It's a challenging class, but I know we can work together to make it a fulfilling experience for everyone!",
                "imgName": "img/people/andrew-lee.png",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Kristen Kafkaloff",
                "email": "kafkaloff@berkeley.edu",
                "details": "Hi! I'm a Senior Mentor and a third year studying computer science. I really enjoyed CS70 and feel that the concepts are both fun and important. CSM gave me the extra support I needed to get the most out of the course while I was taking it, which is why I chose to become a mentor and help those who are in the  position I was in.\n\nOkay here is a jumbled list of things about me. I have been to almost every restaurant with a 4+ star rating on Yelp in Berkeley, so I can give you suggestions. I enjoy outdoorsy stuff: hiking, flying, fishing, skiing, etc. I like playing basketball (come play with me at the RSF/Hearst). I LOVE Disney. I know the words to most Disney songs (HSM, Hannah Montana, you name it), my bedroom growing up was Winnie-the-Pooh themed, and I interned as a software engineer at Walt Disney Imagineering. I love teaching - I have been teaching CS since high school and founded a coding camp for younger students. I enjoy art and baking - watercolor, DIY, banana bread, anything on Pinterest basically. Also I promise my section will be more organized than this paragraph.",
                "imgName": "img/people/kristen-kafkaloff.jpeg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Ryan Deng",
                "email": "rdeng2614@berkeley.edu",
                "details": "Hi everyone! This will be my third semester teaching CSM for CS70. I hope you all have a great time in this course! ",
                "imgName": "img/people/ryan-deng.jpeg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Raguvir Kunani",
                "email": "rkunani@berkeley.edu",
                "details": "Hi! I'm a second year EECS major from Bakersfield, CA. In the many hours I spend procrastinating, I watch copious amounts of standup comedy on Netflix and YouTube, play tennis, and scour the Internet for edgy memes. Outside of CSM, I'm involved in Habitat for Humanity and lab assisting for 61B. Come through to my section, it'll be fun!",
                "imgName": "img/people/raguvir-kunani.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Avinash Nandakumar",
                "email": "avinashnandakumar@berkeley.edu",
                "details": "Hello! I am currently a sophomore studying EECS here at Berkeley. I took 16A during my first semester at Berkeley and really enjoyed the class because of the course staff being so helpful. I love to help people, which is why I'm mentoring for CSM. Overall, I am super social, love to be outdoors, and a huge sports fan. Feel free to talk to me about anything, I will always make myself available for anyone. Looking forward to meeting everyone that signs up for section!",
                "imgName": "img/people/avinash-nandakumar.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Sophia Ding",
                "email": "sophia.rf.ding@gmail.com",
                "details": "Hi! I\u2019m a second year EECS major from SoCal! I enjoy my tea with honey, my music a bit simp, my salads with a lot of avocado, and (most importantly) my microwaveable food from Trader Joe\u2019s. Looking forward to a great semester together!",
                "imgName": "img/people/sophia-ding.jpeg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Amay Saxena",
                "email": "amaysaxena@berkeley.edu",
                "details": "Hey! I'm an EECS+Math junior, and this is my second semester teaching 70 with CSM. When I'm not learning or teaching, you can find me playing music, building robots, or getting angry at strangers online.",
                "imgName": "img/people/amay-saxena.jpg",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Daniel Li",
                "email": "daniel_zh_li@berkeley.edu",
                "details": "Hello, my name is Daniel! I'm from Orange County and am a junior EECS major. I like playing basketball and watching basketball (Go Lakers!) and football. This is my second semester in CSM and I've really loved it and am looking forward to meeting you all!",
                "imgName": "img/people/daniel-li.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Lucas Pan",
                "email": "lucaspan@berkeley.edu",
                "details": "Hi! I\u2019m a senior English & CS major!  My chief literary interests are poetry, criticism, and the twentieth century, but I\u2019m currently somehow obsessed with Melville (...sooo should I have said, \u201cCall me Lucas\u201d...?).  In my free time, I generally like reading, writing, video games, and anime (and cartoons of the non-Japanese variety!)... and whaling.  I mean teaching.  Looking forward to meeting all you crystal clods!",
                "imgName": "img/people/lucas-pan.jpg",
                "course": "CS61A",
                "role": "Associate Mentor"
            }, {
                "name": "Simon Deng",
                "email": "simond@berkeley.edu",
                "details": "Hey! I'm Simon, a fourth year EECS (and somehow Cog Sci) major from the Bay Area. I love helping people with CS and EE, and I hope to get a chance help you too! Other than that, I love free food equally as much, and just free stuff in general. When I'm not out and about picking up free stuff and free meals, you'd probably find me sedentary at home playing PC games or playing Smash or watching some anime...or helping people with CS homework. I also have a very fluffy cat named Biscuit back at home, and I'm always happy to share his fluffy pics! :3",
                "imgName": "img/people/simon-deng.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Sahana Rangarajan",
                "email": "sahana.rangarajan@berkeley.edu",
                "details": "Hello everyone! I'm a 4th year EECS major from the South Bay. I'm also an English minor, so feel free to recommend any cool books! My favorite's Never Let Me Go. I love music (follow me on Spotify!!), orcas, Legend of Zelda, and, of course, EE16A. I'm looking forward to exploring it with all of you this semester!",
                "imgName": "img/people/sahana-rangarajan.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Pranad Reddy",
                "email": "pranad.reddy@berkeley.edu",
                "details": "Hi!! I'm a second year CS student who loves teaching! I took 61A last fall and am excited to come back, this time to teach. You can spot me at the International House eating their delicious food (highly recommend, >>> Crossroads), or at Memorial Gym when I work up the willpower to do so. I'm always listening to music, especially from Travis Scott, The Weeknd, and PARTYNEXTDOOR. I can't get wait to get to know my students, and I'm really excited for the coming semester!",
                "imgName": "img/people/pranad-reddy.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Sean Farhat",
                "email": "s.farhat-sabet@berkeley.edu",
                "details": "Hello there! I'm Sean, a third-year studying computers (wow so unique!). I think 61B teaches some pretty cool stuff, but it can definitely be challenging, so I'd love to help you succeed! In addition, I myself am always trying to improve my teaching effectiveness, so come and join me on that journey as well: I can help you and you can help me! Look at that, we can have a wonderful, mutually beneficial relationship this semester; all you have to do is sign up for my section...",
                "imgName": "img/people/sean-farhat.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Jeffrey Hong",
                "email": "hongjeffrey@berkeley.edu",
                "details": "Hey! I'm a second year CS major from Mountain View, CA. I'm also currently an AI for 61B, so you might see me in lab/office hours. I like playing badminton and getting destroyed in Smash Bros, but lately I've been really into watching cooking videos while eating my crappy food.",
                "imgName": "img/people/jeffrey-hong.jpg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Yining Liu",
                "email": "lyining@berkeley.edu",
                "details": "Hi, I'm a third year studying math and CS. I enjoy teaching, writing notes, learning math and watching cooking videos :P Although I'm not teaching a section this semester, feel free to talk to me! ",
                "imgName": "img/people/yining-liu.JPG",
                "course": "CS70",
                "role": "Senior Mentor"
            }, {
                "name": "Brandon Choy",
                "email": "choyb21@berkeley.edu",
                "details": "Hi everyone, my name is Brandon and I'm a second year EECS major. I've been an academic intern for CS61a for two semesters, and I've done some form of teaching or tutoring since freshman year of high school! Some of my hobbies include skiing, I'm part of the Cal Ski Team, poi, hiking, and playing games with my friends.",
                "imgName": "img/people/brandon-choy.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Arjun Sahai",
                "email": "arjunsahai@berkeley.edu",
                "details": "Hi Guys. Super excited to be a csm Mentor this semester! \n\nSome facts about me, I love playing soccer and know a lot about pokemon. If you have any questions about these topics (or computer science too) hit me up!",
                "imgName": "img/people/arjun-sahai.jpg",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Jiasheng Qin",
                "email": "jqin0713@berkeley.edu",
                "details": "I'm currently a junior EECS major in my third year here at Berkeley; I plan to graduate this year, maybe go to grad school afterwards and try to get a Masters and/or PhD. I've studied CS since my high school days and am familiar with a variety of programming languages, though my strongest suits are certainly object-oriented ones like Java. I've coded for a start-up game design company in Toronto, helped a debugging team at Cisco by creating a very task-specific GUI for them, and also dealt with database management over at Baylor's genetics branch; from that, it's probably easy to deduce that I'm not really overwhelmingly interested in any one EECS-related field at the moment, and I'm still looking for something to hook me. Technical details aside, in my spare time, you'll pretty much always catch me playing MMOs or having fun with friends on 100% Orange Juice. In my super-spare time, I might play the violin, something that I've been learning for about 12 years now. On the weekends, I usually go out to either run or swim, though I'm always down to play some tennis or ping pong. I particularly enjoy listening to music, mostly classical music or video game OSTs (or combinations of both), and one of my favorite artists is probably the doujin group TA Music. I'm not much of a picky eater, so I don't really have a favorite restaurant, but if I have to grab a quick meal in case I miss dining hall hours, I'll most likely be at IBs. As for other clubs, I sometimes attend the Robotics club meetings here, and am also a member of NSLS.",
                "imgName": "img/people/jiasheng-qin.jpeg",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Arda Sozer",
                "email": "asozer@berkeley.edu",
                "details": "I'm an economics and computer science major. I love to box in my free time and go to coffee shops with friends! ",
                "imgName": "img/people/arda-sozer.png",
                "course": "CS61B",
                "role": "Junior Mentor"
            }, {
                "name": "Emmett Ling",
                "email": "emmettl@berkeley.edu",
                "details": "The students are many but the mentors are few.",
                "imgName": "img/people/emmett-ling.jpg",
                "course": "CS70",
                "role": "Associate Mentor"
            }, {
                "name": "Japjot Singh",
                "email": "calzoom@berkeley.edu",
                "details": "I love data science and intend continue research and education post-undergrad. I spend most of my time learning and teaching computer science, dancing on cal bhangra, and eating (In-N-Out).\n\nResearch Interests: Data analytics and the optimization of complex processes, systems, and organizations.\nFavorite Baseketball Player: Tracy McGrady\nIn-N-Out Order: Two grilled cheese burgers w/whole grilled onions and pickles, unsalted french fries and one neapolitan milkshake.",
                "imgName": "img/people/japjot-singh.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Zachary Golan-Strieb",
                "email": "zacharyjgs@berkeley.edu",
                "details": "Hi! My name is Zack. I am a computer science major looking to pursue a research career in thoeretical computer science and machine learning. I was on the course staff for EE 16A last semester as tutor, and I decided to continue tutoring with CSM because I found it so fun. A few things about me: I like watching basketball, backpacking, and eating fried food.",
                "imgName": "img/people/zachary-golan-strieb.png",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Hunter Gissinger",
                "email": "huntergissinger@berkeley.edu",
                "details": "Hi everyone! I am a sophomore at Berkeley. I grew up in San Diego, and then lived in LA. I've studied in London for a semester and have been all over Europe - for all you adventurers out there. My favorite artists are Eminem, Chance the Rapper, and X. I spend my Sundays watching NFL games! ",
                "imgName": "img/people/hunter-gissinger.png",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Lavanya Mittal",
                "email": "lavamitt@berkeley.edu",
                "details": "Hey there! nice to meet ya. I loved CS70 and hope that you will too :) In my spare time, I love hiking, going to concerts (currently looking for an indie concert buddy), and creative writing. On Sunday mornings, you can find me at Thai Temple drowning myself in yellow curry.",
                "imgName": "img/people/lavanya-mittal.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Yannan Tuo",
                "email": "ytuo@berkeley.edu",
                "details": "\"when nothing goes right, go left\" :^)",
                "imgName": "img/people/yannan-tuo.png",
                "course": "EE16A",
                "role": "Senior Mentor"
            }, {
                "name": "Oscar Ortega",
                "email": "oscar.g.ortega.5@berkeley.edu",
                "details": "Hi everyone! I'm Oscar and I'm a third year CS student from South Lake Tahoe, CA. This is my third time mentoring for CSM and my second time mentoring for 61B. I love to play basketball although as of late I have taken a fondness for running and cooking. CS 61B has been one of my favorite classes here in Berkeley, I hope and anticipate you all will enjoy it :). I'm looking forward to meeting all of you!\n",
                "imgName": "img/people/oscar-ortega.png",
                "course": "CS61B",
                "role": "Associate Mentor"
            }, {
                "name": "Richard Wang ",
                "email": "richardwang0110@berkeley.edu",
                "details": "Hi! I am a second year Engineering Physics Major who's also intending on an EECS minor. I was born in Shanghai, moved to Canada, and then to the Bay Area where I've lived most of my life. In my free time, I enjoy playing piano, chess, basketball, and League of Legends. My favorite food is ramen which is why one of my favorite restaurants here is Ippudo. I'm excited to meet you! ",
                "imgName": "img/people/richard-wang-.png",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Michelle Gil ",
                "email": "gilm@berkeley.edu",
                "details": "What\u2019s up! I\u2019m Michelle, and I\u2019m a second-year studying Computer Science from the Los Angeles area (310 lit). When I\u2019m not \u2013 or procrastinating, as per usual\u2013 stu-dying CS, you can catch me napping, watching Netflix/Hulu, making endless 310 inspired Spotify playlists, or roasting my friends. CS61A holds a very special, love-hate, place in my heart, and I can\u2019t wait to work with you all through this journey!   ",
                "imgName": "img/people/michelle-gil-.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Stella Wang",
                "email": "20stellaw@berkeley.edu",
                "details": "Hey y'all! My name is Stella Wang, a 3rd year CogSci Data double with a minor in CS, and this is my second time being a tutor for 61A! I'm super into linguistics, CS, and math and stuff, but other than academics, I'm huge on music, like dance and singing and playing instruments and stuff. I also love food and boba and basically anything sweet ehehe I can't wait to meet all of you <3",
                "imgName": "img/people/stella-wang.jpg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Shannon Hong",
                "email": "shannon.hong@berkeley.edu",
                "details": "Hello! I am a second year intended Data Science and Economics major from Cerritos, CA. CS 61A has been my favorite course that I've taken so far at Berkeley :O I like many, many things so come talk to me to find out what some of them are! My pronouns are she/her.",
                "imgName": "img/people/shannon-hong.jpeg",
                "course": "CS61A",
                "role": "Junior Mentor"
            }, {
                "name": "Danny Chu",
                "email": "dannychu@berkeley.edu",
                "details": "Hi everyone!\n\nName's Dan or Danny or James. As long as you get my attention, you'll be fine. I enjoy holding cameras, being photographed, or attempting being a basic person. If you want to talk about coding, you've come to the right place! Come talk to me about anything :) I'd love to hear about your latest boba crave or annoying roommate stories.",
                "imgName": "img/people/danny-chu.jpg",
                "course": "CS61B",
                "role": "Senior Mentor"
            }, {
                "name": "Esha Madhekar",
                "email": "esha@berkeley.edu",
                "details": "Hi, I'm Esha! I'm a sophomore studying EECS from San Diego. I enjoy teaching, dancing, hiking, and I am currently learning how to cook. I recently took CS70 and enjoyed it so I hope you will too!",
                "imgName": "img/people/esha-madhekar.jpg",
                "course": "CS70",
                "role": "Junior Mentor"
            }, {
                "name": "Nikhil Sharma ",
                "email": "sharmanik99@berkeley.edu",
                "details": "Hi everyone! My name is Nikhil and I'm currently a sophomore studying EECS here at Berkeley. I took EE16A last year and have been teaching CSM for two semesters now. My favorite food place here is Urbann Turbann and I'm a huge Drake fan. I'm really excited to meet all of you and help you through the wonderful class that is EE16A! Feel free to ask me about anything and have a great semester! ",
                "imgName": "img/people/nikhil-sharma-.jpg",
                "course": "EE16A",
                "role": "Junior Mentor"
            }, {
                "name": "Margo Oka",
                "email": "oka@berkeley.edu",
                "details": "I'm a math major and I like cats. There is nothing else to my identity. ",
                "imgName": "img/people/margo-oka.png",
                "course": "CS61A",
                "role": "Associate Mentor"
            }]
            split_bios = {}
            for (var i = 0; i < bios.length; ++i) {
                var course = bios[i].course;
                if (!(course in split_bios)) {
                    split_bios[course] = [bios[i]];
                } else {
                    split_bios[course].push(bios[i]);
                }
            }

            courses = Object.keys(split_bios);
            for (var i = 0; i < courses.length; ++i) {
                $scope[courses[i]] = split_bios[courses[i]]
            }
        });
})();