import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWorkout, updateWorkout, deleteWorkout } from "../utilities/workouts-service";

function WorkoutPage() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [form, setForm] = useState({});

  // Load workout data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const fetchedWorkout = await getWorkout(id);
      setWorkout(fetchedWorkout);
      setForm(fetchedWorkout);
    };
    fetchData();
  }, [id]);

  // Update the workout data
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateWorkout(id, form);
    setWorkout(form);
  };

  // Delete the workout
  const handleDelete = async () => {
    await deleteWorkout(id);
    setWorkout(null);
  };

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Workout: {workout.name}</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
        </div>
        <div>
          <label>Duration (in minutes):</label>
          <input type="number" value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete}>Delete Workout</button>
    </div>
  );
}

export default WorkoutPage;
