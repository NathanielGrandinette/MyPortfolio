import React, { useState } from "react";
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './contact.css'

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_s0a4xlw', 'template_0reyskf', e.target, 'pjlYxQ6jLWiRuqeFA')
            .then((result) => {
                console.log(result.text)
                toast('Email sent', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
            .catch((error) => {
                console.log(error.text)
            })
        e.target.reset()
    }

    return (
        <div className="contact-div" style={{ maxWidth: '', margin: '' }}>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="contact-details">
                <h2>Contact Details</h2>
                <div>Mesa, AZ</div>
                <div>nathaniel.grandinette@gmail.com</div>
                <div>(480) 270-0854</div>
            </div>
            <div className="contact-container">
                <h1 className="title">Contact <span className='contact-header-name'>Me</span></h1>
                <form className="form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className='form-style' id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className='form-style' id="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input id="message" className='form-style' placeholder="Subject" name="message" required />
                    </div>
                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea id="message" className='form-style' name="message" required />
                    </div>
                    <div className="form-group-btn">
                        <input type="submit" value="Send Message" className="submit-btn" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;