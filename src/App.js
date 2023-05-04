import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import TrainingPlanPage from './pages/TrainingPlanPage';
import HomePage from './pages/HomePage.js'
import SavedPage from './pages/SavedPage';
import EditPage from './pages/EditPage';

import { getUser } from './utilities/users-service';

import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/home' element={ <HomePage /> }/>
        <Route path='/create' element={ <TrainingPlanPage /> }/>
        {/* <Route path='/trainingPlans' element={ <TrainingPlanPage /> }/> */}
        <Route path = '/saved'element= {<SavedPage/>}/>
        <Route path = '/edit/:id'element= {<EditPage/>}/>
       
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;