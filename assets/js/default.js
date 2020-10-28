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

      // // @todo at the end of the attack the screen goes black COULD B WRONG
      // $(".jaws-shark--attacking").addClass("jaws-blackscreen");

    } else {
      // // *trying to make when screen goes black - click to go to swimming page*
      // $("jaws-blackscreen".addClass("");
      // When you click the black (so when attacked is true already)
      // Then go to swimming page
      console.log('attacked already');
      window.location = '/black';
    }
  });
});
