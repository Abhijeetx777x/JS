// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello")
// },4000);

// console.log("three");

//Callback Hell

// function getData(dataId,getNextData){
    // setTimeout(()=>{
    //     console.log("data",dataId)
    //     if(getNextData){
    //         getNextData()
    //     }
    // },2000);  //2s
// }

// getData(1,()=>{
//     console.log("getting data 2......");
//     getData(2,()=>{
//         console.log("getting data 3......");
//         getData(3,()=>{
//             console.log("Finished!");
//         });
//     });
// });

//PROMISES

// let promise = new Promise ((resolve,reject) => {
    // console.log("Promises");
    // resolve ("ayy yo!!!");
    // reject ("some error  occured");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         },5000);  //5s
//     });
// };

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("ACCEPTED");
//         resolve("SUCCESS");
//     });
// };

// let promise =getPromise();
// promise.then((res)=>{
//     console.log("success fullfilled")
// });

// promise.catch((err)=>{
//     console.log("Rejected")
// });

// function asyncFunc1(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 2");
//         },4000);
//     });
// }

// console.log("Fetchong Your Data 1....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data 2.....");
//     asyncFunc2().then((res)=>{});
// });

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//         },3000);  //5s
//     });
// };

//PromiseChain

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//         },3000);  //3s
//     });
// };

// console.log("Retriving Data 1...")
// getData(1)
// .then((res)=>{
//     console.log("Retriving Data 2...");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("Retriving Data 3...");
//     return getData(3);
// })
// .then((res)=>{
//     console.log("Retrived All Data ;3 ");
//     console.log("success");
// });





//STORAGE DATA 

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
        },2000);  //2s
    });
};

//ASYNC-AWAIT (BEST WAY TO PROGRAME):

(async function() {                  // USED IIFE
    console.log("Retriving Data 1... ");
    await getData(1);
    console.log("Retriving Data 2... ");
    await getData(2);
    console.log("Retriving Data 3... ");
    await getData(3);
    console.log("Retriving Data 4... ");
    await getData(4);
    console.log("Data has been retrived");
})();

// CALLBACK HELL (WORST):

// getData(1,()=>{
//     console.log("getting data 2......");
//     getData(2,()=>{
//         console.log("getting data 3......");
//         getData(3,()=>{
//             console.log("Finished!");
//         });
//     });
// });

//PROMISE CHAIN (BETTER THAN HELL):

// console.log("Retriving Data 1...")
// getData(1)
// .then((res)=>{
//     console.log("Retriving Data 2...");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("Retriving Data 3...");
//     return getData(3);
// })
// .then((res)=>{
//     console.log("Retrived All Data :3 ");
//     console.log("success");
// });