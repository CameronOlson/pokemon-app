import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/ApiPokemon').Value[]} */
  apiPokemon = []
  /** @type {import('./Models/SandboxPokemon').Value[]} */
  sandboxPokemon = []
  /** @type {import('./Models/CaughtPokemon').Value[]} */
  caughtPokemon = []

  currentPokemon = {}
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
