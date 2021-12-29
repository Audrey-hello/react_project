/* eslint-disable jsx-a11y/img-redundant-alt */
// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./Client.js";
import Topbar from './Topbar';
import '../styles/Content.css';
import ressources2 from '../img/ressources2.png';
import Footer from './Footer';

export default function AllPosts() {
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
    <>
    <div className="events-container min-h-screen " id="events">
          <div className='banner-container3'>
            <div className="image-banner-content" >
              <Topbar />
              <img src={ressources2} alt="Image de la bannière avec un café en fond pour la page blog"/>
            </div>
          </div>
        <div className="cards-content">
          <div className="text-metta">
            <div className="title-metta">
              <li> Bien-être </li><span> // </span><li> Empowerment </li>
            </div>
          </div>
          <div className="content-metta">
            <div className="container-cards-blog">

          <div className="card-blog">

          {allPostsData &&
            allPostsData.map((post, index) => (
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white"
                  key={index}
                >

                <Link to={"/" + post.slug.current } key={post.slug.current}>
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt="Image des posts du blog pour mettre en avant les titres"
                  />
                  </Link>
                  <span
                    className="block relative h-full flex justify-end items-end pr
                      -4 pb-4">
                  </span>
                <h1>
                  {post.title}
                </h1>
               </span>
            )) }
         </div>
        </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
