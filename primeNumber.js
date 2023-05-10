function primeNumber(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(primeNumber(2)); 
  console.log(primeNumber(3)); 
  console.log(primeNumber(4));
  console.log(primeNumber(17)); 
  console.log(primeNumber(20)); 