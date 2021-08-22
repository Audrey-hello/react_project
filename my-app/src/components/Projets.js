
import React, {useEffect} from 'react';
import './Projets.css';
import resonance from './logo_reso.png';
import booksociety from './logo_bs.png';
import apolo from './cover_apolo.png';
import Booksociety from './Booksociety';
import Apolo from './Apolo';
import Resonance from './Resonance';
import { HashLink as Link } from 'react-router-hash-link';
import Aos from "aos";
import "aos/dist/aos.css";
import transition from './transition6.png';



function Projets() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-projets">
      <div className="projets-title">
        <h1> Mes projets</h1>
      </div>
      <div className="content-projets">
        <div className='projets-text'>
          <h2>  Résonance </h2> <br />

          <p> Site réalisé entièrement avec React JS avec intégration d'APIs. Résonance est un site web axé sur le coaching bien-être</p>
        <hr />
        </div>
        <div>
          <Link to='#resonance'>
            <img data-aos="zoom-in-up"className='image-projet' src={resonance} alt='logo de resonance' />
          </Link>
        </div>
      </div>

      <div className="content-projets">
        <div className='projets-text'>
          <h2> Book Society </h2><br />

          <p> Site réalisé avec Ruby on Rails. Book society est une appli web (format téléphone) qui permet de constituer une bibliothèque de ses livres préférés et d'en faire des recommandations.</p>
        <hr />
        </div>
        <div>
          <Link to='#booksociety'>
          <img data-aos="zoom-in-left" className='image-projet' src={booksociety} alt='logo de book society' />
          </Link>
        </div>
      </div>

      <div className="content-projets">
        <div className='projets-text'>
          <h2> Apolo </h2><br />

          <p>Site réalisé avec Ruby on Rails qui permet de louer des espaces de coworkings et d'en proposer.</p>
          <hr />
        </div>
        <div>
          <Link to='#apolo'>
            <img data-aos="zoom-in-down"  className='image-projet' src={apolo} alt='logo de apolo' />
          </Link>
        </div>
      </div>

      <div className="title-transition">
        <p> Mes projets plus en détail </p>
      </div>
        <div className="transition">
        <img className='image-transition-projets' data-aos="fade-down-right" src={transition} alt='profile' />
      </div>
      < Resonance />
      < Booksociety />
      < Apolo />
    </div>

  )
}

export default Projets;
