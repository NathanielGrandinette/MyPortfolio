import emailjs from 'emailjs-com'

const ContactForm = ({ tone, toast }) => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_s0a4xlw', 'template_0reyskf', e.target, 'pjlYxQ6jLWiRuqeFA')
            .then((result) => {
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
        <div
            className="contact-container"
            style={{ backgroundColor: tone === 'light' ? 'white' : '#102D44' }}
        >
            <h1 className="title">Contact <span className='contact-header-name'>Me</span></h1>
            <form className="form" onSubmit={sendEmail}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className='form-style'
                        id="name" name="name"
                        placeholder="Your name"
                        required
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'light' ? "black" : "#FAF9F6" }}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className='form-style'
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'light' ? "black" : "#FAF9F6" }}
                    />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input
                        id="message"
                        className='form-style'
                        placeholder="Subject"
                        name="message"
                        required
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'light' ? "black" : "#FAF9F6" }}
                    />
                </div>
                <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                        id="message"
                        className='form-style'
                        name="message"
                        placeholder='Message'
                        required
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'light' ? "black" : "#FAF9F6" }}
                    />
                </div>
                <div className="form-group-btn">
                    <input type="submit" value="Send Message" className="submit-btn" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm