/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Banner.css';
import cover4 from './cover4.png'
import cover6 from './cover6.png'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="image-banner" >
        <img src={cover6} alt="image de couverture d'un champ de blé"/>
      </div>
    </div>
  )
};

export default Banner
