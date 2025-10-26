//--------------------------------DOMS----------------------------------------\\
// console.dir(document.body);
// console.log(document.body);

// let heading = document.getElementById("heading");
// console.dir(heading)

// let headings = document.getElementsByClassName("yahoo");
// console.dir(headings);

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let element=document.querySelector("p");
// console.dir(element)

// let ele=document.querySelectorAll ("p");
// console.dir(ele)

// DOM MANIPULATION

// #tagName

// #innerText

// #innerHTML

// #textContent

// Practice Question

//Q1
// let heading = document.querySelector("h2");
// let element = heading.append(" from Apna College");
// console.dir(element);

// or 

// heading.innerText=heading.innerText+"from Apna college"
// console.dir(heading.innerText)

//Q2

// let divs =document.querySelectorAll(".box");

// for(div of divs){
//     console.log(div)
//     console.log(div.innerText)
// }

// divs[0].innerText="WoW";
// divs[1].innerText=":3 hehe";
// divs[2].innerText=":| meanie";

// or

// let divs =document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText=`now unique value ${idx}`;
//     idx++
// }
