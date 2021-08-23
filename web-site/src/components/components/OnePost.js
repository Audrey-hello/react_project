// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./Client.js";
import './ArticleSono.css';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Topbar from './Topbar';
import "./PreLoader.css";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return
    <div>
    loading
    </div> ;




  return (
      <div className="back-post">
        <Topbar />
        <div>
        <div className=" onepost-container min-h-screen ">
          <div className="onepost-inside container shadow-lg mx-auto  rounded-lg">
            <div className="relative">
              <div className="absolute h-full w-full flex items-center justify-center ">
                {/* Title Section */}
                <div className="header-article">
                  <h1 className="article-name lg:text-6xl mb-4"> {postData.title}</h1>
                </div>
              </div>
              <img
                className="w-full object-cover rounded-t"
                src={urlFor(postData.mainImage).url()}
                alt="posts du blog"
                style={{ height: "400px" }}
              />
            </div>
            <div className=" block-post px-16 lg:px-48  lg:py-20 prose lg:prose-xl max-w-full">
              <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>
        {/* <!-- .post-navigation --> */}
              <div className="row-container row-navigation row-navigation-light">
                <div className="row row-parent style-light limit-width">
                  <nav className="post-navigation">
                    <ul className="navigation">
                      <li className="page-prev">
                        <span className="btn-container">
                            <a className="btn-link text-default-color btn-icon-left" href="./Content" rel="prev">
                            <i className="fa fa-angle-left"></i>
                            <span> Retour à la page d'accueil </span>
                          </a>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
