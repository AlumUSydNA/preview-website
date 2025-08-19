// custom-navigation.js
$(document).ready(function() {
  // Force hamburger navigation to always be visible
  var $menuToggle = $('.menu-toggle');

  // Ensure the menu is always in a toggled state on large screens
  $('.site-header .main-navigation').addClass('toggled');

  // Optionally, add this to force the menu to be collapsed on large screens but toggleable
  $menuToggle.on('click', function() {
    $('.main-navigation').toggleClass('toggled');
  });
});
