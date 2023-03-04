import React from 'react';

//icons
import {DiRaphael} from 'react-icons/di'

const Projects = () => {
    const projects = [
        {
            id:1,
            name:"Project 1",
            technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" This sldfs f sdf lkdjfkd  dfdfw  f we ki w fkf efaoakf e ergq  erkweerg werg  ",
            viewLink: '/',
            githubLink: '/',
            img:'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:2,
            name:"Project 2",
            technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" This sldfs f sdf lkdjfkd  dfdfw  f we ki w fkf efaoakf e ergq  erkweerg werg  ",
            viewLink: '/',
            githubLink: '/',
            img:"https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80"
        },
        {
            id:3,
            name:"Project 3",
            technology: ['Vanilla JS', 'React js', 'React-router-dom','Tailwindcss','React-hook-form'],
            description:" This sldfs f sdf lkdjfkd  dfdfw  f we ki w fkf efaoakf e ergq  erkweerg werg  ",
            viewLink: '/',
            githubLink: '/',
            img:"https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    ]
    return (
        <div className='m-5 md:m-20 lg:m-0 p-5 flex flex-wrap justify-center items-center gap-6'>
            {
                projects.map(project=>(
                    <div key={project.id} className='shadow-xl overflow-hidden border p-3 w-[100%] max-w-[800px] lg:w-[40%] rounded hover:bg-black transition-all ease-in duration-300'>
                        <div className=' overflow-hidden w-[100%] rounded'>
                            <img className='hover:scale-125 transition-all duration-300' src={project.img} alt={project.name}  />
                        </div>
                        <div className='flex justify-start gap-5 items-center pt-3'>
                            <div className='text-3xl lg:text-5xl'><DiRaphael/></div>
                            <h1 className='text-xl lg:text-2xl font-light'>{project.name}</h1>
                        </div>
                        <div>
                            <div className='text-xs my-2 font-light flex flex-wrap items-center gap-2 '>
                                {
                                    project?.technology.map(ob=>
                                    <div className='rounded py-1 px-2  bg-gray-900 opacity-70'>{ob}</div>)
                                }
                            </div>
                            <p className='font-extralight opacity-80'>
                            {project.description || "No Description"}     
                            </p>
                        </div>
                        <div className='flex gap-5 justify-around p-5 text-xs lg:text-base'>
                                <a href={project.viewLink || "/"} className='bg-gray-900 px-5 py-2 border hover:border-black rounded hover:bg-gray-700 transition-all duration-300'>View Live</a>
                                <a href={project.githubLink || '/'} className='bg-gray-900 px-5 py-2 border hover:border-black rounded hover:bg-gray-700 transition-all duration-300'>Github code</a>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Projects;