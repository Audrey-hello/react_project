import React, {useEffect} from 'react';
import './Apolo.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Apolo_booking from './Apolo_booking.png';
import Apolo_user from './Apolo_liste.png';
import Apolo_dash from './Apolo_dashboard.png';
import Aos from "aos";
import "aos/dist/aos.css";



function Apolo() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);


  return (
    <div className="container-apolo" id="apolo">
      <div className="apolo-title">
        <h1> Apolo </h1>
      </div>
        <div className="content-apolo">
          <div >
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
            allowfullscreen={true}
            data-aos="fade-left" />
          </div>

          <div >
          <div className='apolo-text' data-aos="fade-right">
              <h2>  MVP développé en équipe - Ruby on Rails </h2> <br />
              <p> Site web qui permet la location et l'offre d'espaces de coworking. Le site propose de faire une recherche soit en fonction du lieu géographique où l'on souhaite travailler soit par nom de l'espace. Si l'espace de cowork nous plaît, il suffit de réserver sur les plages disponibles et on retrouve notre réservation sur notre espace. Et pour mettre un lieu de coworking à disposition, il suffit de rentrer un formulaire et de gérer les réservations dans notre espace utilisateur. </p><br />
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
                <li> Hébergé sur Heroku.</li><br />

                <p> Le site utilise des codes d'authentification pour avoir accès à la base de données.</p>

              </p>
            < a href='https://apolo-coworking-space.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
                <button className="btn btn--inline-apo">
                  Lien vers le site
                </button>
              </a>
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
