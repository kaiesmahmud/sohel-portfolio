import React from 'react';

//Pages
import { About, ContactMe, Experience, Gigs, Home, Projects } from './pages';
//Components
import { Navbar } from './component';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App text-[#D7CEA7]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gigs' element={<Gigs/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>

      </Routes>

    </div>
  );
}

export default App;
