const  express  = require("express")
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt')
const { UserModel } = require ("../models/userModel");

const router =express.Router();

router.post("/register",async(req,res)=>{
    const {username,password}=req.body;

    const user= await UserModel.findOne({username});
    if(user){
        return res.json({"message":"user already exists"})
    }
   const encripted=await bcrypt.hash(password,10)
    const newUser=new UserModel({username,password:encripted})
    await newUser.save()

    res.json({"message":"created"});
})


router.post("/login",async(req,res)=>{
    const {username,password} =req.body
    const user=await UserModel.findOne({username})
    if(!user){
        res.json({"message":"User does not exists"})
    }
     
      const validpassword= await bcrypt.compare(password,user.password)

      if(!validpassword){
        return res.json({"message":"username does not exists"})
      }
      const token=jwt.sign({id:user._id},"secret")
      res.json({token,userid:user._id})
     
     

})














module.exports={router}