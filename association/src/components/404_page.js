/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './404_page.css';
import Navbar from './Navbar';
import Footer from './Footer';



const PageNotFound = () => {



  return (
    <div className="wrapper">
      <Navbar/>
      <img src="https://media.giphy.com/media/FEuvG7U6wNYEE/giphy.gif" className="gif-image" />
      <div className="info">
        <h3> Oups, cette page n'existe pas 🧐. Retente plus tard ! </h3>
      </div>
      <Footer />
    </div >
  )
}

export default PageNotFound
