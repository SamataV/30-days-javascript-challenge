//Activity 1:Variable Declaration

//Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var floor = 11;
console.log(floor);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let fruit = 'Apple';
console.log(fruit);

//Activity 2: Constant Declaration

//Task 3: Decalre a variable using const, assign it a boolean value, and log the value to the console.

const switchOn = 'True';
console.log(switchOn);

//Activity 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator.


var floors = 11;
let fruits = 'Mango';
const isPresent = true;
let emp ={ name:'xyz', position: 2, salary: 123456};
const fruitz = ["banana", "apple", "peach"];



console.log(typeof floor);
console.log(typeof fruits);
console.log(typeof isPresent);
console.log(typeof emp);
console.log(typeof fruitz);

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let  ticketPrice = 200;
console.log(ticketPrice);
ticketPrice = 250;
console.log(ticketPrice);

//Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error.

const BookName = 'Atomic Habits';
BookName = 'The Alchemy';

//Feature Request 1:
  //Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.


var floorss = 11;
let fruitss = 'Mango';
const isPresents = true;
let emps ={ name:'xyz', position: 2, salary: 123456};
const fruitzz = ["banana", "apple", "peach"];



console.log(floorss, typeof floorss);
console.log(fruitss, typeof fruitss);
console.log(isPresents, typeof isPresents);
console.log(emps, typeof emps);
console.log(fruitzz, typeof fruitzz);


//Feature Request 2:
  // Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

  let petrolPrice = 102;
  console.log(petrolPrice);

  petrolPrice = 105;
  console.log(petrolPrice);

  const month = 'July';
  console.log(month);

  month = 'August'
  console.log(month);