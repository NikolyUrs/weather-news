import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css'

function Header() {

    return (
        <>


            <nav className='navbar navbar-expand-lg navbar-light' >
                <div className='container-fluid'>
                    <a href="" className='navbar-brand'>Weather/News</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item'><NavLink className="nav-link" to="/">Main</NavLink></li>
                            <li className='nav-item'><NavLink className="nav-link" to="/weather">Weather</NavLink></li>
                            <li className='nav-item'><NavLink className="nav-link" to="/news">News</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header;