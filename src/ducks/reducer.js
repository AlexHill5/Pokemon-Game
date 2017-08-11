import axios from 'axios'


const ALL_POKEMON = "ALL_POKEMON"
const SELECTED_POKEMON = 'SELECTED_POKEMON'

let initialState = {
    allPokemon: [],
    pokemonTeam: []
}


export function getAllPokemon(){
    const request = axios.get('http://pokeapi.co/api/v2/pokemon/?limit=100')
    console.log(request)
    return {
        type: ALL_POKEMON,
        payload: request
    }
}

export function getSelectedPokemon(i){
      const selectedPokemon = axios.get(`http://pokeapi.co/api/v2/pokemon/${i}`)
      return {
          type: SELECTED_POKEMON,
          payload: selectedPokemon
      }

    }





function reducer(state = initialState , action){
    switch(action.type){
        case ALL_POKEMON + '_FULFILLED':
            return Object.assign({}, state, {allPokemon: action.payload.data})
        case SELECTED_POKEMON +'_FULFILLED':
            return  Object.assign({}, state.pokemonTeam, {pokemonTeam: [action.payload.data, ...state.pokemonTeam]})

    }
    return state;

}




export default reducer