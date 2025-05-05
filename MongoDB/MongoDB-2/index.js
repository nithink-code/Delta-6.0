const mongoose = require("mongoose");
main()
.then(()=>{
    console.log("Successfully connected!");
})
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// To create a new schema in MongoDB
const userSchema = new mongoose.Schema({
       name: String,
       email: String,
       age: Number
});

// To create a mongoose collection using models

const User = mongoose.model("User",userSchema);

// To insert data in the collections 

// const user1 = new User({
//     name: "Nithin",
//     email: "nithin@gmail.com",
//     age: 19
// });

// const user2 = new User({
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     age: 20
// });

// To actually add the 2 objects to database use save() 

// user1.save()
// .then((res)=>{
//      console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// user2.save();

// Insert Many

// User.insertMany([
//     {name: "Rohith",email:"rohith@gmail.com",age:25},
//     {name: "Shiva",email:"shiva@gmail.com",age:23},
//     {name: "Sourav",email:"sourav@gmail.com",age:30},
// ])
// .then((res)=>{
//     console.log("Successfully inserted!");
// })
// .catch((err)=>{
//     console.log("Some error!");
// });




// User.find({name:"Nithin"})
//   .then((res)=>{
//     console.log(res[0].name);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


// User.findById("6814ccbfd306e4cbecdeaf46")
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// Update in Mongoose
// [Here we don't have to use set in mongoose like mongo shell]
// User.updateOne({name:"Nithin"},{age:20})
//   .then((res)=>{
//       console.log(res);
//   })
//   .catch((err)=>{
//       console.log(err);
//   });

// To find and Update the collection [Updated value gets displayed only if new is set to true]
User.findOneAndUpdate({name:"Rahul"},{age:25},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// User.deleteMany({name:"Rahul"})
// .then((res)=>{
//     console.log("Deletion successfull!");
// })
// .catch((err)=>{
//      console.log("Some Error!");
// });

// Deletion by Id
User.findByIdAndDelete("6814ca701a0cb1239afaf6c7")
.then((res)=>{
    console.log("Deleted Successfully!");
})
.catch((err)=>{
    console.log("Some error!");
});