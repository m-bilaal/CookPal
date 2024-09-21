import React from "react";
import homeBanner from "../../assets/images/homeBanner.svg";
import { navLinks } from "../../utils/helper";
import { Link } from "react-router-dom";
import '../banner/Banner.css';

const Banner = () => {
  return (
    <>
      <div className="homeBanner">
        <h1>Food Diary</h1>
        <img src={homeBanner} alt="Food Diary" />
      </div>
      <div className="catPages">
        <ul>
          {navLinks.map((link, id) => (
            <li key={id}>
              <Link className="catPagesLinks" to={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Banner;
