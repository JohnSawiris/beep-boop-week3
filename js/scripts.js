/*=======================
Backend Logic
=======================
*/
var beepBoop = function(max) {
  var numbers = [0,1];
  var outputNumbers = [];
  var numberZero = "Beep!", numberOne = "Boop!",
  numberThree = "I'm sorry, Dave. I'm afraid I can't do that.";

  for(var x = 0; x <= max; x++) {
    outputNumbers.push(x);
  }

  outputNumbers.forEach(function(num) {
    if(numbers.includes(outputNumbers[num])) {
      if(outputNumbers[num] === numbers[0]) {
        outputNumbers[num] = numberZero;
      }
      else if(outputNumbers[num] === numbers[1]){
        outputNumbers[num] = numberOne;
      }
    }
    else if(outputNumbers[num]%3 === 0) {
      outputNumbers[num] = numberThree;
    }
  });
  return outputNumbers.join(",  ");
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
  });//will-do click end

  $(".navigation-icon").click(function() {
    $(this).toggleClass("active");
    $(".navigation").slideToggle(700);
  });//.navigation-icon click end
});//ready end
