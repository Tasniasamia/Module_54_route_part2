import React from 'react';
import { Outlet } from 'react-router-dom';

const Navbarpage = () => {
    return (
        <>
        <div>
            <ul>
                <li><a href="/header">Header</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/About">About</a></li>

            </ul>
            
        </div>
        <Outlet></Outlet>

        </>
    );
};

export default Navbarpage;