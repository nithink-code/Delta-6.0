const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");


app.get("/",(req,res)=>{
    res.send("Welcome Coders!");
});

// Custom Error Handling
const CheckToken = (req,res,next)=>{
    let {token} = req.query;
    if(token ==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"Access Denied");
};

app.get("/api",CheckToken,(req,res)=>{
    res.send("Data");
});

app.get("/error",(req,res)=>{
    abcd = abcd;
});

// Admin route with 403 status code [Practice Qs]
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Unauthorized access!");
});

// Error handling Middleware
app.use((err,req,res,next)=>{
// This status code & error msg will only print if any of them are undefined
    let {status=500,message="Some Error Occurred"} = err; 
    res.status(status).send(message);
});


app.listen(port,()=>{
    console.log(`Listening to port ${port}.`);
})