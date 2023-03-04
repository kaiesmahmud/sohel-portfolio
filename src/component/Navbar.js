import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//icons
import {VscClose} from 'react-icons/vsc';
import {HiBars2} from 'react-icons/hi2';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const changeOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <header className=" sticky top-0  App-header px-5 py-3 lg:py-0 text-xs md:text-base lg:text-lg backdrop-blur-3xl z-30">
                <nav className=' flex flex-col gap-4 lg:flex-row justify-between items-center mx-2 md:mx-10 lg:mx-20  '>
                    <div className='text-[2rem] lg:text-[3rem] font-extralight flex justify-between w-full'>
                        <NavLink to={'/'} onClick={()=>setOpenMenu(false)}>
                        <p className='p-2'>N</p>
                        </NavLink>
                        <div className='text-3xl lg:hidden cursor-pointer' onClick={changeOpenMenu}>
                            {openMenu? <VscClose/> :<HiBars2/>}
                        </div>
                    </div>
                    <div className={`w-full p-5  bg-opacity-40 flex-col lg:flex lg:flex-row bg-black lg:bg-inherit  md:justify-evenly items-center gap-2 ${(openMenu)?"flex":"hidden"} transition-all duration-300`}>
                        <NavLink to={'/about'} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'bg-black rounded':""))}>
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>About</div>
                        </NavLink>
                        <NavLink to={'/gigs'} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'bg-black rounded':""))} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Gigs</div>
                        </NavLink>
                        <NavLink to={'/projects'} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'bg-black rounded':""))} >             
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Projects</div>
                        </NavLink>
                        <NavLink to={'/experience'} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'bg-black rounded':""))} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded'>Experiences</div>
                        </NavLink>
                        <NavLink to={'/contactme'} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'bg-black rounded':""))} >
                            <div className='hover:bg-black transition-all ease-in px-5 py-2 rounded border border-white text-center'>Contact Me</div>
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;