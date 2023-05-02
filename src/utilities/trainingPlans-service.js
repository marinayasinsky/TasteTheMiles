import * as trainingPlansApi from './trainingPlans-api';

const BASE_URL = '/api/trainingPlans';

async function getAllTrainingPlans() {
  return await trainingPlansApi.getAllTrainingPlans();
}

async function getTrainingPlan(id) {
  return await trainingPlansApi.getTrainingPlan(id);
}

async function createTrainingPlan(trainingPlanData) {
  return await trainingPlansApi.createTrainingPlan(trainingPlanData);
}

async function updateTrainingPlan(id, trainingPlanData) {
  return await trainingPlansApi.updateTrainingPlan(id, trainingPlanData);
}

async function deleteTrainingPlan(id) {
  return await trainingPlansApi.deleteTrainingPlan(id);
}

export {
  getAllTrainingPlans,
  getTrainingPlan,
  createTrainingPlan,
  updateTrainingPlan,
  deleteTrainingPlan,
};
