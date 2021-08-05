import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './Content.css';
import ressources2 from './ressources2.png';
import Topbar from './Topbar';
import sono from '../images/Sonothérapie.png'

function Content() {


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
        <div className="image-banner-content" >
          <Topbar />
          <img src={ressources2} />
        </div>
      </div>
      {/* ---------------- */}

      <div className="cards-content">
        <h1 className='title3'> Articles </h1>
        {/* <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" /> */}
        <div className="text-metta">
          <div className="title-metta">
            <li> Bien-être </li><span> // </span><li> Empowerment </li>
          </div>
          <div className="content-metta">
            <div className="container-cards-blog">

              <div className="card-blog">
                <Link to={'/ArticleSono'}> <img src={sono} className="image-blog" /></Link>
                <h1> Santé mentale et  thérapie sonore </h1>
                <hr></hr>
                <h4>La ronronthérapie </h4>

                <p>D’après des études scientifiques, avoir un chat nous procure du bien-être, améliore notre santé mentale et réduit l’anxiété.

                  Vous l’aurez compris, j’ai un amour inconditionnel pour les chats, mais mis à part le fait que c’est très mignon, je me suis interrogée sur les bienfaits que cela nous procure. La ronronthérapie est une  façon de se relaxer en   bénéficiant des sons émis par les ronronnements d'un chat. Prouvée scientifiquement...</p>
              </div>

              <div className="card-blog">
                <Link to={'/ArticleYoga'}> <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" className="image-blog" /></Link>
                <h1> Le yoga et ma connexion au corps</h1>
                <hr></hr>
                <h4> Connexion au corps et amour de soi </h4>

                <p>Cela fait des années que je pratique le yoga vinyasa et je ne m’en lasse pas. Cette pratique a des bienfaits sur moi sur de nombreux aspects.

                  <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
                  J’aime beaucoup les ouvertures de cœur et travailler la souplesse...</p>
              </div>

              <div className="card-blog">
                <Link to={'/ArticleYoga'}> <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" className="image-blog" /></Link>
                <h1> Le yoga et ma connexion au corps</h1>
                <hr></hr>
                <h4> Connexion au corps et amour de soi </h4>

                <p>🌻 Comment dépasser l’anxiété dans un climat d’incertitude ? 🙃

                  🤯 Pas évident de se projeter et de gérer ses émotions dans un contexte rempli d’incertitudes et de changements. Entre les projets qui tombent à l’eau ou restent en suspens, le besoin de retrouver une stabilité, pouvoir s’en sortir financièrement, vouloir ressortir comme avant...

                  🌙 Depuis la pleine lune et maintenant la nouvelle lune, j’ai des insomnies et plus d’anxiété que d’habitude. L’enfermement et l’incertitude du contexte actuel intensifient aussi les choses (surtout si on est hypersensible).

                  🙈 Comment j’arrive à lâcher prise dessus ?
                  Je ne fais pas grand chose à vrai dire :) j’essaie d’économiser mon énergie le plus possible et d’accepter que je traverse un moment désagréable.

                  🔥 Pour garder la motivation, j’essaie de ne pas penser à des choses qui me rendent anxieuse pour me concentrer sur qui me donne de la joie. J’essaie de planifier des projets et de trouver des solutions en m’adaptant au contexte.

                  🌱 Pour diminuer mon anxiété, je me reconnecte à mon corps avec un yoga doux. Je prends des petits moments de méditation et de respiration. Une musique relaxante. Du journaling quand j’ai trop de pensées. Pour mieux dormir je prends une tisane de Valériane et du chocolat 🍫.

                  🐾 J’aime aussi marcher dans la nature, envoyer du soutien et de l’amour aux personnes qui m’entourent. Être dans la compassion avec les personnes avec lesquelles je suis en conflit. Me remercier pour le chemin que j’accomplis et me donner des mots encourageants.

                  🧡Plein d’amour et de courage 💜Vous n’êtes pas seul.e.s. ✌️😊


                  <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
                  J’aime beaucoup les ouvertures de cœur et travailler la souplesse...</p>
              </div>

              <div className="card-blog">
                <Link to={'/ArticleYoga'}> <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" className="image-blog" /></Link>
                <h1> Le yoga et ma connexion au corps</h1>
                <hr></hr>
                <h4> Connexion au corps et amour de soi </h4>

                <p>Cela fait des années que je pratique le yoga vinyasa et je ne m’en lasse pas. Cette pratique a des bienfaits sur moi sur de nombreux aspects.

                  <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
                  J’aime beaucoup les ouvertures de cœur et travailler la souplesse...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
