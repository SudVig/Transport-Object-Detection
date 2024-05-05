import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import "./Navbar.css"
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  



const [isMobile,setMobile]=useState(false)

  return (
    <nav className='navbar'>
        <h1 className="logo">Car Detector</h1>
    

        <ul className={isMobile? 'nav-links-mobile':'nav-links'}>
            <Link to='/' className="home">
                <li>Home</li>
            </Link>
            <Link to='/about' className="about">
                <li>About</li>
            </Link>
            <Link to='/contact' className="contact">
                <li>Contact</li>
            </Link>
            
        </ul>

  <button className="menu" onClick={()=>setMobile(!isMobile)}>
        {isMobile? <IoClose size="32px" className='icons'/>:<IoMenu size="32px" className='icons' />}
        </button>

        

    </nav>
  )
}

export default Navbar
