import { useState } from 'react';
import { set} from 'mongoose';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TrainingPlan from './pages/TrainingPlanPage';
import Workout from './pages/WorkoutPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            
            <Route path="/training-plan" element={<TrainingPlan />} />
          
            <Route path="/workout" element={<Workout />} />

          {/* <Route path='/*' element={<Navigate to='/home' />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
