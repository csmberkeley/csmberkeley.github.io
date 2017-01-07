(function() {
  angular.module('CSM')
  .controller('TeamController', function($scope) {
    const allOfficers = [[
      {
        "name": "Fahad Kamran",
        "img": "fahad.jpg",
        "position": "President"
      },

      {
        "name": "Joseph Jiang",
        "img": "joseph.jpg",
        "position": "Interal Vice President"
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
        "img": "placeholder.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Katya Stukalova",
        "img": "katya.jpg",
        "position": "CS 61A Coordinator"
      },

      {
        "name": "Byung Choi",
        "img": "byung.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Kevin Lin",
        "img": "kevin.jpg",
        "position": "CS 61B Coordinator"
      },

      {
        "name": "Jerry Huang",
        "img": "placeholder.jpg",
        "position": "CS 70 Coordinator"
      },

      {
        "name": "Peijie Li",
        "img": "placeholder.jpg",
        "position": "CS 70 Coordinator"
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
        "position": "Interal Vice President"
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
        "position": "Secretary"
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
