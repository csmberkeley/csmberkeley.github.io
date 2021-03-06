(function() {
  const allOfficers = [
    /* Hopefully somebody, someday decides to install webpack so we can separate this
     * JSON stuff in a sane way as opposed to hardcoding it. However, this is not yet
     * my problem, so I'm going to leave it as is for now.
     * -- (Jonathan Shi, 31 January 2019)
     */
    // SPRING 2019
    [
      {
        "name": "Jason Goodman",
        "img": "jason-exec.jpg",
        "position": "President"
      },
      {
        "name": "Chris Allsman",
        "img": "chris-exec.jpg",
        "position": "Internal Vice President"
      },
      {
        "name": "Suraj Rampure",
        "img": "suraj-exec-sp19.png",
        "position": "External Vice President"
      },
      {
        "name": "Yiling Kao",
        "img": "yiling-kao-square.jpg",
        "position": "Communications"
      },
      {
        "name": "Jose Chavez",
        "img": "jose-chavez-exec.jpg",
        "position": "Socials Chair"
      },
      {
        "name": "Jonathan Shi",
        "img": "jonathan-shi-exec.jpg",
        "position": "Tech Chair"
      },
      {
        "name": "Alex Stennet",
        "img": "alex-stennet.jpg", // grabbed off 61A website
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Catherine Cang",
        "img": "catherine-cang1.jpg", // grabbed off 61B website
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Alan Ton",
        "img": "alan-ton.jpeg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Danny Chu",
        "img": "danny-exec.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Kristen Kafkaloff",
        "img": "kristen-exec.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Max Ovsiankin",
        "img": "max-ovsiankin-square.jpeg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Michelle Mao",
        "img": "michelle-mao-exec.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Dominic Carrano",
        "img": "dominic-exec.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Katherine Liu",
        "img": "katherine-liu-exec.jpg",
        "position": "CS 61C Coordinator"
      },
      {
        "name": "Daniel Zhang",
        "img": "daniel-zhang-exec.jpg", // grabbed of 61C website
        "position": "CS 61C Coordinator"
      },
      {
        "name": "Alex Kassil",
        "img": "alex-kassil.png", // grabbed of 88 website
        "position": "CS 88 Coordinator"
      },
      {
        "name": "Chae Park",
        "img": "chae-exec.jpg",
        "position": "CS 88 Coordinator"
      },
      {
        "name": "Aditya Baradwaj",
        "img": "aditya.jpg",
        "position": "Advisor"
      },
      {
        "name": "Jerry Huang",
        "img": "jerry-exec.jpg",
        "position": "Advisor"
      },
      {
        "name": "Yannan Tuo",
        "img": "yannan-tuo-square.jpg",
        "position": "Advisor"
      },
      {
        "name": "Paul Bitutsky",
        "img": "paul-exec.jpg",
        "position": "Advisor"
      },
      {
        "name": "Varsha Ramakrishnan",
        "img": "varsha-exec-sp19.jpg",
        "position": "Advisor"
      },
      {
        "name": "Mudit Gupta",
        "img": "mudit-exec-sp19.jpg",
        "position": "Advisor"
      }
    ],
    // FALL 2018
    [
      {
        "name": "Jason Goodman",
        "img": "jason-exec.jpg",
        "position": "President"
      }, 
      {
        "name": "Joy Tang",
        "img": "joy-exec.jpg",
        "position": "Internal Vice President"
      },
      {
        "name": "Suraj Rampure",
        "img": "suraj-exec.png",
        "position": "External Vice President"
      },
      {
        "name": "Yiling Kao",
        "img": "yiling-kao-square.jpg",
        "position": "Communications"
      },
      {
        "name": "Matthew Soh",
        "img": "matthew-exec.jpg",
        "position": "Tech Chair"
      },
      {
        "name": "Paul Bitutsky",
        "img": "paul-exec.jpg",
        "position": "Socials Chair"
      },
      {
        "name": "Chris Allsman",
        "img": "chris-exec.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Lindsay Yang",
        "img": "lindsay-yang-square.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Dee Guo",
        "img": "dee-guo-square.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Yichen Sun",
        "img": "yichen-sun-square.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Max Ovsiankin",
        "img": "max-ovsiankin-square.jpeg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Nick Titterton",
        "img": "nick-titterton-square.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Varsha Ramakrishnan",
        "img": "varsha-exec.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Yannan Tuo",
        "img": "yannan-tuo-square.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Aditya Baradwaj",
        "img": "aditya.jpg",
        "position": "Advisor" 
      }, 
      {
        "name": "Mudit Gupta",
        "img": "muditgupta.jpg",
        "position": "Advisor"
      },
    ],
    // SPRING 2017
    [
      {
        "name": "Kevin Lin",
        "img": "kevin-exec.jpg",
        "position": "President"
      }, 
      {
        "name": "Jason Goodman",
        "img": "jason-exec.jpg",
        "position": "Internal Vice President"
      },
      {
        "name": "Jerry Huang",
        "img": "jerry-exec.jpg",
        "position": "External Vice President"
      },
      {
        "name": "Joy Tang",
        "img": "joy-exec.jpg",
        "position": "Communications"
      },
      {
        "name": "James Jiang",
        "img": "james2-exec.jpg",
        "position": "Technology"
      },
      {
        "name": "Paul Bitutsky",
        "img": "paul-exec.jpg",
        "position": "Socials"
      },
      {
        "name": "Jennie Chen",
        "img": "jennie-chen-exec.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Chris Allsman",
        "img": "chris-exec.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Matthew Soh",
        "img": "matthew-exec.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Mudit Gupta",
        "img": "muditgupta.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Suraj Rampure",
        "img": "suraj-exec.png",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Yining Liu",
        "img": "yining-exec.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Varsha Ramakrishnan",
        "img": "varsha-exec.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Aditya Baradwaj",
        "img": "aditya.jpg",
        "position": "EE 16A Coordinator" 
      }, 
      {
        "name": "Fahad Kamran",
        "img": "fahad-exec.jpg",
        "position": "Advisor"
      },
      {
        "name": "Jiana Huang",
        "img": "jiana-exec.jpg",
        "position": "Advisor"
      },
      {
        "name": "Tiffany Perumpail",
        "img": "piffany.jpg",
        "position": "Advisor"
      },
      {
        "name": "Anwar Baroudi",
        "img": "anwar-exec.jpg",
        "position": "Advisor"
      }
    ],
    // FALL 2017
    [
      {
        "name": "Jiana Huang",
        "img": "jiana.jpg",
        "position": "President"
      }, 
      {
        "name": "Tiffany Perumpail",
        "img": "piffany.jpg",
        "position": "Internal Vice President"
      },
      {
        "name": "Anwar Baroudi",
        "img": "anwar.jpg",
        "position": "External Vice President"
      },
      {
        "name": "Joy Tang",
        "img": "joy.jpg",
        "position": "Communications"
      },
      {
        "name": "James Jiang",
        "img": "james.jpg",
        "position": "Technology"
      },
      {
        "name": "Jason Goodman",
        "img": "jason.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Paul Bitutsky",
        "img": "paul.jpg",
        "position": "CS 61A Coordinator"
      },
      {
        "name": "Kevin Lin",
        "img": "kevin.jpg",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Mudit Gupta",
        "img": "mudit.png",
        "position": "CS 61B Coordinator"
      },
      {
        "name": "Suraj",
        "img": "suraj.png",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Jerry Huang",
        "img": "jeralie.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Anwar Baroudi",
        "img": "anwar.jpg",
        "position": "EE 16A Coordinator"
      },
      {
        "name": "Aditya Baradwaj",
        "img": "aditya.jpg",
        "position": "EE 16A Coordinator" 
      }, 
      {
        "name": "Fahad Kamran",
        "img": "fahad.jpg",
        "position": "Advisor"
      },
      {
        "name": "Kenneth Zhou",
        "img": "kenneth.jpg",
        "position": "Advisor"
      }
    ], 
  ];
  angular.module('CSM')
  .controller('TeamController', function($scope) {
    const duties = {
      'President': 'plans semester\'s organizational timeline and outreach efforts, leads exec meetings, works jointly with other exec roles.',
      'Internal Vice President': 'Acts as ASUC/ESC liasion, drafts CSM budget, in charge of fundraisers, branding, and marketing.',
      'External Vice President': 'Organizes outreach to companies, manages social media, also helps with branding and marketing.',
      'Communications': 'Manages CSM email lists, drafts and sends feedback forms, newsletters, and emails, manages CSM apparel.',
      'Coord': 'Plans course timelines based on semester + curriculum, main point of contact for course staff, leads Senior Mentor meetings, mentor recruitment, attendace, feedback, and Piazza.',
      'Socials Chair': 'Leads direction on social aspect of orientation w/ a committee, mentor training, facilitates discussions and brainstorming on developing a CSM community.',
      'Tech Chair': 'Leads software development of Scheduler, internal interviewing software, and other apps at https://github.com/csmberkeley. Acts as product manager.',
      'Advisor': 'Provides input and advice during meetings to all members of Exec, assists with transition / training of new exec memebers.'
    }
    $scope.duty = function(position) {
      if (position.indexOf('Coord') !== -1) {
        return duties['Coord'];
      }
      return duties[position];
    }
    $scope.activeTeam = 0;
    $scope.officers = allOfficers[0];

    $scope.switchTeam = function(i) {
      $scope.activeTeam = i
      $scope.officers = allOfficers[i];
    }
  });
})();
