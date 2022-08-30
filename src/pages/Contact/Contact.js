import './contact.scss';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zl6kbab', 'template_fl567li', form.current, 'LV6k09dUhS-0h6O-R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <div className="contact pt-4 pb-4 text-center">
            <div className="container">
                <div className="contact__top text-light">
                    <h6>Get in touch</h6>
                    <h3>Contact Us</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="direct__me text-center p-3  rounded-4">
                            <MdOutlineEmail className='mb-3 fs-3'/>
                            <h5 className='mb-2'>Email</h5>
                            <h6 className='mb-4'>ahmedelabasy662@gmail.com</h6>
                            <a href="mailto:ahmedelabasy662@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
                        </div>

                        <div className="direct__me text-center p-3  rounded-4">
                            <RiMessengerLine className='mb-3 fs-3'/>
                            <h5 className='mb-2'>Messenger</h5>
                            <h6 className='mb-4'>Ahmed Elabasy</h6>
                            <a href="https://m.me/mesho.elabasy" target="_blank" rel="noreferrer">Send Message</a>
                        </div>

                        <div className="direct__me text-center p-3  rounded-4">
                            <BsWhatsapp className='mb-3 fs-4'/>
                            <h5 className='mb-2'>Whatsapp</h5>
                            <h6 className='mb-4'>+201013810452</h6>
                            <a href="https://api.whatsapp.com/send?phone=01013810452" target="_blank" rel="noreferrer">Send Message</a>
                        </div>

                    </div>
                    <div className="col-12 col-lg-7">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder='Enter your name' required/>
                            <input type="email" name="email" placeholder='Enter your email' required/>
                            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                            <button type='submit' className='main-button mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact