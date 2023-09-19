import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './layout/Home'
import Dashboard from './layout/Dashboard'
import Navbar from "./components/Navbar";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </React.Fragment >
  );
}

export default App;
