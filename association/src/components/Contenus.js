import React from 'react';
import './Contenus.css';
import Banner3 from './Banner3';
import books from './books.gif';
import Navbar from './Navbar';
import glossaire from './16.png';
import consent from './consent.png';
import Footer from './Footer';
import Button from './Button';



function Contenus() {
  return (
    <>
      <Navbar />
      <Banner3 name={books}title="Nos contenus" />
      <div className="container-profile">
        <div className="profile-title">
          <h1> Nos ressources pédagogiques</h1><br /><br /><br />
        </div>
        <div className='contenus-grid' id="profile">
          <div className='contenus-content'>
            <h2>Guide du consentement </h2>

            <p>
              <p> Quelles sont les règles de consentement ? C'est quoi des biais de consentement ? La culture du viol et les violences sexistes et sexuelles ? On y répond dans le guide !</p>
            </p><br />

            <a href='https://drive.google.com/file/d/1HO5PzKwS-yHhAQvvTSik7EMh2HuJi4Y0/view?usp=sharing'>
              <Button className='btn--outline'> Le guide </Button>
            </a>
          </div>
          <div>
            <img className='image-profile-consent' src={consent} alt='profile' />
          </div>
        </div>
        <div className='contenus-grid' id="profile">
          <div>
            <img className='image-profile-glossaire' src={glossaire} alt='profile' />
          </div>
          <div className='profile-content-don'>
            <h2> Notre glossaire </h2>
            <p>

              <p>
                Si tu as besoin d'en savoir un peu plus sur les concepts que nous utilisons et le jargon militant </p>
               </p><br />


            <a href='https://drive.google.com/file/d/1tOlFP5raTK6bfzJtR13M1vEI7rqxDVNI/view?usp=sharing' className='btn-mobile'>
              <Button className='btn--outline'> Glossaire </Button>
            </a>
          </div>
        </div>
        {/* <div className="profile-title">
        <h4> Notre compte insta dans lequel on fourni régulièrement du contenu !</h4>
        </div>
        <div className="social-media-insta">
          <a href="https://www.instagram.com/ana.resonance/"><i><img src={insta} className="social-logo-retraite" alt="logo instagram" /></i></a>
        </div> */}
      </div>
      <Footer />
    </>

  )
};

export default Contenus;
