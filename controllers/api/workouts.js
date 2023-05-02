const Workout = require('../../models/Workout');

const handleResponse = async (res, operation) => {
  try {
    const result = await operation();
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = (req, res) => handleResponse(res, async () => {
  const workouts = await Workout.find({ user: req.user.id });
  return { status: 200, data: workouts };
});

const createWorkout = (req, res) => handleResponse(res, async () => {
  const workout = await Workout.create(req.body);
  return { status: 201, data: workout };
});

const updateWorkout = (req, res) => handleResponse(res, async () => {
  const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return { status: 200, data: updatedWorkout };
});

const deleteWorkout = (req, res) => handleResponse(res, async () => {
  const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
  return { status: 200, data: deletedWorkout };
});

module.exports = {
  index,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
