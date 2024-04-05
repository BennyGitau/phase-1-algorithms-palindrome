function isPalindrome(word) {
  // Write your algorithm here
  //A function that take a word and compare if its the same with itd reverse.
  //add a word and Create a variable to hold the reversed word
  //convert the word into an array of strings, each string holding a single letter
  //reverse the string and store in the variable
  // compare the original word with the reversed word
  //prints true if the word matches and false if otherwise

  //varaiable to hold reversed 
  const reversedWord = word.split('').reverse().join('');
  //comparing the newWord with word
  if(reversedWord === word){
    return true;
  } else {
    return false;
  };
}
isPalindrome('mom')

/* 
  Add your pseudocode here
  Create a function to encalpusalate the task
  In the function create a variable reversedWord to hold the reversed word
  compare the word with the original string
  if reversedWord is true return true
  else return false
*/

/*
  Add written explanation of your solution here
  Creating a function that takes a word and reverses the word. 
  Returns tru if the reversed word is same as the original word and false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("Mom"));

  console.log('')

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
