import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './Navbar';



const Navbar = () => {
  return (
    <div className='lmj-banner'>
      <p> Résonance </p>
      <Nav>
        <NavbarContainer>
          <NavLogo className='/'></NavLogo>
          <NavMenu>
            <NavItem className="">
              <NavLinks className="about"> About </NavLinks>
            </NavItem>
            <NavItem className="">
              <NavLinks className="about"> Events </NavLinks>
            </NavItem>
            <NavItem className="">
              <NavLinks className="about"> Content </NavLinks>
            </NavItem>
            <NavItem className="">
              <NavLinks className="about"> Content </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Navbar;

reportWebVitals();
