import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-link'>Shop</Link>
      <Link to='/cart' className='navbar-link'><IoCartOutline /></Link>
    </div>
  )
}

export default Navbar
