import { Link } from 'react-router-dom';
import React from 'react';
import './Profile.css';
import picture from './picture1.JPG';

function Profile() {
  return (
    <div>
      <div className='profile-grid' id="profile">
        <div className='profile-content'>

          <h2> Mon parcours </h2>

          <p>Je m’appelle Audrey, je suis devenue web développeuse full-stack après une formation intensive en bootcamp. J'ai auparavant travaillé en finance d'entreprise dans de grande institutions pendant plusieurs années avant d'entreprendre de nouveaux challenges. J'ai donc décidé de prendre un tournant en me lançant dans le monde de la tech. J'aime tavailler en équipe, se soutenir et apporter différentes visions. Je souhaite aussi continuer à apprendre et à m'amuser en codant ! </p>

          <h2> Mes formations </h2>



            <p> ✔︎ Formation Le Wagon : 9 semaines de bootcamp intensives.</p>
              <li> HTML, CSS, Bootstrap </li>
              <li> JavaScript ES6 </li>
              <li> SQL </li>
              <li> git, GitHub, </li>
            <li> <strong>Ruby on Rails </strong></li>

            <p> ✔︎ Open Classroom: <strong>React JS</strong></p>

        </div>
        <div>
          <img className='image-profile-home' src={picture} alt='profile' />
        </div>
      </div>
    </div>

  )
}

export default Profile;
