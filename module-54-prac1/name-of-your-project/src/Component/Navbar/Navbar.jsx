import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Active from '../Active/Active';

const Navbar = () => {
    return (
        <>
        <div>
            <Link to="/Home"style={{padding:"5px"}}>Home</Link>
            <Active to="/About"style={{padding:"5px"}}>About</Active>
            <Active to="/FriendDataAll"style={{padding:"5px"}}>Friends_All</Active>
            <Active to="/Contact"style={{padding:"5px"}}>Contact</Active>
        </div>
<Outlet></Outlet>
        </>
    );
};

export default Navbar;