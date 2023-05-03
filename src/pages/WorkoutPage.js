import React, { useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import { useNavigate } from 'react-router-dom';

function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (workout) => {
    setWorkouts([...workouts, workout]);
    navigate('/training', { state: { newWorkout: workout } });
  };

  return (
    <div>
      <WorkoutForm onSubmit={handleSubmit} />
    </div>
  );
}

export default WorkoutPage;
