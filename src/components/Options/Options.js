import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './options.css'

class Options extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='pokeball'> 
                    <img className='ball' src={require('./pokeball.png')}/>
                </div>
            <div className='main-wrapper'>
                <div>
                    <h1 className='header'> BATTLE </h1>
                    <Link to='#'><img className='nintendo' src={require('./nintendo-color.png')}/></Link>
                </div>
               <div> 
                   <h1 className='header'> POKEDEX </h1>
                    <Link to='/pokedex'><img className='pokedex' src={require('./pokedex.png')}/></Link>
                </div>
            </div>
            </div>
        );
    }
}

export default Options;