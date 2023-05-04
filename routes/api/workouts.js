const express = require('express');
const router = express.Router();



//GET route to fetch all workouts for the logged-in user
router.post('/templates', workoutCtrl.createWorkout);

// router.get('/workouts', workoutCtrl.view);

// router.post('/workouts/edit/:id', workoutCtrl.editWorkout);

// router.post('/workouts/delete', workoutCtrl.deleteWorkout);


module.exports = router;
