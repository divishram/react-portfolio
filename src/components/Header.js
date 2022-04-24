
import React from 'react';
import "../App.css";

const Header = () => {
      return (  
        <div>
        <div className="bg" />    
        <h1>D.R.</h1>
        <div className="icon">
          <i className="fa fa-bars" id="burger" />
          <div className="menu-links" id="links">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href>About</a></li>
              <li><a href>Contact</a></li>
            </ul>
          </div>
          <div className="desktop-menu">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href>About</a></li>
              <li><a href>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      );
    }

export default Header;