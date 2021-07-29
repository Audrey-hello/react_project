import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';




function Topbar() {
  // const [click, setClick] = useState(false);


  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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
    <div >
      <div className="navbar-container" >
        <Navbar collapseOnSelect expand="lg">
          <Link to="/" className='nav-links' >
            <h1>Résonance</h1>
          </Link>
          <Container>
            <ul>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
          <div className='list' >
                <li className='nav-item-init'>
                  <Link to="/events"  >
                    Événements
                  </Link>
                </li>

                  <NavDropdown
                    id="nav-dropdown"
                    title="Thèmes"
                  >
                  <NavDropdown.Item as={Link} to="/Yoga">Yoga</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Voyage">Voyage au tambour</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Coaching">Coaching</NavDropdown.Item>
                  </NavDropdown>

                <li className='nav-item-init'>
                 <AnchorLink href='#profile' >
                  Qui suis-je ?
                  </AnchorLink>
                </li>
                <li className='nav-item-init'>
                  <Link to="/content"  >
                    Contenu
                  </Link>
                </li>
                <li className='nav-item-init'>
                  <AnchorLink href='#footer'>
                    Contact
                  </AnchorLink>
                </li>
              </div>
              </Nav>
            </Navbar.Collapse>
            </ul>
          </Container>
         </Navbar>
        </div>
    </div>
  </>
)
};

export default Topbar;
