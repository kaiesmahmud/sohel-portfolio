import React from 'react';
//icons
import {GiGlobe} from 'react-icons/gi'

const Gigs = () => {
    const gigs = [
        {
            id:1,
            name:'Custom Website Design',
            platforms:['HTML5','CSS3',"Javascript",'Jquery','Bootstrap5','Tailwindcss','Figma UI & wireframe'],
            experience:'I have 2 years of experience in website design fields',
            about:'I will design responsive static website for you. Website will be fully customizable. I use modern css framework for website design. I will also help you with connecting to domain. there is no paid hosting needed for your static website/landing page '
        },
        {
            id:2,
            name:'Frontend Website Development ',
            platforms:['HTML5','CSS3',"Javascript",'React js','React-Bootstrap5','Tailwindcss','Metarial UI','React-router-dom','React-hook-form',"React-Animation",'API Integration',"Firebase-Auth"],
            experience:'I have 1+ years of experience in React website Dev fields',
            about:'I will design responsive static/dynamic reactjs website for you. Website will be fully customizable. I use modern reactjs framework for complex website frontend. I will also help you with connecting to domain. there is no paid hosting needed for your static website/landing page '
        },
        {
            id:4,
            name:'JavaScript Development',
            platforms:['Vanilla Js','Node js',"Express js",'Payment Gateway','API',"Authentication",'Google Auth','Crypto js','NoSQL Database',"MongoDB",'Mongoose','Custom Funcitions','Axios','fetch API','CRUD Operations','Bug Fixing'],
            experience:'I have 2+ years of experience in Javascript',
            about:'I will connect frontend and backend with Javascript. Methods will be fully customizable. I will fix website bugs in website '
        },
        {
            id:3,
            name:'Backend Development',
            platforms:['Vanilla Js','Node js',"Express js",'cors','body-parser','Payment Gateway','API',"Authentication",'Google Auth','Crypto js','NoSQL Database',"MongoDB",'Mongoose','CRUD Operations'],
            experience:'I have 1+ years of experience in website backend dev fields',
            about:'I will develop website backend for you. backend will be fully nodejs. I use latest versions of node modules for website backend. '
        },
        {
            id:5,
            name:'Website Re-organize',
            platforms:['HTML5','CSS3',"Javascript",'React js','React-Bootstrap5','Tailwindcss','Metarial UI','React-router-dom','React-hook-form',"React-Animation",'API Integration',"Firebase-Auth",'Vanilla Js','Node js',"Express js",'cors','body-parser','Payment Gateway','API',"Authentication",'Google Auth','Crypto js','NoSQL Database',"MongoDB",'Mongoose','CRUD Operations'],
            experience:'I have 1+ years of experience in website backend dev fields',
            about:'I will redesign your website. I will fix all the previous bugs/errors. I use latest technologis for website redesign. '
        },
        {
            id:6,
            name:'Full Stack Website Design and Dev',
            platforms:['HTML5','CSS3',"Javascript",'React js','React-Bootstrap5','Tailwindcss','Metarial UI','React-router-dom','React-hook-form',"React-Animation",'API Integration',"Firebase-Auth",'Vanilla Js','Node js',"Express js",'cors','body-parser','Payment Gateway','API',"Authentication",'Google Auth','Crypto js','NoSQL Database',"MongoDB",'Mongoose','CRUD Operations'],
            experience:'I have 1+ years of experience in website backend dev fields',
            about:'I will create your website from scratch. I will do all the development with MERN Stack Technology. I use latest technologis for website development. '
        },
        
    ]
    return (
        <div className='m-10 lg:m-20 p-5 flex flex-wrap justify-center items-center gap-5'>
            {
                gigs.map(ob=>(
                    <div key={ob.id} className=' border p-5 w-[100%] lg:w-[40%] rounded bg-slate-900 hover:bg-black transition-all ease-in duration-300'>
                        <div className='flex justify-start gap-5 items-center pb-5'>
                            <div className='text-3xl lg:text-5xl'><GiGlobe/></div>
                            <h1 className='text-xl lg:text-2xl font-light'>{ob.name}</h1>
                        </div>
                        <div>
                            <p className='font-light opacity-80'> <span className='font-semibold'>Experience: </span>
                            {ob.experience}     
                            </p>
                            <div className='text-xs my-2 font-extralight flex flex-wrap items-center gap-2 '>
                                {
                                    ob?.platforms.map(ob=>
                                    <div className='text-xs rounded px-2 py-1 bg-black hover:border bg-opacity-70'>{ob}</div>)
                                }
                            </div>
                            <p className='font-extralight opacity-80'>
                            {ob.about}     
                            </p>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Gigs;