const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=> console.log("Connection Successful!"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
}

// Schema
const userSchema = new Schema({
    username: String,
    addresses: [
        {
        _id: false, //To stop the unique id for each field of object
        location : String, city: String
    },
    ],
});

// Model
const userModel = mongoose.model("userModel",userSchema);

const  adduser  = async()=>{
    let userOne = new userModel(
        {
            username : "Nithin K",
            addresses : [{
                location: "Goa Islands",
                city : "Goa",
            }],
        });
     userOne.addresses.push({location: "Thailand Beach", city: "Thailand"});
     let result = await userOne.save();
    console.log(result);
    };

adduser();



