import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Placement from './components/Placement';
import Campuse from './components/Campuse';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './Layout/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import Students from './components/Students';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Training from './components/Training';
import Update from './operations/Update';
import Admin from './components/Admin';





export default function App() {
  return (
    <>
    
    <BrowserRouter>
      
    
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/campuse" element={<Campuse/>}>Campuses</Route>
        <Route path="/placement" element={<Placement/>}>Placements</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/login" element={<Login/>}>Log In</Route>
        <Route path="/register" element={<Registration/>}>Registreation</Route>
        <Route path="/students" element={<Students/>}>Students</Route>
        <Route path="/jobs" element={<Jobs/>}>Jobs</Route>
        <Route path="/profile" element={<Profile/>}>Profile</Route>
        <Route path="/training" element={<Training/>}>Training</Route>
        <Route path="/update" element={<Update/>}>Update Profile</Route>
        <Route path="/admin" element={<Admin/>}>Admin</Route>
        
       
       
      </Routes>  
    </BrowserRouter>
    
    </>
  );
}
