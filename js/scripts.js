var pingpongList = function(input) {
  var numbersArray = [];
  var finalArray = [];

  //creating a number array//
  for(var i = 1; i <= input; i++){
    numbersArray.push(i);
  }
  //replacing numbers with words in array//
  numbersArray.forEach(function(number){
    if (number % 15 === 0){
      finalArray.push("pingpong");
    } else if (number % 5 === 0){
      finalArray.push("pong");
    } else if (number % 3 === 0){
      finalArray.push("ping");
    } else {
      finalArray.push(number);
    }
  });
  return finalArray;
}

$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    $("#final-numbers").empty();

    var userInput = $("#number").val();
    var results = pingpongList(userInput);

    results.forEach(function(number){
      $("ul#final-numbers").append("<li>" + number + "</li>")
    })

  });
});
