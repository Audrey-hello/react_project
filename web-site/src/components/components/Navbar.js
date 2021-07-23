import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


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
         <div className="menu-icon" onClick={handleClick}>

           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
              <h1>Résonance</h1>
              <div className='list'>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
              <Link to="/content" className='nav-links' onClick={closeMobileMenu}>
                Content
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/events" className='nav-links' onClick={closeMobileMenu}>
                  Events
                </Link>
            </li>
          </div>
          </ul>
       </div>
    </div>
  </>
)
};

export default Navbar;
