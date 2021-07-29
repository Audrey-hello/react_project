/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Banner.css';
import cover4 from './cover4.png'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="image-banner" >
        <img src={cover4} />
      </div>
    </div>
  )
};

export default Banner
