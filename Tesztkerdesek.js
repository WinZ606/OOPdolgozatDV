import TesztKerdes from "./Tesztkerdes.js";
import { szenvedoMondatok } from "./angol.js";

export default class TesztKerdesek {
    #lista;
    #taroloElem;
    #pontokElem;
    constructor(lista, taroloElem, pontokElem) {
      this.#lista = lista.slice(2);
      this.#taroloElem = taroloElem;
      this.#pontokElem = pontokElem;
      this.#kever();
      this.#megjelenit();
    }
  
    #kever() {
      for (let i = this.#lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.#lista[i], this.#lista[j]] = [this.#lista[j], this.#lista[i]];
      }
    }
  
    #megjelenit() {
      this.#lista.forEach(adat => {
        new TesztKerdes(adat, this.#taroloElem, this.#pontokElem);
      });
    }
  }
  