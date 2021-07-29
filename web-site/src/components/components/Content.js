import React from 'react';
import { Button } from './Button';
import './Content.css';
import ressources2 from './ressources2.png';


function Content() {


  return (
    <div className="events-container" id="events">
      {/* ---Banner--- */}
      <div className='banner-container2'>
        <div className="image-banner" >
          <img src={ressources2} />
        </div>
      </div>
      {/* ---------------- */}
      <h1 className='apropos-title'> Ressources - Articles </h1>
      <div className="cards-content">
        <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="image-yoga" />
        <div className="text-metta">
          <h3 className="title-metta"> Bien-être </h3>
          <div className="content-metta">
            <h1> Santé mentale et  thérapie sonore </h1>
            <p>
              La ronronthérapie

              D’après des études scientifiques, avoir un chat nous procure du bien-être, améliore notre santé mentale et réduit l’anxiété.

              Vous l’aurez compris, j’ai un amour inconditionnel pour les chats, mais mis à part le fait que c’est très mignon, je me suis interrogée sur les bienfaits que cela nous procure. La ronronthérapie est une  façon de se relaxer en   bénéficiant des sons émis par les ronronnements d'un chat. Prouvée scientifiquement en analysant les effet  de ces sons sur les humains, cela entraînerait la production de sérotonine (l’hormone du bonheur).

              Le fait d'avoir un chat ferait donc beaucoup de bien à notre santé mentale (quand ça déchire pas les canapés en miaulant à 2h du matin, on est bien d'accord haha).Le son du tambour

              Et si vous n'avez ou ne pouvez avoir  de chat, je vous invite à explorer le son du tambour !

              Les vibrations du tambour ont effet relaxant et peuvent même nous mener à un état modifié de conscience nous aidant à  obtenir des clés de compréhensions sur ce que nous vivons.
              La sonothérapie

              C'est tout simplement une thérapie par le son. On peut utiliser la voix, gongs, bols tibétains...ces vibrations influent sur les ondes cérébrales et sur le corps pour nous mener à un état de détente et de relâchement des tensions.

              Quelle que soit la méthode, ces outils nous permettent d'accèder à de nouvelles sensations bénéfiques pour notre santé mentale. .</p>
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

export default Content;
