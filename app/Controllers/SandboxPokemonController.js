import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js";


function drawCurrentPokemon(){
    console.log('did it work', ProxyState.currentPokemon);
    document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon.Template
}
export class SandboxPokemonController{
    constructor(){
        // ProxyState.on('sandboxPokemon', drawSandboxPokemon)
        ProxyState.on('currentPokemon', drawCurrentPokemon)
    
        console.log("hello from the Sandbox Pokemon Controller")
    }
    setCurrentPokemon(pokemonId){
         pokemonService.setCurrentPokemon (pokemonId)   
    }
}