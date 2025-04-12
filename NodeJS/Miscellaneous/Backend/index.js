const express = require("express");
const app = express();
const port = 8080;

// To get the body of the data in URL form use [These are Middlewares]
app.use(express.urlencoded({ extended: true }));

app.get("/register",(req,res)=>{
    res.send("Inside GET request");
});


// To get the data in JSON format use
app.use(express.json());

// Note: Name of the html form document should be same as the body parameters below
app.post("/register", (req,res)=>{
   let {user,password} = req.body;
   res.send(`Welcome to our page ${user}.`);
});

app.listen(port,()=>{
     console.log(`Port is listening ${port}.`);
});
