import './navbar.css';
import Ball from'../EightBall/eightBall.jsx';
import React, {  } from 'react';
const NavBar = () => {
    return (
    <div className='navbarContainer'>
     <div className='row'>
        <div className='col-2'></div>
        <div className='widget-box col-3'id='widget-box-1'>
           <label> Magic 8 Ball</label>
           <Ball> </Ball>
        </div>
        <div className='widget-box col-3'id='widget-box-2'>
           This is also a test
        </div>
        <div className='widget-box col-3'id='widget-box-3'>
            So is this
        </div>
     </div>   
    </div>
    );
}
 
 
export default NavBar;