// Space Invaders Spaceship JavaScript/jQuery
// Students: As you observe the code below, notice how jQuery takes a lot of the pain
// out of actions that might seem tedious with Vanilla JavaScript.
// jQuery Ready Function (encloses all other functions)
// ==============================

// ************************ Read First **********************************
// To help give you hints there area few selections partially filled out.
// jQuery Methods you may find useful:
//
// animate, on, css
// review the jQuery documents and your textbook for more ideas.
// **********************************************************************

$(document).ready(function () {
  var originalPrimaryImgWidth = $('.captain-planet').width();
  var positionInDegrees = 0;
  
  // ===========
  // Audio Setup
  // ===========
  // Create an audio element with JavaScript
  var audioElement = document.createElement("audio");
  // Set it's source to the location
  // of our Spaceship theme song file.
  audioElement.setAttribute("src", "sound/free_alien_sound_effect_extened_version_2_min.mp3");
  // Theme Button
  $(".theme-button").on("click", function () {
    audioElement.play();
  });
  // Pause Button
  $(".pause-button").on("click", function () {
    audioElement.pause();
  });

  // =====================
  // Change the Main Title
  // =====================
  $('.normal-title-button').on('click', function(e) {
    e.preventDefault();
    $('.main-title').css({
      'font-size': '40px',
      'color':'black'
    }) // add method to change the main title

  });
  $('.change-title-button').on('click', function(e) {
    e.preventDefault();
    $('.main-title').css({
      'font-size': '68px',
      'color':'blue'
    }) // add method to change the main title
  })

  // Size Buttons 
  // Create Buttons that make the action happen that is diplayed on the button
  // ============
  // Normal Size Spaceship
  $(".normal-button").on("click", function () {
    $(".captain-planet").css({width:''});
    $(".captain-planet").animate({ height: "300px" });
  });
  // Larger Size Spaceship
  $(".grow-button").on("click", function () {
    $(".captain-planet").animate({ height: "500px" });
  });
  // Smaller Size Spaceship
  $(".shrink-button").on("click", function () {
    $(".captain-planet").animate({ height: "100px" });
  });
  
  // Visibility Buttons
  // ==================
  // Make  Spaceship Visible
  $(".vis-button").on("click", function () {
    $(".captain-planet").animate({ opacity: "1" });
  });
  // Make  Spaceship Invisible
  $(".invis-button").on("click", function () {
    $(".captain-planet").animate({ opacity: "0.05" });
  });
  
  // ==========================
  // Stretch Width of Spaceship
  // ==========================
  $('.normal-width-button').on('click', function(e) {
    e.preventDefault();
    $(".captain-planet").css({width:''});
    var imageHeight = $('.captain-planet').height();
    $('.captain-planet').animate({
      height: 'imageHeight'});
    });
  
  $('.stretch-button').on('click', function (e) {
    e.preventDefault();
    var imageHeight = $('.captain-planet').height();
    var imageWidth = parseInt($('.captain-planet').width()) * 2.5;
    $('.captain-planet').animate({'width': imageWidth, 'height': imageHeight});
  });
  // ===========================================================
  // Rotate Spaceship 90 degrees (Clockwise & Counter-clockwise)
  // ===========================================================
  $('.rotate-counter-clockwise-button').on('click', function (e) {
    e.preventDefault();
    positionInDegrees -= 45;

      $('.captain-planet').css({'transform': `rotate(${positionInDegrees}deg)`, 'transition':'2s'});
  });
   $('.rotate-level-button').on('click', function (e) {
     e.preventDefault();
     positionInDegrees = 0; // reset to zero
     $('.captain-planet').css({
       'transform': `rotate(${positionInDegrees}deg)`,
       'transition': '2s'
     });
   });
   $('.rotate-clockwise-button').on('click', function (e) {
    e.preventDefault();
     positionInDegrees += 45;
     $('.captain-planet').css({ 'transform': `rotate(${positionInDegrees}deg)`, 'transition':'2s'});
  });

  // ==================
  // Background Buttons
  // ==================
  $(".normal-background-button").on("click", function () {
    $(".main-column").css({
      "background": "white",
      "position": "relative",
      "z-index": "-1"
    });
    console.log("main-column clicked");
  });
  $(".blue-sky-background-button").on("click", function () {
    $(".main-column").css({
      "background": "#ade3f5",
      "position": "relative",
      "z-index": "-1"
    });
    console.log("main-column clicked blue sky");
  });
  $(".milky-way-galaxy-background-button").on("click", function () {
    $(".main-column").css({
      "background": "url('./images/Milky_Way.jpg')",
      "position": "relative",
      "z-index": "-1"
    });
    console.log("main-column clicked milky way galaxy");
  });

  // ====================
  // === Move Buttons ===
  // ====================
  // Move  Spaceship Upward
  $(".up-button").on("click", function () {
    $(".captain-planet").animate({ top: "-=200px" }, "normal");
  });

  // Move Back to center
  $(".center-button").on("click", function () {
    $(".captain-planet").css({ top: "100px", left: "40px" });
  });
  // Move Spaceship Downward
  $(".down-button").on("click", function () {
    $(".captain-planet").animate({ top: "+=200px" }, "normal");
  });
  // Move Spaceship Leftward
  $(".left-button").on("click", function () {
    $(".captain-planet").animate({ left: "-=200px" }, "normal");
  });
  // Move Spaceship to the Right
  $(".right-button").on("click", function () {
    $(".captain-planet").animate({ left: "+=200px" }, "normal");
  });
  // Bring Spaceship Back Original Position
  // the same as the center button if you want it to.
  $(".back-button").on("click", function () {
    $(".captain-planet").animate({ top: "50px", left: "80px" }, "fast");
  });

  // Move Events for Keyboard Presses
  // ============================
  // Keyboard Up
  $(document).keyup(function (e) {
    switch (e.which) {
      case 38:
        $(".captain-planet").animate({ top: "-=200px" }, "normal");
    }
  });
  // Keyboard Center (The keycode for letter c)
  $(document).keyup(function (e) {
    switch (e.which) {
      case 67:
        $(".captain-planet").css({ position: "absolute", top: "100px", left: "40px", zIndex: "-20", height: "300px" });
    }
  });
  // Keyboard Down
  $(document).keyup(function (e) {
    switch (e.which) {
      case 40:
        $(".captain-planet").animate({ top: "+=200px" }, "normal");
    }
  });
  // Keyboard Left
  $(document).keyup(function (e) {
    switch (e.which) {
      case 37:
        $(".captain-planet").animate({ left: "-=200px" }, "normal");
    }
  });
  // Keyboard Right
  $(document).keyup(function (e) {
    switch (e.which) {
      case 39:
        $(".captain-planet").animate({ left: "+=200px" }, "normal");
    }
  });
});
