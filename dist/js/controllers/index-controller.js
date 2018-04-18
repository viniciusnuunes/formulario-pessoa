app.controller('IndexController', ['$scope', function($scope, $rootScope, $http){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'
    
    $http.get(baseUrl).then(function(response) {
        $scope.resultado = response.data;
        
        console.log(response);
    });        

}]);