// // // Week 1 - Variables

//
//
//
//
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
