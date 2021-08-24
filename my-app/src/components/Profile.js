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

          <p> Je m’appelle Audrey, je suis devenue web développeuse full-stack après une formation intensive en bootcamp. J'ai auparavant travaillé en finance d'entreprise dans de grandes institutions pendant plusieurs années. Puis l'envie d'entreprendre de nouveaux challenges m' a orienté  vers le monde de la tech en décidant d'apprendre à coder. Je suis donc très enthousiaste de m'être lancée dans cette nouvelle aventure qui m'apporte de nouvelles compétences. Ce que j'aime dans mon travail c'est aussi collaborer en équipe, se soutenir et apporter nos différentes visions. Je souhaite aussi continuer à apprendre et à m'amuser en codant ! </p><br />


          <h2> Mes compétences web </h2>



            <p> ✔︎ Formation Le Wagon : 9 semaines de bootcamp intensives.</p>
              <li> HTML, CSS, Bootstrap </li>
              <li> JavaScript ES6 </li>
              <li> SQL </li>
              <li> GitHub </li>
            <li> <strong>Ruby on Rails </strong></li>

            <p> ✔︎ Open Classroom: <strong>React JS</strong></p>

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
