import React from 'react';
import { Button } from './Button';
import './ArticleSono.css';
import Articles from './Articles.png';
import Topbar from './Topbar';
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';

function ArticleSono() {


    function ScrollToTopOnMount() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return null;
    }

  return (
    <div className="container-sono">
      <ScrollToTopOnMount />
      {/* ---Banner--- */}
      <div className='banner-container-article'>
        <div className="image-banner-article" >
          <Topbar />
          <img src={Articles} />
        </div>
        <div className="header-article">
          <h1 className="article-name"> Santé mentale et thérapie sonore </h1>
        </div>
      </div>
      {/* ---------------- */}
      <div className="text-blog">
        <div>
          <hr></hr>
          <h4>La ronronthérapie </h4>

          <p>D’après des études scientifiques, avoir un chat nous procure du bien-être, améliore notre santé mentale et réduit l’anxiété.

            Vous l’aurez compris, j’ai un amour inconditionnel pour les chats, mais mis à part le fait que c’est très mignon, je me suis interrogée sur les bienfaits que cela nous procure. La ronronthérapie est une  façon de se relaxer en   bénéficiant des sons émis par les ronronnements d'un chat. Prouvée scientifiquement en analysant les effet  de ces sons sur les humains, cela entraînerait la production de sérotonine (l’hormone du bonheur).</p>

          <p>Le fait d'avoir un chat ferait donc beaucoup de bien à notre santé mentale (quand ça déchire pas les canapés en miaulant à 3h du matin, on est bien d'accord haha).</p>

          <h4>Le son du tambour</h4>

          <p>Et si vous n'avez ou ne pouvez avoir  de chat, je vous invite à explorer le son du tambour !

            Les vibrations du tambour ont effet relaxant et peuvent même nous mener à un état modifié de conscience nous aidant à  obtenir des clés de compréhensions sur ce que nous vivons.</p>

          <h4>La sonothérapie</h4>

          <p>C'est tout simplement une thérapie par le son. On peut utiliser la voix, gongs, bols tibétains...ces vibrations influent sur les ondes cérébrales et sur le corps pour nous mener à un état de détente et de relâchement des tensions.

            Quelle que soit la méthode, ces outils nous permettent d'accèder à de nouvelles sensations bénéfiques pour notre santé mentale. </p>
        </div>
      </div>
      {/* <!-- .post-navigation --> */}
      <div className="row-container row-navigation row-navigation-light">
        <div className="row row-parent style-light limit-width">
          <nav className="post-navigation">
            <ul className="navigation">
              <li className="page-prev">
                <span className="btn-container">
                  <a className="btn-link text-default-color btn-icon-left" href="" rel="prev">
                    <i className="fa fa-angle-left"></i>
                    <span>Précédent</span>
                  </a>
                </span>
              </li>
              <li className="page-next">
                <span className="btn-container">
                  <a className="btn-link btn-icon-right " href="./ArticleYoga" rel="nex">Suivant<i className="fa fa-angle-right"></i></a>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
          {/* <!-- .post-navigation --> */}
    </div>
  )
}

export default ArticleSono;
