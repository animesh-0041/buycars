const express=require('express')
require('dotenv').config()
const cors = require('cors')
const { connection } = require('./db')
const { userRoute } = require('./route/user.route')
const { carRoutes } = require('./route/car.route')
const { inventoryRoute } = require('./route/inventory.route')
const app=express()
app.use(express.json())



app.use(cors())

app.use('/api',userRoute)
app.use('/car',carRoutes)
app.use('/inventory',inventoryRoute)


app.listen(process.env.PORT||3001,async()=>{
    try {
        await connection
        console.log('connected to mongoDB');
    } catch (error) {
        console.log(error);
    }
    console.log(`server runing at ${process.env.PORT || 3001}...`);
})