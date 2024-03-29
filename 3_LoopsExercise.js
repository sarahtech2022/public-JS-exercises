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

//_____________________