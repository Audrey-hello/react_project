import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from './facebook.svg';
import insta from './instagram.svg';
import mail from './mail.svg';



function Footer() {

  return (
    <div className='footer-container'>
      <div className="logo-footer">
        <h1 className="title-logo"> Matriarchy </h1>
      </div>
      <div className="footer-links">
        {/* <h2 className="title-footer"> En savoir plus </h2> */}
        <div className="social-media-footer">
          <a href="https://www.instagram.com/matriarchy_co/"><i><img src={insta} className="social-logo" alt="image du logo insta" /></i></a>
          <a href="https://www.facebook.com/matriarchy.co" ><i><img src={facebook} className="social-logo" alt="image du logo facebook" /></i></a>
        </div>
      </div>
      <div className="mail-content">
        <div className="contacter">
          <h2 className="title-footer" id='footer'>Nous contacter</h2>
          <div className="social-logo-mail" >
            <a href="mailto:matriarchy.co@gmail.com?subject=Votre question✨:" >
              <img src={mail} className="social-logo-mail" alt="image du logo mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
