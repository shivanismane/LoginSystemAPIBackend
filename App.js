const mongoose = require("mongoose");
const login = require("./Route/loginRoute");
require("dotenv/config");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hi")
})

app.use("/login",login);

app.listen(process.env.PORT || 5000);
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Db Connect");
})