import React from 'react';
import './Contenus.css';
import Banner3 from './Banner3';
import books from './books.gif';
import Navbar from './Navbar';
import glossaire from './16.png';
import regle from './regle.jpg';
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
            <h2>Notre Guide du consentement </h2>

            <p>
              <p> Quelles sont les règles de consentement ? C'est quoi des biais de consentement ? La culture du viol et les violences sexistes et sexuelles ? On y répond dans le guide !</p>
            </p><br />

            <a href='https://drive.google.com/file/d/1Y97arwKY43eCmiA-JipBpgfYsLceqtDs/view?usp=sharing'>
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
                Si tu as besoin d'en savoir un peu plus sur les concepts que nous utilisons et le jargon militant. </p>
               </p><br />


            <a href='https://drive.google.com/file/d/1xhpQKp91nz8cnng_kDotSOuLowlQZ_e2/view?usp=sharing' className='btn-mobile'>
              <Button className='btn--outline'> Glossaire </Button>
            </a>
          </div>
        </div>
        <div>
          <img className='image-profile-regle' src={regle} alt='profile' />
        </div>
      </div>
      <Footer />
    </>

  )
};

export default Contenus;
