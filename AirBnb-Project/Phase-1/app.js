const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate); // To use layouts
app.use(express.static(path.join(__dirname,"/public")));

main()
.then((res)=>{
    console.log("Successful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/",(req,res)=>{
    res.send("Welcome to wanderlust!");
});


// Index Route
app.get("/list",async (req,res)=>{
    const allList = await Listing.find({});
    res.render("./listings/index.ejs",{allList});
});

//New Route
app.get("/list/new",(req,res)=>{
    res.render("./listings/new.ejs");
});

app.post("/list",async (req,res)=>{
    const lists = new Listing(req.body.listing);
    await lists.save();
    res.redirect("/list");
});

// Edit Route
app.get("/list/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const lists1 = await Listing.findById(id);
    res.render("./listings/edit.ejs",{lists1});
});

// Update Route
app.put("/list/:id",async (req,res)=>{
   let {id} = req.params;
   await Listing.findByIdAndUpdate(id,{...req.body.listing}); // To deconstruct to single object
   res.redirect(`/list/${id}`);
});

// Delete Route
app.delete("/list/:id",async (req,res)=>{
    let {id} = req.params;
    const deleteData = await Listing.findByIdAndDelete(id);
    res.redirect("/list");
});


//Show Route
app.get("/list/:id",async (req,res)=>{
    let {id} = req.params;
    const lists = await Listing.findById(id);
    res.render("./listings/show.ejs",{lists});
})

app.listen(8080,()=>{
    console.log("Server is running in port 8080.");
})

