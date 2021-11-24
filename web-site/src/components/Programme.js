import React from 'react';
import { useEffect } from "react";
import './Programme.css';
import cover from './CoverB&C.png';
import BandC from './Boost&Care.png'
import picture7 from './picture7.JPG';
import Topbar from './Topbar';
import Footer from './Footer';
import instagram from './instagram.svg';



function Programme() {



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
        <div className="image-banner-events" >
          <Topbar />
          <img src={cover} className="image-events" alt="bannière avec de la peinture ocre en arrière plan avec l'intitulé Programme" />
        </div>
      </div>
      {/* ---------------- */}
      <h1 className='apropos-title2'> Un programme alliant soin de soi et coup de boost !</h1><br /><br />
      <div className="cards-content-events">
        <div className="photo-metta">
          <img src={BandC} className="image-metta" alt=" logo du programme metta" />
          <img src={picture7} className="image-metta2" alt="moi les bras croisés" />
        </div>
        <div className="content-metta">
          <h3> Quel est l'objectif ?</h3>
          <p>
            Ce programme est destiné à toutes les personnes qui souhaitent se sentir plus aligné.e et retrouver confiance en soi. Que ce soit pour te sentir à ta place, mieux te connaître ou réaliser des projets qui ont du sens pour toi. Si tu as l'impression que ça fait longtemps que tu stagnes, que tu ne t'épanouies pas, que tu as perdu confiance en toi et que tu bloques.<strong>Ce suivi particulier mêlant yoga, thérapie par le son et coaching aide à y voir plus clair et retrouver une énergie qui te boost à fond !</strong>.</p><br />

          <h3> Comment ça se déroule ?</h3>

          <p> <strong>Sur une période de 4 mois</strong>, tu seras suivi.e individuellement avec des sessions collectives.
            En fonction de tes besoins, tu auras accès à des sessions de yoga, de coaching et de voyage au tambour. Un point sera fait de façon régulière et tu auras accès à du contenu écrit pour t'aider à bénéficier des effets du programme dans ton quotidien.</p>
          <li> Il y aura 12 ateliers répartis sur les 4 mois. </li>
          <li> Un point individuel toutes les 2 semaines. </li>
          <li> Un appel de groupe une fois par mois.</li>
          <li> L'accès à une communauté pour vous apporter du soutien.</li>
          <li>Un bilan à la fin du programme.</li> <br />


          <h3> Est-ce fait pour toi ? </h3>
          <p> Il est n'est pas facile de trouver le temps et l'énergie d'avancer dans ses projets, d'y voir clair, de se sentir légitime et d'oser des changements profonds sur soi.  <strong> Avoir un suivi permet de véritablement avancer sans se mettre de pression.</strong> Cela te permettra de découvrir de nouveaux outils de développement personnel avec une vision féministe, que ce soit par le corps, par l'esprit ou par la parole. Si tu sens que tu as besoin d'être accompagné.e, qu'on te donne des objectifs, d'échanger et que tu es curieu.x.se d'explorer alors ce programme est fait pour toi. Tu pourras de même rencontrer d'autres personnes partageant les même problématiques que toi et vous soutenir !
          </p> <br />

          <h3> Pour quel résultat ? </h3>
          <p> À la fin <strong>tu auras les idées plus claires, des outils pour avancer dans des projets qui ont du sens, tu te sentiras plus aligné.e, inspiré.e et confiant.e.</strong> Tu repartiras boosté.e comme jamais. 🙌
          </p> <br />

          <blockquote><h5> Le programme n'est pas encore ouvert mais n'hésite pas à t'abonner à mon compte insta pour être au courant de la prochaine session 💫 </h5></blockquote>

          <a href="" style={{ marginBottom: 30 }} target="_blank" rel="noopener">
          <button className="btn btn--follow">
            ▻▻ Me suivre pour en savoir plus
          </button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Programme;
