const mongoose = require("mongoose");

//Schema 

const newSchema = new mongoose.Schema({
    from:{
        type: String,
        require: true
    },
    to:{
        type: String,
        require: true
    },
    message:{
        type: String,
        maxLength: 100
    },
    created_at:{
        type: Date
    }
});

// Model
const chat = mongoose.model("chat",newSchema);

// Export
module.exports = chat;