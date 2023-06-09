function fibonacciSeries(n) {
    var series = [0, 1];
  
    if (n <= 2) {
      return series.slice(0, n);
    }
  
    for (var i = 2; i < n; i++) {
      var nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }
  
    return series;
  }
  
  // Example usage
  var length = 10;
  var fibonacci = fibonacciSeries(length);
  console.log(fibonacci);
  