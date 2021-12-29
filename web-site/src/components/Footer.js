/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';
import mail from '../img/mail.svg';
import pinterest from '../img/pinterest.svg';
import tiktok from '../img/tiktok.svg';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="logo-footer">
        <h1 className="title-logo">Résonance </h1>
      </div>
      <div className="footer-links">
        <h2 className="title-footer"> Me suivre </h2>
        <div className="social-media-footer">
          <a href=""><i><img src={instagram} className="social-logo" alt="logo insta" /></i></a>
          <a href="" ><i><img src={tiktok} className="social-logo" alt="logo tiktok" /></i></a>
          <a href="https://www.facebook.com/resonance.anahata" ><i><img src={facebook} className="social-logo" alt="logo facebook" /></i></a>
          <a href="" ><i><img src={pinterest} className="social-logo-pint" alt="logo facebook" /></i></a>
        </div>
      </div>
      <div className="contact-content">
        <div className="contacter">
          <h2 className="title-footer" id='footer'>Me contacter</h2>
          <div className="social-logo-mail" >
            <Link to={'/Contact'} >
            <img src={mail} className="social-logo-mail" alt="logo mail" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mentions-légales">
        <h2 className="title-mention" > Conditions générales du site </h2>
        <div className="block-lien-mention">
          <a href="https://docs.google.com/document/d/1d9N3qxisZQ_xxm1bSfb7_k7EeZe5O4-B4vTLXVc2oCk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="lien-mention"> Mentions légales</a>
          <a href="https://drive.google.com/file/d/148ZLMYZs71JNm87HV19-L-t_PTVNaJMc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="lien-mention"> Politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
