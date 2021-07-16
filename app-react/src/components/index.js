import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import { Nav, NavbarContainer, NavLogo } from './Navbar';



const Navbar = () => {
  return (
    <div className='lmj-banner'>
      <p> Résonance </p>
      <Nav>
        <NavbarContainer>
          <NavLogo></NavLogo>
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
