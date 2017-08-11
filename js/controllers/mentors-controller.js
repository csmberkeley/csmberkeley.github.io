(function() {
  angular.module('CSM')
  .controller('MentorsController', function($scope) {
    $scope.applicationsOpen = true;
    $scope.events = [
      { 'date': '8/20 11:59 PM', 'title': 'Apps due' },
      { 'date': '8/21 11:59 PM', 'title': 'Interview notifications' },
      { 'date': '8/22 - 8/24', 'title': 'Interviews (CS70)' },
      { 'date': '8/22 - 8/25', 'title': 'Interviews (CS61A CS61B)'},
      { 'date': '8/25', 'title': 'Interview results (CS70)' },
      { 'date': '8/27', 'title': 'Interview results (CS61A CS61B)' },
      { 'date': '8/27', 'title': 'Mandatory Meeting (CS70)' },
      { 'date': '8/28', 'title': 'Meeting with Senior Mentors Begins (CS70)' },
      { 'date': '9/4', 'title': 'Orientation' },
      { 'date': '9/5', 'title': 'Meetings with Senior Mentors begin' },
      { 'date': '9/5', 'title': 'Mentoring begins (CS70)' },
      { 'date': '9/11', 'title': 'Mentoring begins (CS61A CS61B)'}
    ];
  });
})();
