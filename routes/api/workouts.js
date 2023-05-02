const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET route to fetch all workouts for the logged-in user
router.get('/', ensureLoggedIn, workoutsCtrl.index);

// POST route to create a new workout for the logged-in user
router.post('/', ensureLoggedIn, workoutsCtrl.createWorkout);

// PUT route to update a workout by its ID
router.put('/:id', ensureLoggedIn, workoutsCtrl.updateWorkout);

// DELETE route to delete a workout by its ID
router.delete('/:id', ensureLoggedIn, workoutsCtrl.deleteWorkout);

module.exports = router;
