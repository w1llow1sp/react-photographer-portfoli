import React from 'react';

function MenuOverlay({ navbarOpen, setNavbarOpen }) {
    return (
        <nav className={`menu-container ${navbarOpen ? 'expended' : ''}`}>
            <ul className='menu-list'>
                <li className='nav-li'>
                    <a
                        href='/'
                        className='nav-link'
                        onClick={() => setNavbarOpen(false)}
                    >
                        {' '}
                        Home
                    </a>
                </li>
                <li className='nav-li'>
                    <a
                        href='/#contact'
                        className='nav-link'
                        onClick={() => setNavbarOpen(false)}
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MenuOverlay;
