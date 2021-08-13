/* eslint-disable react/style-prop-object */
import React from 'react';
import "./Yoga.css";
import ReactPlayer from 'react-player';
import moi4 from './moi4.jpg';
import { useEffect } from "react";
import Topbar from './Topbar';


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



export default function Yoga() {
  return (
    <div className='yoga-container' >
      <ScrollToTopOnMount />
      <div className="yoga-banner" id='yoga'>
         <Topbar />
        <ReactPlayer
          url='yoga2.mp4'
          className="video"
          width="100%"
          height="100%"
          object-fit="cover"
          muted={true}
          playing={true}
          loop={true}
          controls={false}
          allowfullscreen={true}/>
      </div>
      <div className="content-yoga">
        <div className='profile-content-yoga'>
          <h2>  Connexion au corps et à l'esprit  </h2> <br />

          <p>Le Vinyasa yoga est une pratique dynamique issue de l'Ashtanga enchaînant les asanas avec créativité et fluidité. Cela permet de relâcher les tensions, se réancrer et se reconnecter à son corps. Cela contribue ainsi à une meilleure santé mentale, à la gestion de ses émotions, et à apprendre à aimer son corps. <strong>C'est donc un véritable outil d'empuissancement aidant la confiance en soi ! </strong></p><br />

          <h3> Les valeurs que je divulgue par le yoga </h3><br />

          <p> Le yoga n'est pas juste un outil bien-être, c'est une philosophie indienne qui existe depuis des siècles. Si les postures font références à l'aspect physique lié au corps, à la discipline, à la respiration il y a aussi tout un aspect plus spirituel. <strong>Les valeurs de bienveillance, de respect, de compassion, de non-jugement sont tout aussi importantes pour moi dans cette pratique. </strong> </p> <br />
          <p> De même, le yoga est ouvert à toustes quelque soit ta morphologie, niveau...si je suis une personne blanche, je trouve important d'en avoir cosncience et éviter l'appropriation culturelle mené par le yoga occidentale, se centrant uniquement sur l'aspect physique. <strong> Le yoga doit être représenté par toustes et dans la diversité ! </strong>De même, il n' y a pas de compétition en yoga, <strong> tu y vas à ton rythme </strong>en fonction de ta pratique.</p>


          <li>Je propose des cours collectif de débutant.e à intermédiaire.</li><br />
          <li>Des cours individuels sont aussi proposés dans une optique d'accompagnement.</li><br />
          <li>Pour bénéficier de plusieurs outils complémentaires au yoga, rejoignez le programme "Metta" !</li><br />

          <h3> Ressources </h3><br />

          <p> -  Susanna Barkataki  et son livre "Embrace Yoga's Roots: Courageous Ways to Deepen Your Yoga Practice".</p>
          <p> - Le compte yogaisdeadpodcast. </p>
          <p> - Henikapetal avec School of Sensual Arts.</p>

        </div>
        <div>
          <img className='image-profile-yoga' src={moi4} alt='image de profile' />
        </div>
      </div>
    </div>
  );
  }

