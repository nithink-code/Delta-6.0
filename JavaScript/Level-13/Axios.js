// let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     console.log(fact);
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data;
//     }
//     catch(err){
//         console.log(err);
//         return "No Facts Found";
//     }
// }

// Passing headers using Axios

// const url = "https://icanhazdadjoke.com/";

// async function sendHeader(){
//     try{
//         const config = { headers: { Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
   
// }



//Using API's for getting university names
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getRes(country);
    console.log(colleges);
});

async function getRes(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}


