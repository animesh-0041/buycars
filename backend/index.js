const express=require('express')
require('dotenv').config()
const { connection } = require('./db')
const app=express()
app.use(express.json())



app.listen(process.env.PORT||3001,async()=>{
    try {
        await connection
        console.log('connected to mongoDB');
    } catch (error) {
        console.log(error);
    }
    console.log(`server runing at ${process.env.PORT || 3001}...`);
})