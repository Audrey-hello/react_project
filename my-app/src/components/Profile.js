import React, {useEffect} from 'react';
import './Profile.css';
import picture from './picture1.JPG';
import transition from './transition7.png';
import Aos from "aos";
import "aos/dist/aos.css";


function Profile() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-profile">
      <div className="profile-title">
        <h1> Qui suis-je ?</h1>
      </div>
      <div className='profile-grid' id="profile">
        <div className='profile-content'>
          <h2> Mon parcours </h2>

          <p> Bienvenue ! Je m’appelle Audrey, je suis devenue web développeuse après avoir travaillé en finance d'entreprise puis dans l'entrepreneuriat social pendant quelques années. Très curieuse, j'ai eu envie de développer mes propres sites web et de continuer à apprendre dans le monde de la tech. Je suis donc très enthousiaste de m'être lancée dans cette nouvelle aventure qui m'apporte de nouvelles compétences. Ce que j'aime dans mon travail c'est aussi collaborer en équipe, se soutenir et apporter nos différentes visions. Je souhaite aussi continuer à apprendre et à m'amuser en codant ! </p><br />


          <h2> Mes compétences web </h2>



            <p> ✔︎ Formation Le Wagon :  HTML, CSS, Bootstrap, javascript, SQL... </p>
            <p> ✔︎ React JS</p>
            <p> ✔︎ Outils No-Code et product management</p>
              <li> Figma </li>
              <li> Notion </li>
              <li> Airtable </li>
              <li> Wordpress, Webflow, Bubble </li>
              <li> Et plein d'autres outils géniaux! </li>



        </div>
        <div>
          <img className='image-profile-home' src={picture} alt='profile' />
        </div>
      </div>
      <div className="transition-profile">
        <img className='image-transition' data-aos="flip-right" src={transition} alt='profile' />
      </div>
    </div>

  )
}

export default Profile;
