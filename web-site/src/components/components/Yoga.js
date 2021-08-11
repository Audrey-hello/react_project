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

          <p>Le Vinyasa yoga est une pratique dynamique issue de l'Ashtanga enchaînant les asanas avec créativité et fluidité. Cela permet de relâcher les tensions, se réancrer et se reconnecter à son corps. Cela contribue ainsi à une meilleure santé mentale, à la gestion de ses émotions, et à apprendre à aimer son corps. <strong>C'est donc un véritable outil d'empuissancement aidant la confiance en soi ! </strong></p>

          <p> Je propose des cours collectif de débutant.e à intermédiaire.</p>

          <p> Les cours individuel sont aussi proposés dans une optique d'accompagnement.</p>

          <p> Pour bénéficier de plusieurs outils complémentaires au yoga, rejoignez le programme "Metta" !</p>

        </div>
        <div>
          <img className='image-profile-yoga' src={moi4} alt='image de profile' />
        </div>
      </div>
    </div>
  );
  }

