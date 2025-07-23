const mongoose = require("mongoose");
const chat = require("./models/chat.js");

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


// Used to initialize the database
let allChats = [
    {
        from:"Nithin",
        to: "Rohan",
        message:"Hi Rohan!",
        created_at: new Date()
    },
    {
        from:"Sohan",
        to:"Virat",
        message: "Hi Virat!",
        created_at: new Date()
    },
    {
        from:"Mohan",
        to:"Amit",
        message:"Hi Amit!",
        created_at: new Date()
    }
];

chat.insertMany(allChats);

