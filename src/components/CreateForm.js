import { useState } from 'react'
import * as formAPI from "../utilities/form-api";
import { useNavigate } from 'react-router-dom'



export default function CreateForm() {
    const navigate = useNavigate()
    const [trainingPlanData, setTrainingPlanData] = useState({
        distance: "",
        duration: "",
      workoutType: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userTrainingPlanData = {
    
              distance: trainingPlanData.distance,
              duration: trainingPlanData.duration,
              workoutType: trainingPlanData.workoutType}

              console.log(userTrainingPlanData);
              const trainingPlan = await formAPI.sendForm(userTrainingPlanData)
              console.log(trainingPlan);
              navigate('/saved')
          } catch (error) {
              console.error(error)
          }
      }
      
      const handleChange = (e) => {
          setTrainingPlanData({...trainingPlanData, [e.target.name] : e.target.value, error: ''}) 
      }
      
        return (
            <div>
              <div className="form-container">
              <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>

                <label>  Workout Type:  </label>
           <input type="text" name="workoutType" value={trainingPlanData.workoutType} onChange={handleChange} />
   
    
        <label> Distance (in miles): </label>
          <input type="number" name="distance" value={trainingPlanData.distance} onChange={handleChange} />
    
       
        <label> Duration (in minutes):  </label>
          <input type="number" name="duration" value={trainingPlanData.duration} onChange={handleChange} />
       
        
         <button type="submit">Create Workout</button>
                </form>
            </div>
    </div>
  );
}
