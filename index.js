function isPalindrome(word) {
  // Write your algorithm heres
    for (let i = 0; i < word.length; i++) {
      const j= word.length-1-i;
      
      return word[i]===word[j] 
      }
    return true
  }
  



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  first loop
  r a c e c a r
  0 1 2 3 4 5 6
  i           j
second loop
  r a c e c a r
  0 1 2 3 4 5 6
    i       j
  third loop
  r a c e c a r
  0 1 2 3 4 5 6
      i   j
  r a c e c a r
  0 1 2 3 4 5 6
        ij
    return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
