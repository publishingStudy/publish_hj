var img_index = 1;
var width = window.innerWidth;
var isNext = true;
var diff;

$("#main_menu").hover(
  function(){
    $("#hidden_menu_container").css("opacity","1");
    $("#hidden_menu_container").css("visibility","visible");
    $("#hidden_menu_container").css("height","260px");
    $("#hidden_menu").css("height","260px");
  },
  function(){
    $("#hidden_menu_container").css("opacity","0");
    $("#hidden_menu_container").css("visibility","hidden");
    $("#hidden_menu_container").css("height","0px");
  }
);
$("#hidden_menu_container").css("transition-duration","0.5s");



$("#main_menu > li").hover(
  function(){
    $(this).css("color","#009223");
  },
  function(){
    $(this).css("color","black");
  }
);

$('#btn1').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn1').css("width", '28px');
    $('#btn1').css("background-color", '#FFC300');
    $('#btn1').css("border-radius", '20px');
    next(1);
  }
);
$('#btn1').css("transition-duration", "0.5s");

$('#btn2').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn2').css("width", '30px');
    $('#btn2').css("background-color", '#FFC300');
    $('#btn2').css("border-radius", '20px');
    next(2);
  }
);
$('#btn2').css("transition-duration", "0.5s");

$('#btn3').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn3').css("width", '30px');
    $('#btn3').css("background-color", '#FFC300');
    $('#btn3').css("border-radius", '20px');
    next(3);
  }
);
$('#btn3').css("transition-duration", "0.5s");

$('#btn4').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn4').css("width", '30px');
    $('#btn4').css("background-color", '#FFC300');
    $('#btn4').css("border-radius", '20px');
    next(4);
  }
);
$('#btn4').css("transition-duration", "0.5s");

$('#btn5').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn5').css("width", '30px');
    $('#btn5').css("background-color", '#FFC300');
    $('#btn5').css("border-radius", '20px');
    next(5);
  }
);
$('#btn5').css("transition-duration", "0.5s");

$('#btn6').click(
  function() {
    $('.btn').css("width", '10px');
    $('.btn').css("background-color", 'white');
    $('.btn').css("border-radius", '50%');
    $('#btn6').css("width", '30px');
    $('#btn6').css("background-color", '#FFC300');
    $('#btn6').css("border-radius", '20px');
    next(6);
  }
);
$('#btn6').css("transition-duration", "0.5s");


imgs = $('#img_list');
const next = (index) => { 
  var str;
  if(index > img_index){
    diff = index - img_index;
    isNext = true;
    width = window.innerWidth;
    if(window.innerWidth >1280){
      str = String(diff*window.innerWidth);
    }
    else{
      str = String(diff*1280);
    }
    imgs.animate({
      left: '-='+str+'px'
    });
  }
  if(index < img_index){
    diff = img_index-index;
    isNext = false;
    width = window.innerWidth;
    if(window.innerWidth >1280){
      str = String(diff*window.innerWidth);
    }
    else{
      str = String(diff*1280);
    }
    imgs.animate({
      left: '+='+str+'px'
    });
  }  
  
  img_index = index;
  //console.log(img_index);
  //console.log("diff", diff);
};

$(window).resize(
  function(){
    if(window.innerWidth > width){
      if(window.innerWidth > 1280){
        if(width <= 1280){
          //console.log("-1",window.innerWidth - width);
          str = String((img_index-1)*(window.innerWidth-1280));
          imgs.css("left", '-='+str+'px');
        }
        else{
          //console.log("0",window.innerWidth - width);
          str = String((img_index-1)*(window.innerWidth-width));
          imgs.css("left", '-='+str+'px');
        }
        //console.log("diff ",diff," str ", str);     
      }
      width = window.innerWidth; 
    }
    if(window.innerWidth < width){
      if(window.innerWidth < 1280){
        if(width > 1280){
          //console.log("1",width-window.innerWidth);
          str = String((img_index-1)*(width-1280));
          imgs.css("left", '+='+str+'px');
        }
      }
      else{ 
          //console.log("2",width-window.innerWidth);
          str = String((img_index-1)*(width-window.innerWidth));
          imgs.css("left", '+='+str+'px');
          //console.log("diff ",diff," str ", str);
      } 
    }
    width = window.innerWidth; 
  }
);



