var myApp = angular.module('myApp', ['ngRoute',]);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'public/pages/main.html',
            controller: 'mainController'
        })
        .when('/login',{
            templateUrl: 'public/pages/login.html',
            controller: 'loginController'
        })
        .when('/welcome',{
            templateUrl: 'public/pages/welcome.html',
            controller: 'welcomeController'
        })
        .when('/signup',{
            templateUrl: 'public/pages/signuppage.html',
            controller: 'signupController'
        })
        .when('/validation',{
            templateUrl : 'public/pages/validating.html'
        })
});


