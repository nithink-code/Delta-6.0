const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Connection successful!");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


// Create schema
const books = new mongoose.Schema({
     title:{
        type: String,
        required: true
     },
     name:{
        type: String,
     },
     price:{
        type: Number,
        default:0,
        max:[1,"Price is too low for Amazon shoping."]
     },
     category:{
        type: String,
        enum: ['Mercedes','Benz'] // It is a validator used to check whether element is in the enum or not.
     }
});

// Create Model
const book = mongoose.model("book",books);

// Updations
book.findByIdAndUpdate("6817667b9366793d0770c42c",
    {price: 1500},
    {runValidators: true} // It will validate the database even after the updations [to check whether rules are met in schema].
)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});



const book1 = new book({
      title: "Power of Subconsious Mind",
      name: "Author",
      price: 1200,
      category:'Mercedes'
});

const book2 = new book({
    title: "Power of Habits",
    name: "Author-1",
    price: 1500,
});

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// book2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


