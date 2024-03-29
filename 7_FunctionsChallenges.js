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
console.log("");
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

console.log("Exercise 3a:");
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

console.log("Exercise 3b:");
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

console.log("Exercise 3c:");
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

//_________________________________________________________________________________________
// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Sarah', 2, 2)// --> 'Sah'
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

//My Notes:
// For this problem, we want to return the part of the string that is not part of the startIndex and the numChars that follow it. So in order to extract the part of the string we want, we first created a variable where we will store the new string. Then we loop through the word like normal, but in our if statement we specify what part of the string we want. The first part of the if statment (i < startIndex), means we want everything before the startindex. The second part (i >= startIndex + numCharsToRemove), means we want to include everything AFTER the portion that we remove. So for example if the word was "Sarah", startIndex=2, numCharToRemove=2, then This is saying after index 2+2= 4, start including whats at index 4 and after, to get the letter h since its at index 4.

console.log("Exercise 4:")
function removeFromString(str, startIndex, numCharsToRemove){
    let newString= "";
    for (let i= 0; i<str.length; i++){
        if (i < startIndex || i>= startIndex + numCharsToRemove){
         newString += str[i]; 
        }
    }return newString;
}
                            //012345       startindex=2 numchar=3
console.log(removeFromString("hello", 2, 3)) //--> he
console.log(removeFromString("Sarah", 2, 2)) //--> Sah


console.log("");
//_________________________________________________________________________________________

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

console.log("Exercise 5:");

function indexOf(arr, num){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === num){
            return i;
        }
    } return -1;
}

console.log(indexOf([1,2,3,3,3,3], 3)); // --> 2
console.log(indexOf([5, 10, 15, 20], 20)); //-->3
console.log("");

//_________________________________________________________________________________________

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

//My Notes: In this problem we first need to distingush if we are getting a string, an array, or an object. The issue is that an array is a type of object so we need to use instanceOf which will tell us if it is or not. So we first need to distinguish if its an array, since its a special type of objet.(We use instanceof for the array and typeof for the string)
//If it is an array or string then our loop can start at the starting index and then see if the value at the index of our collection is equal to value and if so that means its in our collection so we return true! 
//if its an objecy we need to use a for (let key in objectName) loop! then we access the value of the value at that object using objectname[key] and see if its equal to value, if it is it should also return true!
//Lastly we have to remember to return false if all of these conditions above are not true (remmeber to return this outside of the the loops but still inside the function!)
//

console.log("Exercise 6:")

function inOurCollection(collection, value, startingIndex){
    if (collection instanceof Array || typeof collection === String){
        for (let i= startingIndex; i<collection.length; i++){
            if (collection[i] === value){
                return true;
            }
        }
    }else{
        for (let key in collection){
            if (collection[key]=== value){
                return true;
            }
        }
    }return false;
}

console.log(inOurCollection([1,2,3], 3, 1)); // --> Array, true 3 is part of the collection
console.log(inOurCollection([1, 2, 3], 6)); // --> Array, false 6 is not part of the collection
console.log(inOurCollection({ 'a': 1, 'b': 2 }, 1)); // --> Object, true, 1 is part of the colletion
console.log(inOurCollection({ 'a': 1, 'b': 2 }, 7));// --> Object, false, 7 is not part of the collection
console.log("");

