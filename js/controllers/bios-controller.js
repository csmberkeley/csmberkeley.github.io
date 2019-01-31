(function() {
    angular.module('CSM')
        .controller('BiosController', function($scope) {
            bios = []
            split_bios = {}
            for (var i = 0; i < bios.length; ++i) {
                for (let course in bios[i].courses) {
                    if (!(course in split_bios)) {
                        split_bios[course] = [bios[i]];
                    } else {
                        split_bios[course].push(bios[i]);
                    }
                }
            }

            courses = Object.keys(split_bios);
            for (var i = 0; i < courses.length; ++i) {
                $scope[courses[i]] = split_bios[courses[i]]
            }
        });
})();