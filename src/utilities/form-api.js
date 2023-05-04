const BASE_URL = '/api/trainingPlans';

export function sendForm(userTrainingPlanData){
  return sendRequest(`${BASE_URL}/create`, 'POST', userTrainingPlanData)
}

export function getTrainingPlan(){
return sendRequest(`${BASE_URL}/saved`, 'GET')
}

export function deleteTrainingPlan(id){
return sendRequest(`${BASE_URL}/saved/${id}`, "DELETE")
}

export function editTrainingPlan(id, editedData){
return sendRequest(`${BASE_URL}/edit/${id}`, "PUT", editedData)
}

export function getTrainingPlanById(id){
return sendRequest(`${BASE_URL}/${id}`)
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

    if (!res.ok) throw new Error('Bad Request');
    const json = await res.json();
    return json;
  }