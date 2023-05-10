function studentScore(number) {
    let grade;
    
    if (number < 0 || number > 100) {
      return "Invalid nilai";
    } else if (number >= 80) {
      grade = "A";
    } else if (number >= 65) {
      grade = "B+";
    } else if (number >= 50) {
      grade = "B";
    } else if (number >= 35) {
      grade = "C";
    } else {
      grade = "D";
    }
    
    return `nilai ${grade}.`;
  }
  
  // contoh penggunaan
  let score = 10;
  console.log(studentScore(score));