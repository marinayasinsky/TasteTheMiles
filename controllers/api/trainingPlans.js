const TrainingPlan = require('../../models/training-plan');

const handleResponse = async (res, operation) => {
  try {
    const result = await operation();
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = (req, res) => handleResponse(res, async () => {
  const trainingPlans = await TrainingPlan.find();
  return { status: 200, data: trainingPlans };
});

const createTrainingPlan = (req, res) => handleResponse(res, async () => {
console.log('req.body:', req.body)
req.body.user = req.user._id
  const trainingPlan = await TrainingPlan.create(req.body);
  return { status: 201, data: trainingPlan };
});

const getTrainingPlan = (req, res) => handleResponse(res, async () => {
  console.log("req.params.id: " + req.params.id);
  const trainingPlan = await TrainingPlan.findById(req.params.id);
  return { status: 200, data: trainingPlan };
});

const updateTrainingPlan = (req, res) => handleResponse(res, async () => {
  const trainingPlan = await TrainingPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return { status: 200, data: trainingPlan };
});

const deleteTrainingPlan = (req, res) => handleResponse(res, async () => {
  const deletedTrainingPlan = await TrainingPlan.findByIdAndDelete(req.params.id);
  return { status: 200, data: deletedTrainingPlan };
});

module.exports = {
  index,
  createTrainingPlan,
  getTrainingPlan,
  updateTrainingPlan,
  deleteTrainingPlan,
};
