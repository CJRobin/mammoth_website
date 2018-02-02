$(function() {

  $(".cover").height($( window ).height());
  $(".port-nav a").click(function(){
    $( ".port-nav a" ).each(function( index ) {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    if($(this).attr('id') == 'heliweb'){
      $(".port-display source").attr("src", "images/clients/heliweb/source.mp4");
    }else if($(this).attr('id') === 'roblox'){
      $(".port-display source").attr("src", "images/clients/roblox/source.mp4");
    }
    $(".port-display video")[0].load();
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

$("#send_message").click(function(){
  $.post( "mail.php", { name: $("#name_id").val(), email: $("#email_id").val(), message: $("#message_id").val() })
    .done(function( data ) {
      $(".contact-section").css("opacity", 0);
    });
});

});
