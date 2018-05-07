app.controller('IndexController', ['$scope', '$http', '$window', function($scope, $http, $window){

    baseUrl = 'http://187.111.10.182:8998/ideia/core/pessoa/11015472788'

    $scope.teste = "vinicius"
    $scope.validacao_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.nomevalidacao_somente_letras_com_caracter_especial = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
    $scope.validacao_somente_letras = /^[a-zA-Z ]{1,25}$/;
    $scope.validacao_somente_numeros = /^[0-9]*$/;
    $scope.validacao_telefone = /^[0-9]{8,9}$/;    
    $scope.pessoa = {
        codigo: "P101547278",
        cpf_cnpj: "11015472788",
        nome: "Vinícius Nunes",
        email: "exemplo@ideia.com.br",
        telefone: "980346645",
        residencial: "",
        cep: "22755150",
        rua: "",
        numero_casa: "",
        bairro: "",
        complemento: "",        
        cidade: "",
        uf: ""
    };

    $scope.reset = function(){        
        angular.copy({}, $scope.pessoa);
        $scope.formulario.$setPristine();
        $scope.formulario.$setUntouched();
    }

    $scope.criarCliente = function(){        
        console.log($scope.formulario);
    };

    // função de validação
    $scope.validaCampoCpfCnpj = function(obj) {
        valor = (obj.pessoa.cpf_cnpj).replace(/\D/g,'');
        tam = valor.length;

        if(!(tam == 11 || tam == 14)) {
            // $window.alert("Dígitos Inválidos")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
            return false;
        }

        // se for CPF
        if(tam == 11) {
            if(!this.validaCPF(valor)) {
                // $window.alert("O CPF " + valor + " não é válido");
                $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
                return false;
            }
            // alert("CPF válido!")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", true);
            obj.pessoa.cpf_cnpj = this.maskCPF(valor);
            return true;
        }

        // se for CNPJ
        if(tam == 14) {
            if(!this.validaCNPJ(valor)) {
                // $window.alert("O CNPJ " + valor + " não é válido");
                $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", false);
                return false
            }
            // alert("CNPJ válido!")
            $scope.formulario.cpf_cnpj.$setValidity("cpf_cnpj", true);
            obj.pessoa.cpf_cnpj = this.maskCNPJ(valor);
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

    // Algoritimo que valida o CNPJ
    $scope.validaCNPJ = function(CNPJ) {
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

    // Função que aplica a máscara ao CPF
    $scope.maskCPF = function(CPF){
        return CPF.substring(0,3)+"."+CPF.substring(3,6)+"."+CPF.substring(6,9)+"-"+CPF.substring(9,11);
    }

    // Função que aplica a máscara ao CNPJ
    $scope.maskCNPJ = function(CNPJ){
        return CNPJ.substring(0,2)+"."+CNPJ.substring(2,5)+"."+CNPJ.substring(5,8)+"/"+CNPJ.substring(8,12)+"-"+CNPJ.substring(12,14);	
    }
    
    // $http.get(baseUrl).then(function successCallback(response) {
                
    //     $scope.resultado = response.data;
    //     console.log('Resultado: ', response);

    // }, function errorCallBack(response) {
    //     console.log('Algo deu errado: ', response);
    // });          
    

    $scope.consultaCep = function(obj){
        
        // nova variável cep somente com dígitos
        cep = obj.pessoa.cep

        limparFormulario = function(){
            // limpa os valores do formulário do cep
            $scope.pessoa.rua = ""
            $scope.pessoa.bairro = ""
            $scope.pessoa.cidade = ""
            $scope.pessoa.uf = ""
        }

        // verifica se o campo cep possui valor informado
        if(cep != "") {

            // expressão regular para validar o cep
            var validacep = /^[0-9]{8}$/;

            // valida o formato do CEP
            if(validacep.test(cep)) {

                // preenche os campos com "..." enquanto consulta o webservice
                $scope.pessoa.rua = "..."
                $scope.pessoa.bairro = "..."
                $scope.pessoa.cidade = "..."
                $scope.pessoa.uf = "..."

                // consulta o webservice viacep.com.br
                $http({
                    method: 'GET',
                    url: "https://viacep.com.br/ws/"+ cep +"/json/?callback="
                }).then(function succsessCallback(response) {
                    
                    if(!("erro" in response.data)) {
                        // atualiza os campos com os valores da consulta
                        $scope.pessoa.rua = response.data.logradouro;
                        $scope.pessoa.bairro = response.data.bairro;
                        $scope.pessoa.cidade = response.data.localidade;
                        $scope.pessoa.uf = response.data.uf;
                    }
                    else {
                        // cep pesquisado não foi encontrado
                        limparFormulario();
                        $window.alert("Cep não encontrado.");                        
                    }                    
                }, function errorCallback(response){
                    $window.alert("O serviço de busca de CEP está indisponível no momento.")
                    limparFormulario();
                });
            } // end if
            else {
                // cep é inválido
                limparFormulario();
                $window.alert("Formato de CEP inválido");
            } 
        } // end if
        else {
            // cep sem valor, limpa formulário
            limparFormulario();
        }
    } // end consultaCep
    

}]);