// OBJECT

// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn was clicked");
//     let a=25
//     a++;
//     console.log(a);
// };
// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("Mouse Hovered");
// };
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// };

// LISTENER

// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 was clicked");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button 2 was clicked");
// });

// const handler3 =()=>{
//     console.log("button 3 was clicked")
// }; 
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",()=>{
//     console.log("button 4 was clicked");
// });

// btn1.removeEventListener("click",handler3);

//Q.1

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="Light";

modeBtn.addEventListener("click",() => {

    if (currMode==="Light") {
        currMode ="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});