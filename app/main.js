import { ApiPokemonController } from "./Controllers/ApiPokemonController.js";
import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";

class App {
  apiPokemonController = new ApiPokemonController();
  caughtPokemonController = new CaughtPokemonController();
  sandboxPokemonController = new SandboxPokemonController();

}

window["app"] = new App();
