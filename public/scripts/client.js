var myApp = angular.module('myApp', ['ngRoute']); // 'ngAnimate', 'ngTouch', 'ui.bootstrap'

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController as hc',
        }).otherwise('/');

    $locationProvider.html5Mode(true);
});