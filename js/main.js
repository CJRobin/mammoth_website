$(function() {

  $(".cover").height($( window ).height());
  $(".port-nav a").click(function(){
    $( ".port-nav a" ).each(function( index ) {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    if($(this).attr('id') == 'heliweb'){
      $(".port-display").css("background-image", "url(images/clients/heliweb/port.png)");
      $(".port-display a").attr("href", "http://www.heliweb.com/");


    }else if($(this).attr('id') === 'roblox'){
      $(".port-display").css("background-image", "url(images/clients/roblox/coco.png)");
      $(".port-display a").attr("href", "https://www.roblox.com/");

    }else if($(this).attr('id') === 'johnwarren'){
      $(".port-display").css("background-image", "url(images/clients/johnwarren/port.png)");
      $(".port-display a").attr("href", "http://john-warren.vision/");

    }else if($(this).attr('id') === 'goodfires'){
      $(".port-display").css("background-image", "url(images/clients/goodfires/port.jpg)");
      $(".port-display a").attr("href", "https://www.facebook.com/goodfires/");

    }
  })

$("#whatdo-link").click(function(){
  $('html, body').animate({
      scrollTop: $("#whatdo").offset().top-50
  }, 800);
});
$("#clients-link").click(function(){
  $('html, body').animate({
      scrollTop: $("#clients").offset().top-50
  }, 800);
});
$("#portfolio-link").click(function(){
  $('html, body').animate({
      scrollTop: $("#portfolio").offset().top-50
  }, 800);
});
$("#team-link").click(function(){
  $('html, body').animate({
      scrollTop: $("#team").offset().top-50
  }, 800);
});
$("#contact-link").click(function(){
  $('html, body').animate({
      scrollTop: $("#contact").offset().top-50
  }, 800);
});

window.sr = ScrollReveal();
sr.reveal('.table-row');

$("#send_message").click(function(){
  $.post( "mail.php", { name: $("#name_id").val(), email: $("#email_id").val(), message: $("#message_id").val() })
    .done(function( data ) {
      $(".contact-section").css("opacity", 0);
    });
});

});
