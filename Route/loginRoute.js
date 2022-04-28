const {createLogin,getLogin, putLogin, deleteLogin} = require("../Controller/loginController");
const {login} = require("../Controller/userloginController")
const loginmodel = require("../DB/loginDB");
const Route = require("express").Router();
const auth = require("../Middleware/Auth")

Route.post("/insert", async (req,res)=>{
    try 
    {
        const result = await createLogin(req.body);
        if(result.errors)
         {
             res.status(400).json({errors:true,message:result.message})
            }
        res.status(200).json({errors:false,data:result.data})
    
    } 
    catch (error) 
    {
        res.status(400).json({errors:true , message:error.message})
    }
})

Route.post("/login", async (req,res)=>{
    try 
    {
        const result = await login(req.body);
        if(result.errors)
         {
             res.status(400).json({errors:true,message:result.message})
            }
        res.status(200).json({errors:false,data:result.data})
    
    } 
    catch (error) 
    {
        res.status(400).json({errors:true , message:error.message})
    }
})

Route.get("/get",auth , async (req,res)=>{
    try
     {
        const result = await getLogin();
        if(result.errors)
        {
            res.status(400).json({errors:true , message:result.message})
        }
        res.status(200).json({errors:false , data:result.data})
    } 
    catch (error)
     {
        res.status(400).json({errors:true , message:error.message})
    }
})

Route.put("/put/:id" , async (req,res)=>{
    try 
    {
        const id = req.params.id;
        const result = await putLogin(id,req.body)
        if(result.errors)
        {
            res.status(400).json({errors:true , message:result.message})
        }
        res.status(200).json({errors:false , data:result.data})
    } 
    catch (error) 
    {
      res.status(400).json({errors:true , message:error.message})  
    }
})


Route.delete("/delete/:id", async(req,res)=>{
    try 
    {
    const id = req.params.id;
    await deleteLogin(id)
    if(result.errors)
    {
        res.status(400).json({errors:true , message:result.message})
    }
    res.status(200).json({errors:false , data:result.data})
    } 
    catch (error) 
    {
        res.status(400).json({errors:true , message:error.message})
    }
})
module.exports = Route;