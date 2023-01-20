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
        <div style={{ maxWidth: '', margin: '' }}>
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

            <div className="contact-container">
                <h1 className="title">Contact <span className='contact-header-name'>Me</span></h1>
                <form className="form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your message" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="submit-btn" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;