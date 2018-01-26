(function() {
    angular.module('CSM')
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/pages/home/index.html'
        })
        .when('/team', {
            templateUrl: 'templates/pages/team/index.html'
        })
        .when('/bios', {
            templateUrl: 'templates/pages/bios/index.html'
        })
        .when('/exec', {
            templateUrl: 'templates/pages/bios/exec.html'
        })
        .when('/cs70', {
            templateUrl: 'templates/pages/bios/cs70.html'
        })
        .when('/mentors', {
            templateUrl: 'templates/pages/mentors/index.html'
        })
        .when('/students', {
            templateUrl: 'templates/pages/students/index.html'
        })
        .when('/partners', {
            templateUrl: 'templates/pages/partners/index.html'
        })
        .when('/scheduler', {
            redirectTo: function() {
                window.location.href = 'http://csmscheduler.herokuapp.com/'
            }
        })
        .when('/interview', {
            redirectTo: function() {
                window.location.href = 'http://scrutinizer.herokuapp.com/'
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    });
})();
