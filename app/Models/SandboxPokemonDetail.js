export class SandboxPokemonDetails{
    constructor(pokemonData){
        this.name = pokemonData.name
        this.id = pokemonData.id
        this.abilities = pokemonData.abilities
        this.forms = pokemonData.forms
        this.index = pokemonData.indices
        this.items = pokemonData.held_items
        this.moves = pokemonData.moves
        this.species = pokemonData.species
        this.sprites = pokemonData.sprites
        this.stats = pokemonData.stats
        this.types = pokemonData.types
    }


get Template() {
    return /*html*/`
    <li class="list-group-item py-2">
        <span class="ms-2" onclick="app.sandboxPokemonController._drawCurrentPokemon()">${this.name}</span>
      </li>
    `
    }
}