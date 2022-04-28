const userSchema  = require("../DB/loginDB");
// jsonwebtoken package
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt")
exports.login = async (user)=>{
     try
      {          
        const users = await userSchema.findOne({Email_Id:user.Email_Id});
        if(!users)        
        {
            return {errors:true , message:"email or password is invalid"}
        }
        const passwordExist = await bcrypt.compare(user.Password,users.Password)
        if(!passwordExist)
        {
            return {errors:true , message:"email or password is invalid"}
        }
        const token = await JWT.sign({_id:users._id} , process.env.SEC)
        return {errors:false , data:{token:token , user:users}}
     } 
     catch (error) 
     {
         return {errors:true , message:error.message}
     }
}