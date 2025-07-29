import React from 'react';
import {Route} from 'react-router-dom'
import { Navigate, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler'; //its showing me as an error but i dont know whats wrong here, can anyone guide me ???

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/> 
  <Routes>
    <Route path = '/' element = {<Navigate to="/login" />} />
    <Route path = 'login' element = {<Login />} />
    <Route path = 'signup' element = {<Signup />} />
    <Route path = 'home' element = {<PrivateRoute element={<Home />}/>} /> 
  </Routes>    

</div>
  );
}

export default App;
