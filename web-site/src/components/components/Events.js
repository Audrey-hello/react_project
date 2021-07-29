import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Events.css';
import events from './events.png';


function Events() {


  return (
    <div className="events-container">
      {/* ---Banner--- */}
      <div className='banner-container2'>
        <div className="image-banner" >
          <img  src={events} />
        </div>
      </div>
      {/* ---------------- */}
      <h1 className='apropos-title'> Le programme Metta </h1>
      <div className="cards-content">
        <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" />
        <div className="text-metta">
          <h3 className="title-metta">Mais qu'est-ce que c'est ?</h3>
            <div className="content-metta">
             <p>
              Ce programme est destiné à toutes les personnes qui souhaitent aller plus loin dans votre quête de sens et vous sentir bien dans votre corps.
              Sur une période de 6 mois, vous serez suivi.e individuellement avec des sessions collectives.
              En fonction de vos besoins, vous aurez accès à une session de yoga par semaine, une session de coaching toutes les deux semaines et une session voyage au tambour par mois. Un point sera fait de façon régulière et vous aurez accès à du contenu écrit pour vous aider à bénéficier des effets du programme régulièrement.</p>
            </div>

            <h3> Pour qui ?</h3>

            <h3> Comment ça se déroule ?</h3>

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
