
import React, {useEffect} from 'react';
import './Projets.css';
import resonance from './logo_reso.png';
import booksociety from './logo_bs.png';
import apolo from './cover_apolo.png';
import Booksociety from './Booksociety';
import Tousunpeu from './Tousunpeu';
import Apolo from './Apolo';
import Resonance from './Resonance';
import { HashLink as Link } from 'react-router-hash-link';
import Aos from "aos";
import "aos/dist/aos.css";
import transition from './transition6.png';



function Projets() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-projets">
      <div className="title-transition">
        <p> Mes projets réalisés </p>
      </div>
        <div className="transition">
        <img className='image-transition-projets' data-aos="fade-down-right" src={transition} alt='profile' />
      </div>
      <Tousunpeu />
      < Resonance />
      < Booksociety />
      < Apolo />
    </div>

  )
}

export default Projets;
