const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName : {type:String , required:true},
    LastName : {type:String , required:true},
    Email_Id : {type:String , required:true},
    Password : {type:String , required:true},
    CreatedDate : {type:Date , default:Date.now()},
    UpdatedDate : {type:Date , default:Date.now()}
})

module.exports = mongoose.model("login",userSchema)