
import React, {useEffect} from 'react';
import './Booksociety.css';
import BS_video from './BS_video.gif';
import Aos from "aos";
import "aos/dist/aos.css";





function Booksociety() {

  useEffect(()=> {
    Aos.init({duration:2000});
  }, []);


  return (
    <div className="container-bs" id="booksociety">
      <div className="bs-title">
        <h1> Book society </h1>
      </div>
      <div className="content-bs">
        <img src={BS_video} className="BS-gif" data-aos="fade-left" alt="gif book society" />
      <div className='bs-text' data-aos="fade-right">
          <h2>  MVP développé en équipe - Ruby on rails </h2> <br />
          <p>Application mobile web pour se constituer une bibliothèque de livres et trouver l'inspiration par les recommandations qui nous sont proposées, les notes et les commentaires.</p><br />

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
            <li>Hébergé sur Heroku.</li>
          </p>
          <p> Le site utilise des codes d'authentification pour avoir accès à la base de données.</p>
          <a href='https://www.booksociety.me/' target="_blank" rel="noopener noreferrer" className='btn-mobile'>
            <button className="btn btn--inline-bs">
              Lien vers le site
            </button>
          </a>
        </div>
      </div>
    </div>

  )
}
export default Booksociety;
