const express = require("express");
const app = express();  // it is a function call

// console.dir(app);
let port = 3000;
app.listen(port,()=>{
   console.log(`our port is ${port}.`);
});

// For routing in mulitple pages
// app.get("/home",(req,res)=>{
//     res.send("You are in home page!");
// });
// app.get("/search",(req,res)=>{
//     res.send("You are in search page!");
// });
// For any invalid path use standard path [*]. It is a wild card

app.get("/",(req,res)=>{
    res.send("This path doesnot exist!");
});

// To send path parameters [variables in args in app.get()]

// app.get("/:username",(req,res)=>{
//      let {username,id} = req.params;
//      console.log(`Welcome to the page of ${username}.`);
// });

// To send query strings
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No queries!");
});
















// app.use will print the message when any request is occured [to keep track of request generated]

// app.use((req,res)=>{
//     console.log("request received!");
//     // To send response to requests
//     // res.send() method will parse string to JSON format.
//     res.send("This is a basic response!");
// })

