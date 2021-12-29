/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/404_page.css';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';



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
