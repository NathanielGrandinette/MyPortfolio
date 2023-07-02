import { ToastContainer, toast } from 'react-toastify'
import { TiLocationOutline } from 'react-icons/ti'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import ContactForm from './contactForm'
import 'react-toastify/dist/ReactToastify.css'
import './contact.css'

const Contact = ({ tone }) => {

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
                <div className="contact-details-div">
                    <TiLocationOutline />
                    <span data-testid="location" className="contact-span">Mesa, AZ</span>
                </div>

                <div className="contact-details-div">
                    <MdOutlineEmail />
                    <span data-testid="email" className="contact-span">nathaniel.grandinette@gmail.com</span>
                </div>
                <div className="contact-details-div">
                    <FiPhone />
                    <span data-testid="phone" className="contact-span">(480) 270-0854</span>
                </div>
            </div>
            <ContactForm tone={tone} toast={toast} />
        </div>
    );
};

export default Contact;