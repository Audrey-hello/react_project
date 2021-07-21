/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Profile.css';
import profile from './profile.jpg';

function Profile() {
  return (
    <div>
     <h1 className='title-profile'> Qui suis-je ? </h1>
      <div className='profile-grid'>
        <div className='profile-content'>
          <h2> Mon parcours </h2>

          <p>Je m’appelle Anahata et je suis passionnée par ce qui nous permet de prendre consience du monde qui nous entoure et de ce qui nous aide à nous sentir bien. Après avoir travaillé pendant plusieurs années en finance, j’ai démissionné et décidé de changer de façon radicale ma façon de vivre. Je suis partie explorer des milieux très différents et passionnants. J’ai de même créé une association qui cherche à déconstruire les violences systémiques et empouvoirer les femmes et minorités de genre.</p><br>

          </br><p>Désormais je souhaite accompagner des personnes sur ce chemin pour vous aider à y voir plus clair, vivre de façon apaisée et vous aimer comme vous êtes.</p>

          <p>Je suis une adepte des sciences cognitives, du yoga, des thérapies naturelles, cognitives et psychologiques et tout ce qui m’inspire sur le moment. J’aime allier ces techniques avec la déconstruction des normes dans une optique féministe.</p>

          <p>Exploratrice et inspirée par des univers magiques et passionnants, je vous accompagne dans une aventure alliant le bien-être avec soi et l’ harmonie avec les autres.</p>
        </div>
        <div>
          <img className='image-profile' src={profile} alt='profile' />
        </div>
      </div>
    </div>

  )
}

export default Profile
