import React from 'react';
import './Charte.css';
import Banner3 from './Banner3';
import valeurs from './valeurs.jpeg';
import Navbar from './Navbar';
import giphy from './giphy-4.gif';
import manifeste from './charte.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from './Button';



function Charte() {
  return (
    <>
      <Navbar />
      <Banner3 name={valeurs} title="Nos valeurs" />
      <div className="container-profile">
        <div className="profile-title">
          <h1> Notre manifeste et mode de gouvernance</h1><br /><br />
        </div>
        <div className='profile-grid' id="profile">
          <div className='charte-content'>
            <h2> Nos Valeurs</h2>

            <p>



              <p>Le collectif est militant féministe intersectionnel luttant contre les violences systémiques existantes au sein de  notre société. Le collectif est non-essentialiste et travaille pour plus d'inclusivité.</p>

              <p>Nous souhaitons expérimenter un système alternatif au patriarcat, c'est-à-dire en luttant contre les oppressions systémiques et rapport de domination. Pour cela, nous souhaitons déconstruire ces mécanismes intégrés dans nos sociétés par de la réflexion, de l’éducation populaire, des ateliers, des retraites tout en véhiculant nos valeurs de bienveillance et d'inclusivité.</p>

              <p> Nous souhaitons préserver la planète et lutter contre les hiérarchies entre les espèces et toute forme de domination.</p>

              <p>Nous souhaitons créer des espaces de vie en communauté, de partage et de soutien entre nos membres. Chaque membre a droit à l’erreur et nous tenons à être indulgent.e envers nous-mêmes et les autres. Nous souhaitons créer un espace de non-jugement dans lequel nous pouvons oser entreprendre de nouvelles choses et apprendre de chacun.e de nous.</p>
              <p> Retrouve notre manifeste "Matriarch_charte" pour en savoir plus sur nos valeurs. </p>
            </p><br />



            {/* <a href='https://drive.google.com/file/d/1ktLcVnGNYWz2SA7g1XRFdSIwMeg0zxLp/view?usp=sharing'>
              <Button className='btn--outline'> Le Manifeste</Button>
            </a> */}
          </div>
          <div>

            <a href='https://drive.google.com/file/d/1ktLcVnGNYWz2SA7g1XRFdSIwMeg0zxLp/view?usp=sharing'>

              <img className='image-manifeste' src={manifeste} alt='profile' /></a>
          </div>
        </div>
        <div className='profile-grid' id="profile">
          <div className='charte-content'>
            <h2>Comment nous fonctionnons ?</h2>

            <p>

              <p> Notre gouvernance ✨</p>
              <p>
                Notre collectif fonctionne en gouvernance partagée, chacan peut avoir un ou plusieurs rôles et changer, ralentir, dynamiser selon ses envies. Nous valorisons l'intelligence collective et déconstruisons l'autorité hiérarchique pour plus de coopération et d'échange.</p>
              <p> Notre équipe est composée d'un comité membres qui constitue le bureau de l'association. Cette équipe est la plus impliquée dans l'organisation et gère les problématiques d'urgence. </p>
              <p> Les autres membres de l'association peuvent nous soutenir à leur rythme et peuvent prendre part, tant à l'organisation d'évènements, qu'à la prise de décisions auprès du comité membres.</p>
            </p><br />
          </div>
          <div>
            <img className='image-profile-home' src={giphy} alt='profile' />
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
};

export default Charte
