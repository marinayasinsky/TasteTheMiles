const express = require('express');
const router = express.Router();
const trainingPlansCtrl = require('../../controllers/api/trainingPlans');


// Routes for Training Plans
router.get('/', trainingPlansCtrl.index);
router.get('/:id', trainingPlansCtrl.getTrainingPlan);
router.post('/', trainingPlansCtrl.createTrainingPlan);
router.put('/:id', trainingPlansCtrl.updateTrainingPlan);
router.delete('/:id', trainingPlansCtrl.deleteTrainingPlan);

module.exports = router;
