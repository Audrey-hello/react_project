import Topbar from './Topbar';
import React from 'react';
import './Profile2.css';
import profile from './profile.jpg';
import fond from './fond.png';

function Profile2() {
  return (
    <div className="container-profile2">
      <Topbar />
      <div className='banner-container-profile2'>
        <div className="image-banner-profile2" >
          <img src={fond} />
        </div>
        <div className="header-profile2">
          <h1 className="profile2-name"> Qui suis-je ?</h1>
        </div>
      </div>
      {/* <h1 className='title-profile' id="profile"> Qui suis-je ? </h1> */}
      <div className='profile2-grid'>
        <div className='profile-content'>
          <h2> Mon chemin </h2>

          <p>Je m’appelle Ana et je suis passionnée par ce qui nous permet de <strong>prendre consience du monde </strong> qui nous entoure et de ce qui nous aide à nous sentir bien. Après avoir travaillé pendant plusieurs années en finance, j’ai démissionné et décidé de changer de façon radicale ma façon de vivre <strong>plus alignée avec qui j'étais</strong>. Je me suis formée sur différentes pratiques qui m'ont aidé à trouver ma voie. Engagée dans l'égalité des genres et les droits humains, <strong>j’ai de même créé une association qui soutient les femmes et minorités de genre.</strong> </p>

          <p> J'accompagne désormais des personnes à <strong>trouver leur alignement, vivre de façon apaisée, trouver leur puissance et à s'aimer </strong>de manière authentique.</p>

          <p>Je suis une adepte du développement personnel, du yoga, des thérapies naturelles, cognitives et psychologiques et tout ce qui m’inspire sur le moment. J’aime allier ces techniques avec des prises de consiences sur nos rapports à autrui et notre role dans la société.</p>

          <p>Exploratrice et inspirée par des univers magiques et passionnants, <strong>je vous accompagne dans une aventure alliant le bien-être avec soi et l’ harmonie avec les autres.</strong></p>
        </div>
        <div>
          <img className='image-profile2' src={profile} alt='profile' />
        </div>
      </div>
    </div>

  )
}

export default Profile2;
