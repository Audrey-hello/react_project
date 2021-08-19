
import React from 'react';
import './Projets.css';
import resonance from './logo_reso.png';
import booksociety from './logo_bs.png';
import apolo from './cover_apolo.png';
import Booksociety from './Booksociety';
import Apolo from './Apolo';
import Resonance from './Resonance';
import { HashLink as Link } from 'react-router-hash-link';



function Projets() {


  return (
    <div className="container-projets">
      <div className="projets-title">
        <h1> Mes projets</h1>

        <div className="content-projets">
          <div className='projets-text'>
            <h2>  Résonance </h2> <br />

            <p> Site réalisé entièrement sous React JS avec intégration d'API. Résonance est un site web axé sur le bien-être</p>
          </div>
          <div>
            <Link to='#resonance'>
            <img className='image-projet' src={resonance} alt='logo de resonance' />
            </Link>
          </div>
        </div>

        <div className="content-projets">

          <div className='projets-text'>
            <h2> Book Society </h2><br />

            <p> Site réalisé avec Ruby on Rails. Book society est une appli web (format téléphone) qui permet de constituer une bibliothèque de ses livres préférés et d'en faire des recommandations.</p>
          </div>
          <div>
            <Link to='#booksociety'>
            <img className='image-projet' src={booksociety} alt='logo de book society' />
            </Link>
          </div>
        </div>

        <div className="content-projets">

          <div className='projets-text'>
            <h2> Apolo </h2><br />

            <p>Site réalisé avec Ruby on Rails qui permet de louer des espaces de coworkings et d'en proposer.</p>

            <p></p>
          </div>
          <div>
            <Link to='#apolo'>
            <img className='image-projet' src={apolo} alt='logo de apolo' />
            </Link>
          </div>
        </div>
        <div class="open">
            < Resonance />
        </div>
        < Booksociety />
        < Apolo />
      </div>
    </div>

  )
}

export default Projets;
