import React from 'react';

import { Button } from './Button';
import './Cards.css';


function Cards() {
  return (
    <div>
     <h1 className='card-title'> À propos </h1>
      <div className='cards'>
        <div>
        </div>
        <div className='card-category'>

          <p> Bienvenue ! Vous trouverez sur cette pages des ateliers sur différentes thématiques alliant le corps et l’esprit dans une optique féministe et holistique. </p>

          <h3> LES ATELIERS </h3>

          <p><strong> Yoga Vinyasa (tous niveaux) </strong> : yoga dynamique enchaînant différents flows pour nous aider à gagner en confiance en soi, se relaxer et avoir un meilleur rapport à son corps.</p><br>

          </br><p><strong> Voyage chamanique au tambour (voyage dans le monde de l’invisible) </strong> : voyage au son du tambour dans la tradition des chamanes afin de se connecter à aux esprits de la terre, lâcher prise et comprendre ce qui se passe en nous. Chacun.e y va à son rythme !</p> <br>

            </br><p><strong> Ateliers coaching </strong> : se libérer des injonctions, des normes et tout ce qui nous empêche d'être pleinement libres et nous-mêmes….ces ateliers peuvent-être  en mixité ou non-mixité et nous donne des outils pour nous donner confiance, nous  questionner et nous libérer des conditionnements intériorisés.</p>

          <h3> LES RETRAITES </h3>

            <p> Au sein d’un lieu ressourçant dans la nature et non loin de Paris, je propose des week-ends alliant bien-être, coaching et un cadre de réfléxion sur le thème du moment. On y repart avec plein d’idées et d’energies créatives ! </p>

            <div className='cards-btns'>
                <Button  buttonStyle='btn--outline' buttonSize='btn--large'>
                Book
              </Button>
            </div>
        </div>
      </div>
    </div>



  )
}

export default Cards;
