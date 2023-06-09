function getDifferenceFrom13(number) {
    var difference = Math.abs(number - 13);
  
    if (number > 13) {
      return difference * 2;
    } else {
      return difference;
    }
  }
  
  // Example usage
  var num1 = 8;
  var num2 = 20;
  console.log(getDifferenceFrom13(num1));
  console.log(getDifferenceFrom13(num2));
  