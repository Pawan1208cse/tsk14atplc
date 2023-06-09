function filterNegativeNumbers(numbers) {
    return numbers.filter(function(number) {
      return number >= 0;
    });
  }
  
  // Example usage
  var numbers = [1, -2, 3, -4, 5];
  var filteredNumbers = filterNegativeNumbers(numbers);
  console.log(filteredNumbers);
  