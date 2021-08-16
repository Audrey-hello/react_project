import React from 'react';
import './404_page.css';
import Topbar from './Topbar';

const PageNotFound = () => {
  return (
    <div className="wrapper">
      <Topbar />
      <img src="https://media.giphy.com/media/FEuvG7U6wNYEE/giphy.gif" className="gif-image" />
      <div className="info">
        <h3> Oups, cette page n'existe pas 🧐. Retentez plus tard ! </h3>
      </div>
    </div >
  )
}

export default PageNotFound
