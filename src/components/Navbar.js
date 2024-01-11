import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='nav-item'>
                    <Link to='/'><p className='nav-link'>Home</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Bio'><p className='nav-link'>Bio</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Discography'><p className='nav-link'>Discography</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Photos'><p className='nav-link'>Photos</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Resume'><p className='nav-link'>Resume</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact'><p className='nav-link'>Contact</p></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar