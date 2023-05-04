const express = require('express');
const router = express.Router();
const trainingPlanCtrl = require('../../controllers/api/trainingPlans');


router.get('/saved', trainingPlanCtrl.allTrainingPlan)
router.get('/:id', trainingPlanCtrl.getTrainingPlan)

router.post('/', trainingPlanCtrl.createTrainingPlan);


router.put('/trainingplan/edit/:id',trainingPlanCtrl.editTrainingPlan);

router.delete('/trainingplan/delete', trainingPlanCtrl.deleteTrainingPlan);

module.exports = router;
