const URL="https://cat-fact.herokuapp.com/facts";
const fact=document.querySelector("#facts");
const btn=document.querySelector("#btn");

const getFacts =async()=>{
    console.log("Getting Data >>>>");
    let post=postMessage("Hello worker to database",post)
    let response = await fetch(URL,post);
    console.log(response);
    let data = await response.json();
    fact.innerText=data[0].text;
};

btn.addEventListener("click",getFacts);

