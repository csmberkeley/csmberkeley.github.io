(function() {
  angular.module('CSM')
  .controller('MentorsController', function($scope) {
    $scope.applicationsOpen = true;
    $scope.events = [
      { 'date': '1/15 11:59 PM', 'title': 'Apps due' },
      { 'date': '1/16 11:59 PM', 'title': 'Interview notifications' },
      { 'date': '1/17 - 1/20', 'title': 'Interviews' },
      { 'date': '1/22', 'title': 'Interview results' },
      { 'date': '1/29', 'title': 'Orientation' },
      { 'date': '2/5', 'title': 'Mentoring begins' }
    ];
  });
})();
