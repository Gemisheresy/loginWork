myApp.controller('mainController', ['$scope','$location',function($scope,$location){


}]);


myApp.controller('loginController',['$scope','$location',function($scope,$location){
    $scope.submit= function (){
        $location.path('/welcome')
    }
}]);

myApp.controller('welcomeController',['$scope',function($scope){

}]);
myApp.controller('signupController',[function(){}]);