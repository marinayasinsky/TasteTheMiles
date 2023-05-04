import { useState, useEffect } from "react";
import * as formAPI from "../utilities/form-api";
import { useNavigate } from "react-router-dom";

function SavedPage() {
  const [trainingPlan, setTrainingPlan] = useState([]);
  const navigate = useNavigate();
  //to get all 
  useEffect(function () {
    async function getTrainingPlan() {
      const trainingPlan = await formAPI.getTrainingPlan();
      setTrainingPlan(trainingPlan);
    }
    getTrainingPlan();
  }, []);

  //to delete 
  const handleSubmit = async (e, trainingPlans) => {
    e.preventDefault();
    try {
      const deletedTrainingPlan = await formAPI.deleteTrainingPlan(trainingPlans._id);
      console.log(deletedTrainingPlan);
      const trainingPlan = await formAPI.getTrainingPlan();
      setTrainingPlan(trainingPlan);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Training Plans</h1>
      <button>
        <a href="/create" id="link-new">Add Workout</a>
      </button>
      {trainingPlan.map((trainingPlan) => {
        return (
          <div key={trainingPlan._id} id="trainingPlan">
            <h1>
              {trainingPlan.trainingPlanName}
            </h1>
            <ul>
            <span><strong>Distance:</strong> {trainingPlan.distance}</span>
            <br/>
           <span><strong>Duration:</strong> {trainingPlan.duration}</span>
            <br/>
           <span><strong>Workout Type:</strong> {trainingPlan.workoutType}</span>
              
            </ul>
            <button
              type="submit"
              value="DELETE"
              onClick={(e) => handleSubmit(e, trainingPlan)}
            >
              Delete 
            </button>

            <button
              type="submit"
              value="PUT"
              onClick={() => navigate(`/edit/${trainingPlan._id}`)}
            >
              Edit
            </button>
            <hr/>
          </div>
        );
      })}
    </div>
  );
}

export default SavedPage;