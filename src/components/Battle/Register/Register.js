import React, { Component } from 'react';
import './register.css'
import { connect } from 'react-redux'
import { getAllPokemon, getSelectedPokemon } from '../../../ducks/reducer'
import {bindActionCreators} from 'redux'


class Instructions extends Component {
    constructor(){
        super();
        this.state={
            completeTeam: false,
            userInput: ''
        }




    }

    componentDidMount(){
        this.props.getAllPokemon()

    }




    render(){
        console.log('team', this.props.team)

        if(this.props.team.length >= 6) {
            this.setState({
                completeTeam: true,
            })
        }



        /// FOR POKEMON NAMES ON LEFT
       var allPokemon = (this.props.pokemon.results) ? this.props.pokemon.results.map((pokemon, i)=> {
            return (
                <div  key={i + 1}>
                    <li className='register-poke-name' ><button disabled={this.state.completeTeam} className='register-btn-pokemon' onClick={()=> this.props.getSelectedPokemon(i + 1)}> {pokemon.name.toUpperCase()} </button> </li>
                </div>
            )
        
        }) : <div>Loading..</div>
        ////// end pokemon names left

        ///// Displaying the pokemon you selected to be on your team
        var teamOfPokemon =  (this.props.team.length >= 1) ? this.props.team.slice(0,6).map((item, index)=>{
            return (
                    <div key={index} className='register-chosen-pokemon'>
                       <h1 className='registered-poke-name'> {item.name.toUpperCase()} </h1>
                       <img src={item.sprites.front_default}  />
                    </div>
            )
        }) : null

        ///end displaying team



    return (
            <div className='register-main-wrapper'>
                <div className='register-pokemon'>
                    <h1 className='register-pokemon-header'> Select a Pokémon </h1>
                    <ul>
                        {allPokemon}
                    </ul>

                </div>

                <div className='register-info'>
                    <div className='info'>
                           <h1 className='register-team-header'> REGISTER YOUR TEAM </h1>
                        <div className='register-content-wrapper'>
                          {teamOfPokemon} 
                        </div>
                    </div>
                        <button className='register-btn-battle' disabled={!this.state.completeTeam}> CONTINUE TO BATTLE </button> 
                </div>
            </div>
    );
}
};


function mapStateToProps(state){
    return {
        pokemon: state.allPokemon,
        team: state.pokemonTeam
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getAllPokemon, getSelectedPokemon }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(Instructions);