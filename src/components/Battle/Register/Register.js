import React, { Component } from 'react';
import './register.css'
import { connect } from 'react-redux'
import { getAllPokemon, getSelectedPokemon } from '../../../ducks/reducer'
import {bindActionCreators} from 'redux'


class Instructions extends Component {

    componentDidMount(){
        this.props.getAllPokemon()

    }


    render(){
        console.log('team', this.props.team)



        /// FOR POKEMON NAMES ON LEFT
       var allPokemon = (this.props.pokemon.results) ? this.props.pokemon.results.map((pokemon, i)=> {
            return (
                <div  key={i + 1}>
                    <li className='register-poke-name' ><button className='register-btn-pokemon' onClick={()=> this.props.getSelectedPokemon(i + 1)}> {pokemon.name.toUpperCase()} </button> </li>
                </div>
            )
        
        }) : <div>Loading..</div>
        ////// end pokemon names left

        ///// Displaying the pokemon you selected to be on your team
        var teamOfPokemon =  (this.props.team >= 1) ? this.props.team.map((item, index)=>{
          return <div>
                test :{item.name}
            </div>
        }) : <div> loading... </div>

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
                        <div className='register-content-wrapper'>

                           <ul> {teamOfPokemon} </ul>

                        </div>
                    </div>
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