import React from "react";
import "./Header.css";
import RegisterIcon from '../../assets/images/registerIcon.svg';
import LoginIcon from '../../assets/images/loginIcon.svg';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>COMMUNITY</li>
          <li>BOOKS</li>
          <li>RECEIPE INDEX</li>
          <li>POPULAR</li>
        </ul>
      </nav>
      <ul>
        <li><img className="registerIcon" src={RegisterIcon} alt="Register" />REGISTER</li>
        <li><img className="loginIcon" src={LoginIcon} alt="Login" />LOGIN</li>
      </ul>
    </header>
  );
};

export default Header;
