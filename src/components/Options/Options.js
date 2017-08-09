import React, { Component } from 'react';
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
                    <img className='nintendo' src={require('./nintendo-color.png')}/>
                </div>
               <div> 
                   <h1 className='header'> POKEDEX </h1>
                    <img className='pokedex' src={require('./pokedex.png')}/>
                </div>
            </div>
            </div>
        );
    }
}

export default Options;