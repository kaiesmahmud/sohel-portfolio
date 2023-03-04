import React from 'react';

const ContactMe = () => {
    return (
        <div className='flex justify-center items-center w-100 min-h-[90vh] gap-6'>
            <div>
                <h1 className='text-center text-2xl'>Want to chat?</h1>
                <form class="w-full max-w-sm">
                    <div class="flex items-center border-b border-[#D7CEA7] py-2 my-5">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name='email' placeholder="Email" required/>
                    </div>
                    <div class="flex items-center border-b border-[#D7CEA7] py-2 my-10">
                        <textarea rows={5} cols={100} placeholder={'Your Messege here.. '} name='messege' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
                    </div>
                    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Sent Messege
                    </button>
                </form>
            </div>
            <div>
            <iframe title='BD map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2681.0850493502576!2d90.25934791414178!3d23.894063337292852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spandhoa%2C%20bismile%2Csavar%2Cdhaka!5e0!3m2!1sen!2sbd!4v1677728952842!5m2!1sen!2sbd" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-xl shadow shadow-white'></iframe>   
            </div>
        </div>
    );
};

export default ContactMe;