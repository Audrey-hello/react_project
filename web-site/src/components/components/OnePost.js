// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./Client.js";
import './OnePost.css';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Topbar from './Topbar';
import "./PreLoader.css";
import PageNotFound from "./404_page.js";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailIcon,
  EmailShareButton
} from "react-share";

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
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <PageNotFound />;




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
                  <div className="share_media">
                    <p> Partager l'article:</p>
                    <div className="share_button">
                      <FacebookShareButton
                        url={"https://www.anaresonance.com/" + postData.slug.current}
                        quote={"Résonance blog"}
                        hashtag="#anaresonance">
                        <FacebookIcon size={30} round />
                      </FacebookShareButton>
                    </div>
                    <div className="share_button">
                      <FacebookMessengerShareButton
                        url={"https://www.anaresonance.com/" + postData.slug.current}
                        appId="169776711944105"
                        className="share-button__share-button"
                      >
                        <FacebookMessengerIcon size={30} round fill={"#335C67"}/>
                      </FacebookMessengerShareButton>
                    </div>
                    <div className="share_button">
                      <EmailShareButton
                        subject="Article super chouette"
                        separator=""
                        body="Je t'invite à lire cet article publié par @ana.resonance"
                        url={"https://www.anaresonance.com/" + postData.slug.current}>
                        <EmailIcon size={30} round />
                      </EmailShareButton>
                    </div>
                  </div>

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
