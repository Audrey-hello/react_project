import React from 'react';
import ReactPlayer from 'react-player';
import './Voyage.css';
import './Coaching.css';
import working from './working.jpg';
import { useEffect } from "react";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export default function Coaching() {
  return (
    <div className='voyage-container'>
      <ScrollToTopOnMount />
      <div className="voyage-banner" >
        <ReactPlayer
          url='coaching2.mp4'
          className="video"
          width="100%"
          height="100%"
          object-fit="cover"
          muted={true}
          playing={true}
          loop={true}
          controls={false}
          allowfullscreen={true} />
      </div>
      <div className="content">
        <div>
          <img className='image-profile-coaching' src={working} alt='profile' />
        </div>

        <div className='profile-content'>
          <h2>  Coaching empowerment pour être bien avec soi et avec les autres </h2>


          <p>Ces sessions sont destinées à donner des clés de compréhension sur ce qu’on vit, que ce soit en tant que femme, personne queer, personne en minorité etc.</p>

          <p> Cela peut-être analyser une situation, comprendre les mécanismes et les concepts derrière, obtenir des outils d'émancipation et de déblocage, apprendre à libérer la parole et en parler... Voici quelques exemples :

            <li>Tu ressens un blocage pour entreprendre ou prendre la parole car tu ne sens pas légitime ou moins forte que les autres.</li>
            <li>Tu souhaites te libérer des injonctions qui pèsent sur toi.</li>
            <li>Tu souhaites plus partager la charge mentale.</li>
            <li>Tu as vécu une oppression et tu ne sais pas comment en parler.</li>
            <li>Tu souhaites trouver un espace d'écoute pour parler de ce que tu vis.</li>
            <li>Tu souhaites trouver ta voie et une voie sur laquelle tu te sens alignée.</li>
            <li>Tu as envie de déconstruire tes croyances.</li>
            <li>Tu souhaites mieux gérer ta colère et ton sentiment d'injustice.</li></p>

          <p> Vouloir se faire accompagner sur ce chemin, c’est avoir l’envie de débloquer des limites que l’on se met, se sentir plus puissant.e, oser réaliser des choses qu’on ne se permettaient pas avant...

          Ce que j’ai envie d’apporter avec les séances de coaching c’est aussi une plus grande compréhension de toi-même et de ce que tu ressens.
          Et ainsi acquérir des outils pour te sentir plus aligné.e.</p>

        </div>
      </div>
      <div className="content-coaching">
        <div className='coaching-text'>
          <p> <strong> Pourquoi ce type de coaching ?</strong></p>

          <p> Passionnée par le développement personnel et le féminisme, j'ai crée un coaching sur mesure basé sur l'empowerment et la recherche d'alignement. Ayant étudié différents outils de coaching qui m'ont beaucoup aidé, j'ai eu envie d'y associer toutes mes connaissances sur la déconstruction du genre et des oppressions systémiques. Le féminisme m’a ainsi beaucoup apporté, cela m’a permis de mettre des mots sur ma colère, comprendre pourquoi je ressentais de la frustration, des incompréhensions sur le système tel qu’il est fait. J'ai réussi à dépasser les barrières et croyances pour me sentir plus puissante, plus en conscience et alignée.</p>

          <p> J’ai organisé des retraites, des ateliers et j'ai créé une association qui fait de la pédagogie sur les violences systémiques. Je souhaite accompagner sur cette voie par le coaching car je trouve encore plus puissant de pouvoir transmettre ces outils. À toi de jouer ! </p>
        </div>
      </div>
    </div>
  );
}
