import * as workoutsApi from './workouts-api';

const BASE_URL = '/api/workouts';

async function getWorkout(id) {
  return await workoutsApi.getWorkout(id);
}

async function updateWorkout(id, data) {
  return await workoutsApi.updateWorkout(id, data);
}

async function deleteWorkout(id) {
  return await workoutsApi.deleteWorkout(id);
}

export { getWorkout, updateWorkout, deleteWorkout };
