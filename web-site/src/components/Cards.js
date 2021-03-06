/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cards.css';
import tambour from '../img/tambour.jpg';
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';



function Cards() {


  return (
    <div className="cards-container">
      <h1 className='apropos-title' id='cards'> Programme </h1>
      <p className="themes"> Les différentes thématiques alliant le corps, le rapport à soi et aux autre, son identité. </p>
      <div className="title-container">
        <h3 className="rubrique-title">LES ATELIERS </h3>
      </div>
      <div className="cards-content">
        <div className='cards'>

          <Link to={'/Yoga'}>
          <div className="card-ateliers-yoga">
            <p className="title-cards"><strong> Yoga Vinyasa </strong></p>
              <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" alt="une femme faisant du yoga pour les ateliers yoga"/>
            <div className="text">
              <p> Yoga dynamique enchaînant différents flows pour t'aider à gagner en confiance en soi, te relaxer et avoir un meilleur rapport à ton corps. Le but est de progresser à ton rythme avec fun et bienveillance. </p>
            </div>
          </div>
           </Link>

          <Link to={'/Voyage'}>
          <div className="card-ateliers-chaman">
            <p className="title-cards"><strong> Voyage au tambour  </strong></p>
            <img src={tambour} className="image-tambour" alt="un tambour chamanique pour les ateliers voyage au tambour"/>
            <div className="text">
              <p> Voyage au son du tambour afin de te connecter à ton monde intérieur, te réancrer, lâcher prise et comprendre ce qui se passe en toi grâce aux vibrations. Si tu ne connais pas viens explorer !</p>
            </div>
          </div>
          </Link>

          <Link to={'/Coaching'}>
          <div className="card-ateliers">
              <p className="title-cards"><strong> Accompagnement 1:1  </strong></p>
            <img src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image-yoga" alt="ambiance de travail pour les ateliers coaching" />
            <div>
                <p className="text"> Te libérer de tout ce qui t'empêche de te sentir toi-même…et de prendre ta place. Ces ateliers te donneront des outils pour te sentir plus affirmé.e et avancer dans tes projets.</p>
            </div>
          </div>
          </Link>
        </div>

        <div className="Retraites">
          <div className="title-container2">
            <h3 className="rubrique-title-retraites"> LES RETRAITES  </h3>
            <img src="https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" className="image-retraites" alt="prairie au lever du soleil" />
          </div>
          <div className="text-retraite">

            <p> Au sein d’un lieu ressourçant dans la nature, je propose des week-ends alliant bien-être et un cadre de réflexion sur le thème du moment. </p>
            <p> Entre cours de yoga, cuisine végie, ateliers divers, ces immersions permettent d'aller encore plus loin dans son apprentissage. Mais c'est aussi avec l'aide de tout un groupe de personnes partageant les mêmes valeurs et la même envie de partage que nous nous réunissons !</p> <br />

            <p> <strong>N'hésite pas à me suivre sur les réseaux pour être informé.e. des prochaines sessions !</strong> </p>

            <div className="social-media-retraite">
              <a href="" ><i><img src={instagram} className="social-logo-retraite" alt="logo instagram"/></i></a>
              <a href="" ><i><img src={facebook} className="social-logo-retraite" alt="logo facebook"/></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Cards;
