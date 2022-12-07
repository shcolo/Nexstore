import React, { useState } from 'react'
import { BsCaretDown } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './Navbar.css'
import Cart from '../Cart/Cart'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src=".//img/en.png" alt="" />
            <BsCaretDown />
          </div>

          <div className="item">
            <span>USD</span>
            <BsCaretDown />
          </div>

          <div className="item">
            <Link className='link' to='/product/1'>Women</Link>
          </div>

          <div className="item">
            <Link className='link' to='/product/1'>Men</Link>
          </div>

          <div className="item">
            <Link className='link' to='/product/1'>Children</Link>
          </div>
        </div>
        <div className="center head">

          <Link className='link' to='/'>NexStore</Link>
        </div>
        <div className="right">

          <div className="center">
            <Link className='link' to='/'>Home</Link>
          </div>
          <div className="center">
            <Link className='link' to='/'>About</Link>
          </div>
          <div className="center">
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className="center">
            <Link className='link' to='/'>Stores</Link>
          </div>

          <div className="icons">
            <AiOutlineSearch />
            <BsPerson />
            <AiOutlineHeart />
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <FiShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar