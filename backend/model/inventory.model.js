const mongoose=require("mongoose")

const inventorySchema=mongoose.Schema({
    modelName:{type:String},
    year:{type:String},
    priceNew:{type:String},
    milage:{type:String},
    power:{type:String},
    maxspeed:{type:String},
    kmOdometer:{type:String},
    majorScratch:{type:String},
    NumberOfAccident:{type:String},
    NumberofpreviousBuyers:{type:String},
    ragistrationPlace:{type:String}
})
const InventoryModel=mongoose.model("marketplace_inventory",inventorySchema)
module.exports={
    InventoryModel
}