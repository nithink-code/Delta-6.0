const express = require("express");
const app =  express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username: "Nithin K",
        content: "I like to Code!"
    },
    {
        id : uuidv4(),
        username: "Naveen ",
        content: "I like to Code!"

    }
];

app.get("/posts/create",(req,res)=>{
    res.render("create.ejs");
});
app.post("/posts",(req,res)=>{
   let {username,content} = req.body;
   posts.push({username,content});
   res.redirect("/posts");
});



app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
   let {id} = req.params;
   posts = posts.filter((p)=> id !== p.id);
   res.redirect("/posts");
});










app.listen(port,()=>{
    console.log(`Listening to port ${port}.`);
});