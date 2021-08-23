/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './404_page.css';
import Topbar from './Topbar';
import Footer from './Footer';



const PageNotFound = () => {



  return (
    <div className="wrapper">
      <Topbar />
      <img src="https://media.giphy.com/media/FEuvG7U6wNYEE/giphy.gif" className="gif-image" />
      <div className="info">
        <h3> Oups, cette page n'existe pas 🧐. Retentez plus tard ! </h3>
      </div>
      <Footer />
    </div >
  )
}

export default PageNotFound
