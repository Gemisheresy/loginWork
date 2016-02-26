var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/welcome',{
            templateUrl: '/pages/welcome.html',
            controller: 'welcomeController'
        })
});


