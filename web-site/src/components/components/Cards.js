/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button } from './Button';
import './Cards.css';
import tambour from './tambour.jpg';


function Cards() {
  return (
    <div>
     <h1 className='card-title'> À propos </h1>
      <div className="Encart">
      <p> Bienvenue ! Vous trouverez sur cette pages des ateliers sur différentes thématiques alliant le corps et l’esprit dans une optique féministe et holistique. </p>
      <h3> LES ATELIERS </h3>
      </div>
      <div className="cards-content">
        <div className='cards'>
          <div className="card-ateliers-yoga">
            <p><strong> Yoga Vinyasa (tous niveaux) </strong></p>
              <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" />
            <p>yoga dynamique enchaînant différents flows pour nous aider à gagner en confiance en soi, se relaxer et avoir un meilleur rapport à son corps.</p>
          </div>

            <div className="card-ateliers-chaman">
              <p><strong> Voyage chamanique au tambour  </strong></p>
            <img src={tambour} className="image-tambour"/>
              <p> Voyage au son du tambour dans la tradition des chamanes afin de se connecter à soi, lâcher prise et comprendre ce qui se passe en nous grâce aux vibrations. Chacun.e y va à son rythme !</p>
            </div>

          <div className="card-ateliers">
            <p><strong> Ateliers coaching </strong></p>
            <img src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image-yoga" />
            <p> Se libérer des injonctions, des croyances limitantes et tout ce qui nous empêche d'être pleinement libres et nous-mêmes…Ces ateliers nous donne des outils pour nous donner confiance, se sentir en puissance et avancer dans nos projets.</p>
          </div>
        </div>
        <div className="Retraites">
          <h3> LES RETRAITES </h3>
          <p> Au sein d’un lieu ressourçant dans la nature et non loin de Paris, je propose des week-ends alliant bien-être, coaching et un cadre de réfléxion sur le thème du moment. On y repart avec plein d’idées et d’energies créatives ! </p>
        </div>
        <div className='cards-btns'>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>
            Regarde les prochains évènements !
          </Button>
        </div>
      </div>
    </div>



  )
}

export default Cards;
