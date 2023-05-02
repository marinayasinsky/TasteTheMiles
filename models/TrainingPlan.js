const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingPlanSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fitnessLevel: { type: String, required: true },
  targetMarathonTime: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  weeks: [
    {
      weekNumber: { type: Number, required: true },
      workouts: [
        {
          workoutType: { type: String, required: true },
          distance: { type: Number, required: true },
          duration: { type: Number, required: true },
          dayOfWeek: { type: String, required: true },
        },
      ],
    },
  ],
}, {
  timestamps: true,
});

const TrainingPlan = mongoose.model('TrainingPlan', trainingPlanSchema);

module.exports = TrainingPlan;
