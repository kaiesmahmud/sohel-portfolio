import React from 'react';
//icons
import {SlBadge} from 'react-icons/sl'
const About = () => {
    const education = [
        {
            id:1,
            name:'BSc in Computer Science & Engineering',
            institute:'City University',
            time:'November, 2021 to November, 2024',
            cgpa:'CGPA: 3.50 (out of 4.00)'            
        },
        {
            id:2,
            name:'HSC in Science',
            institute:'Dania University & College',
            time:'August, 2018 to November, 2020',
            cgpa:'CGPA: 4.67 (out of 5.00)'            
        },
        {
            id:3,
            name:'SSC in Science',
            institute:'Malek Molla High School',
            time:'January, 2016 to January, 2018',
            cgpa:'CGPA: 4.61 (out of 5.00)'            
        },
    ]
    return (
        <div className=' m-10 lg:m-20'>
            <section  className='mx-5 md:mx-10 lg:mx-20 my-20 p-5 flex flex-col items-center lg:flex-row lg:justify-between '>
                <div className='w-[100%] lg:max-w-[50%] flex justify-center items-center '>
                    <img src='sohel-1.jpeg' alt='Nawab Alam sohel' className='rounded-[50%] w-[50%] max-w-[500px] border '/>
                </div>
                <div className='mt-10 lg:m-0 text-center lg:text-start lg:max-w-[50%]'>
                    <p className='text-sm md:text-base lg:text-xl opacity-70 font-extralight'>
                    I am an enthusiast of everything about SEO and digital marketing. Started to learn about SEO & digital marketing when I was in high school and run a blog. The formula and trick to creating a blog content that is not only helpful but also attractive, lead me to have the ambition to find more about this world. After I graduated from high school, I applied to the market school to learn more about it. Most of the knowledge I have came from personal experience and self-taught skills. Yet, I finally was able to enter a digital marketing company and work as an SEO specialist. It has been 2 years since I worked as a professional SEO specialist and now, looking for a new challenge at a new company. I have been finally 1 year study  compiled in the sector outsourcing institution                    </p>
                </div>
                
            </section>
            {/* --------------------------------------------Educational Qualification--------------------------------------------- */}
            <section>
                <h1 className='text-3xl font-extralight text-center mb-20'>Educational Qualification</h1>
                <div className='flex flex-wrap items-center justify-center gap-8'>
                        {
                            education.map(ob=>(
                                <div className='flex  items-center border  rounded w-[500px]'>
                                    <div className='text-3xl lg:text-7xl  text-center p-6 lg:p-10'>
                                {/* <MdOutlineBadge/> */}
                                        <SlBadge/>
                                    </div>
                                    <div className='p-5'>
                                        <h2 className='text-xl lg:text-2xl font-extralight'>{ob.name}</h2>
                                        <h3 className='text-base lg:text-xl font-extralight opacity-50'>{ob.institute}</h3>
                                        <h4 className='font-light opacity-50 text-sm'>{ob.time}</h4>
                                        <h4 className='font-bold opacity-50 text-xs lg:text-sm'>{ob.cgpa}</h4>
                                    </div>
                                </div>
                            ))
                        }                    
                </div>
            </section>
            {/* -----------------------Language Section---------------------------------------- */}
            <section className='pt-20 text-xs lg:text-base'>
                <h1 className='text-3xl font-extralight text-center pb-10 '>Language</h1>
                <div className='flex items-center justify-center gap-6 font-extralight'>
                    <h4 className='bg-black border rounded px-2 py-1'>English</h4>
                    <h4 className='bg-black border rounded px-2 py-1'>Bangla</h4>
                </div>
            </section>
            {/* -----------------------Hobby Section---------------------------------------- */}
            <section className='pt-20 text-xs lg:text-base'>
                <h1 className='text-3xl font-extralight text-center pb-10 '>Hobby</h1>
                <div className='flex items-center justify-center flex-wrap gap-6 font-extralight'>
                    <h4 className='bg-black border rounded px-3 py-1'>Programming</h4>
                    <h4 className='bg-black border rounded px-3 py-1'>Problem Solving</h4>
                    <h4 className='bg-black border rounded px-3 py-1'>Travelling</h4>
                    <h4 className='bg-black border rounded px-3 py-1'>Creative Thinking</h4>
                    <h4 className='bg-black border rounded px-3 py-1'>Peting Animal</h4>
                </div>
            </section>
        </div>
    );
};

export default About;