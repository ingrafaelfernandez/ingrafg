
//Equivante jQuery al evento load
$(() => {
  
  //Eventos
  $("#btn").click(() => {
    $("span").eq(0).text(" Rafael Fernandez");
  });

  $("#btn2").click(() => {
    $("span").eq(0).text("Rafael@gmail.com");
  });

  $("#btn3").click(() => {
    $("span").eq(0).text("Informatico");
  });

  $("#btn4").click(() => {
    $("span").eq(0).text(" Buenos Aires, Argentina");
  });

  $("#btn5").click(() => {
    $("span").eq(0).text(" 414 101 73 16");
  });

  

});