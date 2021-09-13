import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"

function _drawPokemonList() {
  let template = ''
  ProxyState.apiPokemon.forEach(pokemon => template += pokemon.Template)
  document.getElementById('pokemon-list').innerHTML = template
}


export class ApiPokemonController {
    constructor() {
    
      ProxyState.on('apiPokemon', _drawPokemonList)
      pokemonService.getPokemon()
      console.log('this is the pokemonAPI controller')
    }
  }