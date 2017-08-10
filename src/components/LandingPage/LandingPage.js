import React, { Component } from 'react';
import './landing.css'
import {Link} from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className='img-wrapper'>
                    <img className='pokemon-logo' src={require('./original-poke.png')}/>
                </div>
                <div className='continue-wrapper'>
                    <h1 className='blink-text'> CLICK TO CONTINUE </h1>
                   <Link to='./options'> <button className='continue-btn'>CONTINUE</button> </Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;