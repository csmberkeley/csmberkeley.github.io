(function() {
  angular.module('CSM')
  .controller('TeamController', function($scope) {
    $scope.officers = [
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
        "name": "Joseph jiang",
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
    ];
  });
})();
