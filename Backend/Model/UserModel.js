const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{ type:String, required:true},
    email:{type:String, require:true, unique:true},
    password:{type:String},
    graduation:{type:String },
    phone:{type:Number },
},
{
    timestamp:true
})

const User = mongoose.model("User", userSchema);

module.exports = User