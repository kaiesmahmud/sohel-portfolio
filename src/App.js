import React from 'react';

//Pages
import { About, ContactMe, Experience, Gigs, Home, Projects } from './pages';
//Components
import { Navbar } from './component';
//icons
import {BsWhatsapp} from 'react-icons/bs'
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
         {/* Whatsapp link  */}
        <div style={{color:'green'}} className=" fixed bottom-5 right-5 md:bottom-10 md:right-10 text-[30px] rounded-[50%]  bg-white p-4 shadow-2xl"> 
          <a href='https://wa.link/gk6d1r' target={'_blank'} rel="noreferrer " >
            <BsWhatsapp />
          </a>
          <div className=' absolute top-[5%] right-[5%] w-3 h-3 bg-red-500 rounded-[50%]  animate-ping duration-[5s]'> </div>
        </div>
      
    </div>
  );
}

export default App;
