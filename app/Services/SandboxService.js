import { ProxyState } from "../AppState.js";
import { SandboxPokemonDetails } from "../Models/SandboxPokemonDetail.js";

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api'  
})

class SandboxService {
    async toggleStarter(pokemonId) {
        const pokemon = ProxyState.sandboxPokemon.find(s=> s.id === pokemonId)
        pokemon.starter = !pokemon.started
        await sandboxApi.put(`${ProxyState.user}/pokemon/${pokemonId}`, pokemon)
    }

    async catchPokemon(){

        const pokemonToCatch = new SandboxPokemonDetails(ProxyState.currentPokemon)
        let res = await sandboxApi.post(`${ProxyState.user}/pokemon`, pokemonToCatch)
        ProxyState.sandboxPokemon = [...ProxtState.sandboxPokemon, new SandboxPokemonDetails(res.data)]
    }
    
    
    async getPokemon(){
        let res = await sandboxApi.get(`${ProxyState.user}/pokemon`)
        console.log("log rez from sandbox service", res)
    }
}

export const sandboxService = new SandboxService