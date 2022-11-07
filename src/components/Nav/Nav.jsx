import React from 'react'
import { NavLink } from 'react-router-dom'
import Logotype from '../../assets/Logotype.png'
import './nav.css'

export function Nav() {
    return(
        <nav>
            <ul>
                <li className='nav-text'>
                    <NavLink to="/">
                        Welcome
                    </NavLink>
                </li>
                <li className='nav-text nav-text-right'>
                    <NavLink to="/story">
                        Story
                    </NavLink>
                </li>
                <li>
                    <img className='logo' src={Logotype} alt="Logotype"/>
                </li>
                <li className='nav-text nav-text-left'>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </li>
                <li className='nav-text'>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
