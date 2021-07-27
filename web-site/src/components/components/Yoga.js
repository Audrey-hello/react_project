/* eslint-disable react/style-prop-object */
import React from 'react';
import "./Yoga.css"
// import video from './video.mp4'
import ReactPlayer from 'react-player';
import profile from './profile.jpg';
import { useEffect } from "react";


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
        <ReactPlayer
          url='video.mp4'
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
      <div className="content">
        <div className='profile-content-yoga'>
          <h2>  Se reconnecter </h2>

          <p>Le vinyasa yoga est une pratique dynamique enchaînant plusieurs asanas. Cela permet de relâcher les tensions, se réancrer et se reconnecter à son corps. Cela contribue ainsi à une meilleure santé mentale, à la gestion de ses émotions, et à apprendre à aimer son corps. C'est donc un véritable outil d'empuissancement aidant la confiance en soi ! </p>

          <p> Je propose des cours collectif de débutant.e à intermédiaire. Rejoignez-moi sur insta pour suivre l'actualité !</p>

          <p> Les cours indivuel sont aussi proposés dans une optique d'accompagnement.</p>

          <p> En ce qui concerne les tarifs, les prix en collectifs sont en tarif libre avec un prix indicatif de 18 euros. Les prix en individuel en tarif libre avec un prix indiatif de 35 euros. </p>

          <p> Pour bénéficier de plusieurs outils complémentaires au yoga, rejoignez le programme "Metta" !
            Mais qu'est-ce que c'est ?
            Ce programme est destiné à toutes les personnes qui souhaitent aller plus loin dans leur quête de sens et d'amour de soi.
            Sur une période de 6 mois, vous serez suivi.e individuellement avec des sessions collectives.
            En fonction de vos besoins, vous aurez accès à une session de yoga par semaine, une session de coaching toutes les deux semaines et une session voyage au tambour par mois. Un point sera fait de façon régulière et vous aure accès à du contenu écrit pour vous aider à en bénéficier régulièrement.
          </p>
        </div>
        <div>
          <img className='image-profile-yoga' src={profile} alt='profile' />
        </div>
      </div>
    </div>
  );
  }

