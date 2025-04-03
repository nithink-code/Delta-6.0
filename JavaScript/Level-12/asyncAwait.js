// async functions always return promises

// async function someValue() {
//     return "hello";   // it is a promise
// }

// someValue()
// .then(()=>{
//     console.log("Success!");
// })
// .catch(()=>{
//     console.log("Failure!");
// })

//await keyword is used to give some delay only after the fullfilling the promise request

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let num = Math.floor(Math.random() * 10)+1;
        console.log(num);
        if(num > 5){
            reject("Error!");        // To handle errors using try and catch
        }
        resolve();
        },1000);
    })
}

async function printAns(){
try{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
catch(err){
    console.log("Error Caught!");
    console.log(err);
}   
}