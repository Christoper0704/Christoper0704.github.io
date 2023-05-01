import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../Styles/Contact.css'

const Contact = () => {
    
    return (
        <footer id='contact'>
            <div className='contact-content'>
                <h3>Contact Me</h3>
                <ul class="socials">
                    <li><SocialIcon url='https://www.linkedin.com/in/christoperluis/' /></li>
                    <li><SocialIcon url='https://github.com/Christoper0704' /></li>
                </ul>
                <h5>Email: c.luis0704@gmail.com | christoper.l0704@gmail.com</h5><br />
                <h5 style={{marginBottom: '10px'}}>Copyright &copy;{new Date().getFullYear()} Christoper Luis Alexander</h5>
            </div>
        </footer>
    );
}

export default Contact;