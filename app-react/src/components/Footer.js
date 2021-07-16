import React from 'react'
import {Button} from './components/Button'
import { Link } from './components/Link'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-tab">
        <p className="footer-heading">
          Write me
        </p>
        <div className="input">
          <form>
            <input types="email" name="email" placeholder="your Email" className="footer-input" />
           <Button buttonStyle='btn-outline'> Post </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About me </h2>
            <Link to='/home'> How it works </Link>
          </div>
          <div className="footer-link-items">
            <h2> Follow me </h2>
            <Link to='/'> Instagram </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            <i className="fab fa-typo3"></i>
          </Link>
        </div>
        <div className="social-icons">
          <Link className="social-icon-link instagram" to="/" aria-label='Instagram'>
           <i className="fab fa-instagram" />
          </Link>
        </div>
      </section>
    </div>
  )
}
export default Footer;