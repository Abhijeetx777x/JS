// ARRAYS----------------------------------------------------------------------

// CREATE ARRAYS

// let marks = [97,90,89,78,55];
// marks[2]=66
// console.log(marks);

// LOOPING OVER ARRAYS

// let heroes=["ironman","superman","Kratos","malkeith"];

// for(let i=0;i < heroes.length;i++){
//     console.log(heroes[i]);
// }

//for-of

// let heroes=["ironman","batman","Kratos","malkeith"];
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }

// Practice question-------------------------

// Q1.

// let marks =[85,97,44,37,76,60];
// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// let avg= sum/marks.length;
// console.log(`Average marks of the class: ${avg}%`)


// Q.2

// let item=[250,645,300,900,50];
// let sum=0
// for(let val of item){
//     sum+=val;
// }
// console.log(sum)
// let offer=sum/10
// console.log(`Your Total after 10% off is:${offer}rupees`)

// or

// let item=[250,645,300,900,50];
// let sum=0
// for(let i=0;i<item.length;i++){
//     let offer=item[i]/10;
//     item[i]-=offer;
// }
// for(let val of item){
//     sum+=val;
// }
// console.log(`# Individual item prices are :${item}\n# Your Final Price is\n:${sum}`)

// ARRAY METHODS

let marvelHeroes=["Spiderman","Ironman","Thor","Hawkeye","Moonknight"];
let dcHeroes=["Batman","Superman","Wonder woman"]

// marvelHeroes.push("grapes");//item added in the end

// let del=marvelHeroes.pop();//end item del.

// console.log(veg.toString());//conversion

// let heroes=marvelHeroes.concat(dcHeroes);//combining arrays

// marvelHeroes.unshift("antman");//adding value to start

// marvelHeroes.shift();//delete first item in array



// console.log(marvelHeroes.slice(2,6)); //printing specific keys
// console.log(marvelHeroes.splice(0,1,"kratos")); 
//console.log(marvelHeroes.splice(1,1,"Kratos")); //replace / delete / add
//console.log(marvelHeroes)

// Practice Questions

// Q.1

// companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies.splice(0,1))
// console.log(companies.splice(1,1,"Ola"))
// console.log(companies.splice(6,0,"Amazon"))
// console.log(companies)