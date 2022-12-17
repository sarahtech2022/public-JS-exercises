// Week 2 - Functions
// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.
// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

//_________________________________________________________________________________________
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

//My Notes: Remmeber to return within the function!

//_________________________________________________________________________________________
// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false
console.log("Exercise 2:");

function stringIncludes(strWord, strCharacter){
  for (let i=0; i< strWord.length; i++){
    if (strWord[i] === strCharacter) {
      return true;
    }
  }return false;
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

//_________________________________________________________________________________________
// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

console.log("Problem 3a");
//First way to solve this problem: Go backwards on the loop by looking at the word from its end, and decrement the loop, this way we get the last letter in the word first!

function stringLastIndexOf(strW, strC){
    for (let i=strW.length-1; i>= 0; i--){
        if (strW[i] === strC){
            return i;
        }
    }return -1;
}

console.log(stringLastIndexOf("pineapple","p")); // -> 6
console.log(stringLastIndexOf("apple","p")); // -> 2

console.log("");

console.log("Problem 3b");
//Second way to solve this problem: Create a variable called the lastIndex, set this to be -1 as the default. Then loop through by decrementing, and in the if statement, say if strW and strC are equal then reassign that variable to be equal to the index! Then at the end return the lastIndex. If strW and strC arent equal then the variable will stay as -1 but if not it gets reassigned to the new value of that index! In this example, I returned the last Index, which means im telling the loop to exit with the lastIndex at that value.

function stringLastIndexOf2(strW, strC){ 
    let lastIndex= -1;
    for (let i= strW.length-1; i>=0; i--){
        if (strW[i]=== strC){
            return lastIndex= i;
        }
    } return lastIndex;
}

console.log(stringLastIndexOf2("pineapple","p")); // -> 6
console.log(stringLastIndexOf2("apple","p")); // -> 2

console.log("");

// console.log("Problem 3c");
//Third and final way to solve it, is not to decrement or go backwards on the word, rather you can increment like usual, however you wont enter return for the variable lastIndex, this way the loop keeps looping and keeps replacing the value for lastIndex, until it gets to the last instance of that character in the word, or reaches the end of the loop as we defined it!!

function stringLastIndexOf3(strW, strC){ 
    let lastIndex= -1;
    for (let i=0; i<strW.length; i++){
        if (strW[i]=== strC){
            lastIndex= i;
        }
    } return lastIndex;
}

console.log(stringLastIndexOf3("pineapple","p")); // -> 6
console.log(stringLastIndexOf3("apple","p")); // -> 2

console.log("");


// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Sarah', 2, 2)// --> 'Sah'
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

function removeFromString(str, startIndex, numCharsToRemove){
    for (let i= 0; i<str.length; i++){
        if (i !== startIndex && i !== startIndex + numCharsToRemove){
            return str[i];
        }
    }
}

console.log(removeFromString("hello", 2, 3)) //--> he