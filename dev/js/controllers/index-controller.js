app.controller('IndexController', ['$scope', '$http', function($scope, $http){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'
    
    // $http.get(baseUrl).then(function successCallback(response) {
                
    //     $scope.resultado = response.data;
    //     console.log('Resultado: ', response);

    // }, function errorCallBack(response) {
    //     console.log('Algo deu errado: ', response);
    // });        

    $http({
        method: 'GET',
        url: baseUrl
    }).then(function successCallback(response){
        $scope.resultado = response.data;
        console.log('Resultado: ', response);

    }, function errorCallBack(response){       
        $scope.resultado = response.data; 
        console.log('Algo deu errado: ', response);

    });

}]);