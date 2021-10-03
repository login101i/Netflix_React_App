import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import Github from '../img/Octicons-mark-github.svg'
import { Link } from 'react-router-dom'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.488440429712!2d18.258279222766152!3d52.795532045728024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703508b6216742f%3A0xd927af8b25070eeb!2s%2C%2088-100%20Inowroc%C5%82aw!5e0!3m2!1spl!2spl!4v1616243709373!5m2!1spl!2spl" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" title="mapa"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+48 698673254'} title={'Phone'} />
                    <ContactItem icon={email} text1={'maciejkruszyniak@gmail.com'} title={'Email'} />
                    <a href="https://github.com/login101i"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                    >
                        <ContactItem icon={Github} text1={'https://github.com/login101i'} title={'Github'} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ContactPage;
