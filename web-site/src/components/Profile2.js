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
          <h2> Mon chemin </h2>

          <p>Je m’appelle Ana et je suis passionnée par ce qui nous permet de <strong>prendre conscience du monde </strong> qui nous entoure et de ce qui nous aide à nous sentir bien. Après avoir travaillé pendant plusieurs années en finance, j’ai démissionné et décidé de changer de façon radicale ma façon de vivre <strong>plus alignée avec qui j'étais</strong>. J'ai expérimenté différentes pratiques et univers qui m'ont permis de trouver ma voie. Engagée et innovante, <strong>j’ai de même créé une association qui soutient les femmes et minorités de genre.</strong> </p>

          <p> J'accompagne désormais des personnes à <strong>trouver leur alignement, vivre de façon apaisée, à trouver leur puissance et à s'aimer </strong>de manière authentique.</p>

          <p>Je suis une adepte du développement personnel, du yoga, des thérapies naturelles, cognitives et psychologiques, de sociologie et de tout ce qui m’inspire sur le moment. J’aime allier ces techniques avec des prises de consciences sur nos rapports à autrui et notre rôle dans la société.</p>

          <p>Exploratrice et inspirée par des univers magiques et passionnants, <strong>je vous accompagne dans une aventure alliant le bien-être avec soi et l’ harmonie avec les autres.</strong></p>

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
