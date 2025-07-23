const express = require("express");
const app = express();

// Middleware Function
// app.use((req,res,next)=>{
//     console.log("This is 1st Middleware!");
//     return next();                    
// });

// Route [Here below response will not be printed as middleware is sending response]
// app.get("/",(req,res)=>{
//     res.send("Welcome to our page!");
// });

// Utility Middlewares
//logger - Morgan
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();   // Manipulate the req parameters
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Hi, Welcome Coders!");
// });

// Small Authentication for Accessing Data [Multiple Data]
const multipledata = (req,res,next)=>{
     let {token} = req.query;
     if(token === "accessgranted"){
        next();
     }else{
     res.send("Access Denied!");
     }
    };

// Here multipledata is a middleware if it is true then only data will be printed.
app.get("/api",multipledata,(req,res)=>{
    res.send("Data");
});















// For handling Errors
// app.use((req,res)=>{
//     res.send("Page not Found!");
// });


app.listen(8080,()=>{
    console.log('Listening to port 8080.');
})