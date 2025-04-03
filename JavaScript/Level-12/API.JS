// Accessing JSON Data

// parse in JSON is used to convert string data to JS object

// let jsRes = '{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97}';

// let validRes = JSON.parse(jsRes);
// console.log(validRes);

// stringify is used to convert JS object to JSON  [Reverse of parse]



// First API request
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json()         // To access the data and it will return a promise
//     .then((data)=>{
//         console.log(data);
//     })   
// })
// .catch((err)=>{
//    console.log(err);
// })


// Using async and await in API requests

let link = "https://catfact.ninja/fact";

async function checkReq() {
    let res = await fetch(link);
    let data = await res.json();
    console.log(data);
}