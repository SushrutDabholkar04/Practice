const express=require('express')

const router =express.Router()

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../Controllers/workoutController')


//Get all Workouts
router.get('/',getWorkouts)

//Get single Workout

router.get('/:id',getWorkout)

//post a new Workout

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)

module.exports=router   