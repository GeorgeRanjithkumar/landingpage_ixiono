import React from 'react'
import './Navbar.css'
import {Button} from '@mui/material'
const NavBar = () => {
    return (
        <div className='Navbar'>
            <section className='nav'>
                <p>Logo</p>
                <ul>
                    <li><a href='#'>Exchange</a></li>
                    <li><a href='#'>Bridge</a></li>
                    <li><a href='#'>Contact us</a></li>
                    <li><Button className='login'><a href='#'>Log in</a></Button></li>
                    <li><Button className='sign'><a href='#'>Sign up</a></Button></li>
                </ul>
            </section>
        </div>
    )
}

export default NavBar
