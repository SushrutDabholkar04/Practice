const workoutModel = require('../Models/workoutModel')
const Workout=require('../Models/workoutModel')
    const mongoose=require('mongoose')
//get all workouts
const getWorkouts= async (req,res)=>{
    const workouts=await Workout.find({}).sort({createdAT:-1})
    res.status(200).json(workouts)
}
//get a single workout  
const getWorkout=async(req,res)=>{  
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id )){
        return res.status(404).json({error:'no such Workout'})
    }
    const workout=await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}

//Create a new Workout
const createWorkout=async (req,res)=>{
      //integrating schema with post request using req.body
      const {title,reps,load}=req.body
      try{
          const workout= await Workout.create({title,reps,load})
          res.status(200).json(workout)
      }
      catch(error){
         res.status(400).json({error:error.message})
      }
     
}



//delete a workout
const deleteWorkout = async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id )){
        return res.status(404).json({error:'no such Workout'})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}

//Update a Workout

const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id )){
        return res.status(404).json({error:'no such Workout'})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{...req.body})
    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports={
    getWorkouts,
    getWorkout,
 createWorkout,
 deleteWorkout,
 updateWorkout
    
}

