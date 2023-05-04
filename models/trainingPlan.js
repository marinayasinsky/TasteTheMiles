const mongoose = require('mongoose');



const trainingPlanSchema = new mongoose.Schema({

        
          workoutType: { type: String, required: true },
          distance: { type: Number, required: true },
          duration: { type: Number, required: true },
        
     
}, {
  timestamps: true,
});

const TrainingPlan = mongoose.model('TrainingPlan', trainingPlanSchema);

module.exports = TrainingPlan;
