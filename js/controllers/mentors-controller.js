(function() {
  angular.module('CSM')
  .controller('MentorsController', function($scope) {
    $scope.applicationsOpen = false;
    $scope.events = [
      {
        date: "1/1",
        title: "Sample event"
      }
    ];
  });
})();
