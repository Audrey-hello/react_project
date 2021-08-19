import React from 'react';
import './Apolo.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Apolo_booking from './Apolo_booking.png';
import Apolo_user from './Apolo_liste.png';
import Apolo_dash from './Apolo_dashboard.png';



function Apolo() {

  <scripts src='./scripts.js' />

  return (
    <div className="container-apolo" id="apolo">
      <div className="apolo-title">
        <h1> Apolo </h1>
      </div>
      <div className="content-apolo">

        <div class="scroll-element js-scroll slide-right">

        <ReactPlayer
          url='Apolo_video.mp4'
          className="video_apolo"
          width="600px"
          height="100%"
          object-fit="cover"
          muted={true}
          playing={true}
          loop={true}
          controls={false}
          allowfullscreen={true} />

        </div>
          <div class="scroll-element js-scroll slide-left">
            <div className='apolo-text'>
              <h2>  MVP développé en équipe - Ruby on Rails </h2> <br />
              <p> Site web qui permet la location et l'offre d'espaces de coworking. </p>
              <div className="widgets-outils">
                <p>Ruby</p>
                <p>Javascript</p>
                <p>Html</p>
                <p>Scss</p>
              </div>

              <h2>  Les outils  </h2> <br />

              <p>
                <li> Conception graphique & Webdesign.</li>
                <li> Intégration HTML - CSS (Bootstrap).</li>
                <li> Développement sous Ruby on Rails.</li>
                <li> Intégration d'Apis avec Javascript et animations.</li>
                <li> Déployé sur Heroku.</li><br />

                <p> Le site utilise des codes d'authentification pour avoir accès à la base de données.</p>

              </p>
             <Link to='https://apolo-coworking-space.herokuapp.com/' className='btn-mobile'>
                <button className="btn btn--inline-apo">
                  Lien vers le site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carroussel">
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <main id="carousel">
            <img src={Apolo_booking} className="item" />
            <img src={Apolo_dash} className="item" />
            <img src={Apolo_user} className="item" />
          </main>
        </div>
      </div>

  )
}
export default Apolo;
