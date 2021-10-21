import React, { useEffect } from 'react';
import './Intro.css';
import Banner2 from './Banner2';
import Button from './Button';




function Intro() {



  return (
    <>
      <div className="container-profile">
        <div className="profile-title">
          <h1> Nos actions </h1>
        </div>
        <div className='profile-grid' id="profile">
          <div className='profile-content'>
            <h2> Un collectif queer féministe et sexpo</h2>

            <p>

              Matriarchy est un collectif souhaitant créer un système alternatif au patriarcat au travers de retraites, ateliers et contenus pédagogiques. Nous fonctionnons en tant qu’association de type loi 1901 et souhaitons construire un espace de connexion autour de nos 3 valeurs clés: </p>
            <li>féminisme intersectionnel</li>
            <li>sexpositive</li>
            <li>queer</li>
            <p><strong>Pour cela, nous militons pour l’inclusivité et la lutte contre les oppressions systémiques.</strong> </p><br />
          </div>
        </div>
      </div>


      <Banner2 />


      <div className="container-profile">
        <div className='profile-grid' >
          <div className='profile-content'>
            <h1> Un aperçu de ce que Matriarchy propose</h1><br /><br />
            <hr />
            <blockquote>Le terme subversif Matriarchy est une invitation à réfléchir à un autre modèle de société et à nous questionner sur les constructions (cishétéro)normatives. Et ainsi construire un modèle plus inclusif.</blockquote>
            <hr /><br />

            <p>L’organisation se veut non-essentialiste et nous souhaitons éviter toute reproduction de systèmes de domination. </p><br /><br />

            <h1>🌈   Qu’est-ce qu’on y fait ?</h1><br />

            <li> Nous créons des <strong>ateliers</strong> divers en lien avec nos valeurs (cercle de parole, ateliers découverte shibari, ateliers créatifs, burlesque, ateliers sextoys…). Que ce soit dans une optique de découverte, de déconstruction, d’empowerment, nous avons envie de créer du lien et des prises de conscience. </li><br />
            <li><strong>Nos retraites</strong> nous organisons des retraites en non-mixité queer dans lesquelles tu peux toi-même proposer des ateliers !</li><br />
            <li> <strong>Les apéros</strong> rencontres sont des moments de partage en convivialité où tu pourras nous poser toutes tes questions ou simplement discuter avec nous !</li><br />

            <a href="https://www.facebook.com/matriarchy.co/events/" className='btn-mobile'>
              <Button className='btn--outline'> Nos évènements</Button><br /><br />
            </a>

            <h1>🧐   Mais ça veut dire quoi tous ces termes militants ?</h1><br />
            <p>Adelphité, intersectionnalité...tu es perdu·e avec tous ces termes ? Retrouve notre glossaire dans la page Ressources !

              Nous créons aussi du contenu pédagogique pour t'aider à cheminer sur cette voie et acquérir les concepts féministes.</p>

            <a href='https://drive.google.com/file/d/1tOlFP5raTK6bfzJtR13M1vEI7rqxDVNI/view?usp=sharing'>
              <Button className={'btn--outline'}> Notre glossaire </Button>
            </ a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro;
