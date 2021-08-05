import React from 'react';
import { useEffect } from "react";
import { Button } from './Button';
import './Events.css';
import Programme from './Programme.png';
import Metta from './Metta.png'
import moi from './moi.jpg'
import star3 from './star3.svg'
import smiley from './smiley.svg'
import Topbar from './Topbar';

function Events() {


  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <div className="events-container" id="events">
      <ScrollToTopOnMount />
      {/* ---Banner--- */}
      <div className='banner-container3'>
        <div className="image-banner" >
          <Topbar />
          <img src={Programme} />
          <div className="header-prog">
            <h1 className="prog-name"> Programme </h1>
          </div>
        </div>
      </div>
      {/* ---------------- */}
      <h1 className='apropos-title2'> Le programme Metta </h1>
      <div className="cards-content-events">
        <div className="photo-metta">
          <img src={Metta} className="image-metta" />
          <img src={moi} className="image-metta2" />
        </div>
          <div className="content-metta">
            <h3> Quel est l'objectif ?</h3>
              <p>
              Ce programme est destiné à toutes les personnes qui souhaitent réaliser des projets qui font du sens mais qui bloquent. <strong>Ce suivi particulier mêlant yoga, thérapie par le son et coaching </strong> permet d'aller plus loin dans votre quête de sens et d'amour de soi.</p>

            <h3> Comment ça se déroule ?</h3>

             <p> <strong>Sur une période de 4 mois</strong>, vous serez suivi.e individuellement avec des sessions collectives.
              En fonction de vos besoins, vous aurez accès des sessions de yoga, de coaching et de voyage au tambour. Un point sera fait de façon régulière et vous aurez accès à du contenu écrit pour vous aider à bénéficier des effets du programme régulièrement.</p>
              <li> Il y aura 12 ateliers répartis sur les 4 mois. </li>
              <li> Un point individuel toutes les 2 semaines </li>
              <li> Un appel de groupe une fois par mois</li>
              <li> L'accès à une commaunauté pour vous apporter du soutien</li>
              <li>Un bilan à la fin du programme</li> <br />


            <h3> Pour qui ? </h3>
              <p>
              Il est n'est pas facile de trouver le temps et l'énergie d'avancer dans ses projets, d'y voir clair, de se sentir légitime et d'oser des changements profonds su soi. Alors on abandonne et on laisse ses projets et problèmes de côté. <strong> Avoir un suivi permet de véritablement avancer sans se mettre de pression.</strong> Si tu as envie de découvrir de nouveaux outils de développement personnel, que ce soit par le corps, par l'esprit ou par la parole. Si tu sens que tu as besoin d'être accompagné.e, qu'on te donne des objectifs, d'échanger et que tu es curieu.x.se d'explorer alors ce programme est fait pour toi. Cela te permettra aussi de rencontrer d'autres personnes partageant les même problématiques que toi et de vous soutenir !
              </p> <br />

            <h3> Pour quel résultat ? </h3>
              <p>
            À la fin <strong>tu auras les idées plus clairs, des outils pour avancer dans des projets qui ont du sens, plus alignée et une meilleure confiance en toi.</strong> Tu repartiras boosté.e comme jamais. 🙌
              </p> <br />

          <p> <strong>Appelle-moi pour savoir si ce programme peut te convenir ! Nous discuterons ensemble des détails du programme Metta, de ton profil et décider si on se lance ensemble dans cette aventure ✨ </strong></p>


        </div>
      </div>
      <div className='metta-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          Book un premier appel !
        </Button>
      </div>
    </div>
  )
}

export default Events;
