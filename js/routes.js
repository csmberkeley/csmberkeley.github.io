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
        .when('/cs61b', {
            templateUrl: 'templates/pages/bios/cs61b.html'
        })
        .when('/cs61a', {
            templateUrl: 'templates/pages/bios/cs61a.html'
        })
        .when('/ee16a', {
            templateUrl: 'templates/pages/bios/ee16a.html'
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
                window.location.href = 'http://scheduler.csmentors.org/'
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
