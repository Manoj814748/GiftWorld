import React, { useState } from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  
    const toggleMenu = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleProfile = (): void => {
      setIsProfileOpen(!isProfileOpen);
    };
  
    return (
      <header className="header">
        <div className="header-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> {/* Hamburger Menu Icon */}
          {isMenuOpen && (
            <ul className="dropdown-menu">
              <li>Home</li>
              <li>About</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
  
        <div className="header-logo">
          <h1>Gift Glimmer</h1>
        </div>
  
        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>
  
        <div className="header-icons">
          <div className="header-profile" onClick={toggleProfile}>
            <i className="fas fa-user-circle"></i> {/* Profile Icon */}
            {isProfileOpen && (
              <ul className="dropdown-profile">
                <li>My Profile</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
  
          <div className="header-cart">
            <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;