
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




