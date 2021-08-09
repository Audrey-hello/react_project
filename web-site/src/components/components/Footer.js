/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import './Footer.css';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import mail from './mail.svg';
import pinterest from './pinterest.svg';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="contact-content">
        <h2 className="title-footer" id='footer'>Me contacter</h2>
          <div className="social-logo-mail" >
            <Link to={'/Contact'} >
            <img src={mail} className="social-logo-mail" />
            </Link>
          </div>
      </div>
        <div className="logo-footer">
        <h1 className="title-logo">Résonance </h1>
        </div>
        <div className="footer-links">
          <h2 className="title-footer"> Me suivre </h2>
          <div className="social-media-footer">
          <a href="https://www.instagram.com/ana.resonance/"><i><img src={instagram} className="social-logo" /></i></a>
          <a href="https://www.facebook.com/resonance.anahata" ><i><img src={facebook} className="social-logo" /></i></a>
          <a href="https://www.pinterest.fr/anahataresonance/_created/" ><i><img src={pinterest} className="social-logo-pint" /></i></a>
          </div>
       </div>
    </div>
  );
}

export default Footer;
