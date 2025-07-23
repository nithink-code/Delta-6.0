// Using Squillions For DB relationship

const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=> console.log("Connection Successful!"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const Userobj = async()=>{
    let user1 = new User({
        username: "Nithin K",
        email: "nithin@gmail.com",
    });

    let post1 = new Post({
        content: "Hello Coders!",
        likes: 1500,
    });
    post1.user = user1;

    let post2 = new Post({
        content: "Welcome Coders!",
        likes: 1800,
    });
    post2.user = user1;

    await user1.save();
    await post1.save();
    await post2.save();
};

Userobj();
