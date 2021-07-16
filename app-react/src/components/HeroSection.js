import React from 'react';
import {Button} from './Button';
import './HeroSection.css'
import '../App.css';

function HeroSection() {
  return (
    <div className= 'hero-container'>
       <img src="" />
       <h1> Résonnace </h1>
        <div className='hero-btns'>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Book
      </Button>

        </div>
    </div>
  )
};
