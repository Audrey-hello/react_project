import React from 'react';
import { Button } from './Button';
import './ArticleSono.css';
import Articles from './Articles.png';
import Topbar from './Topbar';
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';

function Article3() {


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
        <div className="header-article3">
          <h1 className="article-name"> Comment dépasser l’anxiété dans un </h1>
          <h1 className="article-name2">climat d’incertitude ?</h1>
        </div>
      </div>
      {/* ---------------- */}
      <div className="text-blog3">
        <div>
          <hr></hr>
          <h4> La gestion de ses émotions </h4>

          <p> Pas évident de se projeter et de gérer ses émotions dans un contexte rempli d’incertitudes et de changements 🤯 . Entre les projets qui tombent à l’eau ou restent en suspens, le besoin de retrouver une stabilité, pouvoir s’en sortir financièrement, vouloir ressortir comme avant...

            🌙 Depuis la pleine lune et maintenant la nouvelle lune, j’ai des insomnies et plus d’anxiété que d’habitude. L’enfermement et l’incertitude du contexte actuel intensifient aussi les choses (surtout si on est hypersensible).</p>

          <h4> Lâcher prise ?</h4>

            <p>Comment j’arrive à lâcher prise dessus ?
            Je ne fais pas grand chose à vrai dire :) j’essaie d’économiser mon énergie le plus possible et d’accepter que je traverse un moment désagréable.

            🔥 Pour garder la motivation, j’essaie de ne pas penser à des choses qui me rendent anxieuse pour me concentrer sur qui me donne de la joie. J’essaie de planifier des projets et de trouver des solutions en m’adaptant au contexte. </p>

          <h4> Des petits outils </h4>

            <p>🌱 Pour diminuer mon anxiété, je me reconnecte à mon corps avec un yoga doux. Je prends des petits moments de méditation et de respiration. Une musique relaxante. Du journaling quand j’ai trop de pensées. Pour mieux dormir je prends une tisane de Valériane et du chocolat 🍫.

            🐾 J’aime aussi marcher dans la nature, envoyer du soutien et de l’amour aux personnes qui m’entourent. Être dans la compassion avec les personnes avec lesquelles je suis en conflit. Me remercier pour le chemin que j’accomplis et me donner des mots encourageants.</p>

                  <p>🧡  Plein d’amour et de courage 💜  Vous n’êtes pas seul.e.s. ✌️😊 </p>
        </div>
      </div>
      {/* <!-- .post-navigation --> */}
      <div className="row-container row-navigation row-navigation-light">
        <div className="row row-parent style-light limit-width">
          <nav className="post-navigation">
            <ul className="navigation">
              <li className="page-prev">
                <span className="btn-container">
                  <a className="btn-link text-default-color btn-icon-left" href="./ArticleYoga" rel="prev">
                    <i className="fa fa-angle-left"></i>
                    <span>Précédent</span>
                  </a>
                </span>
              </li>
              <li className="page-next">
                <span className="btn-container">
                  <a className="btn-link btn-icon-right " href="./ArticleSono" rel="nex">Suivant<i className="fa fa-angle-right"></i></a>
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

export default Article3;
