$(document).ready(function(){

    // Select processador

$(".dropdown img.flag").addClass("flagvisibility");

$(".dropdown dt a").click(function() {
    $(".dropdown dd ul").toggle();
});

$(".dropdown dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    $("#idiomaSelecionado").val(
      getSelectedValue("sample")
    );
    
    console.log(
      'Processador selecionado:' + getSelectedValue("sample")
    );
});


function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});

$(".dropdown img.flag").toggleClass("flagvisibility");




    // Select Placa Mãe

$(".dropdown2 img.flag").addClass("flagvisibility");

$(".dropdown2 dt a").click(function() {
    $(".dropdown2 dd ul").toggle();
});

$(".dropdown2 dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown2 dt a span").html(text);
    $(".dropdown2 dd ul").hide();
    $("#idiomaSelecionado").val(
      getSelectedValue("sample")
    );
    
    console.log(
      'Placa mãe selecionado:' + getSelectedValue("sample")
    );
});


function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown2"))
        $(".dropdown2 dd ul").hide();
});

$(".dropdown2 img.flag").toggleClass("flagvisibility");


 // Select HD

 $(".dropdown3 img.flag").addClass("flagvisibility");

 $(".dropdown3 dt a").click(function() {
     $(".dropdown3 dd ul").toggle();
 });
 
 $(".dropdown3 dd ul li a").click(function() {
     var text = $(this).html();
     $(".dropdown3 dt a span").html(text);
     $(".dropdown3 dd ul").hide();
     $("#idiomaSelecionado").val(
       getSelectedValue("sample")
     );
     
     console.log(
       'Placa mãe selecionado:' + getSelectedValue("sample")
     );
 });
 
 
 function getSelectedValue(id) {
     return $("#" + id).find("dt a span.value").html();
 }
 
 $(document).bind('click', function(e) {
     var $clicked = $(e.target);
     if (! $clicked.parents().hasClass("dropdown3"))
         $(".dropdown3 dd ul").hide();
 });
 
 $(".dropdown3 img.flag").toggleClass("flagvisibility");


  // Select Placa de Video

$(".dropdown4 img.flag").addClass("flagvisibility");

$(".dropdown4 dt a").click(function() {
    $(".dropdown4 dd ul").toggle();
});

$(".dropdown4 dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown4 dt a span").html(text);
    $(".dropdown4 dd ul").hide();
    $("#idiomaSelecionado").val(
      getSelectedValue("sample")
    );
    
    console.log(
      'Placa mãe selecionado:' + getSelectedValue("sample")
    );
});


function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown4"))
        $(".dropdown4 dd ul").hide();
});

$(".dropdown4 img.flag").toggleClass("flagvisibility");

 // Select Memoria RAM

 $(".dropdown5 img.flag").addClass("flagvisibility");

 $(".dropdown5 dt a").click(function() {
     $(".dropdown5 dd ul").toggle();
 });
 
 $(".dropdown5 dd ul li a").click(function() {
     var text = $(this).html();
     $(".dropdown5 dt a span").html(text);
     $(".dropdown5 dd ul").hide();
     $("#idiomaSelecionado").val(
       getSelectedValue("sample")
     );
     
     console.log(
       'Placa mãe selecionado:' + getSelectedValue("sample")
     );
 });
 
 
 function getSelectedValue(id) {
     return $("#" + id).find("dt a span.value").html();
 }
 
 $(document).bind('click', function(e) {
     var $clicked = $(e.target);
     if (! $clicked.parents().hasClass("dropdown5"))
         $(".dropdown5 dd ul").hide();
 });
 
 $(".dropdown5 img.flag").toggleClass("flagvisibility");



  // Select SSD

$(".dropdown6 img.flag").addClass("flagvisibility");

$(".dropdown6 dt a").click(function() {
    $(".dropdown6 dd ul").toggle();
});

$(".dropdown6 dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown6 dt a span").html(text);
    $(".dropdown6 dd ul").hide();
    $("#idiomaSelecionado").val(
      getSelectedValue("sample")
    );
    
    console.log(
      'Placa mãe selecionado:' + getSelectedValue("sample")
    );
});


function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown6"))
        $(".dropdown6 dd ul").hide();
});

$(".dropdown6 img.flag").toggleClass("flagvisibility");


 // Select Gabinete

 $(".dropdown7 img.flag").addClass("flagvisibility");

 $(".dropdown7 dt a").click(function() {
     $(".dropdown7 dd ul").toggle();
 });
 
 $(".dropdown7 dd ul li a").click(function() {
     var text = $(this).html();
     $(".dropdown7 dt a span").html(text);
     $(".dropdown7 dd ul").hide();
     $("#idiomaSelecionado").val(
       getSelectedValue("sample")
     );
     
     console.log(
       'Placa mãe selecionado:' + getSelectedValue("sample")
     );
 });
 
 
 function getSelectedValue(id) {
     return $("#" + id).find("dt a span.value").html();
 }
 
 $(document).bind('click', function(e) {
     var $clicked = $(e.target);
     if (! $clicked.parents().hasClass("dropdown7"))
         $(".dropdown7 dd ul").hide();
 });
 
 $(".dropdown7 img.flag").toggleClass("flagvisibility");



}) 
// Fim da Função

function MudeElemento () {
    
}


