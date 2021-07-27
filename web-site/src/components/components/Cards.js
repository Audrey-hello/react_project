/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Cards.css';
import tambour from './tambour.jpg';


function Cards() {


  return (
    <div className="cards-container">
     <h1 className='apropos-title' id='cards'> Programme </h1>
      <p className="themes"> Les différentes thématiques alliant le corps, le mentale et la quête de sens. </p>
      <div className="Encart">
        <div className="title-container">
        <h3 className="rubrique-title">LES ATELIERS </h3>
        </div>
      </div><br>
      </br>
      <div className="cards-content">
        <div className='cards'>

          <Link to={'/Yoga'}>
          <div className="card-ateliers-yoga">
            <p className="title-cards"><strong> Yoga Vinyasa (tous niveaux) </strong></p>
              <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" />
            <div className="text">
              <p> Yoga dynamique enchaînant différents flows pour nous aider à gagner en confiance en soi, se relaxer et avoir un meilleur rapport à son corps.</p>
            </div>
          </div>
           </Link>

          <Link to={'/Voyage'}>
          <div className="card-ateliers-chaman">
            <p className="title-cards"><strong> Voyage chamanique au tambour  </strong></p>
            <img src={tambour} className="image-tambour"/>
            <div className="text">
              <p> Voyage au son du tambour dans la tradition des chamanes afin de se connecter à soi, lâcher prise et comprendre ce qui se passe en nous grâce aux vibrations. Chacun.e y va à son rythme !</p>
            </div>
          </div>
          </Link>

          <Link to={'/Coaching'}>
          <div className="card-ateliers">
            <p className="title-cards"><strong> Coaching de vie </strong></p>
            <img src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image-yoga" />
            <div>
              <p className="text"> Se libérer des injonctions, des croyances limitantes et tout ce qui nous empêche d'être pleinement libres et nous-mêmes…Ces ateliers nous donne des outils pour nous donner confiance, se sentir en puissance et avancer dans nos projets.</p>
            </div>
          </div>
          </Link>
        </div>


        <div className="Retraites">
          <div className="title-container">
          <h3 className="rubrique-title"> LES RETRAITES </h3>
          </div>
          <p className="text-retraite"> Au sein d’un lieu ressourçant dans la nature et non loin de Paris, je propose des week-ends alliant bien-être, coaching et un cadre de réfléxion sur le thème du moment. </p>
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
