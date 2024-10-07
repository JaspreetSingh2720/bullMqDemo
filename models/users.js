const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    birthdate: Date
})

const Users = mongoose.model("users",userSchema);
module.exports = {Users}
