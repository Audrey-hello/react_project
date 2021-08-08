/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Cards.css';
import tambour from './tambour.jpg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';


function Cards() {


  return (
    <div className="cards-container">
     <h1 className='apropos-title' id='cards'> Programme </h1>
      <p className="themes"> Les différentes thématiques alliant le corps, le mental et la quête de sens. </p>
      <div className="Encart">
        <div className="title-container">
        <h3 className="rubrique-title">LES ATELIERS  </h3>
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
          <div className="title-container2">
            <h3 className="rubrique-title-retraites"> LES RETRAITES  </h3>
            <img src="https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" className="image-retraites" />
          </div>
          <div className="text-retraite">

            <p> Au sein d’un lieu ressourçant dans la nature, je propose des week-ends alliant bien-être, coaching et un cadre de réfléxion sur le thème du moment. </p>
            <p> Entre cours de yoga, cuisine végie, ateliers divers, ces immersions permettent d'aller encore plus loin dans son apprentissage. Mais c'est aussi avec l'aide de tout un groupe de personnes partageant les mêmes valeurs que nous nous réunissons !</p> <br />

            <p> <strong>Contacte-moi si tu souhaites en savoir plus. Et surtout suis-moi sur les réseaux pour être informé.e. des prochaines sessions !</strong> </p>

          <div className='cards-btns'>
            <Link to={'/Contact'}>
              <Button buttonStyle='btn--outline' buttonSize='btn--large'  >
              Me contacter
            </Button>
            </Link>
          </div>
          <div className="social-media-retraite">
            <a href="#"><i><img src={instagram} className="social-logo-retraite" /></i></a>
            <a href="#" ><i><img src={facebook} className="social-logo-retraite" /></i></a>
          </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Cards;
