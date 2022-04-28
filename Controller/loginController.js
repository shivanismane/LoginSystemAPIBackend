const userSchema = require("../DB/loginDB")
const bcrypt = require("bcrypt")



exports.createLogin = async (user)=>{
    try 
    {
        const emailExist = await userSchema.findOne({Email_Id:user.Email_Id});
        if(emailExist)
        {
            return {errors:true , message:"Email Already exist"}
        }
        
        else
        {
        let salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(user.Password,salt)
        const users = await new userSchema(
            {
                firstName:user.firstName , 
                LastName:user.LastName , 
                Email_Id:user.Email_Id , 
                Password:encryptedPassword
            });
        const data = await users.save();
        return {errors:false , data:data}
        }
    } 
    catch (error) 
    {
        return({errors:true , message:error.message})
    }
}

exports.getLogin = async ()=>{
    try
     {
       const data = await userSchema.find();
       return ({errors:false , data:data})
        } 
    catch (error) 
    {
        return({errors:true , message:error.message})
    }
}

exports.putLogin = async (id,user)=>{
    try 
    {
        const data = await userSchema.findByIdAndUpdate(id,user,{new:true})
        return({errors:false , data:data})
    } 
    catch (error) 
    {
        return({errors:true , message:error.message})
    }
}

exports.deleteLogin = async (id)=>{
    try
     {
        await userSchema.findByIdAndDelete(id)
        return({errors:false , data:"data deleted successfully"})
    }
    
    catch (error) 
    {
        return({errors:true , message:error.message})
    }
}