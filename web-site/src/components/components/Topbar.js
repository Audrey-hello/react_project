import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import {Dropdown} from 'react-dropdown';




function Topbar() {

  const location = useLocation('/');
  const [colorChange, setColorchange] = useState('');
  useEffect(() => {
    if (location.pathname === '/'){
      setColorchange("black") }
    else {
     setColorchange('white');
    }
  }, [location.pathname]);


return (
  <>
    <div >
      <div className="navbar-container" >
        <div >
          <Navbar collapseOnSelect expand="lg" >
            <Link to="/" className='nav-links' style={{ color: colorChange }}  >
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
                      <li className='nav-item-init' >
                        <Link to="/events" style={{ color: colorChange }} >
                    Événements
                  </Link>
                </li>

                      <div class="nav-item dropdown" >
                        <a aria-haspopup="true" aria-expanded="false" id="nav-dropdown" class="dropdown-toggle nav-link" role="button" style={{ color: colorChange, marginTop: '-2px' }} href="#">
                        Thèmes</a>
                        <NavDropdown id="nav-dropdown"
                          title="">
                        <NavDropdown.Item as={Link} to="/Yoga">Yoga</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Voyage">Voyage au tambour</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Coaching">Coaching</NavDropdown.Item>
                        </NavDropdown>
                      </div>

                <li className='nav-item-init'>
                        <AnchorLink href='#profile' style={{ color: colorChange }} >
                  Qui suis-je ?
                  </AnchorLink>
                </li>
                <li className='nav-item-init'>
                        <Link to="/content" style={{ color: colorChange }} >
                    Contenu
                  </Link>
                </li>
                <li className='nav-item-init'>
                        <AnchorLink href='#footer' style={{ color: colorChange }}>
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
    </div>
  </>
)
};

export default Topbar;
