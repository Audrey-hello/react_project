import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import sanityClient from "../components/Client.js";
import '../styles/Content.css';
import contenu from '../img/contenu.png';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';


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
        `*[_type == "post"] | order(_createdAt desc){
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
      <div className='banner-container3'>
        <div className="image-banner-content" >
          <Topbar />
          <img src={contenu} alt="fon de présentation du blog avec un café posé sur une table titré ressources pour y ajouter tous types de ressources gratuites"/>
        </div>
      </div>
      <div className="blog-cards-content">
        <div className="title-Articles">
          <h1> Articles Blog </h1>
          <h3> Un peu de lecture 📖 </h3>
        </div>
        <div className="text-allposts">
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
    < Footer />
    </div>
  )
}
export default Content;




