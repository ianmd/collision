var num = 1;
$('img1').attr("src","http://sendamessage.to/dist/images/fistbump-700/1.jpg");

$(window).scroll(function () { 
  num = $(window).scrollTop() / 3;
  
 if( parseInt(num) === num){
  
      $('img1').attr("src","http://sendamessage.to/dist/images/fistbump-700/"+ num +".jpg");}
  else{}
  
  if (num<1){
    $('img1').attr("src","http://sendamessage.to/dist/images/fistbump-700/1.jpg");
  }
    if (num>30){
    $('img1').attr("src","http://sendamessage.to/dist/images/fistbump-700/30.jpg");
      $("img1").css("position","absolute");
  }


});