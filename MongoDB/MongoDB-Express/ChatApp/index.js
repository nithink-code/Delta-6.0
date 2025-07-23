const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = "8080";
const chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));

main()
.then((res)=>{
    console.log("Connection Successfull!");
})
.catch((err)=>{
    console.log("Error in Connecting!");
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Async Wrap function 
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err));
    };
}

// Routes
app.get("/",(req,res)=>{
    res.send("Welcome to WhatsApp!");
});

// Index Route
app.get("/chats", asyncWrap(async (req,res,next)=>{
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
}));

// New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

// Create Route
app.post("/chats", asyncWrap(async (req,res,next)=>{
    let {from,to,message} = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats");
}));

// Show Route
app.get("/chats/:id", asyncWrap(async(req,res,next)=>{
    let {id} = req.params;
    let chats = await chat.findById(id);
    if(!chats){
        throw new ExpressError(500,"Chat not found!");
    }
    res.render("edit.ejs",{chats});
}));

// Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req,res,next)=>{
    let {id} = req.params;
    let chats = await chat.findById(id);
    if(!chats){
        next(new ExpressError(500,"Chat not found!"));
    }
    res.render("edit.ejs",{chats});
}));

// Update Route
app.put("/chats/:id", asyncWrap(async (req,res,next)=>{
    let {id} = req.params;
    let {message: newMsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        {message: newMsg},
        {runValidators: true, new: true}
    );
    res.redirect("/chats");
}));

// Delete Route
app.delete("/chats/:id", asyncWrap(async(req,res,next)=>{
    let {id} = req.params;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));

// 404 Handler
// Handling Mongoose Errors
app.use((err,req,res,next)=>{
    if(err.name === "Error"){
        console.log("This is the error message!");
        next(err);
    }
    // next(new ExpressError(404,"Page not found!"));
});

// Error Handler (must be last middleware)
app.use((err,req,res,next)=>{
    let {status=500, message="Something went wrong!"} = err;
    res.status(status).send(message);
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});