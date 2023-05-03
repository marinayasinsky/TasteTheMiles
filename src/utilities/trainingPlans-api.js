const BASE_URL = '/api/trainingPlans';

//* Log Training Plan
export function logWorkout(traonData) {
  return sendRequest(BASE_URL, 'POST', workoutData);
}

//* View workouts
export function view() {
  return sendRequest(`${BASE_URL}`);
}

//* Edit workouts
export function editWorkout(workoutData) {
  return sendRequest(`${BASE_URL}/${workoutData}/edit`);
}


//* Delete workouts
export function deleteWorkout(workoutData) {
  return sendRequest(`${BASE_URL}/${workoutData}/delete`);
}


  /*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

// const token = getToken();

//   if (token) {
//     options.headers = options.headers || {};
//     options.headers.Authorization = `Bearer ${token}`;
//   }