/*
=======================
Backend Logic
=======================
*/
var beepBoop = function(max) {
  var outputNumbers = [];
  var numberZero = "Beep!", numberOne = "Boop!",
      numberThree = "I'm sorry, Dave. I'm afraid I can't do that.";

  for(var i = 0; i <= max; i++) {
    outputNumbers.push(i);
    if(i === 0){
      outputNumbers[i] = numberZero; //if equal zero, it will change text
    }
    else if (i === 1) {
      outputNumbers[i] = numberOne; //if equal one, it will change text
    }
    else if (i === 3) {
      outputNumbers[i] = numberThree; //if equal three, it will change text
    }
  }
  return outputNumbers.join(", ");
}

/*
=======================
Frontend Logic
=======================
*/
$(document).ready(function() {
  $("#beep-form").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());
    if(userNumber === '' || isNaN(userNumber)){
      $(".overlay").fadeIn(700);
      $(".overlay p").slideDown(850);
    } else {
      beepBoop(userNumber);
    }
    $("#user-number").val("");
    $("#output").text(beepBoop(userNumber));
  });//submit end
  $("#will-do").click(function() {
    $(".overlay").fadeOut(700);
    $(".overlay p").slideUp(500);
  });//click end
});//ready end
