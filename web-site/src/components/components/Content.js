
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import sanityClient from "./Client.js";
import './Content.css';
import ressources2 from './ressources2.png';
import { useParams } from "react-router-dom";
import Topbar from './Topbar';
import BlockContent from "@sanity/block-content-to-react";

function Content() {


  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const [allPostsData, setAllPosts] = useState(null);


  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);




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

      <div className="blog-cards-content">
        <div className="title-Articles">
        <h1> Articles </h1>
        </div>
        <div className="text-metta">
          <div className="title-metta">
            <li> Bien-être </li><span> // </span><li> Empowerment </li>
          </div>
           <div className="content-blog-posts">
            <div className="container-cards-blog">
              <div className="card-blog">

                {allPostsData &&
                  allPostsData.map((post, index) => (

                  <span key={index} className="posts">
                    <Link to={"/" + post.slug.current} key={post.slug.current}>
                      <img
                        className="image-blog"
                        src={post.mainImage.asset.url}
                        alt=""
                      />
                    </Link>
                    <hr></hr>
                    <h1 className="title-post">
                      {post.title}
                    </h1>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content;


                {/* <Link to={'/ArticleSono'}> <img src={sono} className="image-blog" /></Link>
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
                <Link to={'/Article3'}> <img src="https://images.unsplash.com/photo-1562776854-d151b0dd5ec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" className="image-blog" /></Link>
                <h1> Comment dépasser l’anxiété dans un climat d’incertitude ?</h1>
                <hr></hr>

                <p>  Pas évident de se projeter et de gérer ses émotions dans un contexte rempli d’incertitudes et de changements 🤯. Entre les projets qui tombent à l’eau ou restent en suspens, le besoin de retrouver une stabilité, pouvoir s’en sortir financièrement, vouloir ressortir comme avant...

                  🌙 Depuis la pleine lune et maintenant la nouvelle lune, j’ai des insomnies et plus d’anxiété que d’habitude. L’enfermement et l’incertitude du contexte actuel intensifient aussi les choses (surtout si on est hypersensible). </p>
              </div>

              <div className="card-blog">
                <Link to={'/ArticleYoga'}> <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" className="image-blog" /></Link>
                <h1> Le yoga et ma connexion au corps</h1>
                <hr></hr>
                <h4> Connexion au corps et amour de soi </h4>

                <p>Cela fait des années que je pratique le yoga vinyasa et je ne m’en lasse pas. Cette pratique a des bienfaits sur moi sur de nombreux aspects.

                  <blockquote><p>Le yoga est pour moi un moyen de se connecter à son corps, de booster sa confiance en soi.</p></blockquote>
                  J’aime beaucoup les ouvertures de cœur et travailler la souplesse...</p> */}


