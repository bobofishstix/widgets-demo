import './navbar.css';
import React, {  } from 'react';
const NavBar = () => {
    return (
    <div className='navbarContainer'>
     <div className='row'>
        <div className='widget-box col-sm'id='widget-box-1'>
           This is a test
        </div>
        <div className='widget-box col-sm'id='widget-box-2'>
           This is also a test
        </div>
        <div className='widget-box col-sm'id='widget-box-3'>
            So is this
        </div>
     </div>   
    </div>
    );
}
 
 
export default NavBar;