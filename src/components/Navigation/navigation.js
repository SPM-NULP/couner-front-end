// import React from 'react';
// import {useState} from 'react'
import Container from 'react-bootstrap/Container';
// import { Nav, Navbar, NavLink } from "react-bootstrap";
import {FiMenu} from 'react-icons/fi'
import 'bootstrap/dist/css/bootstrap.min.css';

import './navigation.css';
import logo from '../../assets/logo.png'
import { navLinks } from '../../utils/nav-link';

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./icons";

export const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div href="" exact to="/" className="nav-logo">
          <img src={logo} alt="logo" width="60px" height="60px" className='logo' href="#home"/>
            {/* <span className="icon">
              <CodeIcon />
            </span> */}
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



// export const Navigation = () => {
//         return (
           
//           <Navbar collapseOnSelect expand="sm" bg="dark" >
//                 <Container className='nav-c'>
//                     <div className='div-1'>
//                         <div className='logo' href="#home">
//                             <img src={logo} alt="logo" width={60} height={60} className='logo' href="#home"/>
//                         </div>
//                         <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"  >
//                             <div className="menu-icon" >
//                                 <FiMenu/>
//                             </div>
//                         </Navbar.Toggle>
//                         <Navbar.Collapse id="responsive-navbar-nav"  >
//                             <Nav>
//                                 {navLinks.map((item, _) => (
//                                     <NavLink key={item.id} href={item.id}>{item.title}</NavLink>
//                                 ))}
//                             </Nav>
//                         </Navbar.Collapse>
//                     </div>
                    
//                 </Container>
//             </Navbar>
//     )
// }
