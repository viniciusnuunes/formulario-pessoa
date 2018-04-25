app.controller('IndexController', ['$scope', '$http', function($scope, $http){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'

    $scope.teste = "vinicius"
    $scope.pessoa = {
        codigo: "01",
        cpf: "11015472788",
        nome_completo: "",
        email: "vini@",
        telefone: "980346645",
        residencial: "",
        cep: "22733150",
        endereco: "Rua",
        numero_casa: "102",
        bairro: "Tanque",
        complemento: "",
        numero_cidade: "0",
        cidade: "RIo",
        uf: "RJ"
    };
    
    // $http.get(baseUrl).then(function successCallback(response) {
                
    //     $scope.resultado = response.data;
    //     console.log('Resultado: ', response);

    // }, function errorCallBack(response) {
    //     console.log('Algo deu errado: ', response);
    // });        

    // $http({
    //     method: 'GET',
    //     url: baseUrl
    // }).then(function successCallback(response){
    //     $scope.resultado = response.data;
    //     console.log('Resultado: ', response);

    // }, function errorCallBack(response){       
    //     $scope.resultado = response.data; 
    //     console.log('Algo deu errado: ', response);

    // });

}]);