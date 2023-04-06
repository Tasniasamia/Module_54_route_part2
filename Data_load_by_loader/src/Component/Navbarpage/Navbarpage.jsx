import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbarpage = () => {
    return (
        <>
        <div className='div1'>
    
       
                <Link to ="/header"style={{padding:"10px"}}>   Header</Link>
                <Link to ="/contact"style={{padding:"10px"}}>   Contact</Link>
                <Link to ="/About"style={{padding:"10px"}}>    About</Link>

     
            
        </div>
        <Outlet></Outlet>

        </>
    );
};

export default Navbarpage;