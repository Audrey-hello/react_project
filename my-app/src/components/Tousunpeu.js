import React, { useEffect } from 'react';
import './Tousunpeu.css';
import tsp_gif from './tsp.gif';
import Aos from "aos";
import "aos/dist/aos.css";




function Tousunpeu() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  return (

    <div className="container-tsp" id="tsp">
      <div className="tsp-title">
        <h1>Tous un peu sauvage</h1>
      </div>
      <div className="content-tsp">
        <div className="image-tsp" data-aos="fade-left">
          {/* <img src={tsp} alt='affiche du site tsp' /> */}
          <img src={tsp_gif} className="tsp-gif" data-aos="fade-left" alt="gif tsp" />
        </div>

        <div >
          <div className='tsp-text' data-aos="fade-right">
            <h2>  Développement complet du site </h2> <br />
            <p>Refonte du site web et création d'une nouvelle feature permettant de gérer les réservations pour plusieurs restaurants.</p><br />

            <div className="widgets-outils-tsp">
              <p>Figma</p>
              <p>Wordpress</p>
              <p>Html</p>
              <p>Css</p>
            </div>

            <h2>  Les outils </h2> <br />

            <p>
              <li>Prototypage & Webdesign sur Figma </li>
              <li>Développement sur Wordpress</li>
              <li>Hébergé sur OVH</li>
            </p>
            <p>Tous Un Peu Sauvage est un groupe de restaurants mettant en avant une cuisine méditerranéenne et des produits de qualités. </p><br />
            <a href='https://www.tousunpeusauvage.fr/' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
              <button className="btn btn--inline-tsp">
                Lien vers le site !
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Tousunpeu;
