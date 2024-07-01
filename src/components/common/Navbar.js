import React from 'react';
import { Link } from 'react-router-dom';
import { BookOutlined, HeartOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './style.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav>
      <div className='nav-icon-container'>
        <Link to="/home" className='nav-icon active'>
          <HomeOutlined />
        </Link>
        <Link to="/wishlist" className='nav-icon'>
          <HeartOutlined />
        </Link>
        <Link to="/books" className='nav-icon'>
          <BookOutlined />
        </Link>
        <Link to="/profile" className='nav-icon'>
          <UserOutlined />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
