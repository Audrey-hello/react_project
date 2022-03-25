import Topbar from './Topbar';
import React from 'react';
import '../styles/Profile2.css';
import picture3 from '../img/picture3.JPG';
import cover_profile2 from '../img/cover_profile2.png';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useEffect } from "react";
import Footer from './Footer';


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


function Profile2() {
  return (
    <div className="container-profile2">
      <ScrollToTopOnMount />
      <Topbar />
      <div className='banner-container-profile2'>
        <div className="image-banner-profile2" >
          <img src={cover_profile2} alt="fond bannière créé par moi-même avec des plantes sur un fond ocre" />
        </div>
      </div>
      <div className='profile2-grid'>
        <div className='profile-content2'>
          <h2> Mon chemin et mes valeurs </h2>

          <br/><p>Je m’appelle Ana et je suis passionnée par ce qui nous permet de <strong>prendre conscience du monde </strong> qui nous entoure et de ce qui nous aide à nous sentir bien. J'ai expérimenté différentes pratiques et univers qui m'ont permis de trouver ma voie. Engagée pour la cause lgbtqia+ et créative, <strong>j’ai de même créé une association queer qui soutient les femmes et minorités.</strong> </p>

          <p> J'accompagne désormais des personnes à <strong><mark>trouver leur place</mark>, à se découvrir et explorer le monde qui nous entoure, déconstruire des visions qui nous limitent, à s'affirmer et à s'aimer </strong></p>

          <p>Je suis une adepte de sociologie, du yoga, d'entraide et de tout ce qui m’inspire sur le moment. J’aime allier des prises de consciences sur nos rapports à autrui et notre rôle dans la société afin de <mark>contribuer à plus d'inclusivité et de diversité !</mark> </p>

          <p>Exploratrice et inspirée par des univers magiques et passionnants, <strong>je vous accompagne dans une aventure alliant le bien-être et son rapport aux autres.</strong></p>

          <p> <blockquote>N'hésite pas à regarder mon <strong>pack "En puissance"</strong> offert gratuitement qui te donne déjà plein d'outils et un aperçu sur ce que propose Résonance.</blockquote></p>

          <div className='cards-btns'>
            <Link to={'./Coaching'}>
              <Button buttonStyle='btn--outline' buttonSize='btn--large'  >
                ▻▻ Page du pack
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img className='image-profile-onglet' src={picture3} alt='Moi qui sourit et je suis assise' />
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Profile2;
