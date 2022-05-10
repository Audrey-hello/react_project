import React, { useState, useEffect } from 'react';
import './Topbar.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';





function Topbar() {

  const location = useLocation('/');
  const [colorChange, setColorchange] = useState('');
  useEffect(() => {
    if (location.pathname === '/') {
      setColorchange("black")
    }
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
                <h1>Audrey</h1>
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
                          <Link to="#profile" style={{ color: colorChange }} >
                            Mon profil
                          </Link>
                        </li>

                        <div class="nav-item dropdown" >
                          <a aria-haspopup="true" aria-expanded="false" id="nav-dropdown" class="dropdown-toggle nav-link" role="button" style={{ color: colorChange, marginTop: '-2px' }} href="#">
                            Projets</a>
                          <NavDropdown
                            id="nav-dropdown"
                            title=""
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}>
                            <NavDropdown.Item as={Link} to="#tsp">Tous un peu sauvage</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#resonance">Résonance</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#booksociety">Book society</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="#apolo">Apolo</NavDropdown.Item>
                          </NavDropdown>
                        </div>
                        <li className='nav-item-init'>
                          <a href="https://www.linkedin.com/in/audreylm/" style={{ color: colorChange }}>
                            Contact
                          </a>
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
