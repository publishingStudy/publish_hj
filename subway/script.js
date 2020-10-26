$("#main_menu").hover(
  function(){
    $("#hidden_menu_container").css("opacity","1");
    $("#hidden_menu_container").css("visibility","visible");
    $("#hidden_menu_container").css("height","260px");
    $("#hidden_menu").css("height","260px");
  },
  function(){
    $("#hidden_menu_container").css("opacity","0");
    $("#hidden_menu_container").css("visibility","hiden");
    $("#hidden_menu_container").css("height","0px");
    $("#hidden_menu").css("height","0px");
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
