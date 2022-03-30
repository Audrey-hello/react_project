import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Profile.css';
import picture12 from '../img/picture12.JPG';


function Profile() {
  return (
    <div>
      <div className='profile-grid'>
        <div className='profile-content'>
          <h1> Qui suis-je ? </h1>
          <br/>

          <p>Je m’appelle Ana et je suis passionnée par ce qui nous permet de prendre conscience du monde qui nous entoure et de ce qui nous aide à nous sentir bien. Après avoir travaillé pendant plusieurs années en finance (oui je me suis perdu.e 😅), j’ai décidé de changer de façon radicale ma façon de vivre plus alignée avec qui j'étais.</p>
          <p> Adorant observer les êtres humains et analyser notre société, je me définis comme étant féministe intersectionnelle, empathique, ambitieuse et entrepreneuse.<mark> J'aime accompagner les femmes et minorités pour créer des rencontres et des réseaux d'entraides </mark> aussi pour les aider à prendre leur place ! </p>
          <div className='cards-btns'>
            <Link to='/profile2' className='btn-mobile'>
              <button className="btn btn--inline">
                Viens voir mon profil !
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className='image-profile-home' src={picture12} alt='profile' />
        </div>
      </div>
    </div>

  )
}

export default Profile;
