$(document).ready(function(){

    // Seções
    var secTDef = $('#sec-t-def');
    var secTNDef = $('#sec-t-n-def');

    // Opções
    var tDef = $('#t-def');
    var tNDef = $('#t-n-def');

    var sInst = $('#s-inst');
    var sFast = $('#s-fast');
    var sLong = $('#s-long');
    var sNDef = $('#s-n-def');

    // Seção Ocultas por padrão
    // secTDef.hide();
    secTNDef.hide();

    // Tratamento de eventos
    tDef.click(function(){
        secTNDef.hide();
        secTDef.fadeIn();
        secTDef.slideDown();
    });
    tNDef.click(function(){
        secTDef.hide();
        secTNDef.fadeIn();
        secTNDef.slideDown();
    });

});
