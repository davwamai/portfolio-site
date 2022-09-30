import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React from 'react'


const Contact = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm(
                'service_xvhxi6q',
                'template_a5sm06d',
                refForm.current,
                'o7qM41jxWXwM3UGKv'
            )
            .then(
                () => {
                    alert('Message was successfully sent!')
                    window.location.replace('/')
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return(
        <>
        <div className="container contact-page">

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in research opportunities, apprenticeships, and internships; however,
                    if you have other requests or questions, please do not hesitate to contact me using the field below. 
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input  placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className='info-map'>
                David Wamai,
                <br/>
                Columbia, SC, USA
                <br/>
                300 Main St. <br/>
                <span>davwamai@gmail.com</span>
                <span>Phone: (803) 602-2487</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.99033271939652, -81.0280650731481]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[33.99033271939652, -81.0280650731481]}>
                        <Popup> David's CS Department</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact