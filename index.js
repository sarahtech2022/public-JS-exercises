// // // Week 1 - Variables


// // // Data Types and Variables

// // // Exercise 1. Simply declare a variable named 'emptyVariable'
//     let emptyVariable; 
// //My notes: when you initalize 'let' you dont need to set it equal to a value, but with 'const' you MUST set it equal to a value or else it will give an error message. Typically use const for arrays and objects because these are like boxes, the box never changes even though the contents inside them might. Use let for variables so you can change them when needed. 

// // // Exercise 2. Declare a variable called 'myName'
let myName;

// // // Exercise 3. Assign your name as the value for 'myName'
//   myName= "Sarah";
// console.log(myName);

// // // Exercise 4. Declare a variable called dreamDestination and give it the value
// // // of what your dream vacation destination is.

// let dreamDestination= "South Korea";
// console.log(dreamDestination);

// // // Exercise 5. Make the following variables and assignments
// // // - a variable called num1 with a value greater than 1 and less than 10
// // // - a variable called num2 with a value of greater than or equal to 1 and less
// // // than or equal to 10

// let num1= 5;
// let num2= 1;

// // // Exercise 6. Write a comment below explaining the difference between the rules
// // // for num1 and num2 from Exercise 5. What numbers would be valid values for
// // // num2 but not num1?
// // // 
// //The difference in rules is that num1 is not inclusive of 1 and 10, whereas num2 is inclusive. Numbers that would be valid values for num2 but not num1 are 1 and 10.

// // // Exercise 7. Now we will try some addition.
// // // a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// // // b. Make a new variable called 'theSum', and use 'num1' and
// // // 'num2' to assign its value using the "+" operator.

// num1= 4;
// num2= 6;
// let theSum= num1 + num2;
// console.log(theSum);



// // // Exercise 8. Now we will try some multiplication.
// // // Make a new variable called 'theProduct', multiply num1 and num2 and assign
// // // the resulting value to 'theProduct'.


// let theProduct= num1 * num2;
// console.log(theProduct);



// // // Exercise 9.
// // // Make a new variable called 'statement' and using 'myName' and
// // // // 'dreamDestination' and the concatenation method of your choice, make the
// // // // value of statement to be:
// // // // "Hi, my name is <your name>, and I can't wait to visit <your destination>!"


// let statement= "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";
// console.log(statement);


// // // // *NOTE* For the following exercises, put your answers in the line below
// // // // the description of each exercise. For example, below a prompt, you may see:
// // // // let myAnswerForExercise10= "";
// // // // If your answer is "foo", then fill in the line to be:
// // // // let myAnswerForExercise10 = "foo";

// // // // Exercise 10. What is the data type of the value stored in 'dreamDestination',
// // // // place your answer in the quotes below:

// // // const myAnswerForExercise10 = "string";

// // // // Exercise 11. What is the data type of the value stored in 'product',
// // // // place your answer in the quotes below:

// // // const myAnswerForExercise11 = "number";

// // // // Exercise 12. What do you think the value of emptyVariable is?
// // // // Place your answer below: 

// // // const myAnswerForExercise12 = "undefined";
// //console.log(emptyVariable); 

// // // // Exercise 13. If
// const A = "R";
// const B = 1;
// const C = 4;
// const D = "D";

// // // // What is the value of B + C
// // // const myAnswerForExercise13 = "5";
// console.log(B + C);

// // // // Exercise 14 What is the value of
// // // // A + "n" + D
// // // const myAnswerForExercise14 = "RnD";
// console.log(A + "n" + "D");

// // // // Exercise 15 What is the value of
// // // // A + B * 2 + D + C / 2:
// // // const myAnswerForExercise15 = "R2D2";
// console.log(A + B * 2 + D + C / 2);

// // // // Exercise 16 What is the value of A * B
// // // const myAnswerForExercise16 = "Nan";
// console.log(A * B);

// // My Notes: In JS you can't multiply a string and a number and when we do we get NaN (not a number). NaN is a value that does not represent a real number, it is useful to represet faulty operations on numbers. For ex multiplying a number by a string is not a valid operation, same with multiplying a number and undefined. The interesting thing about NaN is it doesnt equal a value, not even NaN. (undefined is sometimes when you forgot to add a value)

// // // // Exercise 17 What is the value of true || false
// // // const myAnswerForExercise17 = "true";

// console.log(true || false);
// //My Notes: The value is true because it just looks at one side of the operands since its the or operator and when it sees that at least one side is true, it exits that line.

// // // // Exercise 18 What is the value of 1 === "1"
// // // const myAnswerForExercise18 = "false";

// console.log(1 === "1");

// //My Notes: Strictly equals.


// // // // Exercise 19 What is the value of 1 == "1"
// // // const myAnswerForExercise19 = "";

// console.log(1 == "1");

// //My Notes: The two equal signs is able to convert strings to numbers to compare.

// // // // Exercise 20 What is the value of 1 < 1
// // // const myAnswerForExercise20 = "false";

// console.log(1 <1);

// // // // Exercise 21 What is the value of 1 < 2 < 3
// // // const myAnswerForExercise21 = "true";

// console.log(1 < 2 < 3);


// //My Notes: In this example, you always take the first two numbers and assess them first. If it is true then the number you use is 1, if its false then the number you use is 0. Here 1< 2 is TRUE so we use 1 to compare it to 3 and we see 1 < 3 is true.
// // True =====> 1
// // False =====> 0 

// // // // Exercise 22 What is the value of 2 < 1 < 3
// // // const myAnswerForExercise22 = "";

// console.log(2 < 1 < 3);

// //My Notes: Since 2 < 1 is FALSE this becomes 0. So we see that 0 < 3 is TRUE, so our answer is true. 

// // // // Congrats, you made it to the end!
// // // // Did you find this easy or hard? If you used references, which ones helped you?
// // // // Please answer in a comment below.
// // // //

// // // // Email your file to the course staff,
// // // // or commit your file to GitHub and email us a link.


// // _______________________________________________________________


// // // // Week 2 - Conditionals Exercise

// // // In these exercises, you will be working on conditional statements,
// // // namely the if / else if / else and switch/case conditionals.

// // // For these exercises, you will place your code in a function block.
// // // If you don't know what a function is yet, that's ok, your code will be the
// // // same. The variables will be defined for you, you just have to plug in the
// // // logic.

// // // For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// // // of num1 and num2, and were given this construct:

// // // function exercise0(num1, num2) {
// // //   let myAnswer;
// // //   // ------------------------------------------
// // //   // Write your code for exercise 0 below here:
// // //   // ------------------------------------------
// // //
// // //   // ------------------------------------------
// // //   // And above here
// // //   // ------------------------------------------
// // //   return myAnswer;
// // // }

// // // You would put your code between the "below here"
// // // and "above here" blocks as shown:

// // // function exercise0(num1, num2) {
// // //   let myAnswer;
// // //   // ------------------------------------------
// // //   // Write your code for exercise 0 below here:
// // //   // ------------------------------------------
// // //   myAnswer = num1 + num2;
// // //   // ------------------------------------------
// // //   // And above here
// // //   // ------------------------------------------
// // //   return myAnswer;
// // // }

// // // First try answering these without using references or looking up any information.
// // // Then, check your answer by using references and/or running your code.
// // // You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// // // Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// // // But make sure you understand why the correct answer is right.

// // // EXERCISE 1.
// // // First reassign the value of `answer1` so that it has the value of:
// // // "num1 is small"
// // // Write an if statement that checks if a variable `num1` is greater than 10.
// // // If it is, then within your if statement code change the value of answer1 so
// // // that its new value would be a string that says:
// // // "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
  let answer1 = "";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
 answer1= "num1 is small";
  if (num1 > 10){
    answer1 = "The value of num1 is " + num1 + " and is greater than 10"
  }
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}

console.log(exercise1(2));
console.log(exercise1(10));
console.log(exercise1(11));

// // // EXERCISE 2.
// // // Write an if/else conditional statement that if given a number will assign
// // // a string value of:
// // // "<num2 value> is even" to `answer2`,
// // // if `num2` is even
// // // and a value of "<num2 value> is odd" to `answer2`,
// // // if `num2` is odd.
// // // ie. if num2 has a value of 4 then the message should read:
// // // "4 is even"

function exercise2(num2) {
  let answer2;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
      if (num2 % 2 === 0){
         answer2= num2 + " is even";
      } else{
        answer2= num2 + " is odd"
      }
//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer2;
}

console.log(exercise2(2));
console.log(exercise2(9));



// //My Notes:
// //         function isEven(value){
// //     if (value%2 == 0)
// //         return true;
// //     else
// //         return false;
// // }

// // // EXERCISE 3.
// // // Write an if/else if/else block such that if `num3` is positive, then
// // // answer3 is assigned the string value of:
// // // "<num3 value> is positive"
// // // if `num3` is negative, then the value should be:
// // // "<num3 value> is negative"
// // // otherwise if the value is zero it should return
// // // "<num3 value> is zero"

function exercise3(num3) {
  let answer3;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
      if (num3 > 0){
        answer3 = num3 + " is positive";
      }else if (num3 < 0){
        answer3 = num3 + " is negative";
      }else{
        answer3= num3 + " is zero";
      }

//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer3;
}
 console.log(exercise3(10));
console.log(exercise3(-10));
console.log(exercise3(0));


// // // EXERCISE 4.
// // // Write an if/else statement such that if `varA` and `varB` are strings or
// // // numbers and they have equal values, then change the value of answer4 to
// // // "varA and varB are equal"
// // // otherwise assign a value of "varA and varB differ"

function exercise4(varA, varB) {
  let answer4;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
      if (varA == varB){
        answer4= varA + " and " + varB + " are equal";
      }else{
        answer4= varA + " and " + varB + " differ";
      }

//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer4;
}

console.log(exercise4(2, "2"));
console.log(exercise4(2, "5"));
console.log(exercise4([1,2,3], [1,2,3]));
console.log(exercise4([1,2,"3"], [1,2,3]));
console.log(exercise4({},{}));

console.log("");
//My notes: This problem is showing us that we can use == and === to compare strings and numbers but NOT arrays and objects.  

// // // EXERCISE 5.
// // // In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// // // seemed like they are equal, but would not pass the tests? In your analysis
// // // consider other data types beside strings and variables.

// //If we used strictly equals instead, strings and numbers would not pass the test because the types would not be converted. Arrays and objects would also not pass the test (we need a loop that would allow us to access each part of the array to compare it with each part of the other array in order to compare them!)

// // // EXERCISE 6.
// // // Here, assign the value of true to answer6 if:
// // // `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// // // in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
    if (varA === varB && varA !== varC || varB !== varC){
        answer6= true;
    }else{
      answer6= false;
    }

//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer6;
}

console.log(exercise6(2,2,4)); //==> TRUE
console.log(exercise6(4,4,4)); //==> FALSE
console.log(" ");

//Basically answer6 should be TRUE if A=B and A or B DONT equal C!! For example (2,2,4)
//And answer6 should be FALSE if this is not the case (4,4,4)



console.log("HEREEEEE is where I left off");
//my notes: you don't need to compare varb to varc since varA and varC are equal already!)

 
// // // EXERCISE 7.
// // // Use a switch conditional statement with case clauses such that if `num7` is
// // // a number and it has a value of 1 that `answer7` is assigned the string:
// // // "You won!"
// // // if num7 is 7, then answer7 should be:
// // // "You are lucky!"
// // // if num7 is 101, then answer7 should be:
// // // "Welcome to coding 101!"
// // // if num7 is 1000000, then answer7 should be:
// // // "You are one in a million!"
// // // Othewise, assign answer7 a value of:
// // // "Thanks for that!"

// //My Notes:
// // switch(expression) {
// //   case n:
// //     code block
// //     break;
// //   case n:
// //     code block
// //     break;
// //   default:
// //     default code block
// // }

console.log(" ");
function exercise7(num7) {
  let answer7;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
    switch(num7){
      case 1: 
          answer7= "You won!";
          break;
      case 7:
          answer7= "You are lucky!";
          break;
      case 101:
          answer7= "Welcome to coding 101!";
          break;
      case 1000000:
          answer7= "You are one in a million!";
          break
      default:
          answer7="Thanks for that!"
    }
//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer7;
}
  console.log(exercise7(1));
 console.log(exercise7(7));
 console.log(exercise7(101));
 console.log(exercise7(1000000));
 console.log(exercise7(5));
  

// // // EXERCISE 8.
// // // Using any conditional assign the value of true to answer8 if:
// // // the values of amount1 and amount2 are between the values of
// // // minimum and maximum
// // // if not, assign a value of false to answer8
console.log("");
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
      if (amount1 > minimum && amount2 > minimum && amount1 < maximum && amount2 < maximum){
        answer8= true;
      }else{
        answer8= false;
      }
//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer8;
}

console.log(exercise8(2,5,0,10));
console.log(exercise8(100,5,0,10));

console.log("");
// // // EXERCISE 9.
// // // In this exercise, if `item` is a number, follow the rules given in Exercise 7
// // // except that `answer7` is replaced by `answer9`
// // // If `item` is not a number, then assign a value to answer9 of:
// // // "Please send a number, that was a <data type>."
// // // for example, if item===true, the value should be:
// // // "Please send a number, that was a boolean."
// function exercise9(item) {
//   let answer9;
// //   // --------------------------------------------
// //   // Write your code for the exercise below here:
// //   // --------------------------------------------
//     switch(item){
//       case true:
//       case false:
//         answer9= "Please send a number, that was a boolean";
//         break;
        
//     }
// //   // --------------------------------------------
// //   // And above here
// //   // --------------------------------------------
//   return answer9;
// }


// console.log(exercise9(true));


// //This might be a better way, we can see if any data type is a number by using Nan. isNan is a built in way to see. 
function exercise9(item) {
  let answer9;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
    switch(item){
      case isNaN(item)=== true:
        answer9= "Please send a number, that was a " + typeof item;
        break;
      default:
        answer9= "That was a number!";
    }
//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer9;
}

console.log(exercise9(false));
console.log(exercise9(3));
console.log(exercise9("hi"));

console.log(typeof("hello"));

console.log("");
// Question ? Why is the string not working?? 



// // if(isNaN(item)===true) {
// //   answer9 = "Please send a number, that was a " + typeof item;
// // }



// // // EXERCISE 10.
// // // This question is a modified version of a classic programming question
// // // called "Fizz Buzz"
// // // Using a conditional, assign a value of:
// // // "Fizz" to `answer10` if the value of `num10` is divisible by 3
// // // "Buzz" to `answer10` if the value of `num10` is divisible by 5
// // // "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// // // and if none of these conditions are satisfied, then assign the value of
// // // `num10` to `answer10`

function exercise10(num10) {
  let answer10;
//   // --------------------------------------------
//   // Write your code for the exercise below here:
//   // --------------------------------------------
    if (num10 % 15 == 0){
      answer10= "Fizz Buzz";
    }else if(num10 % 5 == 0){
      answer10= "Buzz";
    }else if(num10 % 3 == 0){
      answer10= "Fizz";
   }else{
      answer10= num10;
    }
//   // --------------------------------------------
//   // And above here
//   // --------------------------------------------
  return answer10;
}

console.log(exercise10(9));
console.log(exercise10(25));
console.log(exercise10(30));

// //My Notes: In this example we have to reorder the statements because the code reads top to bottom, we need to make sure to include divisible by 15. For example 30 is divisible by all three numbers, so we need to make sure we used the biggest number first.

// // // Congrats, you made it to the end! You rock!
// // // Did you find this easy or hard? If you used references, which ones helped you?
// // // Please answer in a comment below.
// // //

// // // Email your file to us or commit your file to GitHub and email us a link.


// //______________________________________________________________

// // Week 3 - Loops

// // In the following exercises, you will need to place your code or answer underneath each
// // exercise prompt.

// // First try answering these without using references or looking up any information.
// // Then, check your answer by using references and/or running your code.
// // You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// // // Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// // // But make sure you understand why the correct answer is right.

// // // Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// // // between 1 and 5 (inclusive).

let i= 1;
while (i <= 5){
  console.log(i)
  i++;
}

// // // Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// // // between 1 and 5 (inclusive).

// let j= 1;
// do {
//   console.log(j);
//   j++
// }
//   while(j <= 5);



// // // Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// // // between 1 and 5 (inclusive).

// for (let k= 1; k <= 5; k++){
//   console.log(k);
// }

// // // Exercise 4. Now we want a loop that prints the integers
// // // counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// // // writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// for (let l=10; l >= 1; l--){
//   console.log(l);
// }

// console.log(" ");

// let m= 10;
// do {
//   console.log(m);
//   m--;
// }
//   while(m >= 1);

// console.log(" ");

// let n= 10;
// while(n >= 1){
//   console.log(n);
//   n--;
// }

// console.log(" ");


// // // Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// // // loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// // I will assume this problem is not inclusive for 7 and 27!

//   let o= 8;
// while (o < 27){
//   console.log(o);
//   o++
// }

// console.log(" ");

// let p= 8;
// do {
//   console.log(p);
//   p++;
// }
//   while(p < 27);

// console.log(" ");

// for (let o=8; o<= 27; o++){
//   console.log(o);
// }

// console.log(" ");
// // // Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// // // I.e. it will print 10, then 20, then 30, etc.
// // // Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


// for (let q= 10; q <= 100; q+=10){
//   console.log(q);
// }

// console.log(" ");

// let r= 10;
// while (r <= 100){
//   console.log(r);
//   r+=10;
// }

// console.log(" ");

// let s= 10;
// do {
//   console.log(s);
//   s+=10;
// } 
//   while(s<= 100);



// // // Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// // // run without ever stopping). Then fix the loop so that it stops when
// // // counterFour is equal to -100.

// let counterFour = 1;
// while (counterFour < 2) {
//   console.log("HELP ME!");
//   counterFour++;
// }

// //In this example it is an infinite loop because 1 begins as being less than two, it then prints on the console and decrements, so when the loop goes back it repeats again because the condition is still true, 0 is less than 2, so it prints again, and it keep printing infinitely because the decrement continues to allow it to because it meets the condition in the loop! to change this we can simply increment, that way we can exit from the loop right away.    




// // // Exercise 8. Make a variable that contains your favorite integer. Write a loop
// // // (your choice which type) that prints the integers from 0 to that number.

console.log("heree...");

let faveinteger= 2;
for (let faveinteger=0; faveinteger<3; faveinteger++){
  console.log(faveinteger);
}

console.log(" ");
// Question? Why can I use i or faveinteger for the range? *Cristina/Mentor 

// // // Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// // // less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// // // Next to each number it should print "not my favorite number". But next to your favorite
// // // number it should print "my favorite number!". Example output (if your favorite number was 2):
// // // 0 not my favorite number
// // // 1 not my favorite number
// // // 2 my favorite number!
// // // 3 not my favorite number
// // // ...
// // // (Hint - use an if statement in your loop)


let favenum= 2;
for (let favenum=0; favenum<=100; favenum++){
  console.log(favenum);
  if (favenum ===2){
    console.log("my favorite number!")
  }else{
    console.log("not my favorite number!")
  }
}
 

// // // Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// // // But in real life, how would you decide which type of loop to use? You might not have an
// // // exact answer, but spend a few minutes thinking about the different types of loops and/or
// // // doing some research and write down your thoughts in a comment below:
// // //

// // While loops are the simplest, they create a loop as long as the condition remains true. On the otherhand Do...while loops will always execute at least once and then only execute again if whats in the condition is true after that. For loops also have a condition that needs to be true in order to execute the through the loop.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1;  insideCounter--) {
    console.log("inside" + insideCounter);
  }
  console.log("***********************************");
}


//My Notes: So for this problem we want the outside counter to count up from 0 to 3!!! Then with in that we have a nested function that will count down from each numer. Once Outside counter reaches 3, it should stop. Like this:
// Outside counter 0 --> no inside counter
// Outside counter 1 --> insider counter will be 1
//Outside counter 2 --> insider counter will be 2 , 1
//Outside counter 3 -->


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.

//_______________________________________________________

// Week 4 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.


// function logGreeting(){
//   console.log("Hello");
// }

// return logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.


// function getName(name){
//  return name;
// }
// console.log(getName("Sarah"));



// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

// function myName(name){
//   return name;
// }


// function logGreeting2(){
//   console.log("Hello my name is " + myName("Sarah") + ".")
// }
// return logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

console.log(" ");
function sumOf(num1, num2, num3){
  return num1 + num2 + num3;
}

console.log(sumOf(1,2,3));
console.log(sumOf(10,20,30));
console.log(sumOf(-2,-2,-2));



// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.


function discountGiven(age){
  if (age <= 14 || age >= 65 ){
    return true;
  }else{
    return false;
  }
}

console.log(discountGiven(12));
console.log(discountGiven(67));
console.log(discountGiven(25));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
console.log("This is exercise 6");

let numTimesToPrint= 0;
function printString(num, str){
  for (let numTimesToPrint=0; numTimesToPrint < num; numTimesToPrint++){
    console.log(str);
  }
}

console.log(printString(2, "hello"));

console.log(" ");


//* Try this with a while loop

//OR this way: 

// let n= 0;
// function printString(n, str){
//   for (let i= 0; i < n; i++){
//     console.log(str)
//   }
// }

// console.log(printString(2, "hi"))

// Why undefined at end???


// // Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// // Without running the code, write down in a comment:
// // 1. What mysteryFunction1 does
//Mystery function takes the value of p1 and multiplies it by 2
// // 2. What prints out for the value of y
//The value of y is 4
// // 3. What prints out for the value of z
//The value of z is 8.
// // Now run the code and see if you're correct.
// // Were you correct? If not, what did you learn?
//Yes, I was correct. 





// // Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// // Without running the code, write down in a comment:
// // 1. What mysteryFunction2 does
//The mysteryFunction2 takes two parameters and subtracts the second one from the first and returns that value.
// // 2. What prints out for the value of a
//The value for a prints out as 6.
// // 3. What prints out for the value of b
//The value for b prints out as 5. Since the value of a is 6, then 6-1 = 5.
// // Now run the code and see if you're correct.
// // Were you correct? If not, what did you learn?
//Yes, I was correct.

// // Exercise 9. This exercise is to practice reading the documentation for functions.
// // String.split() is a function in the JavaScript standard library that you can use in your code.
// // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// // Try to use it to solve the following challenges:

// // Here's a string I made representing my grocery list.
// // Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
let array1= groceryList.split(",");
console.log(array1);

// // Here's a string I made representing my morning schedule.
// // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// // There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

console.log(mySchedule.split("--->")[0] + ", " + mySchedule.split("--->")[1]);

//In this problem, it only said to not use another function other than split. So I assumed this is okay. 

// // Congrats, you made it to the end!
// // Did you find this easy or hard? If you used references, which ones helped you?
// // Please answer in a comment below.
// //

// // Email your file to the course staff,
// // or commit your file to GitHub and email us a link.


// ________________________________________________________

// Week 5 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals

// const animals= [];

// Exercise 2. Add the string "frog" to the array

// animals.push("frog");
// console.log(animals);

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

// animals.push("monkey", "tiger", "bear", "lion");
// console.log(animals);

// Exercise 4. Update the first item in the array to be "gorilla"

// animals[0]= "gorilla";
// console.log(animals);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

// console.log(animals.length);

// Exercise 6. Print the first item in the array

// console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

// console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array

// animals.pop();
// console.log(animals);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

const assortedThings= ["apple", "orange", "banana", 1, 2, 3];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for (let t=0; t < assortedThings.length; t++){
  console.log("Item #" + t + " is " + assortedThings[t]);
}

console.log("");

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function sizeOfNumbers(arr){
    for (let u= 0; u < arr.length; u++){
      if (arr[u] > 100){
        console.log(arr[u] + " BIG");
      }else if(arr[u] > 0 && arr[u] < 100){
        console.log(arr[u] + " small");
      }else{
        console.log(arr[u] + " negative");
      }
    }
}


console.log(sizeOfNumbers([101, 50, -5]));

//Why undefined at the end???

// // Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// // The values of those keys can be whatever you choose.

let me= {
  name: "Sarah",
  favoriteAnimal: "bunny",
  favoriteNumber: 2
}

console.log(me);

// // Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me["favoriteFood"] = "chocolate"
me.favoriteHobby = "cooking"

console.log(me);

// // Exercise 14. Update the favoriteAnimal value to something different

me["favoriteAnimal"]= "cat";

console.log(me);

// // Exercise 15. Print the value of favoriteAnimal.
// // Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal);

// // Congrats, you made it to the end!
// // Did you find this easy or hard? If you used references, which ones helped you?
// // Please answer in a comment below.
