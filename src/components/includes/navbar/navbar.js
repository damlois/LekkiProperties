import React from 'react';
import { useLocation } from "react-router-dom";
import Button from '../button/button';

import './style.css';

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitPathname = pathname.split("/");


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/" style={{fontSize: '25px'}}>
                    <span className='text-primary'>Lekk</span>Property
                </a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={`nav-item ${splitPathname[1] === "" || splitPathname[1] === "homepage" ? "active" : ""}`} >
                        <a className="nav-link" href="/homepage">Home</a>
                    </li>
                    <li className={`nav-item ${splitPathname[1] === "properties" ? "active" : ""}`}>
                        <a className="nav-link" href="/properties">Properties</a>
                    </li>
                    <li className={`nav-item " ${splitPathname[1] === "agents" ? "active" : ""}`}>
                        <a className="nav-link" href="/agents">Agents</a>
                    </li>
                    <li className={`nav-item " + ${splitPathname[1] === "contact-us" ? "active" : ""}`}>
                        <a className="nav-link" href="/contact-us">Contact</a>
                    </li>
                </ul>
                <Button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    name="Add Property"
                    icon="plus"
                    href="/add-property"
                />
            </div>
        </nav>
    )
}

export default Navbar;