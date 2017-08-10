import React, { Component } from 'react';
import './pokedex.css'
import axios from 'axios'

class Pokedex extends Component {
    constructor(){
        super()
        this.state={
            pokemons: [],
            pokemon: null
        }
    }

     componentWillMount(){
    axios.get('http://pokeapi.co/api/v2/pokemon/?limit=500')
    .then((res) => {
      console.log(res)
      this.setState({
        pokemons: res.data.results
      })
    })
    }


    handlePokemonData(i){
        axios.get(`http://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res=>{
            console.log(res)
            this.setState({
                pokemon: res
            })
            console.log('STATE', this.state.pokemon)
        })
    }



    render() {

        const pokemons = this.state.pokemons.map((pokemon, i)=> {
            return (
                <div  key={i + 1}>
                    <li className='poke-name' ><button className='btn-pokemon' onClick={()=> this.handlePokemonData(i + 1)}> {pokemon.name.toUpperCase()} </button> </li>
                </div>
            )
        })
        if(!this.state.pokemon){
        return (
            <div className='main-wrapper'>
                <div className='pokemon'>
                    <h1 className='pokemon-header'> Select a Pokémon </h1>
                    <ul>
                        {pokemons}
                    </ul>

                </div>

                <div className='info'>

                </div>
            </div>
        );
    }
    else return (
            <div className='main-wrapper'>
                <div className='pokemon'>
                    <h1 className='pokemon-header'> Select a Pokémon </h1>
                    <ul>
                        {pokemons}
                    </ul>
                </div>

                <div className='info'>
                    <div className='content-wrapper'>
                        <h1 className='detailed-name'> {this.state.pokemon.data.name.toUpperCase()}</h1>
                    <img className='pokemon-img' src={this.state.pokemon.data.sprites.front_default} />

                    </div>


                </div>
            </div>

    )
    }
}

export default Pokedex;