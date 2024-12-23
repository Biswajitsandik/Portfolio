import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/freecode.png'
import Adobe from '../../assets/iiit.jpg'
import Microsoft from '../../assets/flask.png'
import Facebook from '../../assets/virtual.png'
import udemy from '../../assets/udemy.jpg'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hkaqaaa', 'template_id3e01s', form.current,  'VMULNOuvPOmY-zjqZChxk')
            .then(() => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
        };
    return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>Certificates and experiences</h1>
            <p className='clientDesc'>
                
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg' />
                <img src={Adobe} alt='Client' className='clientImg' />
                <img src={Microsoft} alt='Client' className='clientImg' />
                <img src={Facebook} alt='Client' className='clientImg' />
                <img src={udemy} alt='Client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the forn below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="your_name"/>
                <input type="email" className='email' placeholder='Your Email'name="your_email"/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt="Facebook" className='link' />
                    <img src={TwitterIcon } alt="twitter" className='link' />
                    <img src={YouTubeIcon} alt="youtube" className='link' />
                    <img src={InstagramIcon} alt="instagram" className='link' />
                </div>
            </form>
        </div>
    </section>
    );
}
export default Contact;