//Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to the console.

let a = 10;
let b = 15;
let addition = a+b;
console.log(addition);

//Task 2: Write a program to subtract two numbers and log the result to the console.

let x = 20;
let y = 5;
let z = x-y;
console.log(z);

//Task 3: Write a program to multiply two numbers and log the result to the console.

let num1 = 8;
let num2 = 5;
let num3 = num1 * num2;
console.log(num3);

//Task 4: Write a program to divide two numbers and log the result to the console.

let n1 = 24;
let n2 = 12;
let n = n1/n2;
console.log(n);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let n3 = 10;
let n4 = 9;
let n5 = n3 % n4;
console.log(n5);

//Activity 2: Assignment Operators

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let a1 = 2;
a1 += 5;
console.log(a1);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let x1 = 6;
x1 -= 4;
console.log(x1);

//Activity 3: Comparison Operators

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let a2 = 5;
let a3 = 9;
let a4 = (a2 > a3);
let a5 = (a2 < a3);
console.log(a4);
console.log(a5);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let b1 = 6;
let b2 = 8;
let b3 = (b1 >= b2);
let b4 = (b1 <= b2);
console.log(b3);
console.log(b4);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let y1 = 22;
let y2 = 22;
let y3 = (y1 == y2);
let y4 = (y1 === y2);
console.log(y3);
console.log(y4);

//Activity 4: Logical Operators

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let c1 = 6;
let c2 = 8;
let c3 = (c1 >= c2);
let c4 = (c1 <= c2);
let c5 = (c3 && c4)
console.log(c3,c4,c5);

//Task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console.

let d1 = 6;
let d2 = 8;
let d3 = (d1 >= d2);
let d4 = (d1 <= d2);
let d5 = (d3 || d4)
console.log(d3,d4,d5);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let p1 = 6;
let p2 = 8;
let p3 = !(p1 >= p2);
let p4 = !(p1 <= p2);
let p5 = !(p3 || p4)
console.log(p3,p4,p5);

//Acitvity 5: Ternary Operator

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let z1 = 250;
let z2 = 200;
let z3 = [(z1>z2) ? true : false];
console.log(z3);

//Feature Request:

//Feature Request 1: Arithmetic Operations Script: Write a script that performs basic arithmetic operations(addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let v = 64;
let m = 8;


let addition1 = (v+m);
let subtraction = (v-m);
let multiplication = (v*m);
let division = (v/m);
let remainder = (v%m);

console.log(addition1);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(remainder);

/*
here's a simple JavaScript script that performs basic arithmetic operations on two numbers and logs the results:

```javascript
// Define two numbers
const num1 = 10;
const num2 = 5;

// Perform arithmetic operations
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const remainder = num1 % num2;

// Log the results
console.log(`Addition: ${num1} + ${num2} = ${addition}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
console.log(`Division: ${num1} / ${num2} = ${division}`);
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`);*/



//Feature Request 2: Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

// Define two numbers
const numm1 = 10;
const numm2 = 5;

// Comparison operators
const isEqual = numm1 === numm2;
const isNotEqual = numm1 !== numm2;
const isGreaterThan = numm1 > numm2;
const isLessThan = numm1 < numm2;
const isGreaterThanOrEqual = numm1 >= numm2;
const isLessThanOrEqual = numm1 <= numm2;

// Logical operators
const andCondition = (numm1 > numm2) && (numm1 !== numm2); // true && true -> true
const orCondition = (numm1 > numm2) || (numm1 === numm2);  // true || false -> true
const notCondition = !(numm1 === numm2);                 // !false -> true

// Log the results of comparison operators
console.log(`Is Equal: ${numm1} === ${numm2} -> ${isEqual}`);
console.log(`Is Not Equal: ${numm1} !== ${numm2} -> ${isNotEqual}`);
console.log(`Is Greater Than: ${numm1} > ${numm2} -> ${isGreaterThan}`);
console.log(`Is Less Than: ${numm1} < ${numm2} -> ${isLessThan}`);
console.log(`Is Greater Than or Equal: ${numm1} >= ${numm2} -> ${isGreaterThanOrEqual}`);
console.log(`Is Less Than or Equal: ${numm1} <= ${numm2} -> ${isLessThanOrEqual}`);

// Log the results of logical operators
console.log(`AND Condition: (${numm1} > ${numm2}) && (${numm1} !== ${numm2}) -> ${andCondition}`);
console.log(`OR Condition: (${numm1} > ${numm2}) || (${numm1} === ${numm2}) -> ${orCondition}`);
console.log(`NOT Condition: !(${numm1} === ${numm2}) -> ${notCondition}`);

//Feature Request 3: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.


// Define a number
const numb = -10;

// Use the ternary operator to determine if the number is positive, negative, or zero
const result = numb > 0 ? 'positive' : numb < 0 ? 'negative' : 'zero';

// Log the result
console.log(`The number ${numb} is ${result}.`);
