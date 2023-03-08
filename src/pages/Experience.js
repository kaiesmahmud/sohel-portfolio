import React from 'react';
//icons
import {RxBarChart} from 'react-icons/rx'
import {ImStatsBars} from 'react-icons/im'
import {TbCertificate} from 'react-icons/tb'
const Experience = () => {
    const experiences =[
        {
            id:1,
            name:'Digital Marketing Specialist ',
            company:"DevdeerTech Digital Business Solution",
            time:"From July, 2022 to 2023"
        },
        {
            id:2,
            name:'Marketing Coordinator & Web Developer',
            company:"Digitex Crew Agency",
            time:"From January, 2022 to  april, 2022"
        },
        {
            id:3,
            name:'Lead Generation and Data Entry Expert',
            company:"Contract Base Work",
            time:"From January, 2021 to  july, 2021"
        },
    ]
    const skills = [
        {
            id:1,
            name:"Digital Marketing",
            tools:['SMM','SME','SEM','SEO','Adwards','Classifieds',]
        },
        {
            id:2,
            name:"Search Engine Optimization(SEO)",
            tools:['On-page SEO','Off-page SEO','Local SEO','Technical SEO','Website Audit','Keyword Research','Keyword Analyze','Compititor Analyze',]
        },
        {
            id:3,
            name:"Social Media Marketing(SMM)",
            tools:['Canva Pro','Illustrator','Photoshop','Content Writing','ChatGPT','Premium Tools',]
        },
        {
            id:4,
            name:"Lead Generation Data Entry",
            tools:['MS Office','Google Spreadsheet','VPN/Proxy','50wpm typing','Email Verify','Premium Tools',]
        },
    ]
    const certificates = [
        {
            id:1,
            name:"Certificate Name",
            date:'12/2/2022',
            img:"https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id:2,
            name:"Certificate Name",
            date:'12/2/2022',
            img:"https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id:3,
            name:"Certificate Name",
            date:'12/2/2022',
            img:"https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
    ]
    return (
        <div className='mx-10 lg:mx-20'>
            <h1 className='text-3xl px-5 font-extralight'>Working Experience:</h1>
            <section className='flex flex-wrap gap-10 p-5 '>
                {
                    experiences.map(exp=>(
                        <div key={exp.id} className='w-[100%] lg:w-[45%] border rounded-lg  p-3 bg-gray-900'>
                            <div className=' flex justify-start gap-5 items-start'>
                                <RxBarChart className='text-3xl p-1 border rounded-full'/>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg font-extralight'>{exp.name}</h2>
                                    <h2 className=' text-opacity-50'>{exp.company}</h2>
                                    <h3 className='text-xs text-opacity-30 opacity-30'>{exp.time}</h3>
                                </div>
                            </div>
                        </div> 
                    ))
                }               
            </section>
            <h1 className='text-3xl px-5 font-extralight'>Skills:</h1>
            <section className='flex flex-wrap gap-10 p-5 '>
                {
                    skills.map(skill=>(
                        <div key={skill.id} className='w-[100%] lg:w-[30%] border rounded-lg  p-5 bg-gray-900'>
                            <div className=' flex justify-start gap-5 items-start'>
                                <ImStatsBars className='text-3xl p-1 border rounded-full min-w-[30px]'/>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg font-extralight'>{skill.name}</h2>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            skill.tools.map(i=>(
                                                <h3 className='bg-black border py-1 px-2  rounded text-xs text-opacity-30 opacity-30'>{i}</h3>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> 
                    ))
                    
                }               
            </section>
            <h1 className='text-3xl px-5 font-extralight'>Skills Certification:</h1>
            <section className='flex flex-wrap gap-10 p-5 '>
                {
                    certificates.map(i=>(
                        <div key={i.id} className='w-[100%] lg:w-[30%] border rounded-lg  p-5 bg-gray-900'>
                            <div className='p-1 overflow-hidden rounded-lg'>
                                <img src={i.img} alt={i.name} className='w-[100%] hover:scale-125 transition-all duration-300 rounded-lg'/>
                            </div>
                            <div className=' flex justify-start gap-5 items-start pt-2'>
                                <TbCertificate className='text-4xl p-1 '/>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg font-extralight'>{i.name}</h2>
                                    <h3 className='text-xs text-opacity-30 opacity-30'>{i.date}</h3>
                                </div>
                            </div>
                        </div> 
                    ))
                }               
            </section>
        </div>
    );
};

export default Experience;