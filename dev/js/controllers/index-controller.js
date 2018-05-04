app.controller('IndexController', ['$scope', '$http', '$window', function($scope, $http, $window){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'

    $scope.teste = "vinicius"
    $scope.validacao_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.validacao_somente_letras = /^[a-zA-Z ]{1,25}$/;
    $scope.validacao_somente_numeros = /^[0-9]*$/;
    $scope.validacao_telefone = /^[0-9]{8,9}$/;    
    $scope.pessoa = {
        codigo: "P101547278",
        cpf_cnpj: "11015472787",
        nome_completo: "Vinicius Nunes",
        email: "exemplo@teste.com",
        telefone: "980346645",
        residencial: "",
        cep: "22733150",
        rua: "A",
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
<<<<<<< HEAD
    $scope.validaCampoCpfCnpj = function(obj) {
=======
    $scope.validar = function(obj) {
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
        valor = (obj.pessoa.cpf_cnpj).replace(/\D/g,'');
        tam = valor.length;
        console.log(valor);
        console.log(tam);

        if(!(tam == 11 || tam == 14)) {
<<<<<<< HEAD
            $window.alert("Dígitos Inválidos")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
=======
            alert("CPF ou CNPJ inválido")
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
            return false;
        }

        // se for CPF
        if(tam == 11) {
            if(!this.validaCPF(valor)) {
<<<<<<< HEAD
                $window.alert("O CPF " + valor + " não é válido");
                $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
                return false;
            }
            // alert("CPF válido!")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", true);
            obj.pessoa.cpf_cnpj = this.maskCPF(valor);
=======
                alert("O CPF " + valor + " não é válido!");
                return false;
            }
            alert("CPF válido!")
            obj.pessoa.cpf_cnpj = maskCPF(valor);
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
            return true;
        }

        // se for CNPJ
        if(tam == 14) {
            if(!this.validaCNPJ(valor)) {
<<<<<<< HEAD
                $window.alert("O CNPJ " + valor + " não é válido");
                $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
                return false
            }
            // alert("CNPJ válido!")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", true);
            obj.pessoa.cpf_cnpj = this.maskCNPJ(valor);
=======
                alert("O CNPJ " + valor + " não é válido!");
                return false
            }
            alert("CNPJ válido!")
            obj.pessoa.cpf_cnpj = maskCNPJ(valor);
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
            return true;
        }
    } // fim do validaCampoCpfCnpj

    // Algoritimo que valida o CPF
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

<<<<<<< HEAD
    // Algoritimo que valida o CNPJ
    $scope.validaCNPJ = function(CNPJ) {
=======
    $scope.validaCNPJ =  function(CNPJ) {
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
        var a = new Array();
        var b = new Number;
        var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
        for (i=0; i<12; i++){
            a[i] = CNPJ.charAt(i);
            b += a[i] * c[i+1];
        }
        if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
        b = 0;
        for (y=0; y<13; y++) {
            b += (a[y] * c[y]);
        }
        if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
        if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
            return false;
        }
        return true;
    }

<<<<<<< HEAD
    // Função que aplica a máscara ao CPF
    $scope.maskCPF = function(CPF){
        return CPF.substring(0,3)+"."+CPF.substring(3,6)+"."+CPF.substring(6,9)+"-"+CPF.substring(9,11);
    }

    // Função que aplica a máscara ao CNPJ
    $scope.maskCNPJ = function(CNPJ){
=======
    //	função que aplica máscara no CPF
    function maskCPF(CPF){
        return CPF.substring(0,3)+"."+CPF.substring(3,6)+"."+CPF.substring(6,9)+"-"+CPF.substring(9,11);
    }

    //	função que aplica máscara no CNPJ
    function maskCNPJ(CNPJ){
>>>>>>> 6459f38888114c8e94d1ff655c3abf1cef543473
        return CNPJ.substring(0,2)+"."+CNPJ.substring(2,5)+"."+CNPJ.substring(5,8)+"/"+CNPJ.substring(8,12)+"-"+CNPJ.substring(12,14);	
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