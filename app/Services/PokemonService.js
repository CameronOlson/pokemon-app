import { ProxyState } from "../AppState.js";
import { CaughtPokemon } from "../Models/CaughtPokemon.js";
import { PokemonDetail } from "../Models/PokemonDetail.js";
import { SandboxPokemonDetails } from "../Models/SandboxPokemonDetail.js";





// @ts-ignore
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co'
  })

class PokemonService {
  // async getPokemonDetails(id){
  //   let res = await pokemonApi.get(id)
  //   ProxyState.currentPokemon = new PokemonDetail(res.data)
  // }
  async getPokemon(){
    let res = await pokemonApi.get('/api/v2/pokemon')
    console.log("log the res (this is from Pokemon Service)", res.data.results)
    ProxyState.apiPokemon = res.data.results.map(s => new CaughtPokemon(s))
  }
  async setCurrentPokemon(pokemonId){
    let res = await pokemonApi.get('/api/v2/pokemon/' + pokemonId)
    ProxyState.currentPokemon = new PokemonDetail(res.data)
    console.log('log the re', res.data)
  }
}

export const pokemonService = new PokemonService()