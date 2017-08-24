angular.module('noServer').service('mainSrv', function ($http) {
    this.getGOT = function() {
        return $http.get('https://api.got.show/api/characters/')
    }
})