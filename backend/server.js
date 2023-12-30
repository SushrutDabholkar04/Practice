const express =require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()

app.use(express.json())

const workoutRoutes=require('./Routes/workouts')
// const { default: App } = require('../frontend/src/App')
app.use((req,res,next)=>{
    console.log(req.path,res.method)
    next()
})


mongoose.connect(process.env.MONG_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Listening on port",process.env.PORT)
       })
})
.catch((error)=>console.log(error ))

app.use('/api/workouts',workoutRoutes)  















