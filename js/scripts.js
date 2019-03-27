// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $(".add-button").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    console.log(add(number1, number2));

    $(".subtract-button").click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      console.log(subtract(number1, number2));
    });
    $(".multiply-button").click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      console.log(multiply(number1, number2));
    });
    $(".divide-button").click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      console.log(divide(number1, number2));
    });
  });

});
