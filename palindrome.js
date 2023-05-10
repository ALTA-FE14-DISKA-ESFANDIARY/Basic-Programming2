function Palindrome(word) {
  const len = word.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(Palindrome('katak')); 
console.log(Palindrome('kasur rusak')); 
console.log(Palindrome('civic')); 
console.log(Palindrome('kupu kupu'));