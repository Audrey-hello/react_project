import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Content.css';
import ressources2 from './ressources2.png';
import Topbar from './Topbar';
import sono from '../images/Sonothérapie.png'
import yoga_pose from '../images/yoga_pose.jpg'

function Content() {


  return (
    <div className="events-container" id="events">
      {/* ---Banner--- */}
      <div className='banner-container3'>
        <div className="image-banner-content" >
          <Topbar />
          <img src={ressources2} />
        </div>
      </div>
      {/* ---------------- */}

      <div className="cards-content">
        <h1 className='title3'> Ressources - Articles </h1>
        <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" />
        <div className="text-metta">
          <div className="title-metta">
          <li> Bien-être </li>
          <li> Empowerment </li>
          </div>
          <div className="content-metta">
            <div className="container-cards-blog">

            <div className="card-blog">
                <Link to={'/ArticleSono'}> <img src={sono} className="image-blog" /></Link>
              <h1> Santé mentale et  thérapie sonore </h1>
              <hr></hr>
              <h4>La ronronthérapie </h4>

              <p>D’après des études scientifiques, avoir un chat nous procure du bien-être, améliore notre santé mentale et réduit l’anxiété.

                Vous l’aurez compris, j’ai un amour inconditionnel pour les chats, mais mis à part le fait que c’est très mignon, je me suis interrogée sur les bienfaits que cela nous procure. La ronronthérapie est une  façon de se relaxer en   bénéficiant des sons émis par les ronronnements d'un chat. Prouvée scientifiquement en analysant les effet  de ces sons sur les humains, cela entraînerait la production de sérotonine (l’hormone du bonheur)...</p>
            </div>
            <div className="card-blog">
                <Link to={'/ArticleYoga'}> <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" className="image-blog" /></Link>
              <h1> Le yoga et ma connexion au corps</h1>
              <hr></hr>
              <h4> Connexion au corps et amour de soi </h4>

              <p>Cela fait des années que je pratique le yoga vinyasa et je ne m’en lasse pas. Cette pratique a des bienfaits sur moi sur de nombreux aspects.

                  <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
                    J’aime beaucoup les ouvertures de cœur et travailler la souplesse...</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
