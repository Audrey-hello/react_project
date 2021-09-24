/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import ReactPlayer from 'react-player';
import './Voyage.css';
import './Coaching.css';
import picture10 from './picture10.JPG';
import Pack from './Pack.png';
import { useState} from "react";
import Topbar from './Topbar';
import Popup from "./Popup";
import Footer from './Footer';
import GoToTop from './GoToTop';
import { PopupButton } from "react-calendly";


export default function Coaching() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="coach-container">
      <GoToTop />
      <div className="coaching-banner" >
        <Topbar />
        <ReactPlayer
          url={[{ src: 'coaching2.mp4' }]}
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
      <div className="container-coaching">

        <div className="Pack">
          <h5> Reçois ton pack "En puissance" gratuitement et bénéficie d'outils concrets pour commencer ! ⬇</h5>
          <img
           className='image-profile-coaching'
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}src={Pack} alt='pack-coaching gratuit en puissance' />
          {isOpen && <Popup
            content={<>
              <iframe
              width="540"
              height="305"
              src="https://eed82655.sibforms.com/serve/MUIEAEs1laAqRLTV7_ymfpR0_b5vGtymgberPWHy_j0oEKu09HARszAy4l84vOfzaIhV0oZf1eXaTDHkD6pzs-ywwsnuOZF4gaj47W1bBrIMteyTW4iYm-LbgDmxorF0W0ht0ORQFwn1Zs2n7A7p5ifiz2MDeUlSA3KIfNo3RuQBE0VKl820Z3BlxBwHZTul0QLMRxsceclnw46R"
              frameborder="0"
              scrolling="auto"
              className="formulaire-pack"
              allowfullscreen >
              </iframe>
            </>}
            handleClose={togglePopup}
          />}
        </div>

        <div className='coaching-content'>
          <h2>  Coaching empowerment pour être bien avec soi et avec les autres </h2>
          <p>Ces sessions sont destinées à donner des clés de compréhension sur ce qu’on vit, que ce soit en tant que femme, personne queer, personne en minorité.</p><br>

          </br><p> Cela peut être <strong>analyser une situation, comprendre les mécanismes et les concepts derrière, obtenir des outils d'émancipation et de déblocage, apprendre à libérer la parole et prendre sa place...</strong> Voici quelques exemples :</p>

            <p>
            <li>Tu ressens un blocage pour entreprendre ou prendre la parole car tu ne te sens pas légitime ou moins fort.e que les autres.</li>
            <li>Tu souhaites te libérer des injonctions qui pèsent sur toi.</li>
            <li>Tu souhaites partager la charge mentale.</li>
            <li>Tu ne veux plus te sacrifier pour les autres et arrêter de culpabiliser.</li>
            <li>Tu as vécu une oppression (sexisme etc.) et tu ne sais pas comment en parler.</li>
            <li>Tu souhaites trouver un espace d'écoute pour parler de ce que tu vis.</li>
            <li>Tu souhaites trouver ta voie sur laquelle tu te sentiras aligné.e.</li>
            <li>Tu as envie de déconstruire tes croyances limitantes.</li>
            <li>Tu souhaites mieux gérer ta colère et ton sentiment d'injustice.</li></p> <br />

          <p> Vouloir se faire accompagner sur ce chemin, c’est avoir l’envie de débloquer des limites que l’on se met, <strong>se sentir plus puissant.e</strong>, oser réaliser des choses qu’on ne se permettaient pas avant.

          Ce que j’ai envie d’apporter avec les séances de coaching c’est aussi une plus grande compréhension de toi-même et de ce que tu ressens.
          Et ainsi acquérir des outils pour te sentir plus aligné.e.</p>

        </div>
      </div>
      <div className="content-coaching">
        <div className='coaching-text'>

          <h2> Pourquoi ce type de coaching ?</h2>

          <p> Passionnée par le développement personnel et le féminisme, j'ai créé un coaching basé sur l'empowerment et la recherche d'alignement. Ayant étudié différents outils de coaching qui m'ont beaucoup aidé, j'ai eu envie d'y associer toutes mes connaissances sur la déconstruction du genre et des oppressions systémiques. Le féminisme m’a ainsi permis de mettre des mots sur ma colère, comprendre pourquoi je ressentais de la frustration, des incompréhensions sur le système tel qu’il est fait. J'ai réussi à dépasser des barrières et de nombreuses injonctions pour me sentir plus puissante, plus en conscience et alignée.</p>

          <p> J’ai organisé des retraites, des ateliers et j'ai créé une association qui fait de la pédagogie sur les violences systémiques. Je souhaite t'accompagner sur cette voie par le coaching car je trouve encore plus puissant de pouvoir transmettre ces outils. À toi de jouer ! </p>
        </div>
        <div>
          <img className='image-profile-coaching2' src={picture10}  alt="moi de profil"/>
        </div>
      </div>
      < div className="Appel">
        <div className='appel-text'>
          <h5> <strong> Appelle-moi si une session de coaching avec moi t'intéresse ! Nous discuterons ensemble de tes objectifs et de ce que je propose. Nous déciderons à la fin de l'appel si on organise une première session ensemble ✨ </strong></h5>
        </div>
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
          text="Réserve ton premier rdv !"
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
      <Footer />
    </div>
  );
}
