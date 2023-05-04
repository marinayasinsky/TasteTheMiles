const TrainingPlan = require('../../models/trainingPlan');



//create 
async function createTrainingPlan(req, res) {
  try {
    const trainingPlan = await TrainingPlan.create(req.body);
    console.log(trainingPlan);
  } catch (error) {
    console.error(error);
  }
}

//get 
async function getTrainingPlan(req,res){
  try {
    const trainingPlan = await TrainingPlan.findById(req.params.id)
    console.log(trainingPlan);
    res.json(trainingPlan)
  } catch (error) {
    console.error(error)
  }
}

//EDIT 
    async function editTrainingPlan(req,res){
      console.log("sending", req.body);
      try {
        const trainingPlan = await TrainingPlan.findByIdAndUpdate(req.params.id, req.body, {new: true})
        //the mongoose method is not working as expected, it is updating but not returning the updated  right away even with await
        //Now, instead of going through this method, we are getting the freshly made data from getfrom mongo 
    
        // the mongo collection is being updated, but not returning the updated 
        // is findByIdAndUpdate deprecated? im seeing updateOne being used online
        console.log("returning", trainingPlan);
        res.json(trainingPlan)
      } catch (error) {
        console.error(error)
      }
    }

    //delete 
async function deleteTrainingPlan(req,res){
  try {
      const trainingPlan = await TrainingPlan.findByIdAndRemove(req.params.id);
      console.log(trainingPlan + "is deleted");
      res.json(trainingPlan)
  } catch (error) {
      console.error(error)
  }
}

//get all
async function allTrainingPlan(req,res){
try {
    const trainingPlan = await TrainingPlan.find({})
    res.json(trainingPlan)
} catch (error) {
    console.error(error)
}
}

module.exports = {
  createTrainingPlan,
  getTrainingPlan,
  editTrainingPlan,
  allTrainingPlan,
  deleteTrainingPlan,
};
