import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = () => {
  return (
    <ul className='menuList'>
        <li className='menuList-item'>
            <Link to="/">Home</Link>
        </li>
        <li className='menuList-item'>
            <Link to="/">About</Link>
        </li>
        <li className='menuList-item'>
            <Link to="/products">Products</Link>
        </li>
        <li className='menuList-item'>
            <Link to="/">Contacts</Link>
        </li>
    </ul>
  )
}

export default MenuList