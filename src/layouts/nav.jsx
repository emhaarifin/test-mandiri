import React from 'react';
import CustomLink from '../components/CustomLink';
const Nav = () => {
  return (
    <nav className='flex container bg-white pt-24 mx-auto'>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/coin-list'>Coin List</CustomLink>
    </nav>
  );
};

export default Nav;
