import React from 'react';
import './Comite.css';
import Banner3 from './Banner3';
import sparkles from './team.gif';
import Navbar from './Navbar';
import Nawa from './1.png';
import Anahata from './hibou.png';
import Leonor from './pieuvre.png';
import Mey from './licorne.png';
import Oya from './panther.png';
import Emilie from './ecureuil.png';
import Victoire from './chauvesouris.png';
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
            <p>Féministe, queer. Je participe à la création d’espaces, l’organisation et/ou l’encadrement d’événements shibari et/ou sexpositifs depuis plus de 6 ans (gestion de l’Ecole des cordes, création de l’association French Bonds et de Chatonnade par le passé puis, aujourd'hui, membre actif du Collectif Matriarchy).</p>
          </p><br />
        </div>
        <div>
          <img className='image-profile-comite' src={Nawa} alt='profile' />
        </div>
      </div>
      <div className='profile-grid' id="profile">
        <div className='comite-content'>
          <h2>Oya</h2>
          <h5>⎨pronom il/elle/iel, genderfluid, bi/pan, afroféministe, un mix d'Afrique et de Caraïbes⎬</h5>

          <p>
              <p>Je suis trésorière de l'association Matriarchy.</p>
              <p>Le rêve? Une éducation à la sexualité décolonisée.
              Cela fait quelques années maintenant que je questionne et recherche notre rapport aux corps et comment la sexualité tel que l'on aborde dans nos sociétés occidentales ne nous montre qu'un pan de l'histoire.
            </p>

            <p>Initialement entrepreneure sociale dans le milieu carcéral et TDS domina, je travaille à offrir des espaces de réflexions et de discussions sur la sexualité et ses rapports sociaux, en particulier dans ses rapports de dominations quel qu'ils soient.
            </p>
          </p><br />
        </div>
        <div style={{ marginTop: 40 }}>
          <img className='image-profile-comite' src={Oya} alt='profile' />
        </div>
      </div>
        <div className='profile-grid' id="profile">
          <div className='comite-content'>
            <h2>Emilie</h2>
            <h5>⎨pronom “elle”, queer, trans fem, pédé, meuf sans cis-passing, neuro-atypique⎬</h5>

            <p>
              <p>Je suis membre du bureau de Matriarchy. </p>
              <p>Je fréquente les milieux sexe positif depuis un peu plus de deux ans. Je suis intéressée par la création d’hétérotopie permettant de questionner nos normes sociales et permettant aux personnes qui sortent de ces normes de trouver des endroits leur permettant de s’épanouir. Je suis féministe queer, j’ai à cœur de travailler à l’inclusion de tout.e.s les personnes marginalisé.e.s. Je suis particulièrement intéressée par développer et proposer des activités autours du toucher, des plaisirs physique directe, de la masturbation. J’essaie de déconstruire et questionner, sans pour autant les renier, mes attentes qui me viennent de mes fantasmes. Je m'intéresse aussi en ce moment à expérimenter ma sexualité sous un angle plus spirituel.
              </p>
            </p><br />
          </div>
          <div style={{ marginTop: 40 }}>
            <img className='image-profile-comite' src={Emilie} alt='profile' />
          </div>
        </div>
        <div className='profile-grid' id="profile">
          <div className='comite-content'>
            <h2>Mey</h2>
            <h5>⎨al, accords épicènes/ alternés., non-binaire, queer, bi, racisé, neuro atypique, avec un handicap physique non visible ⎬</h5>

            <p>
              <p>Je suis membre du bureau et j'organise des évènements autour de la sexualité et du BDSM.</p>
              <p>J’envisage le plaisir, le  jeu, l’humour et la vulnérabilité comme des opportunités de questionner les dynamiques de pouvoir et les rôles cis heteronormés dans les connexion intimes, sexuelles et BDSM.
              </p>

              <p>Je m’engage depuis plusieurs années dans la communauté sx+ et lgbtqia+ notamment en concevant et  facilitant des retraites , des play parties et des ateliers autour des sexualités.
              </p>
              <p>Je travaille à produire des réflexions politiques et à structurer les pratiques autour du mouvement sex positive avec l’intention de contribuer à l' émergence d’une culture forte en matière de consentement, d’inclusion, et de santé communautaire dans les collectifs dont je fais parti.e et au niveau communautaire / inter associatif.</p>
            </p><br />
          </div>
          <div style={{ marginTop: 40 }}>
            <img className='image-profile-comite' src={Mey} alt='profile' />
          </div>
        </div>
      <div className='profile-grid' id="profile">
        <div className='comite-content'>
          <h2>Anahata </h2>
            <h5>⎨aelle, accords neutres/ fém.,non-binaire, queer, bi ascendant lesbienne, blanche⎬</h5>
            <p>
            <p>Présidente de l’association et créatrice de l’association, je gère l’organisation interne et des évènements divers. J’écris aussi du contenu sur instagram.</p>

            <p>Je fréquente le milieu s+ depuis plus de 2 ans, notamment en ayant créé des retraites dans un collectif. C’était le début de Matriarchy. Ce nom subversif a été créé pour susciter des prises de conscience sur le patriarcat. J’ai voulu apporter ma vision féministe militante dans ce milieu puis j’y ai rencontré de merveilleuses personnes avec qui partager cette vision.  Et c’est ainsi qu’on s’est rassemblé·e·s autour de Matriarchy. Sinon je suis aussi une adepte du shibari et j’adore créer des expériences de déconstruction du patriarcat (ma passion).
            </p>
          </p><br />
        </div>
          <div style={{ marginTop: 70 }}>
          <img className='image-profile-comite' src={Anahata} alt='profile' />
        </div>
      </div>
        <div className='profile-grid' id="profile">
          <div className='comite-content'>
            <h2>Victoire </h2>
            <h5>⎨Rita/Vic, pronom il/elle/iel, genderfluid bi/pan ⎬</h5>

            <p>
              <p>Passionné.e de cuisine, militant.e féministe intersectionel.le et tireur.se de tarot analytique on the side, j'aime nourrir les autres et m'assurer de leur bien être 🙂.</p>

              <p>Le collectif Matriarchy représente pour moi l'opportunité d'offrir un espace inclusif et safer pour les personnes queers. C'est aussi un lieu pour pouvoir nous permettre de s'exprimer, d'explorer, de déconstruire au sein d'une communauté bienveillante.
              </p>
              <p>Je fais également parti.e du cabaret féministe inclusif La Flaque depuis 5 ans où nous proposons un nouveau spectacle tous les mois avec lea meilleur des publics !</p>
            </p><br />
          </div>
          <div style={{ marginTop: 40 }}>
            <img className='image-profile-comite' src={Victoire} alt='profile' />
          </div>
        </div>
        <div className='profile-grid' id="profile">
          <div className='comite-content'>
            <h2>Léonor </h2>
            <h5>⎨elle⎬</h5>

            <p>
              <p>J'adore cuisiner et aider à ce que les évènements se passent bien, anticiper, prévoir et vivre pleinement l'instant présent. Abonnée des événements shibari.</p>

              <p>Une absolutiste convaincue que toute chose se pense, fervente adepte de dialectique et de philosophie. J'ai toujours vécu selon ce qui me semblait juste, et depuis quelques mois j'apprends qu'il existe des mots et des personnes merveilleuses qui partagent ces croyances. Sinon, j'oscille à l'infini entre un tapis de yoga et mon backpack.
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
