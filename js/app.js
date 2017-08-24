angular.module('noServer',['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.when('','/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "./home.html"
    })
     .state('dog', {
        url: '/dog',
        templateUrl: "./dog.html"
    })
     .state('cat', {
        url: '/cat',
        templateUrl: "./cat.html"
    })
})