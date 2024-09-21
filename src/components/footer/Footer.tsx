import React from 'react';
import FooterLogo from '../../assets/images/footerLogo.svg';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={FooterLogo} alt="Cookpal" />
      <p>All Rights Reserved</p>
    </footer>
  )
}

export default Footer;
