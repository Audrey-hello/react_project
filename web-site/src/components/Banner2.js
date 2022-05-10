import React from 'react';
import '../styles/Banner.css';
import banner_group from '../img/banner_group.jpg';

function Banner2() {
  return (
    <div className='banner-container2'>
      <div className="image-banner2" >
        <img src={banner_group} alt="unsplash d'une femme méditant"/>
      </div>
    </div>
  )
};

export default Banner2;
