import { useState, useEffect } from "react";
import * as formAPI from "../utilities/form-api";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
    //setForm data here
    const [editedData, setEditedData] = useState({
        distance: "",
        duration: "",
      workoutType: "",
    });
  
    const { id } = useParams();
  //   console.log(id);
    //id of the  i need to edit
  
    //* UseEffect -> calls get function -> pass id -> data comes back and puts into state, form reads from state
    useEffect(function () {
      async function getTrainingPlan() {
        const trainingPlanData = await formAPI.getTrainingPlanById(id);
        setEditedData(trainingPlanData);
      }
      getTrainingPlan();
  
      console.log('effecting');
    }, [id]);
  
    //to edit
    const handleEdit = async (e, trainingPlan) => {
      e.preventDefault();
      try {
        console.log(trainingPlan);
        const editedData = await formAPI.editTrainingPlan(id, trainingPlan);
        console.log(editedData);
        setEditedData(editedData);
        navigate('/saved')
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={(e) => handleEdit(e, editedData)}>
            
    
              <label>Distance: </label>
              <input
                type="number"
                name="distance"
                value={editedData.distance}
                onChange={(e) =>
                  setEditedData({ ...editedData, distance: e.target.value })
                }
              />
    
              <label>Duration:</label>
              <input
                type="number"
                name="duration"
                value={editedData.duration}
                onChange={(e) =>
                  setEditedData({ ...editedData, duration: e.target.value })
                }
              />
    
              <label>workout Type:</label>
              <input
                type="text"
                name="workoutType"
                value={editedData.workoutType}
                onChange={(e) =>
                  setEditedData({ ...editedData, workoutType: e.target.value })
                }
              />
    
             
              <button type="submit" >Submit Edit</button>
    
            </form>
          </div>
        </div>
      );
    }
    
    export default Edit;