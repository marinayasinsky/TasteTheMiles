import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as workoutAPI from '../../src/utilities/workout-api';

function TrainingPage() {
  const [workoutLogs, setWorkoutLogs] = useState([]);


  useEffect(function () {
    async function fetchWorkoutLogs() {
      const workoutLogs = await workoutAPI.view();
      setWorkoutLogs(workoutLogs);
    }
    fetchWorkoutLogs();
  }, [])

//  try {
//     const workoutLogs = await workoutAPI.view();
//     console.log(workoutLogs);
//     setWorkoutLogs(workoutLogs);
//   } catch (error) {
//     console.log("error")
//   }
// };

  return (
    <div>
      <h1>Training Weekly Plan</h1>
      {workoutLogs.map((workoutLog)  => {
        console.log(workoutLog)
        return (
          <div key={workoutLog._id}>
          Workout Details: 
          <nav>
          <a href={`/workouts/${workoutLog._id}`}>{' '}{workoutLog.distance  }</a>
          </nav> 
          {workoutLog.createdAt}
          <nav>
          <a href={`/workouts/${workoutLog._id}/edit`}>Edit</a>
          </nav>
          </div>
        )
      })}

    </div>
  ) 
}

export default TrainingPage;
