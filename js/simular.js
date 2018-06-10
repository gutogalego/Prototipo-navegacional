$(document).ready(function(){

    // Seções
    var secTDef = $('#sec-t-def');
    var secTNDef = $('#sec-t-n-def');
    var results = $('#result');

    // Opções
    var tDef = $('#t-def');
    var tNDef = $('#t-n-def');

    var sInst = $('#s-inst');
    var sFast = $('#s-fast');
    var sLong = $('#s-long');
    var sNDef = $('#s-n-def');

    var tSel = $('.titulo');

    // Seção Ocultas por padrão
    secTDef.hide();
    secTNDef.hide();
    results.hide();

    // Tratamento de eventos
    tDef.click(function(){
        secTNDef.hide();
        results.hide();
        secTDef.fadeIn();
        secTDef.slideDown();
    });
    tNDef.click(function(){
        secTDef.hide();
        results.hide();
        secTNDef.fadeIn();
        secTNDef.slideDown();
    });

    tSel.click(function(){
        results.fadeIn();
        results.slideDown();
    });
    sInst.click(function(){
        results.fadeIn();
        results.slideDown();
    });
    sFast.click(function(){
        results.fadeIn();
        results.slideDown();
    });
    sLong.click(function(){
        results.fadeIn();
        results.slideDown();
    });
    sNDef.click(function(){
        results.fadeIn();
        results.slideDown();
    });

});
