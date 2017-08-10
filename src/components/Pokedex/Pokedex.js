import React, { Component } from 'react';
import './pokedex.css'
import axios from 'axios'

class Pokedex extends Component {
    constructor(){
        super()
        this.state={
            pokemons: [],
            pokemon: null,
            
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
        this.setState({
            loading: true
        })
        axios.get(`http://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res=>{
            console.log(res)
            this.setState({
                pokemon: res,
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
                    <img  className='who-dat' src={require('./whos-that-pokemon.png')}/>
                        <div className='info'>
                        <div className='content-wrapper'>
                            <img  className='ball2' src={require('./pokeball.png')}/>

                        </div>
                    </div>
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

                <div className='info1'>
                    {/*<img  className='who-dat' src={require('./whos-that-pokemon.png')}/>*/}

                    <div className='content-wrapper'>
                        <div className='stats-wrapper'>
                            <h1 className='detailed-name'> {this.state.pokemon.data.name.toUpperCase()}</h1>
                            <ul>
                                <li className='stat-li'><span className='left'>{this.state.pokemon.data.stats["5"].stat.name.toUpperCase()}</span> <span className='right'>{this.state.pokemon.data.stats["5"].base_stat}</span></li>
                                <li className='stat-li'><span className='left'>{this.state.pokemon.data.stats["4"].stat.name.toUpperCase()}</span> <span className='right'>{this.state.pokemon.data.stats["4"].base_stat}</span></li>
                                <li className='stat-li'><span className='left'>{this.state.pokemon.data.stats["3"].stat.name.toUpperCase()}</span> <span className='right'>{this.state.pokemon.data.stats["3"].base_stat}</span></li>
                                <li className='stat-li'><span className='left'>{this.state.pokemon.data.stats["0"].stat.name.toUpperCase()}</span> <span className='right'>{this.state.pokemon.data.stats["0"].base_stat}</span></li>

                            </ul>
                        </div>
                        <div>    
                            
                            <img className='pokemon-img' src={this.state.pokemon.data.sprites.front_default} />
                        </div>
                    </div>


                </div>
            </div>

    )
    }
}

export default Pokedex;