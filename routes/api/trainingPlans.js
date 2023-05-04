const express = require('express');
const router = express.Router();
const trainingPlanCtrl = require('../../controllers/api/trainingPlans');



router.get('/saved', trainingPlanCtrl.allTrainingPlan)
router.get('/:id', trainingPlanCtrl.getTrainingPlan)

router.post('/create', trainingPlanCtrl.createTrainingPlan);


router.put('/edit/:id',trainingPlanCtrl.editTrainingPlan);

router.delete('/delete/:id', trainingPlanCtrl.deleteTrainingPlan);

module.exports = router;
