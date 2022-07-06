
import React, { useEffect } from 'react';
import './Resonance.css';
import reso_gif from './reso.gif';
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
            <p>Résonance est une entreprise organisant des ateliers bien-être et RSE. Le site web permet de donner des informations sur les activités proposées et générer du contenu avec un blog.</p><br />

            <div className="widgets-outils-reso">
              <p>Webflow</p>
              <p>Tally</p>
              <p>Sendinblue</p>
            </div>

            <h2>  Les outils </h2> <br />

            <p>
              <li>Conception graphique & Webdesign (Canva)</li>
              <li>Développement No code sur Webflow</li>

            </p>
            <p>Les fonctionnalités proposées permettent de créer du contenu dans une stratégie de référencement naturel et webmarketing. Il y a notamment une application newsletter connectée et un CMS interne pour le blog </p><br />
            <a href='https://resonance-cc3b12.webflow.io' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
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
