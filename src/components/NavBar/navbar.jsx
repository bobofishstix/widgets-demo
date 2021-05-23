import './navbar.css';
import Ball from'../EightBall/eightBall.jsx';
import React, {  } from 'react';
import placeholder from './placeholder.jpg';
const NavBar = () => {
    return (
    <div className='navbar-container'>
        <div className='widget-box col-3'>
           <header className='title'> Magic 8 Ball</header>
           <img className='widget-preview' src={placeholder} alt='Boogaloo' />
           {/* <Ball> </Ball>  */}
        </div>
        <div className='widget-box col-3'>
           <header className='title'> Simon Says</header>
           <img className='widget-preview' alt='Boogaloo' src={placeholder} />
           {/* <Ball> </Ball>  */}
        </div>
        <div className='widget-box col-3'>
           <header className='title'> Megatron</header>
           <img className='widget-preview' alt='Boogaloo' src={placeholder} />
           {/* <Ball> </Ball>  */}
        </div>
    </div>
    );
}
 
 
export default NavBar;