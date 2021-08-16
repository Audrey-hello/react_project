import React from 'react';
import { useEffect } from "react";
import { Button } from './Button';
import './Events.css';
import Prog from './Prog.png';
import Metta from './Metta.png'
import picture7 from './picture7.JPG';
import Topbar from './Topbar';
// import { Widget } from '@typeform/embed-react';
// import { Sidetab } from '@typeform/embed-react';
// import { PopupButton } from '@typeform/embed-react';
import { InlineWidget } from "react-calendly";
import { PopupButton} from "react-calendly";



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
        <div className="image-banner-events" >
          <Topbar />
          <img src={Prog} className="image-events" alt="image bannière avec de la peinture ocre en arrière plan avec l'intitulé Programme"/>
          {/* <div className="header-prog">
            <h1 className="prog-name"> Programme </h1>
          </div> */}
        </div>
      </div>
      {/* ---------------- */}
      <h1 className='apropos-title2'> Le programme Metta </h1>
      <div className="cards-content-events">
        <div className="photo-metta">
          <img src={Metta} className="image-metta" alt=" image du logo du proframme metta"/>
          <img src={picture7} className="image-metta2" alt="image de moi en noir et blanc" />
        </div>
          <div className="content-metta">
            <h3> Quel est l'objectif ?</h3>
              <p>
              Ce programme est destiné à toutes les personnes qui souhaitent se sentir plus aligné.e et bien dans leur vie. Que ce soit pour être bien avec soi-même, mieux te connaître ou réaliser des projets qui ont du sens pour toi. Seulement tu bloques et tu as l'impression de stagner. <strong>Ce suivi particulier mêlant yoga, thérapie par le son et coaching </strong> permet d'aller plus loin dans ta quête de sens et d'amour de soi. Metta voulant dire "amour bienveillant" et adelphité en Pali (Maitri en sanskrit), c'est la vision que je souhaite donner à ce programme.</p>

            <h3> Comment ça se déroule ?</h3>

             <p> <strong>Sur une période de 4 mois</strong>, tu seras suivi.e individuellement avec des sessions collectives.
              En fonction de tes besoins, tu auras accès à des sessions de yoga, de coaching et de voyage au tambour. Un point sera fait de façon régulière et tu auras accès à du contenu écrit pour t'aider à bénéficier des effets du programme dans ton quotidien.</p>
              <li> Il y aura 12 ateliers répartis sur les 4 mois. </li>
              <li> Un point individuel toutes les 2 semaines </li>
              <li> Un appel de groupe une fois par mois</li>
              <li> L'accès à une commaunauté pour vous apporter du soutien</li>
              <li>Un bilan à la fin du programme</li> <br />


            <h3> Est-ce fait pour toi ? </h3>
              <p> Il est n'est pas facile de trouver le temps et l'énergie d'avancer dans ses projets, d'y voir clair, de se sentir légitime et d'oser des changements profonds sur soi. Alors tu abandonnes, laissant tes projets et problèmes de côté. <strong> Avoir un suivi permet de véritablement avancer sans se mettre de pression.</strong> Cela te permettra de découvrir de nouveaux outils de développement personnel avec une vision féministe, que ce soit par le corps, par l'esprit ou par la parole. Si tu sens que tu as besoin d'être accompagné.e, qu'on te donne des objectifs, d'échanger et que tu es curieu.x.se d'explorer alors ce programme est fait pour toi. Tu pourras de même rencontrer d'autres personnes partageant les même problématiques que toi et vous soutenir !
              </p> <br />

            <h3> Pour quel résultat ? </h3>
              <p> À la fin <strong>tu auras les idées plus claires, des outils pour avancer dans des projets qui ont du sens, tu te sentiras plus alignée, inspirée et confiante.</strong> Tu repartiras boosté.e comme jamais. 🙌
              </p> <br />

          <p> <strong>Appelle-moi pour savoir si ce programme peut te convenir ! Nous discuterons ensemble des détails du programme Metta, de ton profil et décider si on se lance ensemble dans cette aventure ✨ </strong></p>


        </div>
      </div>
      < div className="Appel">
      <PopupButton
        className="btn--events"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideGdprBanner: true,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
        prefill={{
          customAnswers: {
            a1: 'a1',
            a10: 'a10',
            a2: 'a2',
            a3: 'a3',
            a4: 'a4',
            a5: 'a5',
            a6: 'a6',
            a7: 'a7',
            a8: 'a8',
            a9: 'a9'
          },
          date: new Date('2021-08-08T10:02:30.649Z'),
          email: 'test@test.com',
          firstName: 'Jon',
          guests: [
            'janedoe@example.com',
            'johndoe@example.com'
          ],
          lastName: 'Snow',
          name: 'Jon Snow'
        }}
        styles={{}}
        text="Réserve ton appel !"
        url="https://calendly.com/resonance-anahata/30min?back=1&month=2021-08"
        utm={{
          utmCampaign: 'Spring Sale 2019',
          utmContent: 'Shoe and Shirts',
          utmMedium: 'Ad',
          utmSource: 'Facebook',
          utmTerm: 'Spring'
        }}
      />
      </div>

    </div>
  )
}

export default Events;
