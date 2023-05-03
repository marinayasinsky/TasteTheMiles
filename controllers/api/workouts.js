//* create
async function create(req, res) {
  try {
    // creating a new workout
    const workout = await Workout.create(req.body);
    res.json(workout);

  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

//* view
async function view(req, res) {
  try {
    const workoutLogs = await Workout.find();
    res.status(200).json(workoutLogs);

  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
}

//* update
async function editWorkout(req, res) {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true });
    res.json(workout);

  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

//*delete
// You didn't include a delete function, so I added one below:
async function deleteWorkout(req, res) {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndDelete(id);
    res.json(workout);

  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

module.exports = {
  create,
  view,
  editWorkout,
  deleteWorkout
};
