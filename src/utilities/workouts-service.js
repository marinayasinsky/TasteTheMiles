const BASE_URL = '/api/workouts';

async function getWorkout(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

async function updateWorkout(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function deleteWorkout(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

export { getWorkout, updateWorkout, deleteWorkout };
