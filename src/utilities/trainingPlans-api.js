import { getToken } from "./users-service";

const BASE_URL = '/api/trainingPlans';

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
  
async function getAllTrainingPlans() {
  return sendRequest(BASE_URL);
}
  
async function getTrainingPlan(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
  
async function createTrainingPlan(trainingPlanData) {
  return sendRequest(BASE_URL, 'POST', trainingPlanData);
}
  
async function updateTrainingPlan(id, trainingPlanData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', trainingPlanData);
}
  
async function deleteTrainingPlan(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
  
export {
  getAllTrainingPlans,
  getTrainingPlan,
  createTrainingPlan,
  updateTrainingPlan,
  deleteTrainingPlan,
};
