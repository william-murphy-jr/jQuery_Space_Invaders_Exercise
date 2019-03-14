// Space Invaders Spaceship JavaScript/jQuery
// Students: As you observe the code below, notice how jQuery takes a lot of the pain
// out of actions that might seem tedious with Vanilla JavaScript.
// jQuery Ready Function (encloses all other functions)
// ==============================

// **********************************************************************
// To help give you hints there area few selections partially filled out.
// jQuery Methods you may find useful:
//
// animate, on, css
// review the jQuery documents and you textbook for more ideas.
//


// **********************************************************************

$(document).ready(function () {
  
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
   $('.main-title')
  // Size Buttons 
  // Create Buttons that make the action happen that is diplayed on the button
  // ============
  // Normal Size Spaceship
  $(".normal-button").on("click", function () {
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

  "blue-sky-background-button"
  "milky-way-galaxy-background-button"

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
