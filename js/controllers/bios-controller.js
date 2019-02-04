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
            const CS61A_BIOS =
            const CS61B_BIOS =
            const CS61C_BIOS =
            const CS70_BIOS =
            const CS88_BIOS =
            const EE16A_BIOS = [
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
            ]
            const EXEC_BIOS = 

            let bios = EXEC_BIOS.concat(
                CS61A_BIOS,
                EE16A_BIOS,
                CS61B_BIOS,
                CS70_BIOS,
                CS61C_BIOS,
                CS88_BIOS
            )
            let split_bios = {};
            for (let course of COURSES) {
                split_bios[course] = [];
            }
            for (let i = 0; i < bios.length; ++i) {
                for (let [course, role] of Object.entries(bios[i].courses)) {
                    split_bios[course].push(bios[i]);
                }
            }

            courses = Object.keys(split_bios);
            for (var i = 0; i < courses.length; ++i) {
                $scope[courses[i]] = split_bios[courses[i]]
            }
        });
})();
