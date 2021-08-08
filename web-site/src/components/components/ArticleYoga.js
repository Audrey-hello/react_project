import React from 'react';
import './ArticleSono.css';
import Articles from './Articles.png';
import Topbar from './Topbar';
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';

function ArticleYoga() {

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
          <h1 className="article-name"> Le yoga et ma connexion au corps</h1>
        </div>
      </div>
      {/* ---------------- */}
      <div className="text-blog">
        <div>

          <hr></hr>
          <h4> Connexion au corps et amour de soi </h4>

          <p>Cela fait des années que je pratique le yoga vinyasa et je ne m’en lasse pas. Cette pratique a des bienfaits sur moi sur de nombreux aspects.

            <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
            J’aime beaucoup les ouvertures de cœur et travailler la souplesse. Cela me permet de contrebalancer des postures dans lesquelles je suis courbée ou recroquevillée, après avoir passé de longues heures sur mon ordinateur. Je me sens de nouveau connectée à mon corps, plus en conscience de ce que je ressens physiquement. Et je suis épatée de ce que j’arrive à faire avec ! Au fil des cours, on se découvre plus souple, on apprend de nouvelles positions qui nous faisent peur, on se ré-ancre grâce à des postures d’équilibre. Et ça fait du bien, ça me redonne de l’énergie à chaque séance !</p>

          <p>Le yoga vinyasa me permet aussi de faire circuler mes énergies. Quand je suis dans une énergie basse, avec des pensées négatives ou que je commence à compenser par la nourriture, une séance de yoga me permet de rehausser mon niveau d’énergie, de stabiliser mes émotions, de me sentir bien, détendue et joyeuse, de manger plus sain.</p>

          <p>Travailler sur des chakras ou un thème particulier (ouverture de coeur, des hanches, souplesse, les inversions...) me permet de faire un travail en profondeur sur cette partie et de délier les noeuds émotionnels qui y sont associés.</p>

          <p>Le yoga peut remuer des émotions dont je n’avais pas conscience. Surtout quand je joins ma pratique avec des exercices de respiration. Dans tous les cas, ça me permet de m’ancrer dans une sorte de sérénité, de satisfaction et d’apaisement. </p>

          <h4>Yoga et spiritualité</h4>

          <p>Il y a aussi toute la partie spirituelle dont le sens philosophique du terme. Les valeurs qui y sont données telles que la compassion et la bienveillance se font ressentir. Il y a de même un valeur d’inclusivité que je souhaite divulguer, quelle que soit ta morphologie, ton niveau, ta souplesse...tu y vas à ton rythme ! Il n’y a pas de compétition ni d’objectif si ce n’est de mener ta pratique comme tu le sens pour que cela te fasse du bien.</p>

          <p>Cela bien sûr dans la mesure de tes douleurs physiques et handicaps (la pratique n’est pas recommandée en cas de blessures physiques ou dans certains autres cas).</p>

          <p>Bonne pratique ! </p>
        </div>
      </div>
      {/* <!-- .post-navigation --> */}
      <div className="row-container row-navigation row-navigation-light">
        <div className="row row-parent style-light limit-width">
          <nav className="post-navigation">
            <ul className="navigation">
              <li className="page-prev">
                <span className="btn-container">
                  <a className="btn-link text-default-color btn-icon-left" href="./ArticleSono" rel="prev">
                    <i className="fa fa-angle-left"></i>
                    <span>Précédent</span>
                  </a>
                </span>
              </li>
              <li className="page-next">
                <span className="btn-container">
                  <a className="btn-link btn-icon-right " href="./Article3" rel="nex">Suivant<i className="fa fa-angle-right"></i></a>
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

export default ArticleYoga;
