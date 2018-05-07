// Função de bloqueio do espaço em alguns campos
function BloquearEspaco(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
};


// Funcção de salvar imagem e fazer preview
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imagem-perfil')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };
      reader.readAsDataURL(input.files[0]);
    }
};

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "Não há imagem",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Procurar"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:300
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Alterar");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});

$(document).ready(function(){
    /* ao pressionar uma tecla em um campo que seja de class="pula" */
    $('input').keypress(function(e){
        /* 
         * verifica se o evento é Keycode (para IE e outros browsers)
         * se não for pega o evento Which (Firefox)
        */
       var tecla = (e.keyCode?e.keyCode:e.which);
       
       /* verifica se a tecla pressionada foi o ENTER */
       if(tecla == 13){
           /* guarda o seletor do campo que foi pressionado Enter */
           campo =  $('input');
           /* pega o indice do elemento*/
           indice = campo.index(this);
           /*soma mais um ao indice e verifica se não é null
            *se não for é porque existe outro elemento
           */
          if(campo[indice+1] != null){
             /* adiciona mais 1 no valor do indice */
             proximo = campo[indice + 1];
             /* passa o foco para o proximo elemento */
             proximo.focus();
             return false;
          } 
            // verifica se o botão é valido e da submit quando estiver no ultimo campo
            if (!$('#btnGravar').prop("disabled")){
                return true;
            }
              
                  
       }
    })
 })