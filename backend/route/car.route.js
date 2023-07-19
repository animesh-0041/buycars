const express=require("express")
const { CarModel } = require("../model/car.model")
const carRoutes=express.Router()




carRoutes.get("/",async(req,res)=>{
    const {model}=req.query

    try {
       if(model){

        const car=await CarModel.findOne({modelName:model})
        res.send(car)
       }
       else{
        const car=await CarModel.find()
     res.send(car)
    }
     
        
        
    } catch (error) {
     res.send(error)   
    }
})



module.exports={
    carRoutes
}