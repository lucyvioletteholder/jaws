$(function() {

  var attacked = false;

  $('body').on('click', function(e) {

    console.log('BODY CLICKED!!!!');
    // When the body clicked, shark appears
    e.preventDefault();

    // If hasn't attacked yet, then attack
    if (!attacked) {
      $(".jaws-shark--attack").addClass("jaws-shark--attacking");
      // $(".jaws-shark--swimming").addClass("jaws-shark--swimming-away");
      attacked = true;

    } else {
      // Then go to black page
      console.log('attacked already');
      window.location = '/black';
    }
  });
});
