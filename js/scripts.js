/*
=======================
Backend Logic
=======================
3 =
*/
var beepBoop = function(max) {
  var outputNumbers = [];
  var numberZero = "Beep!",
      numberOne = "Boop!",
      numberThree = "I'm sorry, Dave. I'm afraid I can't do that.";

  for(var i = 0; i <= max; i++) {
    outputNumbers.push(i);
    if(i === 0){
      outputNumbers[i] = numberZero; //if equal zero, it will change text
    } else if (i === 1) {
      outputNumbers[i] = numberOne; //if equal one, it will change text
    } else if (i === 3) {
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
      console.log("Enter a number");
    } else {
      beepBoop(userNumber);
    }
    $("#user-number").val("");
    $("#output").text(beepBoop(userNumber));
  });//submit end
});//ready end
