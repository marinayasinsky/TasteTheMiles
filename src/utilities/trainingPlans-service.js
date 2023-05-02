const BASE_URL = '/api/trainingPlans';

async function getAllTrainingPlans() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch training plans: ${response.status} ${response.statusText}`);
  }
  const trainingPlans = await response.json();
  return trainingPlans;
}

async function getTrainingPlan(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch training plan: ${response.status} ${response.statusText}`);
  }
  const trainingPlan = await response.json();
  return trainingPlan;
}

async function createTrainingPlan(trainingPlanData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trainingPlanData),
  });
  if (!response.ok) {
    throw new Error(`Failed to create training plan: ${response.status} ${response.statusText}`);
  }
  const trainingPlan = await response.json();
  return trainingPlan;
}

async function updateTrainingPlan(id, trainingPlanData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trainingPlanData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update training plan: ${response.status} ${response.statusText}`);
  }
  const trainingPlan = await response.json();
  return trainingPlan;
}

async function deleteTrainingPlan(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete training plan: ${response.status} ${response.statusText}`);
  }
  const deletedTrainingPlan = await response.json();
  return deletedTrainingPlan;
}

export {
  getAllTrainingPlans,
  getTrainingPlan,
  createTrainingPlan,
  updateTrainingPlan,
  deleteTrainingPlan,
};
