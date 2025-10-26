// console.log("hello world");


// let a =10
// let b =6

// console.log(" a =" , a , "& b=" , b );
// console.log(" a * b = ", a * b);
// console.log(" a + b = ", a + b);
// console.log(" a - b = ", a - b);
// console.log(" a / b = ", a / b);
// console.log(" a % b = ", a % b);
// console.log(" a ** b = ", a ** b);


// Unary Operators 


// let a = 7
// let b = 5

// console.log(" a =" , a , "& b=" , b );
// console.log(" a + 1 = ", ++a);
// console.log(" b - 1 = ", --b);


// Assignment Operator


// let a = 6;
// let b= 7;

// console.log(" a =" , a , "& b=" , b );
// console.log("a + 4 = ", a+=4);
// console.log("b - 4 = ", b-=4);
// console.log("b / 4 = ", b/=4);
// console.log("b * 4 = ", b*=4);
// console.log("b % 4 = ", b%=4);
// console.log("b ** 4 = ", b**=4);


// Comparision Operator


// let a = 6;
// let b= 7;

// console.log(" a =" , a , "& b=" , b );
// console.log("a = 4 :", a==4);
// console.log("a != 4 :", a!=4);
// console.log("a = 4 :", a===4);
// console.log("a != 4 :", a!==4);
// console.log("a is less than or equal to 4 :", a<=4);
// console.log("a is greater than or equal to 4 :", a>=4);


// Logical Operator


// let a = 6;
// let b = 5;

// AND

// console.log(" a =" , a , "& b=" , b );
// console.log("cond 1 : a > b" ,"cond2 : a == 6" );
// console.log("cond1 & cond2 =",a > b && a == 6);

// OR

// console.log("cond 1 : a < b" ,"cond2 : a == 5" );
// console.log("cond1 & cond2 =",a < b || a == 5);

// NOT

// console.log("!(6<5) =",!(6<5));


// Conditional Statements 

// IF

// let age = 17

// if (age>=18) {
// console.log("Voter is not eligable to vote")
// } else {
//     console.log("Voter is not eligable to vote")
// }



// let mode ="dark";
// let color;

// if(mode=="dark"){
//     color="black";
// }else{color="white"}

// console.log(color)


// let num=6;

// if (num % 2 == 0) {
//     console.log(num,"IS EVEN");
// } else {
//     console.log(num,"IS ODD");
// }

// let age = 59
// if (age <= 59) {
//     console.log("Adult")
// } else if(age < 18) {
//     console.log("Teen")
// }else if(age >= 60){
//     console.log("Senior Citizen")
// }


// Ternary Operators


// let age=25;

// let lifeline = age >= 24 ?  "adult" : "Teen";
// console.log(lifeline)


// Switch


// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// Practice Question

// Q1.

// let no = prompt("Enter a No.")
// if (no % 5==0) {
//     console.log( no ,":Number is a multple of 5")
// } else {
//     console.log(no, ":No. is not the multiple of 5")
// }

// Q2.

// let nam = prompt("Enter your name");
// let marks = prompt("Enter your grades");

// if (marks >= 49 && marks <= 0) {
//     console.log(marks,"F");
// }else if(marks >= 50 && marks <= 59) {
//     console.log(marks,"D");
// }else if(marks >= 60 && marks <= 69) {
//     console.log(marks,"C");
// }else if(marks >= 70 && marks <= 89) {
//     console.log(marks,"B");
// }else if(marks >= 90 && marks <= 100) {
//     console.log(marks,"A");
// }else {
//     console.log(nam,"Student didnt attempted the exam");
// }

