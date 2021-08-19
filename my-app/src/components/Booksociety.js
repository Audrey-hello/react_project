
import React from 'react';
import './Booksociety.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import BS_video from './BS_video.gif';





function Booksociety() {

  <scripts src='./scripts.js' />

  return (
    <div className="container-bs" id="booksociety">
      <div className="bs-title">
        <h1> Book society </h1>
      </div>
      <div className="content-bs">

        <div class="scroll-element js-scroll slide-right">
          <img src={BS_video} className="BS-gif" alt="loading..." />
          {/* <div>
          <ReactPlayer
            url='BS_video.gif'
            className="video"
            width="750px"
            height="100%"
            object-fit="cover"
            muted={true}
            playing={true}
            loop={true}
            controls={false}
            allowfullscreen={true} />
          </div> */}
        </div>



          <div class="scroll-element js-scroll slide-left">
            <div className='bs-text'>
              <h2>  MVP développé en équipe - Ruby on rails </h2> <br />
              <p>Application mobile web pour se consituer une bibliothèque de livres et trouver l'inspiration par les recommandation qui nous sont proposées, les notes et les commentaires.</p>

              <div className="widgets-outils-bs">
                <p>Ruby</p>
                <p>Javascript</p>
                <p>Html</p>
                <p>Scss</p>
              </div>

              <h2> Les outils </h2> <br />
              <p>
                <li>Conception graphique & Webdesign.</li>
                <li>Intégration HTML - CSS (Bootstrap).</li>
                <li>Développement sous Ruby on Rails.</li>
                <li>Features Javascript.</li>
                <li>Déployé sur Heroku.</li>

                <p> Le site utilise des codes d'authentification pour avoir accès à la base de données.</p>
              </p>
              <Link to='https://www.booksociety.me/' className='btn-mobile'>
                <button className="btn btn--inline-bs">
                  Lien vers le site
                </button>
              </Link>
            </div>
          </div>
      </div>
    </div>

  )
}
export default Booksociety;
