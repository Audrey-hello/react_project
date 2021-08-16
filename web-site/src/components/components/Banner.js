/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Banner.css';
import cover from './cover.png'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="image-banner" >
        <img src={cover} alt="image de couverture d'un champ de blé"/>
      </div>
    </div>
  )
};

export default Banner
