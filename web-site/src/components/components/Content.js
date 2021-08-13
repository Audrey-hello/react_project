
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import sanityClient from "./Client.js";
import './Content.css';
import Contenu2 from './Contenu2.png';
import Pack from './Pack.png';
import Topbar from './Topbar';


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
          <img src={Contenu2} alt="image pour de présentation du blog avec un café posé sur une table titré ressources pour y ajouter tous types de ressources gratuites"/>
        </div>
      </div>
      {/* ---------------- */}

      <div className="blog-cards-content">
        <div className="title-Articles">
        <h1> Articles Blog </h1>
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

      <div className="content-ressources-free">
        <div className="title-outils">
        <h1> Les outils et ressources </h1>
        </div>
        <div className="content-ressources">
          <h5> Bénéficie du pack "En puissance" gratuitement donnant des outils concrets pour commencer ! Tu y trouveras aussi les thèmes que je propose avec Résonance et mon histoire ✨ </h5>
        <div>
          <Link to="./Coaching">
            <img className='image-profile-coaching' src={Pack} alt='pack en puissance donnant des outils de coaching'/>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Content;




