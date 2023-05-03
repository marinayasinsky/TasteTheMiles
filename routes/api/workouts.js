const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');


//GET route to fetch all workouts for the logged-in user
router.post('/', workoutCtrl.create);

router.get('/workouts', workoutCtrl.view);

router.post('/workouts/edit', workoutCtrl.editWorkout);

router.post('/workouts/delete', workoutCtrl.deleteWorkout);


module.exports = router;
