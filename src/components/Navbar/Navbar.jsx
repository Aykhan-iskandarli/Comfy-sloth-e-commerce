import React from 'react'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Row from '../Row/Row'
import MenuList from './MenuList'
import {BsFillCartFill} from "react-icons/bs"
import {FaUserPlus} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='navbar_section'>
        <Container>
            <Row>
            <div className="col-12">
                <nav className="navbar">
                    <Logo/>
                    <MenuList/>
                    <div className="navbar_right">
                        <Link to="/">
                            <div>Cart <BsFillCartFill/> <span className='badge'>4</span> </div>
                        </Link>
                        <Link to="/">
                            <span>Login <FaUserPlus/></span>
                        </Link>
                    </div>
                </nav>
            </div>
            </Row>
        </Container>
    </section>
  )
}

export default Navbar