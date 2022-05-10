import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h2>Courses</h2>
        <div className='header-h3'>
          <h3>Popular</h3>
          <h3>Favorite</h3>
          <h3>New</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
