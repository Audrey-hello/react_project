import React, { useEffect } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer  from './Footer';
import facebook from './facebook.svg';
import insta from './instagram.svg';



function Contact() {


  return (
    <>
      <Navbar />
      <div className="container-contact">
        <div className="contact-title">
          <h1> Nous contacter</h1>
        </div>
        <div className='contact-grid' id="contact">
          <div className='contact-content'>

            <h5>Que ce soit pour collaborer, nous aider ou simplement si vous souhaitez nous poser vos questions, n'hésitez pas à nous envoyer un petit message 😊 </h5><br /><br />
            <h3> Par email </h3>
            <a href="mailto:matriarchy.co@gmail.com?subject=Votre question✨:" ><h5>matriarchy.co@gmail.com</h5><br /> </a>

            <h3> Où en nous rejoignant sur les réseaux sociaux !</h3><br />

            <div className="social-media-contact">
              <a href="https://www.instagram.com/matriarchy_co/"> <i><img src={insta} className="social-logo-contact" alt="image du logo insta" /></i></a>
              <a href="https://www.facebook.com/matriarchy.co" ><i><img src={facebook} className="social-logo-contact" alt="image du logo facebook" /></i></a>
            </div><br /><br />
            <h3> À bientôt ✨</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Contact;
