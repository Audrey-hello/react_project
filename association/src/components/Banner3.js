import React from 'react';
import gif from "./gif_rainbow.gif";
import './Banner.css';
import './Banner3.css';

function Banner(props) {
  return (
    <div>
      <div className='banner-container3'>
        <div className="image-banner3" >
          <img src={props.name} />
          <div className='banner_title'>

            <h1>{props.title}</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
