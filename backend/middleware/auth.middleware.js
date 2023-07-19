const express=require("express")
const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
const token = req.headers.authorization;
if(token){
    try {
        const decoded = jwt.verify(token, 'buyc');
       if(decoded){
            req.body.userID=decoded.userID
        next()
       }

        
    } catch (error) {
        res.send(error)
    }
}
else{
    res.send("Please Login!")
}

}
module.exports={
    auth
}