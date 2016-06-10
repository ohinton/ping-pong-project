//start of back-end logic//
var pingpongList = function(input) {
  var numbersArray = [];
  var finalArray = [];

  //for loop to create the array of numbers from 1 to the user input number//
  for(var i = 1; i <= input; i++){
    //add numbers created in for loop to numbersArray//
    numbersArray.push(i);
  }
  //forEach loop to replace certain numbers in array with words//
  numbersArray.forEach(function(number){
    //if the number in the array is divisible by 15, then replace that number with the word "pingpong", and add the word to finalArray in that number's place//
    if (number % 15 === 0){
      finalArray.push("pingpong");
    } else if (number % 5 === 0){
      finalArray.push("pong");
    } else if (number % 3 === 0){
      finalArray.push("ping");
    //numbers in the array not divisible by 15, 5, or 3 remain the same, and get added to finalArray//
    } else {
      finalArray.push(number);
    }
  });
  return finalArray;
}
//end of back-end logic//

//start of front-end logic //
$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    //empties the list when the user submits a new number//
    $("#final-numbers").empty();
    //gathers the user input and runs that input through the function//
    var userInput = $("#number").val();
    var results = pingpongList(userInput);

    //creates a list of the results on the webpage//
    results.forEach(function(number){
      $("ul#final-numbers").append("<li>" + number + "</li>")
    })
  });
});
//end of front-end logic //
