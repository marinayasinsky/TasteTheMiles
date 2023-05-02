import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as trainingPlansService from '../utilities/trainingPlans-service';
import { getTrainingPlan, deleteTrainingPlan } from '../utilities/trainingPlans-service';


  



function TrainingPlanPage() {
  const [trainingPlan, setTrainingPlan] = useState(null);
  const { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    async function fetchData() {
      try {
        const trainingPlanData = await getTrainingPlan(id);
        console.log('Fetched training plan data:', trainingPlanData);
        setTrainingPlan(trainingPlanData);
      } catch (error) {
        console.error('Error fetching training plan data:', error);
      }
    }
    fetchData();
  }, [id]);

  async function handleDeleteTrainingPlan() {
    await deleteTrainingPlan(id);
    // Redirect to the training plans list page
    window.location = '/trainingplan';
  }

  if (!trainingPlan) {
    return <div>Loading...</div>;
  }

  return (
    
    <div > 
      <container>
      <h2>{trainingPlan.name}</h2>
      <p>{trainingPlan.description}</p>
      <p>Duration: {trainingPlan.duration}</p>
      <p>Difficulty: {trainingPlan.difficulty}</p>
      <button onClick={handleDeleteTrainingPlan}>Delete Training Plan</button>
      </container>
    </div>
  );
}

export default TrainingPlanPage;
