const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { UserModel } = require("../model/user.model");
const userRoute = express.Router();


//signup
userRoute.post('/signup',async(req,res)=>{
    const {email,password}=req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
           const user=new UserModel({email,password:hash})
           await user.save()
           res.send("Account Created")
        });
        
    } catch (error) {
     res.send(error)   
    }
})

//login
userRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body

    try {
        const user=  await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, function (err, result) {
                if(result){
                    const token = jwt.sign({userID: user._id}, "buyc");
                    res.send({"msg":"Login Succesfull","token":token,"UserID":user._id})
                }
                else{
                    res.send({"msg":"Invalid caredential"})
                }
            })
        }
        else{
            res.send({"msg":"Invalid caredential"})
        }
        
    } catch (error) {
        res.send(error)
    }
})




module.exports={
    userRoute
}
