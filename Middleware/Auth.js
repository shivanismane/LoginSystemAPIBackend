const JWT = require("jsonwebtoken")

// const Route = require("express").Router();
// module.exports = Route;

const auth = async (req,res,next)=>{
try
 {
    const token = req.header("auth");
    const verifyUser = await JWT.verify(token,process.env.SEC)
    if(!verifyUser)
    {
        res.status(400).json({message:"invalid token"})
    }
    next();
}
 catch (error) 
 {
    res.status(400).json({message:error.message})
}
} 

module.exports = auth;