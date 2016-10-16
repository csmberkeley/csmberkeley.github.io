(function() {
    angular.module('CSM')
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/pages/home/index.html'
        })
        .when('/about', {
            templateUrl: 'templates/pages/about/index.html'
        })
        .when('/join', {
            templateUrl: 'templates/pages/join/index.html'
        })
        .when('/team', {
            templateUrl: 'templates/pages/team/index.html'
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
        .otherwise({
            redirectTo: '/'
        });
    });
})();
