import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav>TASKIFY</nav>
      <div className='header'>
        <Link className='routes' to="/">Home</Link>
        <Link className='routes' to="/contact">Contact</Link>
        <Link className='routes' to="/about">About</Link>
      </div>
    </>
  )
}

export default Header;
