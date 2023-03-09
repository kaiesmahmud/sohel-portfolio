import React from 'react';

//icons
import {DiRaphael} from 'react-icons/di'

const Projects = () => {
    const projects = [
        {
            id:1,
            name:"Digital Marketing ",
            // technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" This a Sample of my Digital Marketing work ",
            // viewLink: '/',
            // githubLink: '/',
            imgs:[
                './project-img/p1.png',
                './project-img/p2.png',
                './project-img/p3.png',
                './project-img/p-4.png',
                './project-img/p-5.png',
            ]
        },
        {
            id:2,
            name:"Search Engine Optimization(SEO)",
            // technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" There are some  sample of  my seo work",
            // viewLink: '/',
            // githubLink: '/',
            imgs:[
                './project-img/p-6.png',
                './project-img/p-7.png',
                './project-img/p-8.png',
                './project-img/p-9.png',
                './project-img/p-10.png',
                './project-img/p-11.png',
                './project-img/p-12.png',
                './project-img/p-13.png',
                './project-img/p-14.png',
                './project-img/p-15.png',
                './project-img/p-16.png',
                './project-img/p-17.png',
                './project-img/p-18.png',
                './project-img/p-19.png',
                './project-img/p-20.png',
                './project-img/p-21.png',
                './project-img/p-22.png',
                './project-img/p-23.png',
                './project-img/p-24.png',
                './project-img/p-25.png',
                './project-img/p-26.png',
            ]
        },
        {
            id:3,
            name:"Social Media Marketing(SMM) Manager",
            // technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" There are some sample of my Social Media Marketing work  ",
            // viewLink: '/',
            // githubLink: '/',
            imgs:[
                './project-img/p-27.png',
                './project-img/p-28.png',
                './project-img/p-29.png',
                './project-img/p-30.png',
                './project-img/p-31.png',
                './project-img/p-32.png',
                './project-img/p-33.png',
                './project-img/p-34.png',
                './project-img/p-35.png',
                './project-img/p-37.png',
                './project-img/p-38.png',
            ]
        }
    ]
    return (
        <div className='m-5 md:m-20 lg:m-0 p-5 flex flex-wrap justify-center items-center gap-6'>
            {
                projects.map(project=>(
                    <div key={project.id} className='shadow-xl overflow-hidden border p-3 w-[90%]  rounded hover:bg-black transition-all ease-in duration-300'>
                        <div className='flex justify-start gap-5 items-center pt-3'>
                            <div className='text-3xl lg:text-5xl'><DiRaphael/></div>
                            <h1 className='text-xl lg:text-2xl font-light'>{project.name}</h1>
                        </div>
                        <div>
                            {/* <div className='text-xs my-2 font-light flex flex-wrap items-center gap-2 '>
                                {
                                    project?.technology.map(ob=>
                                    <div className='rounded py-1 px-2  bg-gray-900 opacity-70'>{ob}</div>)
                                }
                            </div> */}
                            <p className='font-extralight opacity-80 mb-3'>
                            {project.description || "No Description"}     
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-2 justify-center items-center'>
                        {
                            project.imgs.map((img,i)=>(
                                <div key={i} className=' overflow-hidden w-[100%] md:w-[49%] rounded'>
                                    <img className='hover:scale-125 transition-all duration-300' 
                                    src={img} alt={project.name}  />
                                </div>
                            ))
                        }
                        </div>
                        
                        

                        
                        {/* <div className='flex gap-5 justify-around p-5 text-xs lg:text-base'>
                                <a href={project.viewLink || "/"} className='bg-gray-900 px-5 py-2 border hover:border-black rounded hover:bg-gray-700 transition-all duration-300'>View Live</a>
                                <a href={project.githubLink || '/'} className='bg-gray-900 px-5 py-2 border hover:border-black rounded hover:bg-gray-700 transition-all duration-300'>Github code</a>
                        </div> */}
                    </div>

                ))
            }

        </div>
    );
};

export default Projects;