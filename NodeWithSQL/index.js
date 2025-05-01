const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const port = "8080";
const { v4: uuidv4 } = require("uuid");



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta",
  password: "nithin2005",
});

let randomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// Home Page Route
app.get("/", (req,res)=>{
   let q = `SELECT count(*) FROM user`;
   try{
    connection.query(q,(err,result)=>{
         if(err) throw err;
         let count = result[0]["count(*)"];
         res.render("home.ejs",{count});
    });
   }
   catch(err){
    res.send("Some error!");
   }
});

//  Table Details Route
app.get("/users",(req,res)=>{
    let q = `SELECT * FROM user`;
    try{
      connection.query(q,(err,result)=>{
         if(err) throw err;
         res.render("show.ejs",{result});
      });
    }catch(err){
      res.send(err);
    }
});

// Details edit Route [only edit form]
app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM USER WHERE ID = '${id}'`;
    try{
      connection.query(q,(err,result)=>{
             if(err) throw err;
             let user = result[0];
             res.render("edit.ejs",{user});
      });
    }catch(err){
      res.send(err);
    }
});

app.patch("/users/:id",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;   // Select the username
  let {username : newUser , password : newPass } = req.body; // Extract username and password
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        if(newPass != user.password){
          res.send("Invalid Password")
        }else{
          let q2 = `UPDATE user SET username='${newUser}' WHERE id='${id}'`;
          connection.query(q2,(err,result)=>{
              if(err) throw err;
              res.redirect("/users");
          });
        }
    });
  }catch(err){
    res.send(err);
  }
});

// To create a new user in database
app.get("/users/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/users/create", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/users");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

// To delete the user
app.get("/users/:id/delete",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try{
      connection.query(q,(err,result)=>{
           if(err) throw err;
           let user = result[0];
           res.render("delete.ejs",{user});
      });
    }catch(err){
      res.send(err);
    }

});

app.delete("/users/:id/",(req,res)=>{
      let {id} = req.params;
      let{password} = req.body;
      let q = `SELECT * FROM user WHERE id='${id}'`;  // select the user to delete
      try{
            connection.query(q,(err,result)=>{
              if(err) throw err;
              let user = result[0];
              if(user.password != password){
                res.send("Invalid password!");
              }else{
                let q2 = `DELETE FROM user WHERE id ='${id}'`;
                  connection.query(q2,(err,result)=>{
                        if(err) throw err;
                        else{
                          console.log("Deleted successfully!");
                          res.redirect("/users");
                        }
                  });
              }
            });
      }catch(err){
        res.send(err);
      }
});












app.listen(port,()=>{
    console.log(`Port is listening ${port}.`);
});

// connection.end();












// Create fake mulitple data using faker

// Return array of fake data of users


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for(let i=1;i<=10;i++){
//   data.push(randomUser().slice(0, 4));
// };

// try{
//   connection.query(q,[data],(err,result)=>{
//        if (err) throw err;
//        console.log(result);
//   });
// }
// catch(err){
//   console.log(err);
// }

