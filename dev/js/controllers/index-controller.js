app.controller('IndexController', ['$scope', '$http', function($scope, $http){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'

    $scope.teste = "vinicius"
    $scope.validacao_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.validacao_somente_letras = /^[a-zA-Z ]{1,25}$/;
    $scope.validacao_somente_numeros = /^[0-9]*$/;
    $scope.validacao_telefone = /^[0-9]{8,9}$/;
    $scope.pessoa = {
        codigo: "P101547278",
        cpf_cnpj: "11015472788",
        nome_completo: "Vinicius Nunes",
        email: "exemplo@",
        telefone: "",
        residencial: "",
        cep: "22733150",
        rua: "",
        numero_casa: "102",
        bairro: "Tanque",
        complemento: "",        
        cidade: "Rio de Janeiro",
        uf: "RJ"
    };

    $scope.criarCliente = function(){
        console.log($scope.formulario);
    };

    // função de validação
    $scope.validar = function(obj) {
        valor = obj.pessoa.cpf_cnpj;
        tam = valor.length;
        console.log(valor);
        console.log(tam);

        if(!(tam == 11 || tam == 14)) {
            alert(valor + "não é válido")
            return false;
        }

        // se for CPF
        if(tam == 11) {
            if(!validaCPF(valor)) {
                alert("O CPF " + valor + " não é válido!");
                return false;
            }
            alert("CPF válido!")
            obj.value = maskCPF(valor);
            return true;
        }

        // se for CNPJ
        if(tam == 14) {
            if(!validaCNPJ(valor)) {
                alert("O CNPJ " + valor + " não é válido!");
                return false
            }
            alert("CNPJ válido!")
            obj.value = maskCNPJ(valor);
            return true;
        }
    } // fim do validar

    $scope.validaCPF = function(s) {
        var c = s.substr(0,9);
        var dv = s.substr(9,2);
        var d1 = 0;
        for (var i=0; i<9; i++) {
            d1 += c.charAt(i)*(10-i);
         }
        if (d1 == 0) return false;
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(0) != d1){
            return false;
        }
        d1 *= 2;
        for (var i = 0; i < 9; i++)	{
             d1 += c.charAt(i)*(11-i);
        }
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(1) != d1){
            return false;
        }
        return true;
    }
    
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