(function() {
  angular.module('CSM')
  .controller('TeamController', function($scope) {
    const duties = {
      'President': 'plans semester\'s organizational timeline and outreach efforts, leads exec meetings, works jointly with other exec roles.',
      'Internal Vice President': 'Acts as ASUC/ESC liasion, drafts CSM budget, in charge of fundraisers, branding, and marketing.',
      'External Vice President': 'Organizes outreach to companies, manages social media, also helps with branding and marketing.',
      'Communications': 'Manages CSM email lists, drafts and sends feedback forms, newsletters, and emails, manages CSM apparel.',
      'Coord': 'Plans course timelines based on semester + curriculum, main point of contact for course staff, leads Senior Mentor meetings, mentor recruitment, attendace, feedback, and Piazza.',
      'Socials': 'Leads direction on social aspect of orientation w/ a committee, mentor training, facilitates discussions and brainstorming on developing a CSM community.',
      'Technology': 'Leads software development of Scheduler, internal interviewing software, and other apps at https://github.com/csmberkeley. Acts as product manager.',
      'Advisor': 'Provides input and advice during meetings to all members of Exec, assists with transition / training of new exec memebers.'
    }
    $scope.duty = function(position) {
      if (position.indexOf('Coord') !== -1) {
        return duties['Coord'];
      }
      return duties[position];
    }
    const allOfficers = [[
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
    ],[
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

    $scope.activeTeam = 0;
    $scope.officers = allOfficers[0];

    $scope.toggleTeam = function() {
      $scope.activeTeam = 1 - $scope.activeTeam;
      $scope.officers = allOfficers[$scope.activeTeam];
    }
  });
})();
