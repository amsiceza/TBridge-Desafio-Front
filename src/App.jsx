import React from 'react'
import './App.scss'
import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Events from './pages/events/Events';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerIsma" element={<RegisterIsma />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
