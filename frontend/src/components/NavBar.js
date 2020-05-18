import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Logo to home</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
            <li>
                <Link to="/halal">Halal</Link>
            </li>
            <li>
                <Link to="/order-meat">Order Meat</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;