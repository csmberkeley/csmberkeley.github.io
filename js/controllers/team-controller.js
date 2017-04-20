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
        "name": "Fahad Kamran",
        "img": "fahad.jpg",
        "position": "President"
      },

      {
        "name": "Joseph Jiang",
        "img": "joseph.jpg",
        "position": "Internal Vice President"
      },

      {
        "name": "Anwar Baroudi",
        "img": "anwar.jpg",
        "position": "External Vice President"
      },

      {
        "name": "Kenneth Zhou",
        "img": "kenneth.jpg",
        "position": "Socials"
      },

      {
        "name": "Jiana Huang",
        "img": "jiana.jpg",
        "position": "Communications"
      },

      {
        "name": "Colby Guan",
        "img": "colby.jpg",
        "position": "Technology"
      },

      {
        "name": "Paul Bitutsky",
        "img": "paul.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Katya Stukalova",
        "img": "katya.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Byung Choi",
        "img": "byung-sp17.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Kevin Lin",
        "img": "kevin.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Jerry Huang",
        "img": "jeralie.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Peijie Li",
        "img": "peijie.jpg",
        "position": "CS 70 Coordinator"
      },
      {
        "name": "Jennifer Liang",
        "img": "jennifer-sp17.jpg",
        "position": "Advisor"
      },
      {
        "name": "Ricky Liang",
        "img": "ricky-sp17.jpg",
        "position": "Advisor"
      },
      {
        "name": "Tiffany Perumpali",
        "img": "piffany.jpg",
        "position": "Advisor"
      },
      {
        "name": "Jerry Chen",
        "img": "jerry-sp17.jpg",
        "position": "Advisor"
      },
    ], [
      {
        "name": "Fahad Kamran",
        "img": "fahad.jpg",
        "position": "President"
      },

      {
        "name": "Kenneth Zhou",
        "img": "kenneth.jpg",
        "position": "Internal Vice President"
      },

      {
        "name": "Ricky Liang",
        "img": "ricky.jpg",
        "position": "External Vice President"
      },

      {
        "name": "Joseph Jiang",
        "img": "joseph.jpg",
        "position": "Socials"
      },

      {
        "name": "Jiana Huang",
        "img": "jiana.jpg",
        "position": "Communications"
      },

      {
        "name": "Colby Guan",
        "img": "colby.jpg",
        "position": "Technology"
      },

      {
        "name": "Jerry Chen",
        "img": "jerry.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Anwar Baroudi",
        "img": "anwar.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Byung Choi",
        "img": "byung.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Jennifer Liang",
        "img": "jennifer.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Katya Stukalova",
        "img": "katya.jpg",
        "position": "CS 70 Coordinator"
      },

      {
        "name": "Albert Pham",
        "img": "albert.jpg",
        "position": "CS 70 Coordinator"
      },
    ]];

    $scope.activeTeam = 0;
    $scope.officers = allOfficers[0];

    $scope.toggleTeam = function() {
      $scope.activeTeam = 1 - $scope.activeTeam;
      $scope.officers = allOfficers[$scope.activeTeam];
    }
  });
})();
