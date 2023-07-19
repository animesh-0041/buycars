const express=require("express")
const { InventoryModel } = require("../model/inventory.model")
const { auth } = require("../middleware/auth.middleware")

const inventoryRoute=express.Router()




inventoryRoute.get("/",async(req,res)=>{
    const {model}=req.query

    try {
       if(model){

        const car=await InventoryModel.findOne({modelName:model})
        res.send(car)
       }
       else{
        const car=await InventoryModel.find()
     res.send(car)
    }
     
        
        
    } catch (error) {
     res.send(error)   
    }
})
inventoryRoute.use(auth)
inventoryRoute.post("/",async(req,res)=>{
    
    try {
       
        const car=new InventoryModel(req.body)
        await car.save()
     res.send("car added successfull")
        
    } catch (error) {
     res.send(error)   
    }
})


module.exports={
    inventoryRoute
}