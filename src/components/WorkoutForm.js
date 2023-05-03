import React, { useState, useEffect } from 'react';
import { logWorkout } from '../utilities/workouts-api';


function WorkoutForm ({onSubmit}) {
    const [formData, setFormData] = useState({
      distance: "",
      duration: "",
    workoutType: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            console.log(formData)
            // data to be send to the backend to create a new user
            const userData = {
              distance: formData.number,
              duration: formData.minutes,
              workoutType: formData.text,
            }
            // returns a token with the user info
            // const user = await signUp(userData); // user service
            // setUser(user);
      
          } catch (error) {
            setFormData({...formData, error: "Workout Failed - Try Again"})
          }
      };
      
        const handleChange = (evt) => {
          setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
        };
        return (
            <div>
              <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>

                <label>  Workout Type:  </label>
           <input type="text" name="workoutType" value={formData.workoutType} onChange={handleChange} required/>
   
    
        <label> Distance (in miles): </label>
          <input type="number" name="distance" value={formData.distance} onChange={handleChange} required/>
    
       
        <label> Duration (in minutes):  </label>
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} required/>
       
        
         <button type="submit">SUBMIT</button>
                </form>
            </div>

      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default WorkoutForm;