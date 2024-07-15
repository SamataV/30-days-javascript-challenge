//Day 3
//Activity 1: If-Else statements


//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let a = 5;
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
}
else{
    console.log("a is zero");
}

//Task 2: Write a program to check if a person is eligible to vote(age >= 18) and log the result to the console.

let age = 18;
if(age >= 18){
    console.log("Eligible to vote.");
    }
    else{
        console.log("Not Eligible to vote.");
    }

//Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let n1 = 10;
let n2 = 12;
let n3 = 11;

if(n1>n2)
    {
        if(n1>n3)
            console.log("Largest is"+n1);
        else
        console.log("Largest is"+n3);
    }
    else
      if(n2>n1)
        {
          if(n2>n3)
        console.log("Largest is"+n2);
     else
        console.log("Largest is"+n3);
      }
    
    else
    if(n3>n2)
        {
          if(n1>n3)
            console.log("Largest is"+n1);
        else
        console.log("Largest is"+n3);
    }

 // Activity 3: Switch Case

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day;
let day_number = 3
// day_number = 31 

switch ( day_number ) {
  case 1 :
    day = "Sunday"
    break; 
  case 2 : 
    day = "Monday"
    break;
  case 3 :
    day = "Tuesday"
    break;
  case 4 :
    day = "Wednesday"
    break;
  case 5 :
    day = "Thursday"
    break;
  case 6 :
    day = "Friday"
    break; 
  case 7 :
    day = "Saturday"
    break; 
  default :
    day = `${day_number} it not a day`
    break
}
console.log(day)

//Task 5: Write a program that uses a switch case to assign a grade( 'A','B','C','D','F') based on a score and log the grade to the console.

