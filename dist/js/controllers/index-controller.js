app.controller("IndexController",["$scope","$http",function(a,r){baseUrl="http://187.111.10.182:8998/ideia/core/pessoa/11015472788",a.teste="vinicius",a.validacao_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,a.validacao_somente_letras=/^[a-zA-Z ]{1,25}$/,a.validacao_somente_numeros=/^[0-9]*$/,a.validacao_telefone=/^[0-9]{8,9}$/,a.pessoa={codigo:"P101547278",cpf_cnpj:"11015472788",nome_completo:"Vinicius Nunes",email:"exemplo@teste.com",telefone:"980346645",residencial:"",cep:"22733150",rua:"A",numero_casa:"102",bairro:"Tanque",complemento:"",cidade:"Rio de Janeiro",uf:"RJ"},a.criarCliente=function(){console.log(a.formulario)},a.validar=function(a){return valor=a.pessoa.cpf_cnpj.replace(/\D/g,""),tam=valor.length,console.log(valor),console.log(tam),11!=tam&&14!=tam?(alert("CPF ou CNPJ inválido"),!1):11==tam?this.validaCPF(valor)?(alert("CPF válido!"),a.pessoa.cpf_cnpj=(r=valor).substring(0,3)+"."+r.substring(3,6)+"."+r.substring(6,9)+"-"+r.substring(9,11),!0):(alert("O CPF "+valor+" não é válido!"),!1):14==tam?this.validaCNPJ(valor)?(alert("CNPJ válido!"),a.pessoa.cpf_cnpj=(o=valor).substring(0,2)+"."+o.substring(2,5)+"."+o.substring(5,8)+"/"+o.substring(8,12)+"-"+o.substring(12,14),!0):(alert("O CNPJ "+valor+" não é válido!"),!1):void 0;var r,o},a.validaCPF=function(a){for(var r=a.substr(0,9),o=a.substr(9,2),e=0,i=0;i<9;i++)e+=r.charAt(i)*(10-i);if(0==e)return!1;if(9<(e=11-e%11)&&(e=0),o.charAt(0)!=e)return!1;e*=2;for(i=0;i<9;i++)e+=r.charAt(i)*(11-i);return 9<(e=11-e%11)&&(e=0),o.charAt(1)==e},a.validaCNPJ=function(a){var r=new Array,o=new Number,e=[6,5,4,3,2,9,8,7,6,5,4,3,2];for(i=0;i<12;i++)r[i]=a.charAt(i),o+=r[i]*e[i+1];for((x=o%11)<2?r[12]=0:r[12]=11-x,o=0,y=0;y<13;y++)o+=r[y]*e[y];return(x=o%11)<2?r[13]=0:r[13]=11-x,a.charAt(12)==r[12]&&a.charAt(13)==r[13]}}]);