import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <div className="home-container">
                <h1 className='home-title'>Welcome to the Wacky Widget Warehouse!</h1>
                <h3 className='home-subtitle'>Explore the widgets I have made using React.</h3>
            </div>
            </div>
        )
    }
}
 
export default Home;