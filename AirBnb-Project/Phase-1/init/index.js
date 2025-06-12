const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
.then(()=>{
    console.log("Connected!");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// Initialisation
const initDb = async()=>{
    await Listing.deleteMany({}); // To delete any previous saved data from DB
    await Listing.insertMany(initData.data);
};
initDb();