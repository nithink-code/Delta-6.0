const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.listen(port,()=>{
    console.log( `Listening to the port ${port}.`);
});

app.set("views","ejs");

// To fix the search of server for view folder to this folder use path.join(__dirname,"/views")
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    let num1 = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num1});   // res.render is used to send entire files to the server.
    // Heren 2nd args num:num1 is a key valur pair used to send data to ejs to another file.
})

app.get("/ig/:username",(req,res)=>{
    // const namelist = ["Nithin","Thar","Mahindra","Audi"];
    let {username} = req.params; // selecting the parameters
    const instadata = require("./data.json");
    const data = instadata[username];        // To accessing data from the data.json file
    res.render("Instagram.ejs",{data});
    console.log(data);
});