$(function() {

  $(".port-nav a").click(function(){
    $( ".port-nav a" ).each(function( index ) {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    if($(this).attr('id') == 'heliweb'){
      $(".port-display").css("background-image", "url(images/clients/heliweb/port.png)");
      $(".port-display a").attr("href", "http://www.heliweb.com/");
      $(".port-desc").text("This was a helicopter magazine, the client wanted a new website that he could easily add new content using a CMS (wordpress). You can check out the website we completed for him down below!");

    }else if($(this).attr('id') === 'them'){
      $(".port-display").css("background-image", "url(images/clients/themuniversity/port.png)");
      $(".port-display a").attr("href", "https://them.university/courses/");
      $(".port-desc").text("Them University just recently started up and needed a splash page to show off their new education program to teach programming to kids. We were given a concept and developed the page for them!");

    }else if($(this).attr('id') === 'roblox'){
      $(".port-display").css("background-image", "url(images/clients/roblox/coco.png)");
      $(".port-display a").attr("href", "https://www.roblox.com/");
      $(".port-desc").text("One of our ongoing clients, Roblox handles all the graphics on this page which they send to us, we then get to put it together with our web developers. We have the opportunity to do all of their third-party sponsored splash pages any time they decide to do an event.");

    }else if($(this).attr('id') === 'johnwarren'){
      $(".port-display").css("background-image", "url(images/clients/johnwarren/port.png)");
      $(".port-display a").attr("href", "http://john-warren.vision/");
      $(".port-desc").text("John was running for Student Government President at Georgia Southern University. He needed a page to help with his ongoing campaign. We used a CMS (wordpress) to build his custom site. Check it out below!");

    }else if($(this).attr('id') === 'goodfires'){
      $(".port-display").css("background-image", "url(images/clients/goodfires/port.jpg)");
      $(".port-display a").attr("href", "https://www.facebook.com/goodfires/");
      $(".port-desc").text("");

    }else if($(this).attr('id') === 'jamie'){
          $(".port-display").css("background-image", "url(images/clients/jamie_renee/port.png)");
          $(".port-display a").attr("href", "https://www.facebook.com/jamiereneemusic/");
          $(".port-desc").text("");

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
  var response = grecaptcha.getResponse();
  if(response.length == 0){

  }else{
    $(".contact-section").css("display", "none");
    $(".loader").css("display", "block");
    $.post( "mail.php", { name: $("#name_id").val(), email: $("#email_id").val(), message: $("#message_id").val() })
      .done(function( data ) {
        $(".loader").css("display", "none");
        $(".final-message").css("display", "block");
      });
  }

});
});
