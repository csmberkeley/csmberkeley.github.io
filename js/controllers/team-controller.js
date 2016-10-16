(function() {
  angular.module('CSM')
  .controller('TeamController', function($scope) {
    $scope.officers = [
      {
        "name": "Tiffany Qi",
        "img": "tiffany.jpg",
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
        "name": "Allan Tang",
        "img": "allan.jpg",
        "position": "Head Senior Mentor"
      },

      {
        "name": "Alex Takahashi",
        "img": "alex-takahashi.jpg",
        "position": "Social Organizer"
      },

      {
        "name": "Mike Aboody",
        "img": "mike.jpg",
        "position": "Social Organizer & 61A Senior Mentor"
      },

      {
        "name": "Katya Stukalova",
        "img": "katya.jpg",
        "position": "Social Organizer & 61A Senior Mentor"
      },

      {
        "name": "Alex Zhang",
        "img": "alex_z.jpg",
        "position": "Communications & 61A Senior Mentor"
      },

      {
        "name": "AC Dela Paz",
        "img": "ac.png",
        "position": "61A Senior Mentor"
      },

      {
        "name": "Anwar Baroudi",
        "img": "anwar.jpg",
        "position": "61A Senior Mentor"
      },

      {
        "name": "Colin Schoen",
        "img": "colin.jpg",
        "position": "61A Senior Mentor"
      },

      {
        "name": "Fahad Kamran",
        "img": "fahad.jpg",
        "position": "61A Senior Mentor"
      }
    ];
  });
})();