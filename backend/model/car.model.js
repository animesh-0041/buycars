const mongoose=require("mongoose")

const carSchema=mongoose.Schema({
    modelName:{type:String,required:true},
    year:{type:String,required:true},
    priceNew:{type:String,required:true},
    milage:{type:String,required:true},
    power:{type:String,required:true},
    maxspeed:{type:String,required:true},
})
const CarModel=mongoose.model("OEM_space",carSchema)
module.exports={
    CarModel
}