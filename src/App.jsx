import React from 'react'
import './App.scss'
import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import { Home } from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import EventOne from './pages/eventOne/eventOne';




function App() {
  // const { pathname } = useLocation();

  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        {/* {pathname !== '/login' && pathname !== '/registerIsma' && <Header />} */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerIsma" element={<RegisterIsma />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} /> 
          <Route path="/events/:id" element={<EventOne />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
