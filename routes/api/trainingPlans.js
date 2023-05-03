const express = require('express');
const router = express.Router();
const trainingPlansCtrl = require('../../controllers/api/trainingPlans');


// Routes for Training Plans


router.post('/', trainingPlansCtrl.create);

router.get('/training-plan', trainingPlansCtrl.view);

router.post('/training-plan/edit',trainingPlansCtrl.editWorkout);

router.post('/training-plan/delete', trainingPlansCtrl.deleteWorkout);

module.exports = router;
