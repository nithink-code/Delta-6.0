// Callback Hell

let h1 = document.querySelector("h1");
function colorChange(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        resolve("Color Changed");
    },delay);
  })
}

// call backs
colorChange("green",1000)
.then(()=>{
    console.log("Green color Updated!");
    return colorChange("blue",1000);
})
.then(()=>{
    console.log("Blue color Updated!");
})
.catch(()=>{
    console.log("Failure: Color failed to update!");
})

















// function callbackhell(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// callbackhell("Apna College",()=>{
//     console.log("Success: Your data was saved!");
//     callbackhell("Coding",()=>{
//         console.log("Success: Another data is also saved!");
//     },()=>{
//         console.log("Failure: Second data was not saved!");
//     });
// },()=>{
//    console.log("Failure: Your data was not saved!");
// });


// USE of promise

// function callbackhell(data){
//     return new Promise((resolve,reject)=>{
//          let internetspeed = Math.floor(Math.random() * 10)+1;
//          if(internetspeed > 4){
//             resolve("success: Your data was saved!");
//          }
//          else{
//             reject("failure: Your data was not saved!");
//          }
//     });
// }

// then and catch usage
// for success -> then 
// for failure -> catch

// callbackhell("Apna College")
// .then(()=>{
//     console.log("Success: Data saved successfully.")
// })
// .catch(()=>{
//     console.log("Failure: Data  not saved successfully.")
// })


// Using promise chaining 

// callbackhell("Apna College")
// .then((result)=>{
//     console.log("Success: Your data was saved!");
//     console.log(result);
//     return callbackhell("Nithin");
// })
// // if 2nd data is successfull 
// .then((result)=>{
//     console.log("Success: Your second data is saved!");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Failure: Your data was not saved!");
//     console.log(error);
// })