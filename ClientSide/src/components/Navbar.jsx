import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

import React, { useState } from 'react';
import '../css/navbar.scss' // Importing the CSS file

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };


    // const toggleLogin = () => {
    //     setShowLogin(!showLogin);
    // };

    return (

        <nav className={`nav container-fluid d-flex w-100 mb-5  sticky-top`}>
            <h4 className='white-text flex-row'><NavLink to='/dashboard' className="nav__logo">DCX CMS</NavLink></h4>

            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} style={{ zIndex: 1 }}>
                <ul className="nav__list my-auto" >
                    <li className="nav__item my-auto" style={{ fontSize: '14px' }}>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav__item my-auto" style={{ fontSize: '14px' }}>
                        <NavLink to='/pages'>Pages</NavLink>
                    </li>
                    <li className="nav__item my-auto" style={{ fontSize: '14px' }}>
                        <NavLink to='/categories'>Categories</NavLink>
                    </li>
                    <li className="nav__item my-auto" style={{ fontSize: '14px' }}>
                        <NavLink to='/users'>Users</NavLink>
                    </li>
                    <li className="nav__item my-auto">

                    </li>

                </ul>

                <div className="nav__close my-auto" onClick={toggleMenu}>
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <div className="nav__actions d-flex align-items-center  my-auto">
                <i className="ri-search-line nav__search  my-auto" onClick={toggleSearch} style={{ fontSize: '18px' }}></i>
                {
                    showSearch && (
                        <div className="search-popup border border-white  my-auto">
                            <input type="text" placeholder="Search by Category" />
                        </div>
                    )
                }
                <NavLink to='/userprofile' className="ri-user-line nav__login  my-auto" style={{ fontSize: '18px' }} ></NavLink>
                <div className="nav__toggle" onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                </div>

                <div>
                    <button className='btn btn primary btn-sm  btn-outline-light'>Logout</button>
                </div>


            </div>

        </nav>
    );
};

export default Navbar;

