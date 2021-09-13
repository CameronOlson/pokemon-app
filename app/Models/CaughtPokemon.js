export class CaughtPokemon {
    constructor(pokemonData){
        this.id = pokemonData.id
        this.name = pokemonData.name
        this.types = pokemonData.types
        this.sprites = pokemonData.sprites
    }

    get Template() {
        return /*html*/`
          <li class="list-group-item py-2 selectable"  onclick="app.sandboxPokemonController.setCurrentPokemon('${this.name}')">${this.name}</li>
        `
      }
    

}