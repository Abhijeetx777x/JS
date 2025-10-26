// const student ={
//     fullName :"Abhijeet Pandey",
//     marks:87.7,
//     printMarks:function(){
//         console.log("marks=",this.marks);//this represents students.
//     },
// }
// const employee={
//     calcTax(){
//         console.log("Tax rate is 10%");
//     },
// }

// const Abhi1={
//     salary:50000,
// };

// const Abhi2={
//     salary:50000,
// };

// const Abhi3={
//     salary:50000,
// };

// Abhi1.__proto__=employee;
// Abhi2.__proto__=employee;
// Abhi3.__proto__=employee;

class ToyotaCar{
    constructor(brand,mileage){
        console.log("New Object");
        this.brand=brand;
        this.mileage=mileage
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop")
    }
}

let fortuner = new ToyotaCar("fortuner",12);
// fortuner.setBrand("FORTUNER")
console.log(fortuner)
let lexus = new ToyotaCar();
// lexus.setBrand("LEXUS")