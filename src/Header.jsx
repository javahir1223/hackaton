import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="logo1.png" style={{width:'50px'}} alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="header-button">
        <a href="#"className="btn"><img src="user1.png" style={{width:'30px' }} alt="user-logo" /></a>
      </div>
      
    </header>
  );
}

export default Header;
