/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import '../styles/Banner.css';
import cover from '../img/cover.png'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="image-banner" >
        <img src={cover} alt="couverture avec moi dessus et des graphiques végétaux"/>
      </div>
    </div>
  )
};

export default Banner
