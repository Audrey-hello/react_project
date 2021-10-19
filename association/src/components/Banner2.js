import React from 'react';
import gif from "./gif_rainbow.gif";
import './Banner.css';

function Banner(props) {
  return (
    <div>
      <div className='banner-container'>
        <div className="image-banner" >
          <img src={gif} />
          <div className='banner_title'>

          <h1>Découvrez nos évènements</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
