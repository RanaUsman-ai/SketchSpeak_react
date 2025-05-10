import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import logo from './images/logo.png'; // make sure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Slogan above navbar */}
      <div className="slogan">Your Style, Our Vision</div>

      <nav>
        <Link to="/Home" className="title">
          <img src={logo} alt="Logo" />
          SketchSpeaks
        </Link>

        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={isMenuOpen ? 'active' : ''} >
          <li className='homee'>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li><NavLink to="/Measurements">Measurements</NavLink></li>
          
         
          <li className='dropdown'>
               <span>Services</span>
               <ul className='dropdown-menu'>
               <li><NavLink to="/Stitching">Stitching</NavLink></li>
               <li><NavLink to="/PrototypeDesign">Prototype Design</NavLink></li>
               <li><NavLink to="/VirtualDom">Virtual DOM</NavLink></li>
               </ul>
          </li>

          <li className="dropdown">
      <span>Shopping</span>
      <ul className="dropdown-menu">
        <li><NavLink to="/Store">Store</NavLink></li>
        <li><NavLink to="/Feedback">Feedback & Reviews</NavLink></li>
      </ul>
    </li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
