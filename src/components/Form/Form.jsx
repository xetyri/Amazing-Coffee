import React , { useRef } from 'react'
import './form.css'
import '../../index.css'
import emailjs from 'emailjs-com';


export function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1ssywy9', 'template_rruszoq', form.current, 'QmZd2HDbGmh8ieL-d')
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='form-content'>
            <input type='text' className='form-name' name='name' placeholder='Your Full Name' required />
            <input type='email' className='form-email' name='email' placeholder='Your Email' required />
            <textarea name="message" className='form-text' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='form-button'>Send Message</button>
        </form>
    )
}