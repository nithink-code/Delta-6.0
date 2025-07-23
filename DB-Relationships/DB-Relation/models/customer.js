const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=> console.log("Connection Successful!"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
}

// Order's Schema
const orderSchema = new Schema({
    item: String,
    price: Number,
});

//Customer's Schema
const customSchema = new Schema({
    name : String,
    orders:[
        {
        type: Schema.Types.ObjectId,
        ref: "Order",
        },
    ]
});

customSchema.pre("findOneAndDelete",async()=>{
    console.log("Pre Middleware Detected!");
});

customSchema.post("findOneAndDelete",async(CustomModel)=>{
    if(CustomModel.orders.length){
        let res = await Order.deleteMany({_id: {$in: CustomModel.orders}});
        console.log(res);
    }
});














// Orders Model
const Order = mongoose.model("Order",orderSchema);

// Customer Model
const CustomModel = mongoose.model("CustomModel",customSchema);

// const custom1 = async()=>{
//     let c1 = new CustomModel({
//         name: "Rahul Kumar",
//     });

//     let ord1 = new Order({
//         item: "Glasses",
//         price: 1600,
//     });

//      c1.orders.push(ord1);
//      await ord1.save();
//      await c1.save();
//     console.log("Succefully Added New Item!");

//     // To store indivual object id's of items
// //    let res = await CustomModel.find({}).populate("orders"); // Populate is used to extract the object from their id's.
// //    console.log(res[0]);
// };

// custom1();

// const obj1 = async()=>{
//     let result = await Order.insertMany([
//         {item: "Apple Earbuds",price: 15000},
//         {item: "Samsung Earbuds",price: 10000},
//     ]);
//     // console.log(result);
// };

// obj1();

// const customTwo = async() =>{
//     let custom2 = new CustomModel({
//         name:"MS Dhoni",
//     });

//     let order2 = new Order({
//         item: "Headphones",
//         price: 1500,
//     });
//     custom2.orders.push(order2);

//     await order2.save();
//     await custom2.save();
//     console.log("Added customer!");
// };
// customTwo();

// To delete the order

const delorder = async()=>{
    let del = await CustomModel.findByIdAndDelete("686d21aa2fe233d250eba890");
    console.log(del);
    console.log("Successfully Deleted!");
};
delorder();