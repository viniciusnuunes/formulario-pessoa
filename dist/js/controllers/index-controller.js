app.controller("IndexController",["$scope","$http",function(e,a){baseUrl="http://187.111.10.182:8998/ideia/core/pessoa/11015472788",e.teste="vinicius",e.validacao_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,e.validacao_somente_letras=/^[a-zA-Z ]{1,25}$/,e.validacao_somente_numeros=/^[0-9]*$/,e.validacao_telefone=/^[0-9]{8,9}$/,e.pessoa={codigo:"01",cpf_cnpj:"11015472788",nome_completo:"Vinicius Nunes",email:"exemplo@ideia.com.br",telefone:"980346645",residencial:"",cep:"22733150",endereco:"Rua",numero_casa:"102",bairro:"Tanque",complemento:"",numero_cidade:"0",cidade:"RIo",uf:"RJ"}}]);