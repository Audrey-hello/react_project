import React from 'react';
import './Engager.css';
import Banner3 from './Banner3';
import cover2 from './cover2.png';
import Navbar from './Navbar';
import picture from './17.png';
import merci from './merci.gif';
import Footer from './Footer';
import Button from './Button';


function Engager() {
  return (
     <>
      <Navbar />
      <Banner3 name={cover2} title="Venez nous soutenir !" />
      <div className="container-profile">
        <div className="profile-title">

        </div>
        <div className='engager-grid' id="profile">
          <div className='engager-content'>
            <h2>Devenir bénévole</h2>

            <p>

              <p> Participer à l'aventure✨</p>

              <p>Tu veux nous rejoindre mais tu ne sais pas trop comment ? Tu peux rejoindre notre équipe selon tes idées, tes compétences ou tout simplement ce qui te plaira de faire. Que ce soit pour occuper un rôle au sein du collectif ou pour organiser des évènements, nous y allons à notre rythme, dans la bienveillance et le fun !</p>
              <p>C'est aussi l'occasion de vivre une expérience en apprenant sur toi-même, sur le fonctionnement d'un collectif sexpo féministe et t' enrichir de la diversité de ses membres.</p>
              <p> N'hésitez pas à nous contacter pour savoir comment nous aider !</p>
            </p><br />

            {/* <Link to='/Home' className='btn-mobile'>
              <Button className='btn--outline'> Nous rejoindre </Button>
            </Link> */}
          </div>
          <div>
            <img className='image-profile-home' src={picture} alt='profile' />
          </div>
        </div>
        <div className='engager-grid' id="profile">
          <div>
              <img className='image-profile-don' src={merci} alt='profile' />
          </div>
            <div className='profile-content-don'>
              <h2> Nous soutenir </h2>
              <p>
              <p> Faire un don ✨</p>
                <p>
                  Si tu souhaite soutenir notre cause tu peux nous faire un don ! C'est une façon simple de valoriser nos initiatives et de nous aider à nous développer. Et faire des choses encore plus chouettes de façon pérenne. Quelle que soit la somme que tu donnes, nous serons rempli.e.s de gratitude !</p>
              </p><br />
              <p>Pour nous verser un don c'est par ici 👇 Merci pour ton soutien 🧡</p>

            <a href='https://www.helloasso.com/associations/matriarchy/formulaires/1/widget' className='btn-mobile'>
              <Button className='btn--outline'> Faire un don </Button>
            </a>

          </div>
        </div>
      </div>
      <Footer />
    </>

  )
};

export default Engager;
