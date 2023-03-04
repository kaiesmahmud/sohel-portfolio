import React from 'react';

const Home = () => {
    return (
        <>
            <section className='mx-10 lg:mx-20 my-20 p-5 flex flex-col-reverse items-center lg:flex-row lg:justify-between '>
                <div className='mt-20 lg:mt-0 lg:ml-20 mb-[100px] lg:mb-1 text-center lg:text-start lg:max-w-[50%] flex flex-col items-center lg:items-start gap-7'>
                    <h1 className='text-2xl font-extralight'>MD Nawab Alam Sohel</h1>
                    <h3 className='text-sm opacity-50'>SEO & Digital Marketing Specialist</h3>
                    <h4 className='text-xl opacity-70 '>Your website is the face of your business. The first impression you make on your potential customers is through your official website and Allied Technologies understands that this first impression better be impressive!</h4>
                    <a href='/' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border border-white w-fit cursor-pointer'>Download Resume</a>
                </div>
                <div className='w-[100%] lg:max-w-[50%] flex justify-center items-center '>
                    <img src='sohel.jpeg' alt='sohel img' className='rounded-[50%] w-[50%] max-w-[500px] border'/>
                </div>
            </section>
        </>
    );
};

export default Home;