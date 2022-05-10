import React from 'react';
import { useEffect } from "react";
import '../styles/Programme.css';
import cover from '../img/CoverB&C.png';
import BandC from '../img/Boost&Care.png'
import group from '../img/Boost&care_group.jpg';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';



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
      {/* Contenu de du programme---------------- */}
      <div className="programme-container">
        <h1 className='apropos-title2'> Un programme alliant soin de soi et coup de boost !</h1><br />
        <div className="cards-content-events">
          <div className="photo-metta">
            <img src={BandC} className="image-metta" alt=" logo du programme metta" />
            <img src={group} className="image-metta2" alt="un groupe de femmes" />
          </div>
          <div className="content-metta">
            <h3> Quel est l'objectif ?</h3>
            <p>
              Ce programme est destiné à toutes les personnes qui souhaitent bouger leur corps et retrouver confiance en soi. Que ce soit pour <mark>te sentir à ta place, mieux te connaître ou réaliser des projets qui ont du sens pour toi.</mark> Si tu as l'impression que ça fait longtemps que tu stagnes, que tu ne te sens plus trop connecté.e à ton corps, que tu as perdu confiance en toi et que tu bloques.<strong>Ce suivi particulier mêlant yoga, son et accompagnement aide à retrouver une énergie qui te boost à fond !</strong>.</p><br />

            <h3> Comment ça se déroule ?</h3>

            <p> <strong>Sur une période de 4 mois</strong>, tu seras suivi.e individuellement avec des sessions collectives.
              En fonction de tes besoins, tu auras accès à des sessions de yoga et d'accompagnement pédagogique. N'hésite pas à regarder les onglets dédiés sur ma page pour savoir ce que je propose ! Un point sera fait de façon régulière et tu auras accès à du contenu écrit pour t'aider à bénéficier des effets du programme dans ton quotidien.</p>
            <li> Il y aura 12 ateliers répartis sur les 4 mois : cercle de parole sur une thématique, yoga, autres activités personnalisées 😃. </li>
            <li> Un point individuel toutes les 2 semaines. </li>
            <li> Un appel de groupe une fois par mois.</li>
            <li> L'accès à une communauté pour vous apporter du soutien.</li>
            <li>Un bilan à la fin du programme.</li> <br />


            <h3> Est-ce fait pour toi ? </h3>
            <p> Pas facile de trouver le temps et l'énergie d'avancer dans ses projets, d'y voir clair, de se sentir légitime et de questionner notre rapport au monde. <strong> Avoir un suivi permet de véritablement avancer sans se mettre de pression.</strong> Cela te permettra de te sentir moin seul.e, accompagné.e par une vision qui prend en compte l'impact des oppressions systémiques. J'ai une approche <mark><strong> déculpabilisante</strong> et tournée vers le monde qui t'entoure.</mark>
              Si tu sens que tu as besoin <mark>qu'on te donne des objectifs</mark>, d'échanger, d'en apprendre plus sur les phénomènes systémiques et que tu es curieu.x.se d'explorer de nouveaux horizons alors ce programme est fait pour toi. Tu pourras de même rencontrer d'autres personnes partageant les même problématiques que toi et vous soutenir !
            </p> <br />

            <h3> Pour quel résultat ? </h3>
            <p> À la fin <strong>tu auras les idées plus claires, des outils pour avancer dans des projets qui ont du sens, tu te sentiras plus connecté.e à ton corps et confiant.e.</strong> Tu repartiras boosté.e comme jamais. 🙌
            </p> <br />

            <blockquote><h5> Le programme n'est pas encore ouvert mais n'hésite pas à t'abonner à mon compte insta pour être au courant de la prochaine session 💫 </h5></blockquote>

            <a href="" style={{ marginBottom: 30 }} target="_blank" rel="noopener">
              <button className="btn btn--follow">
                ▻▻ Me suivre pour en savoir plus
              </button></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Programme;
