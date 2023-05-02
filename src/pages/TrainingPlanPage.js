import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getTrainingPlan, deleteTrainingPlan,} from '../utilities/trainingPlans-service';
  



function TrainingPlanPage() {
  const [trainingPlan, setTrainingPlan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const trainingPlanData = await getTrainingPlan(id);
      setTrainingPlan(trainingPlanData);
    }
    fetchData();
  }, [id]);

  async function handleDeleteTrainingPlan() {
    await deleteTrainingPlan(id);
    // Redirect to the training plans list page
    window.location = '/training-plans';
  }

  if (!trainingPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{trainingPlan.name}</h2>
      <p>{trainingPlan.description}</p>
      <p>Duration: {trainingPlan.duration}</p>
      <p>Difficulty: {trainingPlan.difficulty}</p>
      <button onClick={handleDeleteTrainingPlan}>Delete Training Plan</button>
    </div>
  );
}

export default TrainingPlanPage;
