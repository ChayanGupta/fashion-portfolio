import { ReactElement } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import './Contact.css'

const Contact = (): ReactElement => {

    return (
        <div className='contact-container' id='contact'>
            <div className='contact-header'>
                <h1>Contact <span>Me</span></h1>
                <p>Get in Touch</p>
            </div>
            <div className='contact-body'>
                <div className='contact-body-child'>
                    <div>
                        <FaPhoneAlt className='contact-icon' />
                    </div>
                    <div>
                        <h2>Call Me</h2>
                        <p>+91 9521553716</p>
                    </div>
                </div>
                <div className='contact-body-child'>
                    <div>
                        <MdEmail className='contact-icon' />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>shivaniguptaaa98765@gmail.com</p>
                    </div>
                </div>
                <div className='contact-body-child'>
                    <div>
                        <MdLocationOn className='contact-icon' />
                    </div>
                    <div>
                        <h2>Location</h2>
                        <p>Indore, Madhya Pradesh, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact