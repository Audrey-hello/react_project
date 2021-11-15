import { Link } from 'react-router-dom';
import './Footer.css';
import insta from './linkedin.svg';
import facebook from './github.svg';
import mail from './mail.svg';



function Footer() {

  return (
    <div className='footer-container'>
      <div className="logo-footer">
        <h1 className="title-logo"> Audrey </h1>
      </div>
      <div className="footer-links">
        <h2 className="title-footer"> En savoir plus </h2>
        <div className="social-media-footer">
          <a href="https://github.com/Audrey-hello"><i><img src={facebook} className="social-logo" alt="image du logo insta" /></i></a>
          <a href="https://www.linkedin.com/in/audreylm/" ><i><img src={insta} className="social-logo" alt="image du logo facebook" /></i></a>
          {/* <a href="https://www.pinterest.fr/anahataresonance/_created/" ><i><img src={pinterest} className="social-logo-pint" alt="image du logo facebook" /></i></a> */}
        </div>
      </div>
      <div className="contact-content">
        <div className="contacter">
          <h2 className="title-footer" id='footer'>Me contacter</h2>
          <div className="social-logo-mail" >
            <Link to="https://www.linkedin.com/in/audreylm/" >
              <img src={mail} className="social-logo-mail" alt="image du logo mail" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
