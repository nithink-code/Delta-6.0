const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = "8080";
const chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");

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

// Initial Route
app.get("/chats",async (req,res)=>{
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
     let {from,to,message} = req.body;
     let newChat = new chat({
        from : from,
        to : to,
        message: message,
        created_at : new Date()
     });
     // Save it in database
     newChat.save()
     .then((res)=>{
        console.log("Successfull!");
     })
     .catch((err)=>{
        console.log("Error Handled!");
     });
     res.redirect("/chats");
     
});

// Edit request
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chats = await chat.findById(id);
     res.render("edit.ejs",{chats});
});

app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {message: newMsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        {message : newMsg},
        {runValidators: true ,
        new: true}
    );
    res.redirect("/chats");
});

app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});












app.get("/",(req,res)=>{
    res.send("Welcome to WhatsApp!");
})


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})