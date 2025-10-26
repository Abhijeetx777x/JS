// --------------LOOPS IN JS-----------------

// FOR LOOP

// for(let i=1 ; i<=5 ; i++ ) {
//     console.log("i=",i);
// }

// Calculate sum of 1 t 5

// let sum=0
// let n=5;
// for(let i=1 ; i<=n ; i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

// Infinite Loops 

// for(let i=1 ; i<=0 ; i++ ) {
//     console.log("i=",i);
// }

// !!!!!!!!!!!!! DISCLAIMER !!!!!!!!!!!!!!
// NEVER FUCKIN USE INFINITE LOOP

// WHILE LOOPS

// let i=1
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// DO-WHILE LOOPS

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// } while (i<=5);

// FOR-OF LOOP

// let str="Apna Abhi";
// let size=0;
// for (let i of str) {
//     console.log("i=",i)
//     size++;
// }
// console.log("string size=",size);


// FOR-IN LOOP

// let student= {
//     name: "Abhijeet Pandey ",
//     age: 18,
//     cgpa: 8.7,
//     isPass: true,
// }

// for (let key in student){
//     console.log("keys:",key,":value:",student[key]);
// } 

// PRACTICE QUESTIONS

// Q.1

// for(let i=0; i<=100 ;i++) {
//     if(i%2===0){
//         console.log("num.=",i);
//     }
// }


// Q.2

// let game_num = 25;
// let user_num=prompt("guess the game number : ");

// while(user_num != game_num) {
//     user_num= prompt("YOU'VE ENTERED A WRONG NUMBER,PLEASE TRY AGAIN: ");
// }
// console.log("CONGRATULATIONS YOU'VE ENTERED THE RIGHT NUMBER ;3")


// STRINGs

// let str="HELLO AMERICAYA";
// let str2='Hallo>>>>100';
// str2.length
// console.log(str[8]);

// TEMPLATE LITERALS

// let obj={
//     item : "pen",
//     price : 10,
// }
// let output=`the cost of ${obj.item}is ${obj.price} rupees`;
// console.log(output);


// let sentence=`this is a template \t literal = \n ${1+2+3}`;
// console.log(sentence);

// STRING METHODS

// upper case

// let str= "apna college";
// str=str.toUpperCase();
// console.log(str)

// lower case

// let str1= "APNA college";
// str1=str.toLowerCase();
// console.log(str1)

// removing start and ending spaces 

// let str = "           Apna ABHI              ";
// console.log(str.trim());

// slice

// let str = "hello";
// let s = str.slice(0,4);
// console.log(s);

// connecting

// let str1="helloji  ";
// let str2="ApnaCollege";

// let res = "Ohhh Haaaan!!!"+str1+str2
// (OR)
// let s=str1.concat(str2)
// console.log(res)

// Repalce

// str="kya haal hai";
// s=str.replace("haal hai","sahi baat hai")
// console.log(s)

// Searching

// let str="I love you Pranjal";
// s=str.charAt(3)
// a=str.replace("love","hate")
// console.log(s,"\n", a)

// Practice Question

// let s=prompt("Enter Your Name");
// let n=s.length;
// let str= "@"+s
// console.log("Username :",str,"\n Length of the name :",n);
