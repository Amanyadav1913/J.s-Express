// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('1234')
// const anotherId = Symbol('1234')

// console.log(id ==anotherId);

// const bigNumber = 9007199254740991n


// Reference(Non Primitive)

// 3 Types : Object, Array, Function

// ----Object----

// const heros = ['shaktiman', 'doga', 'krish', 'john wick']

// const myObj ={
//     name : 'satyarth',
//     age : 22,
//     isLoggedIn : false
// }

// ----Function----

//  const myFunction = function(){
//  console.log("Hello World");
//  }

// *****************Memory Management*************************

// Stack (Primitive) and Heap (Reference)
 
/* primitive data types me change karne par naya memory location banta hai aur usme value storez hoti hai, jabki reference data types me change karne par wahi memory location use hota hai aur usme value update hoti hai. */

// let myName = 'satyarth'

// let anotherName = myName
// anotherName = 'john wick'
 
// console.log(myName);
// console.log(anotherName);

// ----- reference data types ----

// let userOne = {
//     email:"userone@example.com",
//     upiId:"userone@upi"

// }

// let userTwo = userOne
// userTwo.email = "usertwo@example.com"

// console.log(userOne.email);
// console.log(userTwo.email);


// ---- String -----

// const name = "Aman"
// const repoCount = 50

// console.log(`Hey my name is ${name} and my repoCount is ${repoCount}`);

// const gameName = "Amanyadav"

// console.log(gameName[2]);  // a
// console.log(gameName.length); // 9
// console.log(gameName.toUpperCase()); // AMANYADAV
// console.log(gameName.toLowerCase()); // amanyadav
// console.log(gameName.includes("yadav")); // true
//  console.log(gameName.charAt(3)); // n
//  console.log(gameName.indexOf("a")); // 0
//  console.log(gameName.lastIndexOf("a"));

// const newString = gameName.slice(2, 6)
// console.log(newString); // anya

// const anotherString = gameName.substring(2, 6)
// console.log(anotherString); // anya

// const newStringOne = "     Aman Yadav     "
//  console.log(newStringOne); //      Aman Yadav     
// console.log(newStringOne.trim()); // Aman Yadav  trim space remove karta hai

// const url = "https://www.youtube.com/watch?v=abc123"

// console.log(url.replace("youtube", "google")); // https://www.google.com/watch?v=abc123
