import React, { useEffect } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface NavbarProps {
  showCart: React.MouseEventHandler
}

const Navbar = ({ showCart }: NavbarProps) => {
  const [scrollClass, setScrollClass] = useState<boolean>(false)

  // Bring in cartCount state from the store
  const cartCount = useSelector((state: RootState) => state.incrementCart.cartCount)

  // Change navbar color if it reaches certain distance
  const changeNavbarColor = () => {
    if(window.scrollY >= 650){
      setScrollClass(true)
    }else{
      setScrollClass(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={`navbar ${scrollClass ? 'changeNav' : ''}`}>
        <div className="navbarItems container">
            <h1><a href=''>Tim's Store</a></h1>
            <div className="navLinks">
                <a href="#about">About</a>
                <a href="#products">Shop</a>
            </div>
            <div className="navCart">
                <button onClick={showCart}><AiOutlineShoppingCart /></button>
                <p className='currentCartItemsNum'>{cartCount}</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar