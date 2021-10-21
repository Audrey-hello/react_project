import React from 'react';
import './Comite.css';
import Banner3 from './Banner3';
import sparkles from './team.gif';
import Navbar from './Navbar';
import Nawa from './1.png';
import Anahata from './hibou.png';
import Leonor from './pieuvre.png';
import Footer from './Footer';

 function Comite() {
  return (
  <>
    <Navbar />
    <Banner3 name={sparkles} title="Notre équipe" />
    <div className="container-profile">
      <div className="profile-title">
          <h1> Qui sommes-nous ?</h1><br /><br />
      </div>
      <div className='profile-grid' id="profile">
        <div className='comite-content'>
            <h2>Nawa </h2>
            <h5>⎨iel, accords neutres, fém., masc. alternés, non-binaire, queer, bi, blanche⎬ </h5>
          <p>
            <p></p>

            <p>Je suis lead communication ainsi que des événements shibari et participe à l’organisation de divers événements au sein de Matriarchy. Je fais parti·e du bureau des membres.</p>
            <p>Féministe, queer. Je participe à la création d’espaces, l’organisation et/ou l’encadrement d’événements shibari et/ou sexpositifs depuis plus de 6 ans (gestion de l’Ecole des cordes, création de l’association French Bonds et de Chatonnade par le passé puis, aujourd'hui, membre actif du Collectif Matriarchy)</p>
          </p><br />
        </div>
        <div>
          <img className='image-profile-comite' src={Nawa} alt='profile' />
        </div>
      </div>
      <div className='profile-grid' id="profile">
        <div className='comite-content'>
          <h2>Anahata </h2>
            <h5>⎨aelle, accords neutres/ fém.,non-binaire, queer, bi ascendant lesbienne, blanche⎬</h5>

        <p>
            <p>Présidente de l’association et créatrice de l’association, je gère l’organisation interne et des évènements divers. J’écris aussi du contenu sur instagram.</p>

            <p>Je fréquente le milieu s+ depuis plus de 2 ans, notamment en ayant créé des retraites dans un collectif. C’était le début de Matriarchy. Ce nom subversif a été créé pour susciter des prises de conscience sur le patriarcat. J’ai voulu apporter ma vision féministe militante dans ce milieu puis j’y rencontré de merveilleuses personnes avec lesquelles on partageait la même vision.  Et c’est ainsi qu’on s’est rassemblé·e·s autour de Matriarchy. Sinon je suis aussi une adepte du shibari et j’adore créer des expériences de déconstruction du patriarcat (ma passion).
            </p>
          </p><br />
        </div>
          <div style={{ marginTop: 70 }}>
          <img className='image-profile-comite' src={Anahata} alt='profile' />
        </div>
      </div>
        <div className='profile-grid' id="profile">
          <div className='comite-content'>
            <h2>Léonor </h2>
            <h5>⎨elle⎬</h5>

            <p>
              <p>J'adore cuisiner et aider à ce que les évènements se passent bien, anticiper, prévoir et vivre pleinement l'instant présent. Abonnée des événements shibari.</p>

              <p>Une absolutiste convaincue que toute chose se pense, fervente adepte de dialectique, et de philosophie. J'ai toujours vécu selon ce qui me semblait juste, et depuis quelques mois j'apprends qu'il existe des mots et des personnes merveilleuses qui partagent ces croyances. Sinon, j'oscille à l'infini entre un tapis de yoga et mon backpack.
              </p>
            </p><br />
          </div>
          <div style={{ marginTop: 40 }}>
            <img className='image-profile-comite' src={Leonor} alt='profile' />
          </div>
        </div>
    </div>
      <Footer />
  </>

  )
};


export default Comite
