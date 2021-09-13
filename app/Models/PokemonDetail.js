export class PokemonDetail{
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
        return /*html*/ `
        <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
          <p>${this.description}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-success" onclick="app.caughtPokemonController.capturePokemon()">Learn</button>
        </div>
      </div>
        `
    }
}