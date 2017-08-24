angular.module('noServer').controller('mainCtrl', function ($scope, mainSrv) {
    $scope.showme = true

    $scope.recGOT = function () {
        mainSrv.getGOT().then(function (response) {
            function randomizer() {
                var num = Math.random() * 2027
                return Math.trunc(num);
            }
            $scope.showme = false
            $scope.names = response.data[randomizer()]
            console.log($scope.names)

        })
    }
})