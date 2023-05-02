import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
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
            <Route path="/home" element={<Home />} />
            <Route path="/training-plans" element={<TrainingPlan />} />
            <Route path="/workouts" element={<Workout />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
