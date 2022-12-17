// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'
//Prepend puts the second string in front of the first.

console.log("Exercise 1:");

function prependToString (str1, str2){
  return str2 + str1;
}
console.log(prependToString("hello", "hi ")); //--> hi hello
console.log(prependToString("cool", "very")); //--> verycool

console.log("");

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false
console.log("Exercise 2:");
console.log("Problem 2");
function stringIncludes(strWord, strCharacter){
  for (let i=0; i< strWord.length; i++){
    if (strWord[i] === strCharacter) {
      return true;
    }else {return false}
  }
}

console.log(stringIncludes("apple","p")); //-> true
console.log(stringIncludes('awesome', 'e')); //-> true
console.log(stringIncludes('awesome', 'z')); // -> false


console.log("");

//My notes: 
// apple and p
// first checks is a=== p?
// No, so its false, so exit the loop (if we return inside the loop, we exit too early).
//In this example, we could not put return false inside the loop because that meant we would exit the loop without checking the rest of the word. Therefore we need to put the return outside of the loop to let the loop finish and get through each letter. (see above with apple example)