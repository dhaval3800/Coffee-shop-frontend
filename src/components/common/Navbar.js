import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOutlined, HeartOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './style.css';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/home", icon: <HomeOutlined /> },
    { to: "/wishlist", icon: <HeartOutlined /> },
    { to: "/cart", icon: <BookOutlined /> },
    { to: "/profile", icon: <UserOutlined /> },
  ];

  const getNavLinkClass = (path) => `nav-icon ${location.pathname === path ? 'active' : ''}`;

  return (
    <nav>
      <div className='nav-icon-container'>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className={getNavLinkClass(link.to)}>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
