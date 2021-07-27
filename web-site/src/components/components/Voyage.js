/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactPlayer from 'react-player';
import './Voyage.css';
import voyage from './voyage.jpg';
import { useEffect } from "react";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}



export default function Voyage() {
  return (
    <div className='voyage-container'>
      <ScrollToTopOnMount />
      <div className="voyage-banner" >
        <ReactPlayer
          url='voyage.mp4'
          className="video"
          width="100%"
          height="100%"
          object-fit="cover"
          muted={true}
          playing={true}
          loop={true}
          controls={false}
          allowfullscreen={true} />
      </div>
      <div className="content">
        <div>
          <img className='image-profile-voyage' src={voyage} alt='profile' />
        </div>

        <div className='profile-content'>
          <h2>  La magie du son du tambour </h2>

         <p> Partir rencontrer son animal totem, les esprits, trouver des messages et des soins, les vibrations du tambour nous emporte dans un univers magique. Issu des traditions chamanes, le voyage au tambour est utilisé cheminer dans ce qui est appelé le "monde invisible". Les chamanes sont considéré.e.s comme étant des guériseur.euse pouvant communiquer avec les esprits. On retrouve encore ces traditions dans les peuples autochtones.</p>

          <p> Depuis les recherches ont avancé apportant des explications sur ce qui se passe lorsqu'on effectue un voyage. Les vibrations émises par le tambour nous mènent à ce qu'on appelle un état modifié de conscience nous plongeant ainsi dans une sorte de rêve, voir de transe.</p>

          <p> C'est une expérience qui reste unique pour chacun.e et les ressentis sont différents. On peut y trouver un état de relaxation, un travail sur le lâcher prise, arrêter le brouhaha mentale, trouver des réponses à nos questions, mieux comprendre nos états émotionnels...vous venez y cherchez ce que vous souhaitez ! </p>
        </div>
      </div>
    </div>
  );
}
