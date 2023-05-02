const BASE_URL = '/api/workouts';

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch workouts: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function getWorkout(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

async function updateWorkout(id, data) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', data);
}

async function deleteWorkout(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export { getWorkout, updateWorkout, deleteWorkout };
