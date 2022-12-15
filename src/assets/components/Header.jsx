import React from 'react';
import { Button } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

function Header({ navbarOpen, setNavbarOpen }) {
    return (
        <div className='d-flex header justify-content-between align-items-center'>
            <button
                className={navbarOpen ? 'menu-btn expended' : 'menu-btn'}
                onClick={() =>
                    setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)
                }
            >
                <div className='menu-icon-container'>
                    <span className='icon-line'></span>
                    <span className='icon-line'></span>
                    <span className='icon-line'></span>
                </div>
            </button>
            <div className='logo'>Photography Today</div>
            <div className='contact-btn'>
                <HashLink to="#contact" smooth>
                    <Button variant='primary'>Get A Quote</Button>
                </HashLink>
            </div>
        </div>
    );
}

export default Header;
