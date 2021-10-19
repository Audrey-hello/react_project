/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom';
import React from 'react';
import cover from './cover.png';
import './Banner.css';

function Banner(props) {
  return (
    <div>
      <div className='banner-container'>
      <div className="image-banner" >
            <img src={cover} />
          </div>
      </div>
    </div>
  )
}

export default Banner
