// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

function keys(obj){
    let array= [];
      for (let key in obj){
      array.push(key);
      }
    return array
  }
  
  console.log(keys({a: 1, b: 2, c: 3 }));
  
  // First we made our function and made the parameter the object. Next we made an empty array variable to use it later to push the keys. Then we used a special type of loop used for objects and we wrote "for (let key in parameter)". Then we simply pushed the keys onto the array and returned that array!
  
    
  
  
  
  
  // Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
  // IMPORTANT: Do not use the built in Object.values() function!
  // Examples:
  // let obj = { a: 1, b: 2, c: 3 };
  // values(obj); // [1,2,3]
  // let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  // values(obj2); // ["Matt", "Lane", true]
  // let obj3 = {};
  // values(obj3); // []
  
  
  function values(obj){
    let array2= [];
    for (let key2 in obj){
      array2.push(obj[key2]);
    }
    return array2;
  }
  
  console.log(values({ a: 1, b: 2, c: 3 }));
  
  //Basically we did the same thing that we did in the previous problem. Except we made sure when we pushed the values on to the array, they were the values and not keys and we did this by using the bracket method to access those values!
  
  // Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
  // In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
  // IMPORTANT: Do not use the built in Object.entries() function!
  // Examples:
  // let obj = { a: 1, b: 2, c: 3 };
  // entries(obj);
  // [["a",1], ["b",2], ["c",3]]
  // let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  // entries(obj2);
  // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
  // let obj3 = {};
  // entries(obj3); // []
  
  function entries(obj){
    let array3=[];
  for (let key3 in obj){
    array3.push([key3, obj[key3]])
  }
    return array3;
  }
  
  console.log(entries({ a: 1, b: 2, c: 3 }));
  
  // could also do for of method **
  //In this example we made an empty array again, we then used the special for loop. We then pushed BOTH the key and value onto the array and we turned it into sub arrays simply by adding the brackets around them. 
  
  //Note we also found out that if you concatenate a string and a number you get a string!!!
  
  // Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
  // The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
  // Examples:
  // pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
  // ANSWER: ["Tim", "Matt", "Elie"]
  
  // pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
  // ANSWER: [true, false, undefined]
  
  
  function pluck(arrOfObjs, nameOfKey){
    let array4= [];
    for (let i=0; i<arrOfObjs.length; i++){
    if (arrOfObjs[i].hasOwnProperty(nameOfKey)){
       array4.push(arrOfObjs[i][nameOfKey]);
    }else{(array4.push("undefined"))
    }
    }return array4;
  }
     
  console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
  
  console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'))  // -> true, false, undefined
  
      
  // We first made an empty array. Then we made a for loop so we could iterate through the array. Then we made an if statment which would check if the array at poistion i which is an OBJECT, using hasOwnProperty to check if the object had a property with that name. If that is true then we pushed the VALUE of the key on to our array! Else we returned undefined!!!!
  // The second test case was not working so we used bracket instead of dot notation to fix it.
  
  
  
  // Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
  // The format should be "key = value, key = value".
  // Each key/value pair should be separated by a comma and space except for the last pair.
  // Examples:
  // stringFromObject({ a: 1, b: '2' });
  // "a = 1, b = 2"
  // stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
  // "name = Elie, job = Instructor, isCatOwner = false"
  // stringFromObject({}); // ""
  
  
  function stringFromObject(obj){
    let array4= [];
    let string= "";
    for (let keys4 in obj){
      array4.push([keys4 + " = " + obj[keys4]]);
    }
    for (let i=0; i<array4.length; i++){
    if (array4[i] !== array4[array4.length-1]){
      string += array4[i] + ", " ;
    }else{
      string += array4[i];
    }
  }return string;
  }
  
  
  console.log(stringFromObject({ a: 1, b: '2' }));
  
  //In this problem, we made an empty array and empty string. We started by looping through the keys in the object, and we pushed them into the empty array to turn it into an array. We did this because objects dont have numerical order, but arrays do. This will allow us to figure out which one is at the end so we don't add a comma and space to it.Note: We were able to add the comma inside of the push and conecatenate it to add it there!
  //Then we made a normal for loop to get through our array and we  made an if statement to say that if you are not the end of the array, then you should add the i of the array to the string and add the comma and space, else dont add those things because you are the last i in the array! 
  
  
  // Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
  // The function should return an array with the following format: [lowestKey, highestKey]
  // Examples:
  // minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
  // [1, 10]
  // minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
  // [1, 4]
  
  
  // function minMaxKeyInObject(obj){
  //   let initialArray= [];
  //   let finalArray= [];
  //   for (let keys6 in obj){
  //      return initialArray.push(keys6)
  //   }
  //   for (let i=0; i<initialArray.length; i++){
  //   finalArray.push(initialArray[0], initialArray[initialArray.length-1])
  //   }
  //   return finalArray;
  //   }
  
  function minMaxKeyInObject(obj){
    let initialArray= [];
    let finalArray= [];
    for (let keys6 in obj){
       initialArray.push(keys6);
    }
    //finalArray.push(initialArray[0], initialArray[initialArray.length-1]);
    finalArray.push(Math.min(...initialArray));
    finalArray.push(Math.max(...initialArray));
    return finalArray;
  }
  
  
  console.log(minMaxKeyInObject({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}));
  console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
  
  //Objects do not respect order in JS
  
  //math.
  
  //175
  //When we didn't put return on line 161, the array was NOT in order, when we put return it was placed in numerical order. 
  //initialArray=[2,7,1,10,4]
  //initialArray=[1,2,4,7,10]
  //why doesnt min and max method work?
  
  
  
  
  // 1st we convered the object to an array
  // 2nd do a for loop to identify min and max
  // 3rd push min and max onto the final array
  
  
  //Math.min()
  
  
  
    // for (let keys6 in obj){
    //    Math.min(arrayMax.push(keys6))
  
  
  ///___________________________________________
  //This is a way to list all numbers in the array in the correct order:
  // function minMaxKeyInObject(obj){
  //   let keysArr= keys(obj) //array made out of keys 
  //   let minAndMax= [];
  //  minAndMax.push(Math.min.apply(null, keysArr)); //essentially spread operator
  //  minAndMax.push(Math.max.apply(null, keysArr));
  //   return minAndMax;
  // }
  
  // this is the old way of doing the spread operator (line 214)
  // console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }))
  
  
  
  //Math.min and max are not easy to use lol
  // keys(obj) --> makes an array of keys from an object (exercise 1)
  
  //Use the function that we made from exercise 1
  
  //you dont want to loop thru the object, but rather specifically the keys!
  
  //function keys() --> returns an array