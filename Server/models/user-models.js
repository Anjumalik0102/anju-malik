const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    phone: {
        type: Number,
        default: null,
    },
    message: {
        type: String,
        required:true,
    },
    
 } ,
{
    timestamps:true
});

const Message = mongoose.model("Message", userSchema);

module.exports = Message;
