
import React from 'react';
import './Resonance.css';
import resonance from './site_resonance.png';
import { Link } from 'react-router-dom';




function Resonance() {


  <scripts src='./scripts.js' />

  return (

    <div className="container-resonance" id="resonance">
      <div className="resonance-title">
        <h1> Résonance</h1>
      </div>
      <div className="content-resonance">
        <div class="scroll-element js-scroll slide-right">
          <div className="image-resonance">
            <img src={resonance} alt='affiche du site resonance' />
          </div>
        </div>


        <section class="scroll-container">
          <div class="scroll-element js-scroll slide-left">
            <div className='resonance-text'>
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
                <li>Déployé sur Vercel.</li>
              </p>
              <p>Les fonctionnalités proposées permettent de créer du contenu dans une stratégie SEO et de suivi client. Il y a notamment une application newsletter, une application de gestion de blog et un formulaire de scontact mail. </p><br />
              <Link to='https://xn--rsonance-b1a.co/' className='btn-mobile'>
                <button className="btn btn--inline-reso">
                  Lien vers le site !
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>


  )
}

export default Resonance;
