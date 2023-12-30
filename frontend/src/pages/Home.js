import { useEffect,useState } from "react"

const Home=()=>{

const [workouts,setWorkouts]=useState(null)
    //useEffect is used to fire a function when the component is rendererd(current user interface)
    useEffect(()=>{
const fetchWorkouts=async()=>{
   const response=await fetch('http://localhost:5000/api/workouts/')
   const json=await response.json()
   //we will check if the response is working or not using conditionals
if(response.ok){
    setWorkouts[json]
}

}
fetchWorkouts()
    },[])
    // we use [] since we want it to render only once
    return(
        <div className="home">

            <div className="workouts">
                {
                    workouts && workouts.map((workout)=>(
                        <p key={workout._id}>{workout.title}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Home