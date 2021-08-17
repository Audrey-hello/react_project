/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';





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

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

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
                   Programme Metta
                  </Link>
                </li>

                      <div class="nav-item dropdown" >
                        <a aria-haspopup="true" aria-expanded="false" id="nav-dropdown" class="dropdown-toggle nav-link" role="button" style={{ color: colorChange, marginTop: '-2px' }} href="#">
                        Ateliers</a>
                        <NavDropdown
                         id="nav-dropdown"
                          title=""
                          show={show}
                          onMouseEnter={showDropdown}
                          onMouseLeave={hideDropdown}>
                        <NavDropdown.Item as={Link} to="/Yoga">Yoga</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Voyage">Voyage au tambour</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Coaching">Coaching</NavDropdown.Item>
                        </NavDropdown>
                      </div>

                <li className='nav-item-init'>
                  <Link to="/profile2" style={{ color: colorChange }} >
                  Qui suis-je ?
                  </Link>
                </li>
                <li className='nav-item-init'>
                  <Link to="/content" style={{ color: colorChange }} >
                    Contenu
                  </Link>
                </li>
                <li className='nav-item-init'>
                  <Link to='/contact' style={{ color: colorChange }}>
                    Contact
                  </Link>
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
