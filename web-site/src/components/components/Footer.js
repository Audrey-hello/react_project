/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import './Footer.css';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import mail from './mail.svg';


function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-links">
        <Link to={'/Contact'} >
          <button className='btn-contact'>Me contacter</button>
        </Link>
        <img src={mail} className="social-logo-mail" />
      </section>
      <div className="footer-links">
      <h2> Me suivre </h2>
       <section className="social-media">
        <Link to="/" className="social-logo">
          <img src={instagram} />
        </Link>
          <Link to="/" className="social-logo">
            <img src={facebook} />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Footer;
