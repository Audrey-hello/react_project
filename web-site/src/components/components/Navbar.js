import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);


  // window.addEventListener('resize', showButton);

return (
  <>
    <div>
        <div className="navbar-container">
          {/* <div className="menu-icon" onClick={handleClick}>
          </div> */}
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                <h1>Résonance</h1>
              </Link>
              <div className='list'>
                <li className='nav-item'>
                  <AnchorLink href='#cards'  onClick={closeMobileMenu}>
                    Programme
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                <AnchorLink  href='#profile' onClick={closeMobileMenu}>
                  Qui suis-je ?
                  </AnchorLink>
                </li>
                <li className='nav-item'>
                  <Link to="/events"  onClick={closeMobileMenu}>
                    Contenu
                  </Link>
                </li>
                <li className='nav-item'>
                  <AnchorLink href='#footer'  onClick={closeMobileMenu}>
                    Contact
                  </AnchorLink>
                </li>
              </div>
            </ul>
        </div>
    </div>
  </>
)
};

export default Navbar;
