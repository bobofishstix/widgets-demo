import './navbar.css';
import Ball from'../EightBall/eightBall.jsx';
import Mine from '../Minesweeper/minesweeper.jsx'
import TTT from '../TTT/ttt.jsx';
import React, {  } from 'react';
import placeholder from './placeholder.jpg';
const NavBar = () => {
    return (
    <div className='navbar-container'>
        <div className='widget-box col-3'>
           <header className='title'> Magic 8 Ball</header>
           <img className='widget-preview' src={placeholder} alt='Boogaloo' />
           <Ball> </Ball> 
        </div>
        <div className='widget-box col-3'>
           <header className='title'> Tic-Tac-Toe</header>
           <img className='widget-preview' alt='Boogaloo' src={placeholder} />
           <TTT></TTT>
        </div>
        <div className='widget-box col-3'>
           <header className='title'> Minesweeper</header>
           <img className='widget-preview' alt='Boogaloo' src={placeholder} />
           <Mine></Mine>
        </div>
    </div>
    );
}
 
 
export default NavBar;