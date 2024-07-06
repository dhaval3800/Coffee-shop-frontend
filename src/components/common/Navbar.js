import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import HomeIcon from '../icons/HomeIcon';
import WishListIcon from '../icons/WishListIcon';
import CartIcon from '../icons/CartIcon';
import UserNavIcon from '../icons/UserNavIcon';

const Navbar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => location.pathname === path ? 'active' : '';

  const links = [
    { to: "/home", icon: <HomeIcon  active={getNavLinkClass('/home')}/> },
    { to: "/wishlist", icon: <WishListIcon  active={getNavLinkClass('/wishlist')} /> },
    { to: "/cart", icon: <CartIcon   active={getNavLinkClass('/cart')}/> },
    { to: "/profile", icon: <UserNavIcon  active={getNavLinkClass('/profile')}/> },
  ];


  return (
    <nav>
      <div className='nav-icon-container'>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className={`nav-icon ${getNavLinkClass(link.to)}`}>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
