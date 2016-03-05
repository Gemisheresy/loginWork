myApp.controller('mainController', ['$scope','$location',function($scope,$location){


}]);


myApp.controller('loginController',['$scope','$location','$http',function($scope,$location,$http){
    $scope.userName = '';
    $scope.password = '';
    $scope.submit= function (){
        $location.path('/validating.html')
        var req = {
            method: 'POST',
            url: '/login/validation',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { userName : $scope.userName, password : $scope.password }
        }

        $http(req).then(function(response){
            $location.path('/welcome')
        }, function(response){
            $location.path('/login')
        });

    }
}]);

myApp.controller('welcomeController',['$scope',function($scope){

}]);
myApp.controller('signupController',[function(){}]);