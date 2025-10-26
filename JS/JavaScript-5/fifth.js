//-------------Function---------------------

//----Function -->2numbers,sum--------

// #1

// function mySum(x,y){
//     console.log("sum is :",x+y)
// }
// mySum(20,30)

// #2

// function mySum(x,y){
//     s = x+y
//     return s;
// }
// let val=mySum(3,4)
// console.log(val)

// #3

// let arrowmul=(a,b)=>{
//     return(a*b)
// }
// console.log(arrowmul(3,4))

// let Hello=()=>{
//     console.log("hello");
// };

// PracticeQuestion

// Q1

// function vowels(str){
//     let count=0;
//     for (const char of str) {
//         if(
//         char==="a"||
//         char==="e"||
//         char==="i"||
//         char==="o"||
//         char==="u"
//         ) {
//             count++
//         }
//     }
//     return count;
// }
// vowels("abhijeet")

// Q2

// const countVow=(str)=>{
//     let count=0;
//     for (const char of str) {
//         if(
//         char==="a"||
//         char==="e"||
//         char==="i"||
//         char==="o"||
//         char==="u"
//         ) {
//             count++
//         }
//     }
//     return count;
// };

// ------------for each

// let array1 = ["a","b","c","d","e","f"];
// array1.forEach(function myFunc(val){
//     console.log(val);
// });

//or

// array1.forEach((element,idx,array1) => console.log(element.toUpperCase(),idx,array1));


// Practice Question


// const array1 = [2,4,6];
// array1.forEach((element) => console.log(element*element));

//MAP

// let array1 = ["a","b","c","d","e","f"];
// let newArr = array1.map((val) => {
//     return val;
// });
// console.log(newArr)

//Filter

// array1=[1,2,3,4,5,6,7,,8,9,0];
// let newArr=array1.filter((val)=>{
//     return val%2==0;
// })
// console.log(newArr)

//reduce

// let arr=[1,2,3,4,5];
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output)

// Practice Questrion

// q.1

// marks=[89,88,94,92,90,86,88];
// let mark=marks.filter((val)=>{
//     return val>=90;
// })
// console.log(mark);

// Q.2

let n = prompt("Please enter a number:");
let array=[];
for (let i=1;i<=n;i++){
    array [i-1] = i
}
console.log(array);

let sum = array.reduce((res,cur)=>{
    return res+cur
})
console.log("Sum of array =",sum);

let factorial = array.reduce((res,cur)=>{
    return res*cur
})

console.log("Product of array =",factorial);