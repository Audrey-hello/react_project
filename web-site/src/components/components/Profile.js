import { Link } from 'react-router-dom';
import React from 'react';
import './Profile.css';
import picture11 from './picture11.JPG';
import Footer from './Footer';

function Profile() {
  return (
    <div>
      <div className='profile-grid'>
        <div className='profile-content'>
          <h1> Qui suis-je ? </h1>

          <p>Je m’appelle Ana et je suis passionnée par ce qui nous permet de prendre conscience du monde qui nous entoure et de ce qui nous aide à nous sentir bien. Après avoir travaillé pendant plusieurs années en finance, j’ai démissionné et décidé de changer de façon radicale ma façon de vivre plus alignée avec qui j'étais.</p>
          <p>Je me définis comme étant féministe, empathique, ambitieuse et entrepreneuse. J'aime accompagner les femmes et minorités de genre à révéler leur potentiel et à prendre leur place ! </p>
          <div className='cards-btns'>
            <Link to='/profile2' className='btn-mobile'>
              <button className="btn btn--inline">
                Viens voir mon profil !
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className='image-profile-home' src={picture11} alt='profile' />
        </div>
      </div>
    </div>

  )
}

export default Profile;
