(function() {
    angular.module('CSM')
        .controller('BiosController', function($scope) {
            /*
             * Each bio json object has the following properties:
             *   name: the person's first/last/name
             *   details: the person's bio
             *   imgName: the path of the image relative to img/people, or img/team
             *            for exec members
             *   courses: a mapping of "CS61A", "CS61B", "CS61C", "CS70", "CS88",
             *            "EE16A", "EXEC" to the person's role in the course
             */
            const COURSES = ["CS61A", "CS61B", "CS61C", "CS70", "CS88", "EE16A", "EXEC"];
            const EXEC_BIOS = [
                {
                    "name": "Jason Goodman",
                    "courses": {
                        "EXEC": "President"
                    },
                    "imgName": "jason-exec.jpg"
                },
                {
                    "name": "Chris Allsman",
                    "courses": {
                        "EXEC": "Internal Vice President"
                    },
                    "imgName": "chris-exec.jpg",
                    "details": "Hi there! I'm a 4th year computer science major from Fresno, California and my pronouns are they/them! I've been with CSM for 6 semesters now, teaching 61A for most of that time. Now I'm excited to help facilitate mentoring sections and some exciting events as IVP! Outside of teaching and education, my interests include cooking, (computational) biology, and avant-garde 20th century music."
                },
                {
                    "name": "Suraj Rampure",
                    "courses": {
                        "EXEC": "External Vice President"
                    },
                    "imgName": "suraj-exec-sp19.png",
                    "details": "Hey, I\u2019m a third year EECS major from Windsor, Ontario (right across the border from Detroit). I like cars, tech, teaching and rooting for LeBron (go Cavs Lakers!). This is my fifth semester as a part of CSM, and this is my fourth semester as a TA; currently, I\u2019m TA\u2019ing Data 100, but have TA\u2019d CS 61A and Data 8 in the past. I also teach http://imt-decal.org."
                },
                {
                    "name": "Yiling Kao",
                    "courses": {
                        "EXEC": "Communications"
                    },
                    "imgName": "yiling-kao-square.jpg",
                    "details": "Hello! I'm Yiling (pronounced Ee-ling), a third year Computer Science & Cognitive Science major, and I'm from Irvine, CA, a <20-minute drive away from Disneyland, good boba, and dog beaches a.k.a all my favorite things. I like swimming, sleeping, fruits, and corny jokes and am always down for music and book recommendations. Looking forward to meeting you all!"
                },
                {
                    "name": "Jose Chavez",
                    "courses": {
                        "EXEC": "Socials Chair"
                    },
                    "imgName": "jose-chavez-exec.jpg",
                    "details": "Hello! I am fourth year Computer Science and Film major. I am a member in the Cal Band and also a TA for CS184. Last summer, for General Motors and Cruise, I built an Android application that allowed autonomous car riders to chat with the car and ask for recommendations on where to eat, shop, and more! Some of free time includes playing flag football, performing in small events with the Cal Band, or director a movie of mine! "
                },
                {
                    "name": "Jonathan Shi",
                    "courses": {
                        "EXEC": "Tech Chair"
                    },
                    "imgName": "jonathan-shi-exec.jpg",
                    "details": "Hello there! I'm a 2nd year EECS major from the Bay Area. I like programming languages where the compiler yells at you a lot. Outside CSM, I play soprano/alto sax for the Intermission Orchestra, and I spend an inordinate amount of my breaks watching anime. I also play chess and Super Smash Bros. at a reasonable level, so hmu."
                },
                {
                    "name": "Alex Stennet",
                    "courses": {
                        "EXEC": "CS 61A Coordinator"
                    },
                    "imgName": "alex-stennet.jpg"
                },
                {
                    "name": "Catherine Cang",
                    "courses": {
                        "EXEC": "CS 61A Coordinator"
                    },
                    "imgName": "catherine-cang1.jpg"
                },
                {
                    "name": "Alan Ton",
                    "courses": {
                        "EXEC": "CS 61B Coordinator"
                    },
                    "imgName": "alan-ton.jpeg",
                    "details": "Hi! I'm a 3rd year EECS student from Walnut, CA and this is my 4th semester teaching CS61B with CSM."
                },
                {
                    "name": "Danny Chu",
                    "courses": {
                        "EXEC": "CS 61B Coordinator"
                    },
                    "imgName": "danny-exec.jpg",
                    "details": "Mentoring is bad for you."
                },
                {
                    "name": "Kristen Kafkaloff",
                    "courses": {
                        "EXEC": "CS 70 Coordinator"
                    },
                    "imgName": "kristen-exec.jpg",
                    "details": "Hi! I love teaching and have been teaching since high school. CSM gave me the extra support I needed to get the most out of CS70 while I was taking it and it\u2019s why I enjoy the course so much. I love outdoorsy stuff, playing basketball, and basically anything on Pinterest (DIY, banana bread, etc). I also LOVE Disney - I know the words to most Disney songs (HSM, Frozen, you name it). "
                },
                {
                    "name": "Max Ovsiankin",
                    "courses": {
                        "EXEC": "CS 70 Coordinator"
                    },
                    "imgName": "max-ovsiankin-square.jpeg"
                },
                {
                    "name": "Michelle Mao",
                    "courses": {
                        "EXEC": "EE 16A Coordinator"
                    },
                    "imgName": "michelle-mao-exec.jpg",
                    "details": "I was born in Michigan but spent most of my life in Shanghai--the best city in the world. On campus and aside from CSM, you'll find me working with AWE, performing with the Overtones, or building apps. Off campus I love cooking, biking, and snowboarding. I'm taking a design/philosophy class and the Ethics and Friendship DeCal this semester. Hit me up to chat!"
                },
                {
                    "name": "Dominic Carrano",
                    "courses": {
                        "EXEC": "EE 16A Coordinator"
                    },
                    "imgName": "dominic-exec.jpg",
                    "details": "Hey there, I'm Dominic! I'm a third year EECS major from Livermore, California interested in signal processing. This is my third semester in CSM for EE 16A, and second as a TA for EE 120. In my free time, I enjoy exercising at the RSF, as well as playing and watching soccer. Looking forward to a great semester!"
                },
                {
                    "name": "Katherine Liu",
                    "courses": {
                        "EXEC": "CS 61C Coordinator"
                    },
                    "imgName": "katherine-liu-exec.jpg",
                    "details": "Hi! My name's Katherine, and I'm a third year CS major. I love reading and writing, with a particular emphasis on slam poetry. I also love alternative music and dark pop (which lends itself to a lot of indie artists), podcasts (99 Percent Invisible and Serial are my favorites, but I'm always open to more suggestions), and parentheses (except in Scheme). I'm really excited for this semester with y'all!"
                },
                {
                    "name": "Daniel Zhang",
                    "courses": {
                        "EXEC": "CS 61C Coordinator"
                    },
                    "imgName": "daniel-zhang-exec.jpg"
                },
                {
                    "name": "Alex Kassil",
                    "courses": {
                        "EXEC": "CS 88 Coordinator"
                    },
                    "imgName": "alex-kassil.png",
                    "details": "HELLO! My name is Alex and I am a second year CS+Math Major. I've been a CS88 TA twice and a Stat 140 tutor once, this is my first time tutoring 61B! I am so excited and I hope you sign up for my section. Come for fun, occasional food, and plenty of high energy learning. :D :D :D"
                },
                {
                    "name": "Chae Park",
                    "courses": {
                        "EXEC": "CS 88 Coordinator"
                    },
                    "imgName": "chae-exec.jpg",
                    "details": "Hi! I am Chae, and I am a third-year CS major from Carlsbad, CA! In my free time, I enjoy baking, cafe hopping, and drinking boba. My pronouns are she/her"
                },
                {
                    "name": "Aditya Baradwaj",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "aditya.jpg"
                },
                {
                    "name": "Jerry Huang",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "jerry-exec.jpg"
                },
                {
                    "name": "Yannan Tuo",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "yannan-tuo-square.jpg",
                    "details": "\"when nothing goes right, go left\" :^)"
                },
                {
                    "name": "Paul Bitutsky",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "paul-exec.jpg"
                },
                {
                    "name": "Varsha Ramakrishnan",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "varsha-exec-sp19.jpg",
                    "details": "Hello! I\u2019m a 3rd year EECS major interested in machine learning for virtual and augmented reality. In my free time, I play Nintendo games, read sci-fi novels, and obsess over LotR and the Silmarillion. Go Bears!"
                },
                {
                    "name": "Mudit Gupta",
                    "courses": {
                        "EXEC": "Advisor"
                    },
                    "imgName": "mudit-exec-sp19.jpg",
                    "details": "Hiya, I'm Mudit \u2013\u2013 a senior in EECS. I spent most of my time outside of my classes doing teaching-related things. I've TAed EE16A, and Head TAed CS170 and now CS61B. Feel free to reach out to me for anything!"
                }
            ];

                        const COURSE_BIOS = [
                {
                    "name": "Yiling Kao",
                    "email": "ylkao@berkeley.edu",
                    "details": "Hello! I'm Yiling (pronounced Ee-ling), a third year Computer Science & Cognitive Science major, and I'm from Irvine, CA, a <20-minute drive away from Disneyland, good boba, and dog beaches a.k.a all my favorite things. I like swimming, sleeping, fruits, and corny jokes and am always down for music and book recommendations. Looking forward to meeting you all!",
                    "imgName": "yiling-kao.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Mudit Gupta",
                    "email": "mudit@berkeley.edu",
                    "details": "Hiya, I'm Mudit \u2013\u2013 a senior in EECS. I spent most of my time outside of my classes doing teaching-related things. I've TAed EE16A, and Head TAed CS170 and now CS61B. Feel free to reach out to me for anything!",
                    "imgName": "mudit-gupta.jpg",
                    "courses": {}
                },
                {
                    "name": "Dominic Carrano",
                    "email": "dcarrano@berkeley.edu",
                    "details": "Hey there, I'm Dominic! I'm a third year EECS major from Livermore, California interested in signal processing. This is my third semester in CSM for EE 16A, and second as a TA for EE 120. In my free time, I enjoy exercising at the RSF, as well as playing and watching soccer. Looking forward to a great semester!",
                    "imgName": "dominic-carrano.jpg",
                    "courses": {
                        "EE16A": "Coordinator"
                    },
                    "website": "http://dominiccarrano.github.io"
                },
                {
                    "name": "Chris Allsman",
                    "email": "callsman@berkeley.edu",
                    "details": "Hi there! I'm a 4th year computer science major from Fresno, California and my pronouns are they/them! I've been with CSM for 6 semesters now, teaching 61A for most of that time. Now I'm excited to help facilitate mentoring sections and some exciting events as IVP! Outside of teaching and education, my interests include cooking, (computational) biology, and avant-garde 20th century music.",
                    "imgName": "chris-allsman.jpg",
                    "courses": {}
                },
                {
                    "name": "Danny Chu",
                    "email": "dannychu@berkeley.edu",
                    "details": "Mentoring is bad for you.",
                    "imgName": "danny-chu.jpg",
                    "courses": {
                        "CS61B": "Coordinator"
                    },
                    "website": "https://dannychuy.github.io"
                },
                {
                    "name": "Jose Chavez",
                    "email": "jrocker3@berkeley.edu",
                    "details": "Hello! I am fourth year Computer Science and Film major. I am a member in the Cal Band and also a TA for CS184. Last summer, for General Motors and Cruise, I built an Android application that allowed autonomous car riders to chat with the car and ask for recommendations on where to eat, shop, and more! Some of free time includes playing flag football, performing in small events with the Cal Band, or director a movie of mine! ",
                    "imgName": "jose-chavez.jpg",
                    "courses": {}
                },
                {
                    "name": "Suraj Rampure",
                    "email": "suraj.rampure@berkeley.edu",
                    "details": "Hey, I\u2019m a third year EECS major from Windsor, Ontario (right across the border from Detroit). I like cars, tech, teaching and rooting for LeBron (go Cavs Lakers!). This is my fifth semester as a part of CSM, and this is my fourth semester as a TA; currently, I\u2019m TA\u2019ing Data 100, but have TA\u2019d CS 61A and Data 8 in the past. I also teach http://imt-decal.org.",
                    "imgName": "suraj-rampure.png",
                    "courses": {},
                    "website": "http://surajrampure.com"
                },
                {
                    "name": "Kristen Kafkaloff",
                    "email": "kafkaloff@berkeley.edu",
                    "details": "Hi! I love teaching and have been teaching since high school. CSM gave me the extra support I needed to get the most out of CS70 while I was taking it and it\u2019s why I enjoy the course so much. I love outdoorsy stuff, playing basketball, and basically anything on Pinterest (DIY, banana bread, etc). I also LOVE Disney - I know the words to most Disney songs (HSM, Frozen, you name it). ",
                    "imgName": "kristen-kafkaloff.jpg",
                    "courses": {
                        "CS70": "Coordinator"
                    }
                },
                {
                    "name": "Yannan Tuo",
                    "email": "ytuo@berkeley.edu",
                    "details": "\"when nothing goes right, go left\" :^)",
                    "imgName": "yannan-tuo.jpg",
                    "courses": {}
                },
                {
                    "name": "Chae Park",
                    "email": "pchae97@berkeley.edu",
                    "details": "Hi! I am Chae, and I am a third-year CS major from Carlsbad, CA! In my free time, I enjoy baking, cafe hopping, and drinking boba. My pronouns are she/her",
                    "imgName": "chae-park.jpg",
                    "courses": {}
                },
                {
                    "name": "Dexter Lee",
                    "email": "dexterlee@berkeley.edu",
                    "details": "Hi everyone! My name is Dexter and I am a 3rd year majoring in Engineering Physics and minoring in EECS. I really enjoy EE and have taken several upper division EE courses, so feel free to hmu if you have any questions. In my spare time, I love watching/playing basketball, hiking, biking, and cooking. Looking forward to being a part of CSM this semester!",
                    "imgName": "dexter-lee.PNG",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Taejin Hwang",
                    "email": "taejin@berkeley.edu",
                    "details": "Hello everyone! My name is Taejin Hwang and I am a junior majoring in Computer Science and Math. Outside of my impossibly busy study schedule, some wholesome activities I enjoy are watching soccer (football), playing strategy games, and running. Feel free to talk to me about anything, especially anything Data Science or Math related, or about the latest soccer news.",
                    "imgName": "taejin-hwang.png",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Michelle Mao",
                    "email": "michelle.mao@berkeley.edu",
                    "details": "I was born in Michigan but spent most of my life in Shanghai--the best city in the world. On campus and aside from CSM, you'll find me working with AWE, performing with the Overtones, or building apps. Off campus I love cooking, biking, and snowboarding. I'm taking a design/philosophy class and the Ethics and Friendship DeCal this semester. Hit me up to chat!",
                    "imgName": "michelle-mao.jpg",
                    "courses": {
                        "EE16A": "Coordinator"
                    }
                },
                {
                    "name": "Austin Do",
                    "email": "austincqdo@berkeley.edu",
                    "details": "Hi! I\u2019m an EECS junior from Huntington Beach, CA. I enjoy reading, backpacking the Sierra, tending to plants, running, fishing, and listening to music. Some favorites of mine are Songs: Ohia (band), Federico Fellini (film director), and The Pale King (novel).",
                    "imgName": "austin-do.jpg",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Paul Shao",
                    "email": "paulshaoyuqiao1@berkeley.edu",
                    "details": "I'm a second year EECS student at Berkeley. I really love hiking, coffee, and classical music (favorite violinist is Hilary Hahn, no questions asked). Trying to start the new year out strong, so I've been keeping up with almost all my NY resolutions (eating healthy and going to the gym XD)  Besides CSM, I'm also currently the Android instructor at Mobile Developers of Berkeley. ",
                    "imgName": "paul-shao.jpg",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Varsha Ramakrishnan",
                    "email": "vio@berkeley.edu",
                    "details": "Hello! I\u2019m a 3rd year EECS major interested in machine learning for virtual and augmented reality. In my free time, I play Nintendo games, read sci-fi novels, and obsess over LotR and the Silmarillion. Go Bears!",
                    "imgName": "varsha-ramakrishnan.JPG",
                    "courses": {}
                },
                {
                    "name": "Sherwin Afshar",
                    "email": "sherwina210@berkeley.edu",
                    "details": "Hello! I'm a second year EECS and am a huge circuit person. I've been doing hobby electronics and making random things for fun since high school and am thrilled to be able to study EE in depth at Cal. I also play Table Tennis and am in the competitive team. Besides table tennis, I am part of the electrical team at Pioneers of Engineering here at Cal, and like to play League of Legends and juggle in my free time. ",
                    "imgName": "sherwin-afshar.jpeg",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Akash Velu",
                    "email": "akashvelu@berkeley.edu",
                    "details": "Hey everyone! My name is Akash Velu, and I'm a 2nd year EECS student from SoCal. EE16A is a great course, and I hope that you will enjoy it as well! In my free time, I love playing and watching all kinds of sports, especially basketball and tennis, playing the piano, listening to Post Malone, and rewatching How I Met Your Mother. I hope to see you in section!",
                    "imgName": "akash-velu.png",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Justin Cheng",
                    "email": "jcheng412@berkeley.edu",
                    "details": "I am a second year computer science major from Edison, NJ. I play violin and video games.",
                    "imgName": "justin-cheng.JPG",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Samuel Taplin",
                    "email": "samtaplin@berkeley.edu",
                    "details": "Hi all! I'm a second year studying CS and Political Science from DC. When not in class, you might find me at Imm Thai, the Glade, or ballin' at the RSF. Feel free to talk to me about 61A, Politics, the future of humanity or anything at all! (He/him)",
                    "imgName": "samuel-taplin.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Mansi Shah",
                    "email": "emansishah@berkeley.edu",
                    "details": "Hi! I'm a senior majoring in computer science and minoring in education. In addition being a tutor CS61B, I'm also a TA for CS10, which I (also) love a lot. In my free time, I like to dance (I'm not great but I'm taking some PE classes to help me) and watch TV! I loved taking 61B and I really hope you love it too!",
                    "imgName": "mansi-shah.png",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Hunter Gissinger",
                    "email": "huntergissinger@berkeley.edu",
                    "details": "Hi Guys! I am a Computer loving kid from San Diego / LA. Big time Chargers Fan so if you like the Raiders this section is not for you! (kidding). My goal is to show YOU the amazing world that is computer science.",
                    "imgName": "hunter-gissinger.png",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Karina Chang",
                    "email": "jkarinac@berkeley.edu",
                    "details": "Hi!  I'm a third year EECS student from Maryland :')  I've taught EE16A and EE16B for a few semesters - teaching is both really rewarding and really stressful, but it's given me a lot of confidence and happiness.  Some fun (or not fun) facts:  I love operating systems and product design, I drink coffee with an insane amount of cream and sugar, and I spend a lot of time doing photography!  Photography has been a huge part of my life, and I do a lot of fashion/portrait photography on campus.  Let me know if you ever want to talk about product, photography, coffee, or anything else!  \n\n  ",
                    "imgName": "karina-chang.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Lydia Lee",
                    "email": "lydia.lee@berkeley.edu",
                    "details": "I'm a graduate student here in the EECS department and have been a TA for EE16A four times (thrice as an undergraduate here at Berkeley and once as a grad student). My research heavily involves circuits as they apply to linear algebra computation, but I had a fair amount of experience with device physics as an undergrad. Hobby-wise, I enjoy trip-planning and dabble with digital photography, and my weekends tend to be split between the lab and finding good food around the Bay (10/10 recommend Jayakarta and Imm Thai for Berkeley, by the way). ",
                    "imgName": "lydia-lee.jpg",
                    "courses": {},
                    "website": "http://people.eecs.berkeley.edu/~lydialee/"
                },
                {
                    "name": "Kevin Lu",
                    "email": "kzl@berkeley.edu",
                    "details": "Hello! I am a first year EECS major from Pennsylvania. CS 70 has been my favorite class at Berkeley. Outside of computer science I like math and memes. Looking forward to a great semester!",
                    "imgName": "kevin-lu.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Brandon Choy",
                    "email": "choyb21@berkeley.edu",
                    "details": "Hello! I'm a second year EECS major, and when I'm not dealing with school responsibilities, I enjoy rock climbing and going up to Tahoe to ski! I've been an Academic Intern for CS61A for two semesters before, and this is currently my second semester as a part of CSM. ",
                    "imgName": "brandon-choy.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Leon Xu",
                    "email": "leonxu@berkeley.edu",
                    "details": "Hi all! I'm a sophomore EECS major from SoCal.  I took CS70 two semesters ago and was a reader last semester.  Hobbies for my free time (haha) include board games, video games, and reading.",
                    "imgName": "leon-xu.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Zachary Golan-Strieb",
                    "email": "zacharyjgs@berkeley.edu",
                    "details": "I am a sophomore CS major. I love watching basketball and eating jalapeno chips!",
                    "imgName": "zachary-golan-strieb.jpeg",
                    "courses": {
                        "EE16A": "Associate Mentor"
                    }
                },
                {
                    "name": "Nikhil Jain",
                    "email": "nikhil.jain@berkeley.edu",
                    "details": "Hello! My name is Nikhil and I'm a sophomore CS major from New Jersey. I love tennis, OKC basketball, hiking, stand up comedy, and dogs.\n\nFun fact: I can play ping pong with my right inclusive-or left hand.",
                    "imgName": "nikhil-jain.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "website": "http://nikhiljain17.github.io"
                },
                {
                    "name": "Wendy Hua",
                    "email": "wendy_hua@berkeley.edu",
                    "details": "Hi! I'm a junior CS major from Texas. I love music from all genres (including country and death metal, please don't hate me), so if you wanna discuss your favorite songs or have any recommendations, come talk to me! I spend most of my free time watching cute dog videos or playing video games, and you will probably see pictures of my dog a lot. CS61B is one of my favorite classes at Berkeley, and I hope ya'll will enjoy the class too!",
                    "imgName": "wendy-hua.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Sai Kapuluru",
                    "email": "saikapuluru@berkeley.edu",
                    "details": "Hey guys, I am a second year computer science major, interested in whatever the field has to offer(TBH don't know at all yet). I really adore basketball and fantasy sports, so if you want to ever do a fantasy league with me, hit me up. I also do enjoy various types of music from main stream hip-hop to indie rock, and especially r&b. Taylor Swift is probably my favorite artist though, but yeah if you are ready to have as much fun as you can while learning I would be excited to have you in my section.",
                    "imgName": "sai-kapuluru.JPG",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Rahul Jain",
                    "email": "rahuljcool26@berkeley.edu",
                    "details": "Hey y'all! Nice to meet all of you people :). I am a 2nd year Computer Science and Applied Mathematics dual major from the Los Angeles area so HMU if you either of these two (go math!) or if ur from the area. I took this class in Fall 2017 and I've been on course staff for two semesters now. I'm a HUGE Lakers fan since day 1 and Kobe Bryant is my all time favorite. My hobbies include sleeping, watching Netflix, attempting to play basketball, and reading about current issues in the global sense. I absolutely love Linear Algebra and Calculus so I'm always down to talk about both of these anytime of the day. I love to teach and interact with others and talk to people so HMU if you ever want to talk about anything here! My favorite restaurant here would prolly have to be Taco Bell on Durant :p. All in all, I hope you enjoy this course as much as I did and I hope you learn some really cool and wonderful stuff from this class! Have a rad day!",
                    "imgName": "rahul-jain.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Shayna Kothari",
                    "email": "shayna.kothari@berkeley.edu",
                    "details": "Hello! My name is Shayna, and I'm a second-year EECS major and Human Rights minor. Among other things, I love superheroes, science, and technology ethics; in my free time, you'll probably catch me perusing the aisles of Trader Joe's, listening to music, or sleeping. ",
                    "imgName": "shayna-kothari.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Michael Chen",
                    "email": "avi1234@berkeley.edu",
                    "details": "I'm currently a freshman who just took CS61A last semester, and has been programming for a few years now. I love sports and gaming, so am down to talk about them anytime. I have a huge mixture of music I listen to: Chainsmokers, Kendrick Lamar, just whatever's good. I'm pretty relaxed and consider myself a goofy guy, so feel free to be weird around me. ",
                    "imgName": "michael-chen.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Uma Unni",
                    "email": "umaunni@berkeley.edu",
                    "details": "Hi! I\u2019m Uma, a second-year CS major from the Bay Area. This will be my third semester being involved with 61A; I really loved the class and I hope you will too! In my free time, I like binge-watching Netflix shows, solving Rubik's cubes, and messing around with random side projects. ",
                    "imgName": "uma-unni.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Isabelle Zhou",
                    "email": "isabellezhou@berkeley.edu",
                    "details": "Hey everyone! My name is Isabelle and I'm a first-year EECS student from Maryland. When I'm not coding, I'm baking bread or playing cards! In my free time, I also play tennis or listen to podcasts. Feel free to ask me about anything (computer science related or otherwise)!",
                    "imgName": "isabelle-zhou.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Jake Fletcher",
                    "email": "james.fletcher@berkeley.edu",
                    "details": "Hi! I'm Jake, a first year EECS major from the central coast. I love CS and really enjoy teaching and helping others understand CS! I'm also planning to minor in Japanese. My hobbies include collecting/wearing streetwear and sneakers, playing Smash Ultimate, working out, and eating at Kimchi Garden. I love lots of music types (including kpop!) so hit me up with your favorite artists!",
                    "imgName": "jake-fletcher.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Thomas Glezen ",
                    "email": "tcglezen@berkeley.edu",
                    "details": "Hey there, \n     I am a super duper serious person who only uses his computer knowledge for the importanty things, such as messing around with my friends. I really like fluffy things! Like SUPER FLUFFY THINGS. Oh, and Golden retrievers are my FAVORITE DOGOS. If you have a golden retriever, please enroll in my discussion! \n    Sometimes I also like to take reallllllly zoomed in photos of my friends. This often results in very pixelated photos where you can barely recognize their face, but all is worth it. Over time, many friends have taken up the same joy as me, resulting in many beautiful artworks. (eg. my pixelated face). \n     Other than that, my hobbies include messing around with Jackson and eating his snacks. It's hilarious. 1/1 would do it again. ",
                    "imgName": "thomas-glezen-.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "http://www.tcglezen.com"
                },
                {
                    "name": "Sohum Hulyalkar",
                    "email": "sohum11@berkeley.edu",
                    "details": "Hi! My name is Sohum Hulyalkar, and I am currently a computer science mentor as well as lab assisting for CS61A. Outside of the classroom, I play Club Frisbee and am part of Engineers for a Sustainable World. In my free time, I hike, waste hours talking with friends, and love solving jigsaw puzzles. ",
                    "imgName": "sohum-hulyalkar.png",
                    "courses": {
                        "CS61A": "Junior Mentor",
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Will Tong",
                    "email": "williamtong255@berkeley.edu",
                    "details": "Hi, my name is Will and I'm a first-year CS major, intended Haas. I'm very passionate about politics and social justice, and I look forward to finding ways I can create a social impact through the skills I learn relating to CS and business. In my free time I like exploring new food places with friends, keeping up with politics, and doing hot pilates.",
                    "imgName": "will-tong.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Star Jin",
                    "email": "xingyu.jin21@berkeley.edu",
                    "details": "Hey everyone! My name is Star, and I'm a second year CS/probably Stats/probably Japanese Language student. I love making Tik-Tok (Douyin) videos and singing Karaoke. Don't forget to ask me what happened in both of the robotics competitions I was in!",
                    "imgName": "star-jin.PNG",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Albert Huang",
                    "email": "albert168@berkeley.edu",
                    "details": "suh",
                    "imgName": "albert-huang.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Warren Alphonso",
                    "email": "warrenalphonso@berkeley.edu",
                    "details": "Hey everyone! I'm an EECS major from Bakersfield, CA, which is surrounded by oil fields and hours away from literally anything exciting :/ Feel free to come chat if you're new to linear algebra/circuits. I was in the same boat when I took 16A and I'd love to be a resource for anyone that needs help!",
                    "imgName": "warren-alphonso.JPG",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Pranad Reddy",
                    "email": "pranad.reddy@berkeley.edu",
                    "details": "Hi!! I'm a second year CS student who loves teaching! I mentored for 61A last semester and am a tutor for this one. You can find me at the International House eating their delicious food (highly recommend, >>> Crossroads), or at Memorial Gym when I work up the willpower to wake up early. I'm always listening to music, especially from Travis Scott, The Weeknd, and Future. I can't get wait to get to know my students, and I'm really excited for the coming semester!",
                    "imgName": "pranad-reddy.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Kevin Yu",
                    "email": "kevin.j.yu@berkeley.edu",
                    "details": "Hello there! I\u2019m Kevin and I\u2019m a second year from the Bay Area. My favorite pastimes are hanging out with my doggo and solving tricky Scheme problems.",
                    "imgName": "kevin-yu.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Aini Xu",
                    "email": "aini.xu@berkeley.edu",
                    "details": "Hi! My name is Aini and I'm a fourth-year physics/CS transfer student from Orange County, CA. Some fun facts about me: I love cats, nap way too much, have a really low tolerance for spicy food, and suck at multitasking. I really don't have a favorite dish, I love all kinds of food (and coffee); so please recommend to me your favorite restaurants in Berkeley! Outside of school responsibilities, I've been learning to play the piano and I enjoy it so much. I also speak Cantonese and Mandarin fluently.",
                    "imgName": "aini-xu.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Benson Yuan",
                    "email": "yuanbenson1772@berkeley.edu",
                    "details": "Hi everyone! I'm a 3rd year CS major from Walnut, CA (and grew up in Taiwan). In my free time, I like to play basketball and listen to podcasts or music. 61C is challenging but extremely important so let's take on the journey together! Trust the process!",
                    "imgName": "benson-yuan.png",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Christina Jin",
                    "email": "christina_jyt@berkeley.edu",
                    "details": "Hi, I'm Christina, a second-year CS major. Even though I stay indoors a lot (unfortunately), I love backpacking/climbing/exploring nature when I find time. I am very excited to become part of your CS 70 journey uwu.",
                    "imgName": "christina-jin.jpeg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Sang A Park",
                    "email": "park_eecs@berkeley.edu",
                    "details": "Hello, I'm a junior transfer majoring in EECS. I like watching movies/reading web comics! I also love exploring new towns and restaurants. ",
                    "imgName": "sang-a-park.png",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Ethan Shang",
                    "email": "ethanshang@berkeley.edu",
                    "details": "Hello there! I'm a second year EECS major. I love to hike, travel, visit museums/aquariums, (re)watch Game of Thrones/Parks and Rec, and find new, exciting places to eat! Looking forward to meeting you all!",
                    "imgName": "ethan-shang.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://ethanjshang.github.io/"
                },
                {
                    "name": "Nick Wang",
                    "email": "nicholaswang2000@berkeley.edu",
                    "details": "Hello! I'm Nick and I'm a freshman CS student from Vancouver Canada. I like playing badminton, eating vegetable medleys at Crossroads, and browsing Reddit 2meirl4meirl memes. I'm a pretty chill guy, so feel free to hit me up whenever :D",
                    "imgName": "nick-wang.png",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Risham Sidhu",
                    "email": "rishamsidhu@berkeley.edu",
                    "details": "Hi, I'm a second year EECS major with a fascination for languages, so feel free to talk to me about anything from NLP to the theory of linguistic relativity to your favorite fantasy novel. I'm also really bad at growing plants (I've killed 4 succulents over the past year) and going to sleep at a reasonable time.",
                    "imgName": "risham-sidhu.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Ajuney Hora",
                    "email": "ajuney.hora@berkeley.edu",
                    "details": "Hi all! I'm Ajuney and I spend my free time cooking, exploring nature and listening to different kinds of music. Come say hi - I'd love to connect!",
                    "imgName": "ajuney-hora.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "website": "https://ajuney.github.io/"
                },
                {
                    "name": "Nicholas Li",
                    "email": "nicknickli@berkeley.edu",
                    "details": "I'm a sophomore computer science major from San Diego. CS61B was where I felt I learned most about applications of code, so I am extremely excited to teach it! I really enjoy gaming even if I don't game as much as I did before. In fact, I watch a lot of videos about games I don't even own! I'm also a huge sucker for witty jokes and sarcastic humor. :D",
                    "imgName": "nicholas-li.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Addison Chan",
                    "email": "addcninblue@berkeley.edu",
                    "details": "Hello! I'm Addison, and I'm a CS major from San Jose. Besides teaching, I love listening to music and singing along (poorly).",
                    "imgName": "addison-chan.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Zac Patel",
                    "email": "zpatel@berkeley.edu",
                    "details": "Hi! I'm Zac and I'm a 3rd year CS major, primarily interested in math and computer architecture. 61C can be a tricky class, and my goal is to help guide you through it and make it an enjoyable experience! My hobbies including lounging, playing Smash and taking all the fun out of board games. If I'm not napping on my couch, you can find me \"studying\" in stacks or eating at Cheese n Stuff. ",
                    "imgName": "zac-patel.JPG",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Daniel Li",
                    "email": "daniel_zh_li@berkeley.edu",
                    "details": "Hello I\u2019m Daniel and I\u2019m from Fullerton, California in Orange County. I\u2019m a big Lakers fan and I watch too much basketball and Netflix. Hit me with your best Netflix suggestions.",
                    "imgName": "daniel-li.jpg",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Albert Yu",
                    "email": "albertyu@berkeley.edu",
                    "details": "\"The name of my town is Plains, Georgia. The name of my street is Peanut Farming. The name of my school is PhD peanut guarding. Peanut Farm is a pretty place to see in our town.\" ~Excerpt from my 8-year old brother's essay",
                    "imgName": "albert-yu.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Daniel Lujan",
                    "email": "dnlujan@berkeley.edu",
                    "details": "Hi! I am a second year studying computer science and data science. In my free time, I enjoy cooking and experimenting with different ingredients. Sometimes, you will see me getting food from Halal Guys or Chipotle. I also play the viola and was part of UCBSO last year. I am very excited for this semester, and can't wait to meet you all!",
                    "imgName": "daniel-lujan.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Joshua Yeung",
                    "email": "yeungj@berkeley.edu",
                    "details": "Hello! I\u2019m a second year Computer Science major from West Lafayette, Indiana (Boiler Up! :P). I loved 61B and can\u2019t wait to share my excitement with you! I like to play blitz chess, table tennis, violin, and Pok\u00e9mon Go. Additionally, I\u2019m fascinated by the intersection of Data Science and Biology, as well as Gordon Ramsay memes. On random days you may find me at UCB IEEE events or ping pong competitions. Can't wait to meet you all!",
                    "imgName": "joshua-yeung.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://yeungjosh.github.io/"
                },
                {
                    "name": "Kenny Huang",
                    "email": "kennyhuang9@berkeley.edu",
                    "details": "Hey, my name is Kenny, a sophomore studying CS + Applied Math. I love playing all sorts of things. Those include video games (League, Hearthstone, Assassin's Creed, Civilizations...name a game that I never played), card games, pokers, mafia, puzzle boxes, Rubik's Cube, jigsaws, chess... I will probably bring one of my collections to the section each month if my mentees prefer. Last but not the least, poke is the best food in the world.",
                    "imgName": "kenny-huang.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Shriya Vohra",
                    "email": "shriya.vohra@berkeley.edu",
                    "details": "Hi there! I\u2019m Shriya, a third-year EECS major from North Carolina. I love listening to Bollywood music, going to the beach, and eating ice cream. When I\u2019m not convincing the world that CS rules, you will find me watching Tasty videos or tagging people in memes. I'm super passionate about CS, and I can't wait to share that with all of you :)",
                    "imgName": "shriya-vohra.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Cait Phan",
                    "email": "cait@berkeley.edu",
                    "details": "Hey everyone! I'm Cait and I'm a CNR student who spends a decent chunk of time learning about computers! I've taken CS 61A and INFO W18, and I am currently taking 61B and Data 8. I'm super excited to mentor this semester, and can't wait to meet ya! When I'm not in classes, you might find me mastering my chef skills, boxing for fun, or messing with adobe illustrator. Two random things I'm looking forward to this semester is a Bryce Vine concert and remodeling the inside of a school bus! Feel free to hmu with questions about CS88/life/school/anything wonderful or disastrous that you would like to share!",
                    "imgName": "cait-phan.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Derek Hsiao",
                    "email": "hsiaoderek@berkeley.edu",
                    "details": "Born and raised in the Bay! \n\nI'm a senior in Computer Science heading off to Amazon after graduation. I'm interested in big data, machine learning. I'm also working on an app called BearMath that I'm always super-pumped to talk about - just ask.\n\nI like to play classical guitar, play Starcraft II, lift weights, and bake. I'm a huge fan of The Weeknd. I like to spend my Sundays strolling through campus, and grocery shopping.\n\nAs far as clubs go, I'm a regular at the OCF. I once did AFX, but that was a loooong time ago :| \n\nI really enjoyed CS70, and hope that we can have a great semester together!",
                    "imgName": "derek-hsiao.JPG",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Brian Qi",
                    "email": "bqi7@berkeley.edu",
                    "details": "Hi! I'm Brian and I'm a CS major from New Zealand. I like playing squash, eating hotpot and traveling. Looking forward to meeting you all!\n\n\n",
                    "imgName": "brian-qi.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Connor Lafferty",
                    "email": "cclafferty5@berkeley.edu",
                    "details": "Hi! I'm a sophomore studying EECS and an aspiring software engineer with a background in data management. My hobbies include watching movies (a lot of them), playing basketball and chess, and eating sometimes-questionable vegan food. I enjoy listening to hip hop, R & B, and indy rock, but I gladly welcome any music suggestion! I'm excited to be tutoring for 61A and 61B, my two favorite classes!",
                    "imgName": "connor-lafferty.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor",
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Raghav Singh",
                    "email": "raghavsingh@berkeley.edu",
                    "details": "Hi! I am a 1st year intended EECS major. I have been coding for the past 6 years. I enjoy hiking, cooking and playing sports. Really enjoy design and making stuff at the makerspace. Feel free to email me if you ever want to grab a coffee or get a detailed review of every single cafe around campus. If you need to find me I am probably taking a nap or at Starbucks.",
                    "imgName": "raghav-singh.jpeg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Mary Xu",
                    "email": "ruili.xu@berkeley.edu",
                    "details": "Hello! I'm a second year CS major from Fremont, CA. This is my second semester tutoring 61A and first time being a senior mentor. Some things I enjoy are trying new food places, napping, and lemon oreo thins. Looking forward to a great semester! ",
                    "imgName": "mary-xu.jpeg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Taejong Kim",
                    "email": "taejongkim@berkeley.edu",
                    "details": "Hi! This'll be my second semester with CSM; last semester I taught 61B, this semester I'll be teaching 61B and 61C. I love to listen to music, write code, and teach :)",
                    "imgName": "taejong-kim.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor",
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Ruby Werman",
                    "email": "rubywerman@berkeley.edu",
                    "details": "Hi! I'm a first year student studying computer science or something from Chicago. In my free time I enjoy waterskiing, designing stickers, and talking about how much colder it is back home. My favorite food is ramen and my favorite word is causeway.  CS88 was a blast and I hope you enjoy it too!!",
                    "imgName": "ruby-werman.png",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Ada Hu",
                    "email": "adahu@berkeley.edu",
                    "details": "Hi! My name is Ada, and I am currently a freshman intending to major in CS. I'm from Los Angeles, and in my free time, I love playing tennis, drinking boba, and playing League of Legends. I really enjoy listening to Taylor Swift and I've been getting into Alan Walker lately. My current favorite restaurants at Berkeley are Tacos Sinaloa/Imm Thai/Himalayan Flavors, and my favorite boba shop in Berkeley is Asha! I am also currently an Academic Intern for CS61a, and I look forward to meeting y'all!",
                    "imgName": "ada-hu.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "George Wu",
                    "email": "george.wu@berkeley.edu",
                    "details": "Hi! I'm a 2nd-year CS major and Music minor from Cupertino. I like to play violin, Smash Bros., and waste time on Youtube. Feel free to talk to me about anything!",
                    "imgName": "george-wu.JPG",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Michelle Brier",
                    "email": "michellebrier@berkeley.edu",
                    "details": "Hello! I'm a third year CS and Econ major from the Bay Area. In my free time, I enjoy snowboarding, coffee, taking pictures of my cat, and beating my friends at Word Hunt on iMessage. 61A is a fantastic class and I'm looking forward to meeting all of you!",
                    "imgName": "michelle-brier.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Shreya Kannan",
                    "email": "shreyakannan@berkeley.edu",
                    "details": "Hey everyone! I'm Shreya, a first year EECS major at UC Berkeley, born and raised in the Bay Area! Besides teaching, I love trying cool restaurants and playing board games. On campus, you can probably find me nestled in the libraries, practicing with the Indian dance team (Raas!), or spending an exorbitant amount of time at Cafe 3 and Croads just chatting with friends. \n\nI'm super excited to be a part of your CS 88 journey here at Cal! Feel free to reach out to me with any questions you may have :)",
                    "imgName": "shreya-kannan.png",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Morgan Fong",
                    "email": "fong.morgan@berkeley.edu",
                    "details": "Hello! I'm a senior in Computer Science from the 626 area in LA, and CS61C was my favorite class out of the lower divs. I was a tutor last semester, and am excited to be back via CSM! My technical interests are broadly in systems and networking, but education has always been a passion of mine. Outside of classes, I'm a member of Cal Raijin Taiko on campus (you might've heard us practice on tires/drums). Outside of Cal, I like to cook, eat, and waste time on YouTube.",
                    "imgName": "morgan-fong.jpg",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Sanchit Kapoor",
                    "email": "sanchitkapoor5100@berkeley.edu",
                    "details": ".",
                    "imgName": "sanchit-kapoor.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Kevin Tang",
                    "email": "kevintang129@berkeley.edu",
                    "details": "Hi, I'm Kevin and I'm a third year studying Computer Science and Astrophysics. In my free time, I enjoy cooking, playing Super Smash Bros, basketball, and listening to music. CS61B is a great course, and I'm excited to teach this semester! ",
                    "imgName": "kevin-tang.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Julia Huang",
                    "email": "huang.julia@berkeley.edu",
                    "details": "Hey there! I am a 2nd year CS and Econ Major from the Bay Area. I'm a big fan of hand-lettering, bullet-journaling, and pretending to have my life organized. I hope that y'all won't need to pretend like me! Please feel free to hmu for questions or a chat!",
                    "imgName": "julia-huang.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Emily Zhong",
                    "email": "emily.zhong@berkeley.edu",
                    "details": "Hello friends! I'm a third year computer science major from the Bay Area. Once I wrote an essay comparing trees (the data structure) to Mondrian's tree paintings. My favorite one is Gray Tree from 1911. When I'm not doing that, I enjoy discovering beautiful websites, dabbling in illustrator, playing board games, and dogspotting \ud83d\udc40\ud83d\udc36. Come say hi to me \u2014 I love a good conversation!",
                    "imgName": "emily-zhong.jpeg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "website": "http://emilyzhong.me"
                },
                {
                    "name": "Ryan Koh",
                    "email": "ryan_koh@berkeley.edu",
                    "details": "Hi! I'm Ryan, and I'm an intended CS major from Santa Clarita, California. I enjoy eating, sleeping, and just having fun! Looking forward to getting to know all of you, and let's have a great semester! :)",
                    "imgName": "ryan-koh.jpeg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Andrew Wan",
                    "email": "andrewwanx10@berkeley.edu",
                    "details": "Hello! My name is Andrew and I am a second-year computer science major. In my free time, I enjoy playing video games, watching anime, getting boba, sleeping, and following the latest k-pop comebacks. I am also involved with Gaming at Berkeley and Pioneers in Engineering, so if you're interested in learning more about competitive eSports at Cal or gaining more CS experience in a way that benefits local high school students, come to talk to me!",
                    "imgName": "andrew-wan.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Sun Ah Lee",
                    "email": "sunahhlee@berkeley.edu",
                    "details": "Hi there! I'm Sun Ah and I'm a second year from Orange County studying CS and data science. Over winter break I finally got Spotify Premium and it changed my life. Anyways, my favorite genres are alt rock, indie, and EDM. I love exploring new music so if you have any recs hmu! CS 70 is one of my favorite classes to date, and I hope you enjoy it too :) ",
                    "imgName": "sun-ah-lee.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Alex Cui",
                    "email": "alexcui@berkeley.edu",
                    "details": "Hi there! I'm a junior EECS major from Massachusetts. Other than teaching, I like to play badminton (part of Cal Badminton) and video games, go on late night food runs with friends, and binge-watch random shows. Sometimes I take in too much caffeine and stay up too late, which may or may not be related to each other. I loved and learned a lot from CS 61A, so I'm excited to meet and work with you this semester! :^)))",
                    "imgName": "alex-cui.JPG",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Shreyas Krishnaswamy",
                    "email": "shrekris@berkeley.edu",
                    "details": "Hi everyone! I'm a first year EECS major from the Bay Area. When I'm not busy agonizing over CS 70 problem sets, I'm kicking back with friends, playing Smash Bros, and listening to music. Having taken 16A last semester, I'm excited to start teaching others everything I learned! Let's have an awesome semester!",
                    "imgName": "shreyas-krishnaswamy.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Kunal Agarwal",
                    "email": "kagarwal2@berkeley.edu",
                    "details": "Hi! I'm a 2nd year Computer Science and Applied Mathematics major from the Bay Area. CS 61A was the class that convinced me to major in computer science, and I'm always thrilled to watch other students learn how great computer science can be. Also I love math so talk to me about that too! If I'm not studying in Moffitt late at night (the seats usually open up at around 1 am), I'm at home watching Brooklyn Nine Nine or the Good Place, or playing FIFA!",
                    "imgName": "kunal-agarwal.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "website": "http://www.kunal-agarwal.com"
                },
                {
                    "name": "Dhruv Kathuria",
                    "email": "dkathuria@berkeley.edu",
                    "details": "Hi! I'll be teaching CS70 and I hope you can have just as great a semester with this class as I did when I took the course :^) Definitely come talk to me about any questions you have in the class or if you just want to chat! I'm currently reading \"Weapons of Math Destruction\" and highly recommend! If you have any good book recs definitely send them over. ",
                    "imgName": "dhruv-kathuria.png",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "website": "https://open.spotify.com/user/doomblues?si=nuQNufUqT92_Q6awgQ3T3Q"
                },
                {
                    "name": "Arin Nair",
                    "email": "arinnair@berkeley.edu",
                    "details": "Hi! I am a second year CS major and hopefully Haas student from Chicago. I really enjoy CS, but I also value spending time on activities purely for entertainment. I enjoy listening to rap music, eating out, and just hanging out with friends. I love talking with anybody about anything! This is my second semester doing CSM 70 and I have a lot of plans to make this semester great.",
                    "imgName": "arin-nair.jpg",
                    "courses": {
                        "CS70": "Associate Mentor"
                    }
                },
                {
                    "name": "Shannon Hong",
                    "email": "shannon.hong@berkeley.edu",
                    "details": "Hello there!! I am a sophomore and intended data science major and I am super excited to teach 88 and 61A this semester because intro computer science is one of my favorite things I have experienced at Berkeley :-D Outside of CS and DS, something that really *sparks joy* in my life is exploring new places! Come hit me up and I'll trade one of my secret Berkeley spots for one of yours.",
                    "imgName": "shannon-hong.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Daniel Van Der Maden",
                    "email": "dvandermaden0@berkeley.edu",
                    "details": "Hi there! I'm a 4th year CS major from Orange County and I was a junior transfer. I enjoy all things automotive and probably spend way too much of my free time working on cars. I also enjoy playing games if I have nothing else to do. And of course, I enjoy teaching.  Looking forward to meeting you guys!",
                    "imgName": "daniel-van-der-maden.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Sushanth Varma",
                    "email": "vsushanth@berkeley.edu",
                    "details": "Contrary to popular belief, 61C is not a burden of a class; Learning about the inner workings of a computer was astounding and I absolutely loved it. I had access to some great instructors who were able to impart their passion to me and I hope I can do the same to the next generation of 61C students. Apart from that, if you ever want to play tennis, watch a Marvel movie or cook some delicious food, I'm your guy.",
                    "imgName": "sushanth-varma.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Nisreen Alqaisi",
                    "email": "pewnocolypse@berkeley.edu",
                    "details": "Hi, my name is Nisreen Alqaisi and I'm a second year EECS undergrad student! 61C is an amazing class and I hope I can help you all understand and love it like I do :) My hobbies include running, watching kdrama, and \"singing\" loud when there's no one around me. I love spicy foods so I end up often eating where there's Korean, Indian, or Thai food. Anyways, college is hard so if at any time you need someone to rant to, I'm all open arms. Good luck and hope to see you at my section!",
                    "imgName": "nisreen-alqaisi.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Katherine Liu",
                    "email": "katherineliu28@berkeley.edu",
                    "details": "Hi! My name's Katherine, and I'm a third year CS major. I love reading and writing, with a particular emphasis on slam poetry. I also love alternative music and dark pop (which lends itself to a lot of indie artists), podcasts (99 Percent Invisible and Serial are my favorites, but I'm always open to more suggestions), and parentheses (except in Scheme). I'm really excited for this semester with y'all!",
                    "imgName": "katherine-liu.jpg",
                    "courses": {
                        "CS61C": "Coordinator"
                    }
                },
                {
                    "name": "Akshit Annadi",
                    "email": "aannadi@berkeley.edu",
                    "details": "Hi! I'm a second year EECS major from Dublin, CA. I'm a big fan of watching T.V. and Beyonce. I loved this class when I took it, and I hope you enjoy it too!",
                    "imgName": "akshit-annadi.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "website": "https://aannadi.github.io"
                },
                {
                    "name": "Patrick Lee",
                    "email": "p.lee@berkeley.edu",
                    "details": "Hi! I'm a 4th year CS/Cog Sci major and I really enjoyed 61a. In my free time, I like to Netflix and watch random car videos. ",
                    "imgName": "patrick-lee.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Katie Gu",
                    "email": "katiegu@berkeley.edu",
                    "details": "Hey! I'm a third year EECS major from Los Angeles who loved CS 70 and is super excited to convince you that it will be your favorite class, too! :D In my free time, I play the piano and flute, read nonfiction, and dance for AFX. I'm also into tropical fruit ice cream and boba (so b a s i c), Hypebeast\u2122 clothing, browsing random subreddits (r/unpopularopinion is my favorite), listening to throwback music, exploring new restaurants, and going to concerts. Random fun fact: I collect and read math books in my free time. Feel free to talk to me if you have any questions about CS 70, want to talk about life, or need a good math book recommendation! Oh, and LaCroix water is the best water. Change my mind. :P",
                    "imgName": "katie-gu.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Brian Lee",
                    "email": "cluesbj@berkeley.edu",
                    "details": "Hi everyone! I am Brian, a sophomore CS major. I tend to drink an unhealthy amount of Snapple and Coke Zero, so if you catch me drinking them, poke me to remind me that my body will be really sad in a few years if I continue drinking them at this rate. I look forward to a great semester, and whether you have questions on the best food in town or you just want to rant about computer science, come say hi!",
                    "imgName": "brian-lee.png",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS70": "Senior Mentor"
                    }
                },
                {
                    "name": "Elicia Ye",
                    "email": "eliciaye@berkeley.edu",
                    "details": "Hi there! I'm a first year studying CS from Saratoga, CA. I came to college without prior CS experience, and I wouldn't have made it through 61A without all the resources and support that are available here \u2014 CSM being one of them! When I'm not stu-dying, I enjoy journaling & reading, munching on grapes and matcha/coffee ice cream, binging romcoms, and hunting for the perfect cookie recipe. Always down for an Ed jam sesh, and still got Blonde and B&b on replay. Come talk to me about anything. I'm v excited to meet you!",
                    "imgName": "elicia-ye.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Joshua Yang",
                    "email": "joshua.yang@berkeley.edu",
                    "details": "Hi! I'm Josh, a second year CS and Music major from Vancouver, Canada. In my free time, I enjoy hanging out with friends, watching sad anime, taking fat naps, playing tennis, and jamming out on piano to some hip jazz tunes and pop classics alike. I look forward to getting to know you, and I hope you enjoy all that 61B has to offer!",
                    "imgName": "joshua-yang.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "website": "https://joshuayangg.github.io/"
                },
                {
                    "name": "Rosemary Yin",
                    "email": "rosemary.yin@berkeley.edu",
                    "details": "Hi! I'm Rosemary, currently a sophomore studying Computer Science and Political Science and super excited to teach CS70 this semester! When I'm not studying, I'm probably working out, reading, exploring nature (the botanical garden is amazing!!) or looking for pasta to eat :)\nLooking forward to a great semester, please come say hi!",
                    "imgName": "rosemary-yin.png",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "website": "https://rosemaryy.github.io/"
                },
                {
                    "name": "Cindy",
                    "email": "cindyxzhang@berkeley.edu",
                    "details": "Hi! I took CS61a last semester, so I remember the concepts as well as the struggle. In my free time (however little I can get haha), I like to go to scenic places with friends. I love going to the beach, hiking, rock climbing, and skiing. At Cal, I\u2019m a member of the wushu (Chinese martial arts) team. I love listening to music, especially when I code, so I\u2019m always looking for new music recommendations! ",
                    "imgName": "cindy.jpeg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Anson Tsai",
                    "email": "yuancheng.tsai@berkeley.edu",
                    "details": "Hi all! My name is Anson and I am a third year EECS. I like watching mind-boggling movies, exploring the outdoors, munching on munchies, and browsing the web (mostly memes) in my spare time. If you see me around, feel free say hello!",
                    "imgName": "anson-tsai.jpeg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Danelle Nachum",
                    "email": "dnachum@berkeley.edu",
                    "details": "Hi! I'm Danelle and I'm a 4th year CS and BioE student. In my spare time, I like to cook and watch endless amounts of Star Trek at 2 in the morning.",
                    "imgName": "danelle-nachum.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Jemmy Zhou",
                    "email": "jemmyzhou@berkeley.edu",
                    "details": "Hi! I\u2019m Jemmy, a second-year CS major from the Bay Area. I took CS 61A in Fall 2017 and really enjoyed the course. I hope to share my passion in CS and help you along the journey. In my spare time, I love to travel and take pictures, but also enjoy an occasional Netflix binge.",
                    "imgName": "jemmy-zhou.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "website": "https://cs61a.jemmyzhou.com/"
                },
                {
                    "name": "Mahesh Murag",
                    "email": "maheshmurag@berkeley.edu",
                    "details": "I'm a second year EECS major and I love teaching/honing my teaching ability! I love listening to music (Daniel Caesar, Tom Misch, Childish Gambino, and lots more), and I've played the guitar for a while (although I'm pretty out of practice). I also watch a lot of shows, specifically HIMYM, The Office, and Black Mirror. I look forward to being part of course staff and also am happy to talk about anything outside whether it be about other classes or just life!",
                    "imgName": "mahesh-murag.JPG",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Gavin Groode",
                    "email": "ggroode@berkeley.edu",
                    "details": "Hello! I am a first year intended Computer Science and Physics double major. I have lived in LA my whole life (and in fact was born at UCLA). I like to hang out with friends and play board games, as well as swimming and skiing(sadly rarely). I love the beach, but always leave it looking like a lobster. I look forward to meeting you all!",
                    "imgName": "gavin-groode.JPG",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Rahul Devarapalli",
                    "email": "rdev11@berkeley.edu",
                    "details": "Hi! I'm a second year CS major from the Bay Area! I love playing basketball and tennis, trying new foods, watching ridiculous amounts of TV shows, and learning new songs on the piano. CS 70 was intimidating for me at first, but it ended up being my favorite CS class so far at Berkeley, so I hope you enjoy it too!",
                    "imgName": "rahul-devarapalli.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Abhinav Ashar",
                    "email": "abhinav_ashar@berkeley.edu",
                    "details": "Hey everyone! My name is Abhinav and I'm a second-year EECS + Business student from Houston. I'm a huge basketball fan (KD\u2019s #1 fan), love playing the clarinet, and know where to get the best mango lassi in Berkeley. If you ever see me on campus, feel free to say hi!",
                    "imgName": "abhinav-ashar.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://ada110.github.io/"
                },
                {
                    "name": "Kaahan Radia",
                    "email": "kaahan2021@berkeley.edu",
                    "details": "Hi!\n\nThat caveman dude up there? Yea that's me, nice to meet you. I'm a second year CS major, who enjoyed 61B and more importantly enjoys teaching. In terms of teaching experience, I've been an AI for 61A; if it counts, when taking 61B, I ended up tutoring the entirety of my friend circle. \nMy hobbies include: songwriting, playing basketball, and dancing. I'm part of Songwriting @ Berkeley (totally not a plug here), where I usually emotionally scar other members by singing and playing guitar. When I'm not doing those things, I spend most of my time coming up with interesting projects that combine CS with other fields. Most recently, I've been experiment with interactive storytelling experiences to teach programming. Any time left goes into doing research at RISELab, where I work on computer vision and distributed systems.\nI hope to get to know you this semester!",
                    "imgName": "kaahan-radia.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://kaahan.github.io/"
                },
                {
                    "name": "John Chin-Jew",
                    "email": "johnchinjew@berkeley.edu",
                    "details": "Hi all, I'm John! I'm an EECS junior from East Bay. I like people, dogs, teaching CS (of course), music (especially Flume and Snail Mail), making games, eating food, and functional programming (Elm in particular). I'm eager to help make the tough  parts of 61A a little easier, and I'm excited to meet and get to know some of you!",
                    "imgName": "john-chin-jew.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "website": "https://johnchinjew.com"
                },
                {
                    "name": "Wendy Vincent ",
                    "email": "wendy_vincent@berkeley.edu",
                    "details": "Hi! I'm a junior transfer EECS major who has been a physics department tutor last year and an AI for cs61a last semester!  I love learning in general, but I spend my free time learning about math and physics! If you love talking about what you learned I'd love to listen! I also love art and its relation to our culture! Also, sometime in 2014 I flushed out the entirety of my entire music library and vowed to only listen to new music. So I'd love to hear about all the new music people listen to!",
                    "imgName": "wendy-vincent-.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Ailyn Tong",
                    "email": "ailyntong@berkeley.edu",
                    "details": "Hi! I'm a second year CS major from Palo Alto, CA. I'm a very boring person who likes to sleep, eat food, and listen to music. And I like cats?",
                    "imgName": "ailyn-tong.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Vincent ",
                    "email": "vincentt@berkeley.edu",
                    "details": "Hello, I'm Vincent and I'm a generic Asian EECS major, previous Bioengineering from Sacramento. I began my CS journey when my girlfriend convinced me to and I loved it ever since. I'm always down to talk so just drop by and say hi.",
                    "imgName": "vincent-.JPG",
                    "courses": {
                        "CS61C": "Junior Mentor",
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Colton Nishida",
                    "email": "coltonkai11@berkeley.edu",
                    "details": "Hey everyone! I'm Colton and I'm a freshman majoring in EECS! I took EE16A last semester and enjoyed the content so much I decided to teach it! When I'm not doing homework or working, I like to spend my time playing League of Legends, watching Netflix,  and shopping for clothes! (I know, I know. Might sound weird) I'm excited to meet you all, and hope you'll join my section!",
                    "imgName": "colton-nishida.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Clark Wang",
                    "email": "clwang@berkeley.edu",
                    "details": "Hi! I'm Clark and I'm a Freshman studying CS and Stats from New Jersey. I love tennis and running. Oh and CS. Excited to meet y'all!",
                    "imgName": "clark-wang.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Jenna Kiyasu",
                    "email": "jkiyasu@berkeley.edu",
                    "details": "Hello everyone! I am a second year CS major from SF. I love listening to jazz, belting out musical numbers when I\u2019m home alone, and I\u2019ve recently gotten really into table tennis, so if you have any tips or are looking for a practice buddy, let me know! Looking forward to a great semester and meeting you all :)",
                    "imgName": "jenna-kiyasu.JPG",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Saharsh Agrawal",
                    "email": "saharshagrawal@berkeley.edu",
                    "details": "Hi, I'm a 2nd year EECS major from Tampa, Florida! I've taught CS70 for CSM in the past and had a lot of fun. I'm pretty involved in Blockchain at Berkeley and have worked as the technical lead on several large industry projects, so feel free to ask me about that. In my free time I enjoy doing nothing with my friends and listening to Joji, Post Malone, J. Cole, and that one Bryce Vine song. Ask me about the time I almost got a Kobe Bryant signature but then my pen stopped working!",
                    "imgName": "saharsh-agrawal.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    },
                    "website": "http://saharshagrawal.com"
                },
                {
                    "name": "Frank Liu",
                    "email": "fliu@berkeley.edu",
                    "details": "Hello, I am a student intending a double major in molecular cell biology and computer science. I enjoy working out, traveling, learning how to cook, playing the piano, and teaching computer science! Feel free to reach out to me (fliu@berkeley.edu) if you have any questions or concerns. ",
                    "imgName": "frank-liu.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Nathaniel Ng",
                    "email": "stoneplus@berkeley.edu",
                    "details": "I love CS70 (and CS170 and CS270). I think the thinking of how people trying to solve a problem is an art -an extremely beautiful art. I hope you will also find the beauty from it. And if you  are not confident of yourself because you are not good at math and because you don't have too much CS background, don't be! Because when I transferred to UCB, I knew nothing about CS and my math level is only in community-college-version-calculus-2--level. I can tell you it is not that hard, and there is a lot of awesome resources to help you (including us!)",
                    "imgName": "nathaniel-ng.JPG",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Hamza Qadeer",
                    "email": "hamza.qadeer@berkeley.edu",
                    "details": "Hi there! I'm a first-year CS major from Fremont (like 40 minutes south of here). In my free time, I like walking around and watching Laker games. Playing basketball would also be a huge hobby of mine if I wasn't so bad at it. Oh well... I'm also slightly unhealthily obsessed with Psych and Avatar (the last airbender, not the blue people), having watched both shows start to finish at least three times. ",
                    "imgName": "hamza-qadeer.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Jack Coyle",
                    "email": "coylejack1@berkeley.edu",
                    "details": "Hey! My name is Jack and I'm a third year EECS major from Carlsbad, CA. I'm pretty much always on Spotify so if you have good music taste, hit me up with some recs! In my free time I like hiking, watching films, and spending time with friends. I'm excited to be a senior mentor for 61A this semester and can't wait to meet my mentees!",
                    "imgName": "jack-coyle.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Chirasree Mandal",
                    "email": "chirasreemandal@berkeley.edu",
                    "details": "Hi! I'm a first year from Evanston, Illinois studying Computer Science and Applied Math. I'm really interested in applied computing research and computational biology. I've also worked on projects in software engineering and data science. When I'm not working, I'm probably writing letters to my pen pals, ordering food, or talking about how great (and cold) the midwest is. Ask me about Data Science Society, #BUILTBYGIRLS at Berkeley, or how to maintain dyed silver hair -- I'm always down to chat!",
                    "imgName": "chirasree-mandal.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "David Wang",
                    "email": "david.y.wang@berkeley.edu",
                    "details": "I'm a 2nd-year EECS major from Livermore, CA and I'm excited to be mentoring 61B this semester! In my free time, you can catch me watching Silicon Valley and cooking videos, playing board games with my friends, reading self-help books, or doing the occasional run down to the Berkeley Marina. Right now, I'm starting a peer-to-peer platform to help students ace their interviews, so if you're interested in joining, feel free to hit me up!",
                    "imgName": "david-wang.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Noah Kuo",
                    "email": "nkuo@berkeley.edu",
                    "details": "Hello! My name is Noah and I'm a second-year EECS student from San Diego. In my free time, I like playing basketball, cooking dinner, and taking care of my dog Baxter.",
                    "imgName": "noah-kuo.png",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Jennifer Grannen",
                    "email": "jenngrannen@berkeley.edu",
                    "details": "Hi! I'm a second year CS major interested in ML research and data science. I took 70 last semester (Fall 18) and loved the class. In my free time, I like hiking, baking, and making music! Feel free to reach out if you have any questions, I'm always happy to help!",
                    "imgName": "jennifer-grannen.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Kevin Svetlitski",
                    "email": "kevin_svetlitski@berkeley.edu",
                    "details": "Hi! I'm a second year CS major from Houston, Texas. I spend my free time reading (I especially enjoy science fiction) and compulsively checking my email. This is my second semester being involved with CS 70, and I'm excited to be teaching again!",
                    "imgName": "kevin-svetlitski.jpg",
                    "courses": {
                        "CS70": "Associate Mentor"
                    }
                },
                {
                    "name": "Amy Hung",
                    "email": "amy.hung@berkeley.edu",
                    "details": "I'm Amy, a second year EECS major from San Jose :^) I took 61A Fall 2017, and this is my 3rd semester tutoring! I love singing (I'm in an acapella group!), sushi, going to live concerts (when I have the time + money), and bad jokes. My pronouns are she/her.",
                    "imgName": "amy-hung.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Mulan Zhao",
                    "email": "mulanz@berkeley.edu",
                    "details": "HI! I'm Mulan, a sophomore studying computer science and (maybe) business admin from the north bay. I like human-centered design, thrifting, and writing fiction/blog posts. My favorite food is noodles, and I once ate two family-sized hot cheeto bags in one day. Lower div CS classes were really stressful for me, so I hope I can help you out a tiny bit with the process. That being said, 61B is my favorite class so far so maybe you'll love it too :') ",
                    "imgName": "mulan-zhao.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://mulanz.github.io"
                },
                {
                    "name": "Chiyu Wang",
                    "email": "wcy_james@berkeley.edu",
                    "details": "Hi, I\u2019m Chiyu and I'm a second year CS major. I spent my free time watching movies, playing basketball and learning new stuff. I'm also keen on photography. ",
                    "imgName": "chiyu-wang.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Aniruddha Nrusimha",
                    "email": "aninrusimha@berkeley.edu",
                    "details": "I'm a 70 TA and Senior Mentor for 70.  I spend my little free time reading manga, books, and playing video games.  I'm also really active in CSUA so check that out.",
                    "imgName": "aniruddha-nrusimha.jpg",
                    "courses": {
                        "CS70": "Senior Mentor"
                    }
                },
                {
                    "name": "Nikhil Pimpalkhare",
                    "email": "nikhil.pimpalkhare@berkeley.edu",
                    "details": "Hi! I am a sophomore EECS major from Los Altos, California. I code exclusively in binary. My first love was an XOR gate. I have 29 levels of caches.",
                    "imgName": "nikhil-pimpalkhare.jpg",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    },
                    "website": "http://nikhilpim.github.io"
                },
                {
                    "name": "Judy Luan",
                    "email": "luansicen@berkeley.edu",
                    "details": "Hi! I'm Judy. I'm a second-year CS major. I took CS61C last semester and I've done tutoring for EE16A before. In my spare time I love reading and watching TV shows. Fun fact: I've watched ten seasons of Friends three times.",
                    "imgName": "judy-luan.jpeg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Jason Chang",
                    "email": "jr44chang@berkeley.edu",
                    "details": "Hi everyone! I'm a second year CS and Applied Math major from LA. Aside from teaching I love to cook good food, read, and watch Korean variety shows. Looking forward to a great year of 61A!",
                    "imgName": "jason-chang.png",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Evan Lohn",
                    "email": "evan.lohn@berkeley.edu",
                    "details": "Hi! I'm a third-year EECS major who took CS 61a and loved it! I've been an Academic Intern for 61a three times, and this will be my first semester in CSM. I love CS in general, and I want everyone to have the opportunity to experience the joy it can bring! \n\nIn my free time I play basketball at the RSF, online chess, and Smash Ultimate with my housemates. I like a pretty wide range of music, but most of the time I listen to mainstream hip hop or pop. \n\nI'm involved mostly with Political Computer Science at Berkeley (PCS@Berkeley). Check us out if you're interested in applying CS to Political issues!",
                    "imgName": "evan-lohn.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Stella Lu",
                    "email": "stellalu@berkeley.edu",
                    "details": "Kia ora! I'm a sophomore CS major and German minor from New Zealand. This is my second semester as a CSM mentor! I'm also a Tutor for CS 61A and a Co-Director of Education for Codeology, a CS club on campus that helps students explore and learn about the tech industry in a supportive community. In CSM sections, I'm a fond user of the whiteboard and I strive to help everyone understand the most interesting/challenging problems on the worksheets. I'm also very open to questions, both during section and via email or appointment. When I'm not studying, I like playing piano, cooking, travelling, and (occasionally) scuba diving. ",
                    "imgName": "stella-lu.png",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "website": "https://stella-lu.com/"
                },
                {
                    "name": "John Wood",
                    "email": "john.wood@berkeley.edu",
                    "details": "Hello! I'm John Wood and I'm a sophomore studying Electrical Engineering and Computer Science with a minor in Public Policy. I'm from Los Angeles and enjoy going hiking, reading political articles, and staffing MUN conferences in my free time. You can also find me hanging out with my dog 24/7 when I'm back home. I'm looking forward to a great semester in CS 88!",
                    "imgName": "john-wood.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Jacqueline Yeung",
                    "email": "jtyeung168@berkeley.edu",
                    "details": "Hi everyone! I'm a current sophomore studying CS and hoping to minor in IEOR. I took CS 61A in Fall 2017 and it was among my first experiences with computer science. I've been there and learned a lot, so feel free to talk to me. I'm here for you! I'm from Fremont, CA and lived in Union City before that. I'm a DC fan (although I do like Spider-Man). I like ice-skating, baking, and photographing pretty things. My favorite artist is Taeyeon, a South Korean singer. I also have an American cocker spaniel, 2 budgies, and several pet fish back in Fremont. Very excited to be teaching you this semester! Let's be friends.",
                    "imgName": "jacqueline-yeung.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Dillon Yun",
                    "email": "dillonyun@berkeley.edu",
                    "details": "Hi! I'm Dillon, a second year Computer Science major. I was born in Denver, and I grew up in Netherlands and England. I love traveling, eating new foods, hiking, and biking in my free time. I'm super excited to be mentoring for CS 88 and am looking forward to meeting you! ",
                    "imgName": "dillon-yun.png",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Kaushik Ravi",
                    "email": "karavi@berkeley.edu",
                    "details": "Hi! I'm Kaushik, and I am a junior studying Computer Science and Statistics. I love listening to music, exercising, and binging tv shows and movies (trust me, I've watched nearly everything). I loved CS70, and I hope that you will find it just as amazing! ",
                    "imgName": "kaushik-ravi.jpeg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Dylan Chima-Sanchez",
                    "email": "da-chimasanchez@berkeley.edu",
                    "details": "Hey everyone! I'm Dylan, a 2nd year CS major from Sacramento, CA. You can find  me in a random cafe on weekends, probably studying. My ideal day off would be spent drinking boba, playing video games, and playing with dogs. I think 61B is pretty dang cool, so here I am, spreading the word. I hope you enjoy learning about data structures! >: ]",
                    "imgName": "dylan-chima-sanchez.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "John Schulz",
                    "email": "johnschulz@berkeley.edu",
                    "details": "Hi everybody! I am a second year computer science major, and I am beyond thrilled to be joining CSM this semester. I have previously academic interned for CS61a and will continue to do so this semester. As for a little bit about me, I am originally from Chicago but just recently moved to Los Angeles in favor of better weather. When I am not programming or helping students, I enjoy going on road-trips, skiing with friends, and reading. Reach out if you need help with anything..",
                    "imgName": "john-schulz.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://johnschulz.github.io./"
                },
                {
                    "name": "Tim Zhou",
                    "email": "tim.qianzhou@berkeley.edu",
                    "details": "I am sophomore Computer Science major and am passionate about teaching. I am a big united fan and enjoys playing soccer with my friends whenever I have time. Sometimes I go fishing and hiking and this winter spent way too much time watching game of thrones. Feel free to talk to me about anything. ",
                    "imgName": "tim-zhou.png",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Ethan Yeh",
                    "email": "ethan.yc.yeh@berkeley.edu",
                    "details": "Hello! I'm a second year majoring in CS and Physics. In my free time, I like to read, play badminton, Go, and waste time on the interwebs. Feel free to talk to me about anything and say hi!",
                    "imgName": "ethan-yeh.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Owen Gong",
                    "email": "goldenowen@berkeley.edu",
                    "details": "Hey! My name is Owen and I am an intended Computer Science/Mathematics major. You can find me playing basketball in the RSF occasionally, and I enjoy jamming on the violin, covering pop songs and classical concertos alike. I can also play \"My Heart Will Go On\" and \"Hot Cross Buns\" on the recorder. I am able to hold a conversation about anything from fantasy sports to the inevitable fate of our universe. However, my friends do say I am movie inept, so if you have any film recommendations I am open to suggestions. ",
                    "imgName": "owen-gong.png",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Amal Mehta",
                    "email": "llama@berkeley.edu",
                    "details": "2nd year CS and Cogsci student. I was an EE16A mentor during Spring 2018. I spend my time watching Liverpool highlights videos (#YNWA), playing IM soccer, and beating Srikar Boinapally at smash ultimate. I biked across the country last summer and enjoy the outdoors. Looking forward to an awesome semester!",
                    "imgName": "amal-mehta.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Raguvir Kunani",
                    "email": "rkunani@berkeley.edu",
                    "details": "Hi! I'm a second year EECS major from beautiful Bakersfield, CA. In the many hours I spend not studying, I play tennis, watch copious amounts of stand-up comedy on Netflix, browse the Internet for edgy memes, and volunteer with Cal Habitat for Humanity. Come to my section to discuss data structures, algorithms, memes, and current events (not necessarily in that order).",
                    "imgName": "raguvir-kunani.PNG",
                    "courses": {
                        "CS61B": "Junior Mentor",
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Amitav Baruah",
                    "email": "amitav@berkeley.edu",
                    "details": "Hey! I'm a second-year EECS major born and raised in the Bay. Outside of class, I enjoy basketball, League, and listening to music (all kinds really, except for country). Let's get this bread!",
                    "imgName": "amitav-baruah.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Jerome Wei",
                    "email": "jeromew@berkeley.edu",
                    "details": "Hi! My name is Jerome. I'm a second-year CS major. 70 was my favorite class. I'm a big fan of basketball, origami and arguing against the Oxford comma. You'll find me in the RSF on one of the massage chairs. ",
                    "imgName": "jerome-wei.png",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Debayan Bandyopadhyay",
                    "email": "debayanband@berkeley.edu",
                    "details": "Hey! I'm Debayan, a sophomore CS major with interests in CS theory, quantum computing, and CS education. In my free time I like to play basketball and listen to rap music. I also like educational content which is freely available online, such as 3Blue1Brown and NPR's Up First. ",
                    "imgName": "debayan-bandyopadhyay.jpg",
                    "courses": {
                        "CS70": "Senior Mentor"
                    }
                },
                {
                    "name": "Jennifer Xie",
                    "email": "jenniferx@berkeley.edu",
                    "details": "Hi! I'm a third year CS major. Besides CS, I also love design. In my free time, I like to drink too much coffee, dye my hair random colors, and dance!",
                    "imgName": "jennifer-xie.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Akshat Gokhale",
                    "email": "sujaksh@berkeley.edu",
                    "details": "Hi, I'm Akshat Gokhale, a sophomore studying EECS and Business Administration. Outside of school, I'm a huge Star Wars geek, and I've been religiously keeping up with the lore for the past few years. I also love reading, especially nonfiction. My favorite artist is Logic (you'll usually find me listening to Under Pressure on repeat), and, in my free time, I really like to watch movie reviews and analyses on YouTube.",
                    "imgName": "akshat-gokhale.png",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Shadaj Laddad",
                    "email": "shadaj@berkeley.edu",
                    "details": "Hello! I'm a first-year EECS major from San Jose, CA. I love exploring and contributing to programming languages (especially those involving functional programming) and am always working on fun side projects (right now, an NES emulator)! Outside of school, I play the sitar, drink lots of chai, and watch speedruns of Nintendo games (especially by Mitchflowerpower).",
                    "imgName": "shadaj-laddad.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "website": "https://www.shadaj.me"
                },
                {
                    "name": "Megan Kawakami",
                    "email": "megankawakami@berkeley.edu",
                    "details": "Hello hello! I am a 2nd year EECS major from Fresno, CA.  I love to explore Berkeley, eat ice cream, listen to new music, and grow plants.  I also love 61B and hope you all will too! Come talk to me about anything :)",
                    "imgName": "megan-kawakami.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Katherine Shu",
                    "email": "katherineshu@berkeley.edu",
                    "details": "Hi! I'm a first year EECS major from Arcadia, CA. In my free time I dance, draw, and binge TV shows. Currently my all time favorite show is Modern Family. My favorite food is strawberries and Weiner Dogs are my spirit animal! I'm always down to talk, so feel free to reach out to me!",
                    "imgName": "katherine-shu.jpeg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Allison Yeh",
                    "email": "allisonjyeh@berkeley.edu",
                    "details": "Hi! I'm Allison, and I'm a third-year CS major from the Bay Area. In my free time I like to read and be with friends and family. My current favorite food is Thai pumpkin curry. I look forward to meeting you! :)",
                    "imgName": "allison-yeh.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Robert Clayton",
                    "email": "robertclayton@berkeley.edu",
                    "details": "Hey everybody.  My name is Robert and I\u2019m a 3rd year computer science major from Sacramento, California.  I took this class last semester and loved it, so I signed up as TA this semester!  My primary languages are C++ and Perl. I'm also interested in cybersecurity and artificial intelligence research.  In my free time, I like to swim, play tennis and go hiking.  I look forward to teaching you all, and hope everyone has a wonderful semester!",
                    "imgName": "robert-clayton.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Luke Mujica",
                    "email": "lukemujica@berkeley.edu",
                    "details": "I am a second year student studying EECS and this is my 2nd semester as a mentor! When I'm not doing CS I like all kinds of sports and activities such as basketball, volleyball, skiing, following the NBA, NFL, etc. I'm also learning guitar and always into hearing new music.",
                    "imgName": "luke-mujica.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Micah Yong",
                    "email": "micahtyong@berkeley.edu",
                    "details": "Hello! I'm a first year from Los Angeles studying Computer Science and Economics. When I'm not engaged in my studies, I skate in Lower Sproul, jam out to hip hop, and watch tech/design tutorials on YouTube. This will be my first year as a CS Mentor and I'm really excited to meet you guys! ",
                    "imgName": "micah-yong.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Agnibho Roy",
                    "email": "agnibhoroy@berkeley.edu",
                    "details": "Hey guys! My name is Agnibho (call me bho, its easier) and I am a first-year EECS major from Dallas, TX. I enjoy playing tennis, reading classic books, and a huge soccer and Hotspurs fan. I also played the violin for a few years and like to sing, (but I am in no way musically talented). Feel free to reach out to me this semester by email, and hoping for a great semester with you guys :) ",
                    "imgName": "agnibho-roy.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Ryan Tjitro",
                    "email": "ryan.tjitro@berkeley.edu",
                    "details": "Hi everybody! I\u2019m Ryan and I am a second year CS major from San Diego, CA. In my free time, I like learning how to make new foods and binging all sorts of shows on Netflix (especially CW shows in the Arrowverse). I can\u2019t wait to meet you all and hope I can help you learn CS70 this semester!",
                    "imgName": "ryan-tjitro.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Daniel Mao",
                    "email": "daniel.mao@berkeley.edu",
                    "details": "Hi there, I'm a senior majoring in Cognitive Science and Computer Science. I enjoy spontaneous trips with friends, going to the gym, and trying to learn new, random life skills. My goal before I graduate is to visit every dorm on campus and be swiped into late night one more time. So if you happen to live in Blackwell and have meal points for days let me know. This will be my third time tutoring with CSM and my fourth time tutoring for CS61A as a course tutor! ",
                    "imgName": "daniel-mao.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Vatsal Bajaj",
                    "email": "vb99@berkeley.edu",
                    "details": "Hey there! My name is Vatsal, and I'm a sophomore majoring in Computer Science and Economics. I'm an international student from India and am super excited to teach CS61B.  In my free time, I love to play the piano on Sproul, play basketball at the RSF, and I have started picking up tennis again. You'd definitely vibe with me if you're into Rex Orange County, Taylor Swift or Linkin Park. Looking forward to a great semester!",
                    "imgName": "vatsal-bajaj.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Nagaganesh Jaladanki",
                    "email": "nagaganesh@berkeley.edu",
                    "details": "Hi! I'm a second-year EECS major at Berkeley, and I love the intersection of math and computer science. CS70 has been my favorite class at Berkeley (so far), so I'm pretty excited to share the joy in my section this semester. I like eating bagels  and going on adventures, so hit me up if you like those too :) ",
                    "imgName": "nagaganesh-jaladanki.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Sebastien Whetsel",
                    "email": "sebastien.whetsel@berkeley.edu",
                    "details": "Hello! I'm Sebastien, a 3rd year mechanical engineering major from LA. In my free time I like listening to music, building things, and taking naps - usually in that order. I'm also a huge fan of puzzles (crosswords especially), board games, chess, and poker. Other than that, you can probably find me in the Jacobs Makerspace blowing stuff up or playing an extremely large number of sports at an extremely average level. Talk to me about outer space, probability theory, and the superiority of the metric system \u00af\\_(\u30c4)_/\u00af\n",
                    "imgName": "sebastien-whetsel.png",
                    "courses": {
                        "CS70": "Senior Mentor"
                    }
                },
                {
                    "name": "Trevor Wu",
                    "email": "trevorhwu@berkeley.edu",
                    "details": "Hello everyone, I'm Trevor, I'm very interested in transportation, housing, and urban development. I worked at the San Francisco MTA over the summer doing traffic lights, and no, I cannot fix BART. CS61A was my first CS course and I really enjoyed it, I hope I can help you do well in the course as well. My hobbies are hiking + climbing (if time), video games, taking public transit/bikeshare, podcasts, and boba.  ",
                    "imgName": "trevor-wu.png",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "website": "http://trevor-wu.github.io"
                },
                {
                    "name": "Yersultan Sapar",
                    "email": "yersultan@berkeley.edu",
                    "details": "Hey everyone! My name is Yersultan and I am from Kazakhstan, the heart of the Central Asia. I major in CS. CS is fun. ",
                    "imgName": "yersultan-sapar.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "John Yang",
                    "email": "john.yang20@berkeley.edu",
                    "details": "Hi there! I'm a third year EECS (really just CS) major from the Bay Area! At school, I'm a TA for CS 88 and member of Valley Consulting Group. On my own time, I'm a huge Lakers fan, Star Wars nerd, and Pokemon trainer. I definitely understand the struggle of CS 61C, but I hope to help you love the class! So excited to meet and work with you this semester!",
                    "imgName": "john-yang.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    },
                    "website": "https://blog-byjohnyang.herokuapp.com"
                },
                {
                    "name": "Andrew Nguyen",
                    "email": "andrew.nguyen@berkeley.edu",
                    "details": "Hey! I'm a 4th year Berkeley Data Science Major from Orange, CA. I have the third most common name on Subtle Asian Traits, so hopefully you don't get me confused with someone else. CS 61B was my favorite class and I'm excited to talk to y'all about data structures!!",
                    "imgName": "andrew-nguyen.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Debbie Liang",
                    "email": "debbieliang-123@berkeley.edu",
                    "details": "I am a sophomore studying CS. I had no coding experience before I took 61A but fell in love with CS afterwards. I love art and martial art. I am also an international peer mentor 2018-2019.",
                    "imgName": "debbie-liang.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://debbieliang9.github.io"
                },
                {
                    "name": "George Zhou",
                    "email": "han_zhou@berkeley.edu",
                    "details": "Hullo! I'm a second year CS major from the Bay Area.  Since it is around spring, you will probably find me constantly checking in on the NA LCS or OWL.  I also enjoy trying to cook and LOVE board games, Scythe being my favorite!  Feel free to chat with me about any of these or about data structures too I suppose... :3",
                    "imgName": "george-zhou.JPG",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Mounica Putrevu",
                    "email": "mounicaputrevu@berkeley.edu",
                    "details": "Hi! I'm a third year CS Major from the Bay Area. 61B was one of my favorite classes at Berkeley and I hope you enjoy it just as much!!",
                    "imgName": "mounica-putrevu.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Calvin Chen",
                    "email": "chencalvin99@berkeley.edu",
                    "details": "Hi everyone! I'm Calvin and I'm a second-year studying CS and Data Science from East Bay (Dublin, to be more specific, if you know where that is). I really enjoyed taking 61BL last summer, and I hope you guys will like this class as much as I did! In my free time, I typically like to play/watch basketball, eating buns from Sheng Kee (those are so shmack), and bantering around with friends. Feel free to talk to me about anything-- I'm always down to listen!",
                    "imgName": "calvin-chen.png",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Gina Condotti",
                    "email": "ginacondotti2021@berkeley.edu",
                    "details": "Hello! My name is Gina and I'm a second-year CS major. CS70 is the most interesting and rewarding course I have taken at Cal so far, and I am really exciting to being teaching it! Currently, I'm really into Binging with Babish on Youtube, becoming fluent in Italian, and the color red. I hope you enjoy CS70 as much as I did :-) ",
                    "imgName": "gina-condotti.JPG",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Shaviv Hoffman-Lowitz",
                    "email": "shaviv@berkeley.edu",
                    "details": "Hi! I\u2019m Shaviv, a second year Computer Science major from the Bay Area. In my free time, I enjoy playing basketball, ultimate frisbee, video games, watching movies, and hanging out with friends. If you want to talk to me about sports, or anything else, I\u2019d be happy to talk to you! 61B has been my favorite class at Berkeley, and I hope that you enjoy it as much as I did.",
                    "imgName": "shaviv-hoffman-lowitz.png",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Max Lin",
                    "email": "xmaxlin@berkeley.edu",
                    "details": "Hey hey! I'm a second year CS Major and took 61c last semester. I love to play badminton and rhythm games like osu!. I enjoy a variety of music, namely instrumentals, j-rock, and k-rap. Feel free to talk to me about 61c or any other lower div CS classes!",
                    "imgName": "max-lin.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Vikas Sharma",
                    "email": "vvsharma21@berkeley.edu",
                    "details": "Hey guys my names Vikas and Im a sophomore studying cs and econ at berkeley. Im a big R&B/Soul music fan so if you any suggestions please hit me up. Outside of CSM I'm involved with Berkeley Model United Nations, a club I'm super passionate about, and Zahanat(bollywood dance team) ",
                    "imgName": "vikas-sharma.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "http://vikasvsharma.com"
                },
                {
                    "name": "Lucy Liu",
                    "email": "lucyliu_3212@berkeley.edu",
                    "details": "Hello! I'm a first-year EECS major from Irvine, CA. I really enjoy helping and learning from others, so I'm super excited to be a Junior Mentor this semester. In my free time, I enjoy playing volleyball, watching movies, and playing cards. I look forward to meeting you!",
                    "imgName": "lucy-liu.JPG",
                    "courses": {
                        "EE16A": "Junior Mentor",
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Aman Shah",
                    "email": "amanshah2711@berkeley.edu",
                    "details": "Hey! I'm a 2nd year Applied Math and CS Major from Edison, New Jersey. I spend my time watching TV(way more than any person should), eating food, playing games of all kinds, drawing, and hanging out with friends.  Feel free to talk to me about any of those, anything else Math/CS-related, or whatever you can think of.",
                    "imgName": "aman-shah.png",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Warren Gu",
                    "email": "warren.gu@berkeley.edu",
                    "details": "Hello. I am Warren Gu, better known as Warren G. I am a sophomore majoring in computer science and statistics. C++ is my favorite language, but Python is also cool. In my free time, I like to enjoy a nice burrito. Feel free to ask me anything related to computer science or data science!",
                    "imgName": "warren-gu.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Yajushi Mattegunta",
                    "email": "ymattegunta@berkeley.edu",
                    "details": "Hi :) I'm a third year EECS major double minoring in Public Policy and Global Studies. My passions include too much Bollywood music, lots of Netflix, and endless novels. In my free time, I like to do fusion dance and fail at cooking. I loved CS70, and I hope I can bring that to all of you as well! Feel free to reach out if you want to talk about CS/interdisciplinary things/college/general life things :) ",
                    "imgName": "yajushi-mattegunta.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Jade Singh",
                    "email": "jadesingh17@berkeley.edu",
                    "details": "Hi, I'm Jade, a sophomore CS major/music minor from Ellicott City, MD (feel free to talk to me if you're a fellow East Coaster!).  This is my second semester teaching 61A in CSM, and I'm also a tutor on the course staff, so you might see me around in office hours and review sessions!",
                    "imgName": "jade-singh.JPG",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "website": "https://jadesingh.org"
                },
                {
                    "name": "Rahul Hayaran",
                    "email": "rahul.hayaran@berkeley.edu",
                    "details": "Howdy! I'm a first-year from Plano, TX (\"the biggest small town in America\"), studying EECS+Business. On campus, I'm involved in a consulting club and do EE research. I spend my free time following soccer, drinking chai, trawling Quora, making origami out of discussion section worksheets, and drinking chai (not a typo). You will often see me sporting (over) 9000 jackets since I still miss the Texas heat.",
                    "imgName": "rahul-hayaran.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Vivek Datta",
                    "email": "avdatta@berkeley.edu",
                    "details": "Hey guys, I'm Vivek! I'm a second year from Fremont, CA (yep, I know) studying Computer Science with a possible double major in Data Science. I'm a die-hard follower of the NBA (go Dubs) and hip-hop/EDM/R&B fan. Also, I'm really into playing basketball, hiking, and Mario Kart or Super Smash on the Switch (probably a bit too much not gonna lie). Anyways, I'm really excited to be teaching CS 88 and I really hope to share my passion for CS and learning with you. Feel free to message me anytime for just about anything, I'd love to talk!",
                    "imgName": "vivek-datta.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    },
                    "website": "http://www.vivek-datta.com"
                },
                {
                    "name": "Joseph Pagadora",
                    "email": "jcpagadora@berkeley.edu",
                    "details": "In the desert, I saw a creature, naked, bestial, who, squatting upon the ground, held his heart in his hands, and ate of it. I asked him, \"Is it good, friend?\" \"It is bitter - bitter,\" he answered. \"But I like it because it is bitter, and because it is my heart.\"",
                    "imgName": "joseph-pagadora.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Daniel Lin",
                    "email": "pandan@berkeley.edu",
                    "details": "Hi! I\u2019m Daniel, and I am a second year EECS major from Irvine, California. Did you know that pandas can eat up to 38 kilos of bamboo a day? ",
                    "imgName": "daniel-lin.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Chris Gong",
                    "email": "christophergong@berkeley.edu",
                    "details": "Hey! I'm Chris, a sophomore studying Computer Science from Cerritos, California. In my free time, I enjoy going to the gym, playing basketball, and skateboarding. Please feel free to say hi!",
                    "imgName": "chris-gong.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Lili Chen",
                    "email": "lchen915@berkeley.edu",
                    "details": "Hi! My name is Lili and I\u2019m a second-year computer science major from San Diego. I love teaching computer science to students of all levels, and I\u2019m really excited to teach a CS70 CSM section! I\u2019ve recently been learning to skateboard and play the guitar (although I'm definitely not good at either). Feel free to reach out to me about CS70 or anything else \u2014 I\u2019d love to chat!",
                    "imgName": "lili-chen.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "JoshieBoshie Yang",
                    "email": "joshua91214@berkeley.edu",
                    "details": "Hiya peeps! I'm JoshieBoshie, and I'm excited to teach 61B to y'all who are in my section. I've done CSM for 2 semesters now, and I hope to help others once more this semester. If you want to know more about me and my name, come to my section!",
                    "imgName": "joshieboshie-yang.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "http://joshieboshie.github.io"
                },
                {
                    "name": "Rayna Kanapuram",
                    "email": "raynak@berkeley.edu",
                    "details": "Hey! I'm a second-year from SoCal majoring in Computer Science. On campus, I take part in consulting with Berkeley Business Society and research with the CITRIS Lab. In my free time, I enjoy hiking, listening to podcasts, or playing obsessive amounts of Anagrams. 61B is one of my personal favorites at Berkeley, so I'm excited for our semester together! ",
                    "imgName": "rayna-kanapuram.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Nikhita Anumukonda",
                    "email": "nanumuk@berkeley.edu",
                    "details": "Hi! I'm Nikhita, and I am a sophomore intending to major in CS, from San Ramon, CA. In my free time, I love listening to music, boba, hanging out with friends, and reading. CS 61A is one of my favorite classes and I hope that you enjoy it as well! Looking forward to working with y'all.",
                    "imgName": "nikhita-anumukonda.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Ahmad Jawaid",
                    "email": "ahmadjawaid@berkeley.edu",
                    "details": "Hey, I'm Ahmad! I'm a 4th year international student from Karachi, Pakistan. I love skiing, interior designing, exploring bay-area coffee and algorithms. Come talk to me about any of these things or excite me with something new!  CS61B is one of my favorite courses at Berkeley and I'm looking forward to sharing that passion with you :)",
                    "imgName": "ahmad-jawaid.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Richard Roggenkemper",
                    "email": "rroggenkemper22@berkeley.edu",
                    "details": "Hi! My name is Richard. I'm a first year student from Los Gatos, California. I'm hoping to major in CS and Business. I love skiing, cooking, and anything related to food. This is my second semester as a mentor for CSM and first semester as a senior mentor and a tutor for 61a, and I'm excited to teach it this semester!",
                    "imgName": "richard-roggenkemper.JPG",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "William Hsu",
                    "email": "whsu00@berkeley.edu",
                    "details": "Hi! I'm William. I'm a first-year EECS major from Cupertino, CA. Some things I enjoy include alliteration, adventuring, and applied computer science! I'm also a big fan of poker, pokemon, and programming competitions. Hit me up if you love or loathe any of those things, and see you around!",
                    "imgName": "william-hsu.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Murad Awad",
                    "email": "muradawad21@berkeley.edu",
                    "details": "I'm a second year CS student. I have a good amount of CS experience due to undertaking projects for fun in high school. I love to play guitar, produce music, skateboard, and design clothes! I listen to every genre of music but my favorite musical artists are Tame Impala, Pink Floyd, Tyler the Creator, Kanye West, Zillakami, Kid Cudi, The Weeknd, and many others. I'm also a part of Sigma Eta Pi (the entrepreneurship fraternity here), and Cal Hacks.",
                    "imgName": "murad-awad.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Mihira Patel",
                    "email": "mihirapatel@berkeley.edu",
                    "details": "Hey! I'm Mihira, a first year Computer Science major from the Bay. I really love teaching and am also involved with SWE++ on campus, where we teach middle school girls Scratch and Python! When I'm not teaching, you can find me trying new food around Berkeley, watching The Office, or obsessing over pictures of dogs :D Feel free to reach out to me to talk about anything!",
                    "imgName": "mihira-patel.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Ankur Jain",
                    "email": "ankur.jain@berkeley.edu",
                    "details": "Hey! I'm a second-year EECS + Business student from SoCal. I'm passionate about government, education, the Lakers, Frank Ocean, Kanye West, and pineapple pizza. Outside of CSM, you can find me volunteering with BEAM, eating at La Val's, and taking naps in Ishi Court.",
                    "imgName": "ankur-jain.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Angela Yan",
                    "email": "abyan@berkeley.edu",
                    "details": "Hi! I'm Angela, a second year computer science and cognitive science double major. I have a bad habit of taking too many techs so I've finished all of the typical core classes and am currently doin my best in CS189. CS is cool but I also work at Gong Cha on the side and play the mellophone in Cal Band! I may or may not also be in AFX this semester. Catch me drinking boba 24/7",
                    "imgName": "angela-yan.JPG",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Albert Tang",
                    "email": "alberttang@berkeley.edu",
                    "details": "Imagine this.\nYou. A struggling 16A student.\nMe. A struggling 16A mentor with a love of teaching.\nWill we get through this semester and get a 4.0? Who knows.\nBut we're gonna have fun finding out.",
                    "imgName": "albert-tang.PNG",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Justin Yu",
                    "email": "justinvyu@berkeley.edu",
                    "details": "Hi! I'm a first year EECS major from the Bay Area. Some of my favorite pastimes are drinking boba with lactose intolerance, waiting for the album Yahndi to drop, and watching mukbangs to cure my depression after eating Crossroads. As you can see from my picture, I love going on hikes, my favorite one being from my dorm to Soda Hall! Email me if you ever need anything, I'm happy to help uwu.",
                    "imgName": "justin-yu.png",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Eden McEwen",
                    "email": "emcewen@berkeley.edu",
                    "details": "Hello friends, call me Eden! I\u2019m a declared CS and intended Physics Major who has wandered into the world astronomy research. I take pictures for the STEMinist Project, do coordination work for SWPS, and teach a seminar for the Public Service Center. I'm always ready to chat about podcasts, vegetarian recipes, or horticulture \u2013 so always feel free to send me an email. ",
                    "imgName": "eden-mcewen.jpeg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Cassandra Melax",
                    "email": "cmelax@berkeley.edu",
                    "details": "Hey folks! My name's Cassandra, and I'm a first year CS major from the prairies of Alberta, Canada. I'm passionate about using technology to build scientific models and understand mechanisms in the brain like decision making and motivation. I'm part of the CS org Blueprint, and I've done some work with AI and app development. In my free time I like to hike, bike, run, read, travel, and philosophize about how confusing the world is. I also play guitar and sing in a band here, so I'm always down to jam or listen to music. Looking forward to meeting you guys!",
                    "imgName": "cassandra-melax.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Richard Chen",
                    "email": "richard.chen169@berkeley.edu",
                    "details": "Ho hum, a biography! I'm a second year majoring in Physics and Computer Science and this is my first semester in CSM, although I was a reader for EE 16A last semester. I'm originally from Maryland (East coast representtttt) and an interesting fact about me is I used to work on a farm as a farmhand. I love listening to:The Strokes, The Killers, Hippo Campus, and a bunch of Chinese rock artists as well but am always looking for more bands to follow so hit me up with some recommendations!",
                    "imgName": "richard-chen.JPG",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    },
                    "website": "https://richard-chen169.github.io/"
                },
                {
                    "name": "Naomi Sagan",
                    "email": "naomi.sagan@berkeley.edu",
                    "details": "Hi! I\u2019m Naomi and I\u2019m a first year EECS student. I\u2019ve been coding since middle school/the beginning of high school, and I also enjoy dancing, running (kinda),  hanging out with friends, and trying out new restaurants. This is my first semester as a CSM mentor, but I\u2019ll always try to create the best learning experience I can.",
                    "imgName": "naomi-sagan.JPG",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    },
                    "website": "https://naomisagan.com"
                },
                {
                    "name": "Tejas Srivatsav",
                    "email": "tsrivatsav@berkeley.edu",
                    "details": "Hi everyone, my name is Tejas and I'm a second year EECS major from Miami, Florida. My main hobby is playing and watching sports such as basketball and soccer, but I also really enjoy running. If you've seen me around campus, you also know that I'm always listening to music (mainly rap, hip-hop, and edm). So feel free to ask me about why I think Juice WRLD is more talented than your favorite rapper. Or ask me about multi-level caches, that's cool too... ",
                    "imgName": "tejas-srivatsav.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Eric Zhu",
                    "email": "eric.zhu@berkeley.edu",
                    "details": "Hi! I'm a freshman in EECS from the Bay Area. I enjoy playing musical instruments, like piano and alto saxophone, and I enjoy playing chess. I'm down to play a game with anyone :O, just let me know!! I really enjoyed CS61A when I took the class last semester and I hope you all benefit from it too.",
                    "imgName": "eric-zhu.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Christopher Zheng",
                    "email": "c.zheng@berkeley.edu",
                    "details": "I'm a 4th-year Political Science major (come chat with me if you're really interested in how you can use CS for things other than CS) from New York! I took CS61A in Fall 2016. I was an Academic Intern three times before becoming a mentor last semester. I'm an avid sports fan (love watching and reading about football and basketball). I'm pretty down to chat about anything (except probably politics) so definitely come say hi. ",
                    "imgName": "christopher-zheng.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Shriya Nandwani",
                    "email": "shriyanan@berkeley.edu",
                    "details": "Hey there! I'm Shriya, and I grew up in the Bay Area. I enjoy puns, food, and bad jokes. I also enjoy talking to people, so if you ever want to talk or feel like sharing a pun, feel free to shoot me an email! I had a lot of fun in 61A and am thrilled to help out with it this semester!",
                    "imgName": "shriya-nandwani.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Kawin",
                    "email": "kawin.swpong@berkeley.edu",
                    "details": "Hello! I'm a chemical engineering major from Singapore. When I'm not looking at interesting things at the intersection of that and CS, you can catch me chasing nice scenery and adding to the long list of movies I want to watch but haven't. CS70 gets pretty hard but I hope you get something out of it and maybe even wind up enjoying it. Looking forward to getting to know you!",
                    "imgName": "kawin.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Saagar Sanghavi",
                    "email": "ssanghavi404@berkeley.edu",
                    "details": "Hey hey hey! I'm Saagar, an avid outdoors enthusiast, puzzle fanatic, and creative thinker :) I love meeting and working with new people, and I'm excited to serve as a mentor through CSM!  Outside of mentorship, feel free to hit me up for deep philosophical discussions, basketball games, controversial opinions to discuss, neat ideas to share, and boba runs!",
                    "imgName": "saagar-sanghavi.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Sam Cui",
                    "email": "samuelxcui@berkeley.edu",
                    "details": "Hi everyone! I'm a second year EECS major, born in Austin, raised in Houston, and matured in LA. Besides doing p-sets, I also spend my time playing guitar, singing in For Christ's Sake A Cappella, and browsing Reddit. I also have a large repertoire of Christmas song lyrics that I know by heart, and I once made myself a giant cheese costume for Halloween that I ended up wearing 4 years in a row (like one of those big Whopper costumes they wear in Burger King commercials back in the day). I really wanna learn French so if you can speak the language of love please come to my section and bestow upon me your experience! <3",
                    "imgName": "sam-cui.JPG",
                    "courses": {
                        "EE16A": "Associate Mentor",
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Keahooi Hung",
                    "email": "keahung@berkeley.edu",
                    "details": "Hi! I'm a second year EECS major.  I took 61C last semester and I really loved it!  In my spare time, I enjoy learning how to play the guitar and perfecting my culinary abilities.  I'm also involved in IEEE through the Micromouse Decal and also HKN/TBP.  Looking forward to meeting you all!  ~uwu~",
                    "imgName": "keahooi-hung.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Sajal Sharma",
                    "email": "sharma.sajal@berkeley.edu",
                    "details": "Hey! My name is Sajal (Saj for short) and I'm currently a second-year Computer Science and Economics major from Irvine, CA. I'm a huge basketball fan and love to watch and play all the time. I also love eating sugary foods (although I'm very skinny) like Starbucks Frappuccinos, Krispy Kreme donuts, chocolate ice cream, and really anything with whipped cream on top of it. I recently took CS 70 and changed my entire career plan because of how much I enjoyed it. I hope you'll enjoy the course as much as I do!",
                    "imgName": "sajal-sharma.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Alex Hong",
                    "email": "alexanderhong@berkeley.edu",
                    "details": "Hey, I'm Alex and I'm a second-year EECS major from San Diego. I love drawing, animation, and video games. ",
                    "imgName": "alex-hong.png",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Avik Sethia",
                    "email": "aviksethia99@berkeley.edu",
                    "details": "HELLO! My name is Avik and I am a second year CS and Econ major from India and I am absolutely pumped to help you in any way possible realize what an amazing class CS 61B is! I actually first started learning CS at Berkeley and have been in love with it ever since.\nWhen I'm not doing classwork you can find me doing at least one or more of the following -: 1)Making bad puns 2)Drumming 3)Watching Modern Family 4) Eating Thai food 5)Making bad puns while eating thai food and watching Modern family!\nCan't wait to meet all of you!!",
                    "imgName": "avik-sethia.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Amrita Palaparthi",
                    "email": "amritapv@berkeley.edu",
                    "details": "Hi everyone! I'm an EECS major from San Jose, CA. Apart from teaching, I love music, photography, nature, and great food; in my free time, you can find me buried in a good book or watching the newest standup comedy special. I'm so excited to be a mentor for CS61A this semester, and I'm looking forward to meeting you all!",
                    "imgName": "amrita-palaparthi.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Srikar Boinapally",
                    "email": "srikar.boinapally@berkeley.edu",
                    "details": "Hey, I'm a second year Computer Science Major from San Jose, CA. In my free time I enjoy playing board games, guitar, and watching/playing sports. I enjoy travelling and trying new foods, so hmu if you have any restaurant recommendations. Looking forward to a great semester!",
                    "imgName": "srikar-boinapally.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Harini Rajan",
                    "email": "hrajan@berkeley.edu",
                    "details": "Hello! I took CS61B in Spring 2018 with Professor Hug and found it to be one of the most interesting and rewarding courses I've taken. Favorite pastimes include reading(especially autobiographies), napping, exploring Berkeley, and watching nature documentaries. At Cal, I enjoy going to classes at the RSF and am involved in organizing CS Kickstart this year. Super excited to enjoy 61B again with y'all :) ",
                    "imgName": "harini-rajan.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Jodie Lu",
                    "email": "jodielu_@berkeley.edu",
                    "details": "Hello! I'm a 2nd year EECS major and my favorite topics in 61C were RISC-V and FSM. I also enjoy group karaoke, New York Times crossword puzzles, Sliver, and more.",
                    "imgName": "jodie-lu.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Ryan Tran",
                    "email": "bobotran@berkeley.edu",
                    "details": "Hi everybody! I'm a 2nd year EECS major from SoCal. I love anything space-related so feel free to talk nerdy to me. Also, Kingdom Hearts 3 is awesome! Also also, fun fact: when I was a kid, I accidentally inhaled a butterfly. HMU for all of the horrifyingly wonderful details :)",
                    "imgName": "ryan-tran.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Kaavya Shah",
                    "email": "kaavyashah@berkeley.edu",
                    "details": "hey all! I\u2019m a second year Data Science major from the Bay Area who loves dogs! I love all types of vegetarian food and spend most of my time binge watching tv shows like Bob\u2019s Burgers. If i can motivate myself I have a great time at the gym and studying, and love the CS classes I have taken in Berkeley. I\u2019m also a Codeology member so feel free to ask me any questions about that!",
                    "imgName": "kaavya-shah.jpeg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Jessica Meng",
                    "email": "jessica_meng@berkeley.edu",
                    "details": "hi all ! I'm Jessica and I'm a sophomore CS major from Toronto, Canada. I really love traveling (ask about my travel stories!!) and finding good tea and food. This is my second time teaching and I'm looking forward to meet you all:))",
                    "imgName": "jessica-meng.jpg",
                    "courses": {
                        "CS70": "Associate Mentor"
                    }
                },
                {
                    "name": "Saurav Chhatrapati",
                    "email": "sauravc@berkeley.edu",
                    "details": "Hello! I\u2019m a 2nd year EECS major from the Bay Area. The Gitlet project with Professor Hilfinger has made 61B one of my favorite classes at Cal. I closely follow basketball, football, and manage four fantasy football teams in my spare time. I also do research on databases and distributed systems with the RiseLab. ",
                    "imgName": "saurav-chhatrapati.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Yuxin Ji",
                    "email": "jiyuxin@berkeley.edu",
                    "details": "Hi! I\u2019m Yuxin. I\u2019m a 3rd year CS major and I enjoy singing, traveling, listening to podcasts, and watching samoyed videos on Youtube. I\u2019m super excited to get to know all of you and am looking forward to a great semester! ;)",
                    "imgName": "yuxin-ji.jpg",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Karen Tu",
                    "email": "karentu@berkeley.edu",
                    "details": "Hello! I am a third year studying CS&Stats, and I am excited to be teaching 61B in CSM after migrating over from EE16A. In my free time I am often Rubik's cubing, watching dramas, and playing Pokemon.",
                    "imgName": "karen-tu.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Christian Wu",
                    "email": "christian.wu@berkeley.edu",
                    "details": "I'm Christian Wu, a sophomore studying EECS from SD, and its my second semester in CSM for 61b. I like (but am not exceeding good at) playing ultimate frisbee, various video games, and the drums with my fingers on my desk. ",
                    "imgName": "christian-wu.PNG",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Gregory Jerian",
                    "email": "gregoryjerian@berkeley.edu",
                    "details": "Hi everyone, I'm Gregory, or Greg for short. I'm a sophomore who is currently majoring in CS. Also, I wear the freshest clothes, eat at the chillest restaurants and hang out with the hottest dudes.",
                    "imgName": "gregory-jerian.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "http://gregoryjerian.com/"
                },
                {
                    "name": "Michelle Cheung",
                    "email": "micheung@berkeley.edu",
                    "details": "Hello! I'm Michelle, a third year EECS major from Redwood City, CA. My favorite foods are ice cream and iced caramel lattes. This is my fourth semester mentoring for 61A and I'm excited to get to know you all! :)",
                    "imgName": "michelle-cheung.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Vandana Ganesh",
                    "email": "vandanag@berkeley.edu",
                    "details": "Hi! I am an EECS major from the Dallas area. In my free time, I love dancing, listening to music, drinking coffee, trying on extremely large hats, and rereading the Harry Potter series. I'm super excited to meet you!",
                    "imgName": "vandana-ganesh.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    }
                },
                {
                    "name": "Ryan Nuqui",
                    "email": "ryannuqui@berkeley.edu",
                    "details": "Hi y'all!\nMy name is Ryan and I'm a second year studying Computer Science and Cognitive Science with an interest in minoring in Education and/or CalTeach. I've been really involved in teaching since high school and I especially love CS 61B! Also, this semester I will be teaching a section reserved for EOP students to help students like me who may feel anxious about CS at Berkeley. In my free time, I like to hang out with friends, play board/video games, and read when I can. Feel free to ask me about any questions you may have (CS or otherwise) and looking forward to this semester!",
                    "imgName": "ryan-nuqui.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Stephen Costello",
                    "email": "scostello55@berkeley.edu",
                    "details": "Hey everyone! I'm a senior CS major from Stockton, CA. This is my second semester doing this, and I hope to get people stoked about CS! I also love writing/playing music, and have also been known to perform in musical theater from time to time. I hope that everyone has a great semester!",
                    "imgName": "stephen-costello.jpg",
                    "courses": {
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Albert Zhan",
                    "email": "albertzhan@berkeley.edu",
                    "details": "I'm a freshmen, and I guess I like math.",
                    "imgName": "albert-zhan.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "website": "https://albertzhan.com"
                },
                {
                    "name": "Richard Liu",
                    "email": "richard.y.liu@berkeley.edu",
                    "details": "Hi there! My name is Richard and I'm a first-year from Seattle, Washington. My favorite things include attempting to play guitar, eating sashimi, and watching thought-provoking shows. Excited to be a mentor this semester :)",
                    "imgName": "richard-liu.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    },
                    "website": "https://richardliu.me/"
                },
                {
                    "name": "Allan Yu",
                    "email": "allan15@berkeley.edu",
                    "details": "Hi all! My name is Allan, and I\u2019m from Roseville, California.",
                    "imgName": "allan-yu.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor",
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Eric Ying",
                    "email": "eying@berkeley.edu",
                    "details": "Hi! My name is Eric and I am a sophomore EECS major. This is my third semester teaching 61A at CSM. Let's have a great semester!",
                    "imgName": "eric-ying.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Kevin Yang",
                    "email": "kevinyang8@berkeley.edu",
                    "details": "Hey guys, my name is Kevin and I'm a 2nd year Computer Science and Data Science major from Granite Bay, California (basically Sacramento). I love playing volleyball and I'm a part of the club volleyball team! When I'm not in class or playing volleyball, you can probably find me watching sitcoms, cooking, or leading some people on a tour as a Campus Ambassador. I'm looking forward to meeting you all!",
                    "imgName": "kevin-yang.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Rachel De Jaen",
                    "email": "rdejaen@berkeley.edu",
                    "details": "Hi! I'm Rachel and I'm a second-year cs + spanish major. In my free time, you can probably find me watching NCAA gymnastics meets, eating breakfast, listening to podcasts, or looking at cat pictures. Really excited to be working with you all this semester! My pronouns are she/her.",
                    "imgName": "rachel-de-jaen.JPG",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "website": "https://rdejaen.github.io/teaching.html"
                },
                {
                    "name": "Sishaar Rao",
                    "email": "sishaar@berkeley.edu",
                    "details": "Good vibes only. If you join my mentoring group, you\u2019re in for a lot more than just tutoring. We\u2019re gonna get dinner, party, and ace every midterm that comes our way. ",
                    "imgName": "sishaar-rao.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Adam Loeffler",
                    "email": "aross.1311@berkeley.edu",
                    "details": "Hey all. I'd love to help you be successful as you dive into computer science. This course was a lot of hard work for me when I took it, but extremely rewarding. I now enjoy the privilege of assisting other students in the course. Outside of school I rock climb, which is cool.",
                    "imgName": "adam-loeffler.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Son Tran",
                    "email": "sontran@berkeley.edu",
                    "details": "Hi! I am a junior EECS major from Orange County. In my free time, I like to watch documentaries or read manga. I am interested in education, and I love teaching. I am looking forward to meeting you all!",
                    "imgName": "son-tran.JPG",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    },
                    "website": "https://github.com/samtron1412"
                },
                {
                    "name": "Vidish Gupta",
                    "email": "vidishgupta@berkeley.edu",
                    "details": "Hi! I'm a first year EECS major from LA. I love listening to music, especially Hip-hop and rap, and I'm always looking for recommendations. My perfect Sunday would involve lots of sleeping, good food, some tennis, and then a 5 hour YouTube binge. I'm also involved with a club called Space Technologies at Cal which is all about space exploration which I love. I'm really excited to meet you and down to talk about literally anything! ",
                    "imgName": "vidish-gupta.jpg",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Angela Lee",
                    "email": "leeangela@berkeley.edu",
                    "details": "Three words: I LOVE TEACHING. As a former APCS mentor in high school, I'm now a CS 61A lab assistant/academic intern and a one-on-one tutor through CS 370. Last semester I took CS 61A with Daddy DeNero and enjoyed it lots, and this semester I'm really excited to help out a brand new group of faces! Outside the classroom, I'm a big fan of anime, badminton, and U-Cha's Bomberman. I also like baking, self-studying Japanese, and posting on UCBMFET. I grew up in Seattle and I'm a first-year intending CS. I'll use all my efforts to make sure you have an enjoyable experience in CS 61A!!",
                    "imgName": "angela-lee.jpeg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Jennifer Huang",
                    "email": "serenade092@berkeley.edu",
                    "details": "What's up guys, my name's Jennifer and I am a freshman intended in CS & Applied Math. I came into Cal without too much programming experiences, so I am definitely down to talk about this if you guys are in the same boat as me. In my spare time, you can hunt me down at boba shops around the campus, or catch me talking to people about music, gemology, or PUBG :3",
                    "imgName": "jennifer-huang.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Kevin Wang",
                    "email": "kwang626@berkeley.edu",
                    "details": "Hi! I'm one of the four Kevins, and am a fourth-year computer science major from Diamond Bar, California! I really enjoy teaching and am also a TA for 61A. I'm kinda blind without my glasses, so if you know me and I walk right past you on the street thats why. But please still say hi!",
                    "imgName": "kevin-wang.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Uma Krishnan",
                    "email": "umakrishnan@berkeley.edu",
                    "details": "Hi I'm Uma! I'm a loud and happy person with large curly hair who likes to dance, eat, shop, hike, and Lyft to class because I'm perpetually late. This is my fourth semester teaching CS61B and I'm a course tutor as well, so sign up for one of my two sections if you're down to get learnt!",
                    "imgName": "uma-krishnan.png",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Samy Cherfaoui",
                    "email": "scherfaoui@berkeley.edu",
                    "details": "I'm a second year majoring in Computer Science with a planned minor in Geospatial Information Science and Technology. I grew up in Cupertino in the Bay Area but I do have triple citizenship so I am a man of culture. My hobbies include playing sports, reading about the most random subjects, and of course teaching new students CS61A. If you have any questions about anything, feel free to contact me! Fun fact: I've qualified for the Jeopardy auditions in Los Angeles twice. When I inevitably make it onto the show at some point, you will have the privilege of saying that you know me.",
                    "imgName": "samy-cherfaoui.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Sai Dhanireddy",
                    "email": "sdhanireddy@berkeley.edu",
                    "details": "Hello! Sophomore, CS, Math, poker, tennis, 2x spicy ramen, mango smoothie @ Ucafe, league, AFX, irregular bedtimes. Looking forward to teaching 61C!",
                    "imgName": "sai-dhanireddy.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Ryan Deng",
                    "email": "rdeng2614@berkeley.edu",
                    "details": "Hi everyone! Welcome to CSM for CS70. I hope you all have a great semester!",
                    "imgName": "ryan-deng.jpg",
                    "courses": {}
                },
                {
                    "name": "Patricia Ouyang",
                    "email": "patriciaouyang@berkeley.edu",
                    "details": "Hi! I'm a second-year EECS major from San Diego. I spend my free time playing video games, watching anime, drawing, and listening to music. I really like Nintendo--my favorite franchise is Pokemon. Feel free to ask me anything!",
                    "imgName": "patricia-ouyang.jpeg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "David Wang",
                    "email": "kaiyue.wang@berkeley.edu",
                    "details": "Hi everyone! I'm David, a third year studying Computer Science. On the side I play tennis and enjoy binge watching dramas a lot for some reason. Overall, I'm a chill dude, who enjoys a nice convo with others. Hope you come by!",
                    "imgName": "kaiyue-wang.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Jessica Yeh",
                    "email": "jessicayeh@berkeley.edu",
                    "details": "Hi there! I'm Jessica, and I'm a junior EECS major from San Mateo, CA. In my free time, I like to eat new foods, listen to music, and try and fail to keep my succulents alive. This is my third semester in CSM, and second teaching 61A! Excited to meet everyone! ",
                    "imgName": "jessica-yeh.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Jonathan Shi",
                    "email": "jhshi@berkeley.edu",
                    "details": "Hello there! I'm a 2nd year EECS major from the Bay Area. I like programming languages where the compiler yells at you a lot. Outside CSM, I play soprano/alto sax for the Intermission Orchestra, and I spend an inordinate amount of my breaks watching anime. I also play chess and Super Smash Bros. at a reasonable level, so hmu.",
                    "imgName": "jonathan-shi.jpeg",
                    "courses": {
                        "EE16A": "Senior Mentor"
                    }
                },
                {
                    "name": "Jeffrey Tao",
                    "email": "jtao@berkeley.edu",
                    "details": "Hi everyone! My name is Jeffrey and I'm a first-year EECS major from San Jose, CA. I love teaching and I love CS 70 so I'm stoked to be joining CSM! In my free time you'll find me playing chess, rock climbing, and exploring the underrated genre of J-pop. Looking forward to a fun semester with everyone!",
                    "imgName": "jeffrey-tao.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Arda Sozer",
                    "email": "asozer@berkeley.edu",
                    "details": "My second time teaching csm sectioms for cs61b. I enjoy boxing and judo when im not doing time in class. Love La Med on college ave simce the food reminds me of the ones i had growing up! ",
                    "imgName": "arda-sozer.jpeg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Sameer Saptarshi",
                    "email": "sameer.saptarshi@berkeley.edu",
                    "details": "Hi, I\u2019m Sameer and I\u2019m a second year EECS major from Denver, Colorado. In my free time, I like playing video games, cooking, and listening to music! I love 61A almost as much as I love Thai food and I hope you will too.",
                    "imgName": "sameer-saptarshi.JPG",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Helen Tang",
                    "email": "helentang@berkeley.edu",
                    "details": "Hello! I'm Helen, and I'm from San Diego (where the real beaches are at). In my free time, I enjoy dancing (*insert shameless plug about Cal Ballroom), listening to podcasts and singing along badly to random songs, and sharing laughs with my friends. ",
                    "imgName": "helen-tang.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Kyle Tse",
                    "email": "tse.kylekobie@berkeley.edu",
                    "details": "Hi, I'm a 3rd year CS major from Alhambra, CA. During my free time, I love watching the NBA and singing. Hit me up if you want to talk about anything!",
                    "imgName": "kyle-tse.JPG",
                    "courses": {
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Celine Spathias",
                    "email": "celinespathias@berkeley.edu",
                    "details": "Hello! I am a Junior Transfer intended Computer Science major.  I enjoy snowboarding, the beach, and pretty much any outdoor activity.  The one food that I will never get tired of is pizza, I'm not sure if you feel the same... ",
                    "imgName": "celine-spathias.png",
                    "courses": {
                        "EE16A": "Junior Mentor"
                    }
                },
                {
                    "name": "Evan Corriere",
                    "email": "evancorriere@berkeley.edu",
                    "details": "Hello! This I've been involved with 61a for four semesters now, first as a student, then as an academic intern, and now for my second semester as a CSM mentor. I believe that Python and CS can be fun and beautiful, so I bring that philosophy into section! I like to spend my free time skateboarding around campus, creating silly (often useless) apps, and listing to new music (so let me know if you have any suggestions). ",
                    "imgName": "evan-corriere.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Chris Niu",
                    "email": "chrniu@berkeley.edu",
                    "details": "Hi, I'm Chris",
                    "imgName": "chris-niu.png",
                    "courses": {
                        "CS61A": "Senior Mentor",
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Griffin Prechter",
                    "email": "griffinprechter@berkeley.edu",
                    "details": "Hi, I'm Griffin. I'm a Junior from Los Angeles, CA. I'm looking forward to sharing all the excitement that the wonderful world of Computer Science has to offer.",
                    "imgName": "griffin-prechter.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Vibha Seshadri",
                    "email": "vibhaseshadri@berkeley.edu",
                    "details": "Hey everyone! I'm a third year computer science major from the Bay Area. In my spare time, you can catch me laughing non stop while watching a comedy special on Netflix, eagerly awaiting the premiere of Captain Marvel and Avengers: Endgame (anyone else excited??), surfing Spotify for new music, exploring the city, spending way too much time browsing and reading at book stores around Berkeley. Oh and I love coffee, so if you find any new coffee shops pls let me know, thanks :) I'm looking forward to meeting you this semester! Feel free to say hi and start a conversation any time :)",
                    "imgName": "vibha-seshadri.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Alex Kassil",
                    "email": "alexkassil@berkeley.edu",
                    "details": "HELLO! My name is Alex and I am a second year CS+Math Major. I've been a CS88 TA twice and a Stat 140 tutor once, this is my first time tutoring 61B! I am so excited and I hope you sign up for my section. Come for fun, occasional food, and plenty of high energy learning. :D :D :D",
                    "imgName": "alex-kassil.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor",
                        "CS88": "Coordinator"
                    },
                    "website": "https://alexkassil.github.io"
                },
                {
                    "name": "Jeffrey Hong",
                    "email": "hongjeffrey@berkeley.edu",
                    "details": "Hi! I'm Jeffrey, and I hate icebreakers, but I do like Smash Bros, badminton, watching cooking ASMR, and of course 61B :)",
                    "imgName": "jeffrey-hong.jpg",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Rene Lee",
                    "email": "renelee@berkeley.edu",
                    "details": "Hi! I'm Rene and my favorite restaurant at Berkeley is Jayakarta :)\nI was a mentor for 61B last semester and was an academic intern the semester before that. This is my first semester being a tutor!",
                    "imgName": "rene-lee.JPG",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Ryan Roggenkemper",
                    "email": "rroggenkemper@berkeley.edu",
                    "details": "I'm a 3rd year CogSci & CS major from Los Gatos, CA. I enjoy cooking (because it usually leads to eating things, which is pretty great), music, and playing a sport/game called jugger. I'm also a bit too good at procrastinating (please don't follow my example).",
                    "imgName": "ryan-roggenkemper.jpg",
                    "courses": {
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Albert Hu",
                    "email": "al.hu@berkeley.edu",
                    "details": "Hi! I'm a fourth year CS major from LA. Outside of school, I manage to make time to cook, exercise, and look for Olympians (I've run into Missy Franklin and Nathan Adrian!!!!). If you run into me outside of CSM, there is a 90% chance that I am on the way to / am drinking boba. I look forward to getting to know you all, and let's have a great semester! :) ",
                    "imgName": "albert-huang.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Alan Ton",
                    "email": "alanton@berkeley.edu",
                    "details": "Hi! I'm a 3rd year EECS student from Walnut, CA and this is my 4th semester teaching CS61B with CSM.",
                    "imgName": "alan-ton.jpg",
                    "courses": {
                        "CS61B": "Coordinator"
                    },
                    "website": "https://alandton.com/home"
                },
                {
                    "name": "Darren Huang",
                    "email": "darren.y.huang@berkeley.edu",
                    "details": "Hello! I'm a Junior at UC Berkeley studying computer science and applied math. I really enjoy learning new things and exploring how a simple bug can take hours off your life.",
                    "imgName": "darren-huang.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    }
                },
                {
                    "name": "Peter Ren",
                    "email": "peterren@berkeley.edu",
                    "details": "Hi friends! I'm a third-year studying computer science and chemical biology from the good 'ole Chicagoland area. I love being spontaneous, hiking, following and playing basketball (poorly), speaking using my mouth, and of course schooool!!!!!!! Hope y'all have a fun and exciting experience in 61C!",
                    "imgName": "peter-ren.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Saam Zahedian",
                    "email": "saam.zahedian@berkeley.edu",
                    "details": "Hi all, I'm a second year EECS major originally from Washington, D.C. I love 61B for its blend of practical coding skills and beautiful theoretical principles, and am excited to be teaching this class! My hobbies include spending countless hours browsing bookstore shelves, and attempting to take a run every morning.  Among my unpopular beliefs are that boba should be called bubble tea, and that the 1970s were music's greatest decade. ",
                    "imgName": "saam-zahedian.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Maryam Sabeti",
                    "email": "msabeti5@berkeley.edu",
                    "details": "Hello! I'm Maryam and I am a third year Computer Science major. In my free time, I like teaching so I have been a mentor for 61B and on course staff for 70. Please feel free to reach out!",
                    "imgName": "maryam-sabeti.JPG",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    }
                },
                {
                    "name": "Alex Yang",
                    "email": "yangalex@berkeley.edu",
                    "details": "Hello! My name is Alex and I'm a third year studying computer science. This is my fourth semester teaching 61a and I have no clue what I'm doing. Runaway by Kanye West is my go to song before taking midterms.",
                    "imgName": "alex-yang.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "website": "https://akyang.github.io/"
                },
                {
                    "name": "Sean Dooher",
                    "email": "sean.dooher@berkeley.edu",
                    "details": "Hi! My name's Sean and I'm a 3rd-year CS major from the East Bay. I love hiking, cooking, and watching way too much Netflix. This is my first semester helping out with 61C, but 61C was one of my favorite classes here at Berkeley and I'm excited to hopefully help make it one of yours as well!",
                    "imgName": "sean-dooher.jpg",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    }
                },
                {
                    "name": "Lucas Pan",
                    "email": "lucaspan@berkeley.edu",
                    "details": "Hi! I'm a fourth-year English/CS major!  In my free time, I like reading, writing, video games, anime (and animation of the non-Japanese variety!), and riding my scooter.  I look forward to meeting y'all!",
                    "imgName": "lucas-pan.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    }
                },
                {
                    "name": "Shubha Jagannatha",
                    "email": "shubhaj@berkeley.edu",
                    "details": "Hello friends! I'm a Sophomore studying EECS here at Berkeley. I love all things design, enjoy building cool tech projects at the intersection of art and software, and am passionate about education. My other interests include music, cats, and Waluigi. Hope to see y'all around!",
                    "imgName": "shubha-jagannatha.jpg",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "website": "https://shubhaja.github.io"
                },
                {
                    "name": "Claire Zhang",
                    "email": "yunzhi@berkeley.edu",
                    "details": ":)",
                    "imgName": "claire-zhang.png",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "website": "https://zzyunzhi.github.io/zhang/"
                },
                {
                    "name": "Bridget Cheng",
                    "email": "bridget.c@berkeley.edu",
                    "details": "Hello everyone! My name is Bridget, and I'm a second year studying CS and bio. This will be my second year as a CS61A mentor, I so thrilled because I love 61A!  I love travelling, snowboarding, playing w animals, and napping :) My favorite place to eat in berk is Berkeley Thai House/Imm Thai (I probably eat Thai too often) ",
                    "imgName": "bridget-cheng.jpg",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    }
                },
                {
                    "name": "Aatif Jiwani",
                    "email": "aatifjiwani@berkeley.edu",
                    "details": "Hey, I'm Aatif Jiwani and I'm a Sophmore EECS major here at UC Berkeley! Besides having a passion for Computer Architecture, I do a couple of other things with my life here at Cal. I'm a huge video game nerd and one of my favorite franchises is Assassin's Creed. Although the new ones kind of suck, I'm still working on trying to finish AC Syndicate so I can enter the realm of Ancient Egypt in AC Origins. Also, I am a brother at Sigma Alpha Mu and during my down times, I often like to go to the fraternity, hangout with my friends, and listen to music! (sometimes at high volume) \n\nWhen I'm not in class or taking a break, I work with an ASUC Senator to develop BearCrawl, a platform to streamline the club recruitment process at the beginning of each semester. We're going to use BearCrawl to supplement Sproul as a hub for new students to search and find out about organizations on campus. Using a team of bright and diverse web developers, hopefully BearCrawl will be out for beta testing in the Fall of 2019! ",
                    "imgName": "aatif-jiwani.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    },
                    "website": "https://www.github.com/aatifjiwani"
                },
                {
                    "name": "Boren Tsai",
                    "email": "boren.tsai@berkeley.edu",
                    "details": "Hey! My name is Boren and I'm a second-year CS major. I'm a drinker of black coffee, proud owner of a corgi, and an enthusiast of all things outdoors...y. Looking forward to meeting y'all this semester! ",
                    "imgName": "boren-tsai.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Jerry Zhu",
                    "email": "jerryzhucs@berkeley.edu",
                    "details": "Hi! Im Jerry, a second year EECS major from Rancho Cucamonga (Ranch of Cucumbers, Rachas and Cookie Monster, etc), CA. I love Chance the Rapper, hiking, and cooking in my spare time. Im a big Lakers fan and eat way too much fruit. Hope to meet y'all soon!",
                    "imgName": "jerry-zhu.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Sean Farhat",
                    "email": "s.farhat-sabet@berkeley.edu",
                    "details": "(Note: the following should be read to the tune of \"Let's Talk about Sex\" by Salt-N-Pepa) You'll talk about trees with me. Let's talk about stacks and heaps. Let's talk about all the space and all the time complexities. Let's talk about graphs. Let's talk about Prim. Let's talk about sorts. Let's talk about Java! (End song) You should come to my section.",
                    "imgName": "sean-farhat.jpg",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "website": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                },
                {
                    "name": "Amy Mendelsohn",
                    "email": "amymendelsohn@berkeley.edu",
                    "details": "I\u2019m a fourth year CS and History double major. I came to Berkeley as a history major, but then 61A happened. I'm also part of ReUSE, a volunteer-run club/store in MLK. You can also find me in Soda and Cory a bit too often. ",
                    "imgName": "amy-mendelsohn.png",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Albert Xu",
                    "email": "albertxu3@berkeley.edu",
                    "details": "if you are jumping up and down in muddy puddles, you must wear your boots!",
                    "imgName": "albert-xu.jpg",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "website": "http://albertxu.xyz/teaching/cs61a-csm/"
                },
                {
                    "name": "Grant Han",
                    "email": "granthan@berkeley.edu",
                    "details": "Hello! I'm Grant and I am a senior mentor for CS 88 and previously a junior mentor for 61A. I'm super excited to get to know and work with you! I'm an LA native (Go Lakers) and from the 626 area, where authentic asian food and boba is literally on every street corner. I'm also an avid runner, hiker, traveler, and foodie, so hit me up with any new places or restaurants to explore! I also enjoy trying out new things (except swimming) and getting to meet people, like you! Feel free to reach out to me about anything.",
                    "imgName": "grant-han.png",
                    "courses": {
                        "CS88": "Senior Mentor"
                    }
                },
                {
                    "name": "Candace Chiang",
                    "email": "chiang.candace@berkeley.edu",
                    "details": "Hi there! I'm Candace, and I'm a sophomore from the bay area. When I'm bored, I hold balloons on my head and think about my future.",
                    "imgName": "candace-chiang.jpeg",
                    "courses": {
                        "CS70": "Senior Mentor"
                    }
                },
                {
                    "name": "Asli Akalin",
                    "email": "asliakalin@berkeley.edu",
                    "details": "I am a junior double majoring in Economics and Computer Science. I have been teaching 61A for 4 semesters and I think it absolutely is a great class. I've also taught been on the staff for CS70 and CS170. I like chilling in calm quiet places, napping, playing chess and reading. I also drink tea like there's no tomorrow and snack 24/7 so you'll be snacking with me during the sections because I don't intend to stop. I'm excited to meet you all!",
                    "imgName": "asli-akalin.png",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    }
                },
                {
                    "name": "Yanlai Yang",
                    "email": "yyang22@berkeley.edu",
                    "details": "Hi everyone! I am first year from Shanghai, China, intending to major in computer science and applied math. I love playing around with math and logic, as well as relaxing with contract bridge and puzzles. I'm super excited to meet you all and start my teaching experience at Berkeley!",
                    "imgName": "yanlai-yang.jpg",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "name": "Nikhil Sharma",
                    "email": "sharmanik99@berkeley.edu",
                    "details": "Hi everyone! My name is Nikhil and this is my third semester with CSM. I've taught/mentored for Data 8 and EE16A before and now CS88. I'm a sophomore studying EECS with a passion for robotics and computer security. I'm from Tampa, Florida and I'm a big fan of Drake and Travis Scott. On Sundays, you'll probably find me either working at Kiwi Campus or at Moffit 1st floor working away at 170 homework. I look forward to meeting you all!",
                    "imgName": "nikhil-sharma.jpg",
                    "courses": {
                        "CS88": "Junior Mentor"
                    },
                    "website": "https://sharmanikhil99.github.io/"
                },
                {
                    "name": "Eric Chiu",
                    "email": "ericchiu3@berkeley.edu",
                    "details": "Hi, my name is Eric! I'm a second year CS major from Houston, Texas. You can find me on the IM soccer fields, on lichess.org, or feeding on Summoner's Rift. Looking forward to a great semester in 61C!",
                    "imgName": "eric-chiu.jpg",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Lu Yang",
                    "email": "luyang_phoebe@berkeley.edu",
                    "details": "Hi everyone. I'm a junior double-majoring in Chemistry and Computer Science. I like singing, cooking, and binge watching Netflix in my free time. I'm a huge fan of musicals and my favorite artist is Ed Sheeran. I usually spend the first half of my Sunday sleeping in and the second half wondering the things I could've done in the first half. My favorite restaurants in Berkeley are the ones with free deliveries on UberEats. I'm also a vocalist for The Intermission Orchestra at Berkeley so if you want to see more of me outside of sections come to our performances! :)",
                    "imgName": "lu-yang.JPG",
                    "courses": {
                        "CS61C": "Junior Mentor"
                    }
                },
                {
                    "name": "Preethi Kandappan",
                    "email": "preethi.k@berkeley.edu",
                    "details": "Hi! I'm Preethi, a second year Computer Science major from San Jose. I love playing board games, petting shiba inus, listening to basic music, and baking. Feel free to talk to me about anything!",
                    "imgName": "preethi-kandappan.jpg",
                    "courses": {
                        "CS61A": "Associate Mentor",
                        "CS61B": "Junior Mentor"
                    }
                },
                {
                    "name": "Sean Meng",
                    "email": "sean_meng@berkeley.edu",
                    "details": "Hi everyone! I'm Sean, a second year EECS major from San Jose California. I really enjoyed taking CS70 as a student, especially the probability portion. I enjoy rock climbing, board games, and playing ultimate. My life aspiration is to eat at least 5 rolls of sushi at a sushi buffet. I look forward to meeting everybody!",
                    "imgName": "sean-meng.JPG",
                    "courses": {
                        "CS70": "Junior Mentor"
                    }
                },
                {
                    "email": "alexstennet@berkeley.edu",
                    "courses": {
                        "CS61A": "Coordinator"
                    },
                    "imgName": "",
                    "name": "Alex Stennet"
                },
                {
                    "email": "catherinecang@berkeley.edu",
                    "courses": {
                        "CS61A": "Coordinator"
                    },
                    "imgName": "",
                    "name": "Catherine Cang"
                },
                {
                    "email": "superdoyboy@berkeley.edu",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Ajan Lorenz Adriano"
                },
                {
                    "email": "kelvinjue@berkeley.edu",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Kelvin Jue"
                },
                {
                    "email": "shidedehghani@berkeley.edu",
                    "courses": {
                        "CS61A": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Shide Dehghani"
                },
                {
                    "email": "daguqihanwen@berkeley.edu",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Carl Qi"
                },
                {
                    "email": "imaanic@berkeley.edu",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Imaani Choudhuri"
                },
                {
                    "email": "gilm@berkeley.edu",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Michelle Gil"
                },
                {
                    "email": "rebeccazeng@berkeley.edu",
                    "courses": {
                        "CS61A": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Rebecca Zeng"
                },
                {
                    "email": "oshiah@berkeley.edu",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Olivia Shiah"
                },
                {
                    "email": "shreyasahoo@berkeley.edu",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Shreya Sahoo"
                },
                {
                    "email": "varunj@berkeley.edu",
                    "courses": {
                        "CS61A": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Varun Jhunjhunwalla"
                },
                {
                    "email": "ramseymardini@berkeley.edu",
                    "courses": {
                        "EE16A": "Senior Mentor",
                        "CS61B": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Ramsey Mardini"
                },
                {
                    "email": "avinashnandakumar@berkeley.edu",
                    "courses": {
                        "EE16A": "Senior Mentor",
                        "CS61C": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Avinash Nandakumar"
                },
                {
                    "email": "simond@berkeley.edu",
                    "courses": {
                        "EE16A": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Simon Deng"
                },
                {
                    "email": "tang.andrew99@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Andrew Tang"
                },
                {
                    "email": "hannah.yan@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Hannah Yan"
                },
                {
                    "email": "kylesu98@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Kyle Su"
                },
                {
                    "email": "nathan_miller23@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Nathan Miller"
                },
                {
                    "email": "oscar.g.ortega.5@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Oscar Ortega"
                },
                {
                    "email": "cen.steven@berkeley.edu",
                    "courses": {
                        "CS61B": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Steven Cen"
                },
                {
                    "email": "deveshagarwal@berkeley.edu",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Devesh Agarwal"
                },
                {
                    "email": "jchen7@berkeley.edu",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Jie Chen"
                },
                {
                    "email": "ryantseng@berkeley.edu",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Ryan Tseng"
                },
                {
                    "email": "ambavar98@berkeley.edu",
                    "courses": {
                        "CS61B": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Vishal Ambavaram"
                },
                {
                    "email": "aakash.shukla@berkeley.edu",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Aakash Shukla"
                },
                {
                    "email": "anirvin@berkeley.edu",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Anirvin Jagannada Bhaskara Sikha"
                },
                {
                    "email": "arjunsahai@berkeley.edu",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Arjun Sahai"
                },
                {
                    "email": "ashleychien@berkeley.edu",
                    "courses": {
                        "CS61B": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Ashley Chien"
                },
                {
                    "email": "maxov@berkeley.edu",
                    "courses": {
                        "CS70": "Coordinator"
                    },
                    "imgName": "",
                    "name": "Max Ovsiankin"
                },
                {
                    "email": "mkhattar@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Manan Khattar"
                },
                {
                    "email": "obai@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Owen Bai"
                },
                {
                    "email": "wangyimeng98@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Yimeng Wang"
                },
                {
                    "email": "calzoom@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Japjot Singh"
                },
                {
                    "email": "jeffrey.y.liu@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Jeffrey Liu"
                },
                {
                    "email": "ryan.deng@berkeley.edu",
                    "courses": {
                        "CS70": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Ryan Deng"
                },
                {
                    "email": "kurnoolsaketh@berkeley.edu",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Saketh Kurnool"
                },
                {
                    "email": "zichuanl21@berkeley.edu",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "zichuan liu"
                },
                {
                    "email": "adrianliu99@berkeley.edu",
                    "courses": {
                        "CS70": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Jiakun Liu"
                },
                {
                    "email": "jeffreydchen@berkeley.edu",
                    "courses": {
                        "CS70": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Jeffrey Chen"
                },
                {
                    "email": "andrew_lee@berkeley.edu",
                    "courses": {
                        "CS70": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Andrew Lee"
                },
                {
                    "email": "robertwang1999@berkeley.edu",
                    "courses": {
                        "CS70": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Robert Wang"
                },
                {
                    "email": "starrtyang@berkeley.edu",
                    "courses": {
                        "CS70": "Associate Mentor"
                    },
                    "imgName": "",
                    "name": "Starr Yang"
                },
                {
                    "email": "daniel_zhang@berkeley.edu",
                    "courses": {
                        "CS61C": "Coordinator"
                    },
                    "imgName": "",
                    "name": "Daniel Zhang"
                },
                {
                    "email": "wenyuan_ma@berkeley.edu",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Wenyuan Ma"
                },
                {
                    "email": "sarah.sun123@berkeley.edu",
                    "courses": {
                        "CS61C": "Senior Mentor"
                    },
                    "imgName": "",
                    "name": "Sarah Sun"
                },
                {
                    "email": "chae@berkeley.edu",
                    "courses": {
                        "CS88": "Coordinator"
                    },
                    "imgName": "",
                    "name": "Chae Park"
                },
                {
                    "email": "mcrchopra@berkeley.edu",
                    "courses": {
                        "CS88": "Junior Mentor"
                    },
                    "imgName": "",
                    "name": "Manu Chopra"
                }
            ]

            let bios = EXEC_BIOS.concat(COURSE_BIOS);
            let split_bios = {};
            for (let course of COURSES) {
                split_bios[course] = [];
            }
            for (let i = 0; i < bios.length; ++i) {
                for (let [course, role] of Object.entries(bios[i].courses)) {
                    if (role !== "Coordinator") {
                        split_bios[course].push(bios[i]);
                    }
                }
            }

            for (var i = 0; i < COURSES.length; ++i) {
                $scope[COURSES[i]] = split_bios[COURSES[i]].sort((b1, b2) => {
                    return b1["name"].localeCompare(b2["name"]);
                });
            }
        });
})();
