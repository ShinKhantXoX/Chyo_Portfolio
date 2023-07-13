import React from 'react'
import "./App.css";
import {  Route,  Routes } from 'react-router-dom';
import Work from './pages/Work';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Work/>} />
      </Routes>
    </>
  )
}

export default App