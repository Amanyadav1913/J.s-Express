// Arrays

// declare an array

// const mtArray = [1,2,3,4,5];
// const mtArray2 = new Array(1,2,3,4,5);
// const mtArray3 = new Array(5); // creates an array of length 5 with empty slots

// const heroes = ['Superman', 'Batman', 'Wonder'];

// **************** Array methods ******************

// --( push - adds an element to the end of the array)--

// const heroes = ['Superman', 'Batman', 'Wonder'];


// heroes.push('Flash');
// console.log(heroes); // ['Superman', 'Batman', 'Wonder','Flash']

// --( pop - removes the last element from the array)--


//  heroes.pop();
//  heroes.unshift('Flash'); // adds an element to the beginning of the array
// heroes.shift(); // removes the first element from the array
// heroes.splice(1, 0, 'Flash'); // adds an element at index 1 without removing any element

// console.log(heroes.includes ('Aman'));
// console.log(heroes.indexOf(1))
//  console.log(heroes); // ['Flash', 'Superman', 'Batman', 'Wonder']  

// slice,         splice (splice main array ko modify karta hai, slice main array ko modify nahi karta hai)
 
//  const myNewArray = [1, 2, 3, 4, 5];

//  console.log("A", myNewArray);

// const newArray = myNewArray.slice(1, 3); // creates a new array from index 1 to index 2 (not including index 3)
// console.log("B", newArray); // [2, 3]

//  const myn2 = myNewArray.splice(1, 3); // removes 3 elements from index 1 and returns the removed elements
//  console.log("C", myn2); // [2, 3, 4]
//     console.log("D", myNewArray); // [1, 5] - original array is modified

