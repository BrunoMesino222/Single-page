import React from 'react'
import { Link } from "react-router-dom" 
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul className='list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <section>
            <Outlet></Outlet>
        </section>
    </div>
  )
}

export default Layout