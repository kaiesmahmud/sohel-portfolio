import React from 'react';
//icons
import {BsWhatsapp,BsFacebook} from 'react-icons/bs'
import {FiLinkedin,FiTwitter,FiYoutube} from 'react-icons/fi'
import {TbBrandUpwork} from 'react-icons/tb'
const Home = () => {
    return (
        <>
            <section className='mx-10 lg:mx-20 my-20 p-5 flex flex-col-reverse items-center lg:flex-row lg:justify-between '>
                <div className='mt-20 lg:mt-0 lg:ml-20 mb-[100px] lg:mb-1 text-center lg:text-start lg:max-w-[50%] flex flex-col items-center lg:items-start gap-7'>
                    <h1 className='text-2xl font-extralight'>MD Nawab Alam Sohel</h1>
                    <h3 className='text-sm opacity-50'>SEO & Digital Marketing Specialist</h3>
                    <h4 className='text-xl opacity-70 '>Your website is the face of your business. The first impression you make on your potential customers is through your official website and Allied Technologies understands that this first impression better be impressive!</h4>
                    {/* <a href='/' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border border-white w-fit cursor-pointer'>Download Resume</a> */}
                    <div className='flex flex-wrap'>
                        <a href='https://wa.link/gk6d1r' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <BsWhatsapp className='text-lg'/>
                            WhatsApp
                        </a>
                        <a href='https://www.linkedin.com/in/sohel-uddin-seo-specialist' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <FiLinkedin className='text-lg'/>
                            Linkedin
                        </a>
                        <a href='https://www.facebook.com/seo.specialist90' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <BsFacebook className='text-lg'/>
                            Facebook
                        </a>
                        <a href='https://twitter.com/md_mdsoheluddin' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <FiTwitter className='text-lg'/>
                            Twitter
                        </a>
                        <a href='https://www.upwork.com/freelancers/~012456acec4a8ea60d' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <TbBrandUpwork className='text-lg'/>
                            Upwork
                        </a>
                        <a href='https://www.youtube.com/channel/UCZv4pz4xUA9w_8L6sQxvYkw' className='hover:bg-black transition-all ease-in px-5 py-2 rounded border 
                        border-white w-fit cursor-pointer flex items-center gap-2 m-1'>
                            <FiYoutube className='text-lg'/>
                            Youtube
                        </a>
                    </div>
                </div>
                <div className='w-[100%] lg:max-w-[50%] flex justify-center items-center '>
                    <img src='sohel.jpeg' alt='sohel img' className='rounded-[50%] w-[50%] max-w-[500px] border'/>
                </div>
            </section>
        </>
    );
};

export default Home;