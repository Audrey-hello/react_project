/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Voyage.css';
import voyage from '../img/picture13.jpg';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';



export default function Voyage() {
  return (
    <div className='voyage-container'>
      <GoToTop />
      <div className="voyage-banner" >
       <Topbar />
        <ReactPlayer
          url='voyage2.mp4'
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
      <div className="content-tambour">
        <div>
          <img className='image-profile-voyage' src={voyage} alt='moi avec un tambour' />
        </div>

        <div className='voyage-content'>
          <h2>  La magie du son du tambour </h2> <br />

         <p> Partir rencontrer son animal totem, échanger avec les esprits, trouver des messages, les vibrations du tambour t'emportera dans un univers magique. Issu des traditions chamaniques, le voyage au tambour nous permet de cheminer dans ce qui est appelé le "monde invisible". Les chamanes sont considéré.e.s comme étant des guériss.eurs.euses pouvant communiquer avec les esprits. On retrouve encore ces traditions chez certaines populations autochtones.</p>

          <p> Depuis les recherches ont avancé, apportant plus d'explications sur ce qui se passe au niveau cérébral lorsqu'on effectue un voyage. Les vibrations émises par le tambour nous mènent à ce qu'on appelle un état modifié de conscience nous plongeant ainsi dans une sorte de rêve, voir de transe.</p>

          <p> C'est une expérience qui reste unique pour chacun.e et les ressentis sont différents. On peut y trouver <strong>un état de relaxation, de réancrage, un travail sur le lâcher prise, des réponses à nos questions, une meilleure compréhension de nos états émotionnels</strong>...Vous venez y chercher ce que vous souhaitez ! </p>

          <a href="" target="_blank" rel="noopener"><button className="btn btn--follow">
            ▻▻ Suivre les prochaines sessions
          </button></a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
