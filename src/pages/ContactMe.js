import React, { useRef, useState } from 'react';

import { Alert, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    // using react hook for instantly form value submission-----------
    const form = useRef();
    console.log(process.env.PUBLIC_KEY)
    console.log(process.env.SERVICE_ID)
    console.log(process.env.TEMPLATE_ID)
    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_yfau0oe','template_dh8v7j9', form.current, 'WTv-XHFAB7eTfWzg5')
        .then((result) => {
            console.log('result is -', result)
            setOpen(true);
            e.target.email.value = '';
            e.target.messege.value = '';
        }, (error) => {
            setError(true)
            e.target.email.value = '';
            e.target.messege.value = '';
        });
        
    }
    return (
        <div className='flex justify-center items-center w-100 min-h-[90vh] gap-6'>
            <div>
                <h1 className='text-center text-2xl'>Want to chat?</h1>
                <form ref={form} className="w-full max-w-sm" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b border-[#D7CEA7] py-2 my-5">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name='email' placeholder="Email" required/>
                    </div>
                    <div className="flex items-center border-b border-[#D7CEA7] py-2 my-10">
                        <textarea rows={5} cols={100} placeholder={'Your Messege here.. '} name='message' className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
                    </div>
                    <input className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" value={'Sent Messege'}/>
                    
                    
                </form>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233479.3811147067!2d90.12895018554961!3d23.885528746704868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9cdc8bac3b5%3A0xc155530f1e9923d6!2sSavar%20Upazila!5e0!3m2!1sen!2sbd!4v1678269487542!5m2!1sen!2sbd" width="600" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-xl shadow shadow-white'></iframe>   
            </div>

            { open && (<Snackbar open={open} autoHideDuration={4000} onClose={()=>setOpen(false)}>
                    <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Form Submitted Successfully
                    </Alert>
                </Snackbar>)
                }
            {error && (<Snackbar open={error} autoHideDuration={4000} onClose={()=>setError(false)}>
                            <Alert onClose={()=>setError(false)} severity="error" sx={{ width: '100%' }}>
                                Error ! Please Try Again Later
                            </Alert>
                        </Snackbar>)}
        </div>
    );
};

export default ContactMe;