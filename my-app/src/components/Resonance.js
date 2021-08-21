
import React, { useEffect } from 'react';
import './Resonance.css';
import reso_gif from './Reso_video.gif';
import resonance from './site_resonance.png';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";




function Resonance() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);



  return (

    <div className="container-resonance" id="resonance">
      <div className="resonance-title">
        <h1> Résonance</h1>
      </div>
      <div className="content-resonance">
        <div className="image-resonance" data-aos="fade-left">
          {/* <img src={resonance} alt='affiche du site resonance' /> */}
          <img src={reso_gif} className="reso-gif" data-aos="fade-left" alt="gif book society" />
        </div>

        <div >
          <div className='resonance-text' data-aos="fade-right">
            <h2>  Développement complet du site </h2> <br />
            <p>Développement du site permettant de donner des informations sur les activités proposés et délivrer du contenu avec un blog.</p><br />

            <div className="widgets-outils-reso">
              <p>Ruby</p>
              <p>Javascript</p>
              <p>Html</p>
              <p>Scss</p>
            </div>

            <h2>  Les outils </h2> <br />

            <p>
              <li>Conception graphique & Webdesign (Canva).</li>
              <li>Intégration HTML - CSS (Bootstrap).</li>
              <li>Développement sous Node & React JS.</li>
              <li>Intégration d'APIs gérant les bases de données.</li>
              <li> Hbergé sur Vercel.</li>
            </p>
            <p>Les fonctionnalités proposées permettent de créer du contenu dans une stratégie de référencement naturel et de suivi client. Il y a notamment une application newsletter, une application de gestion de blog et un formulaire de scontact mail. </p><br />
            <a  href='https://xn--rsonance-b1a.co/' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
              <button className="btn btn--inline-reso">
                Lien vers le site !
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Resonance;
