import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';
import { navLinks } from '../../utils/nav-link';
import React, { useState } from "react";
import "./navigation.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons";

export const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div href="" exact to="/" className="nav-logo">
            <img src='../../public/assets/logo.png' alt="logo" width="60px" height="60px" className='logo' href="#home"/>
          </div >

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((item, _) => (
                                    <li className="nav-item" key={item.id}>
                                    <a href={item.id}
                                      
                                      activeClassName="active"
                                      className="nav-links"
                                      onClick={handleClick}
                                    >
                                      {item.title}
                                    </a>
                                  </li>
                                ))}
          
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
