import Tesztkerdes from "./Tesztkerdes.js";
import { szenvedoMondatok } from "./angol.js";

export default class Tesztkerdesek {
  #lista;
  #szElem;
  #pontszamElem;
  #pont;
  constructor(lista, szElem, pontszamElem) {
    this.#lista = lista;
    this.#szElem = szElem;
    this.#pontszamElem = pontszamElem;
    this.#pont = 0;
    this.kerdesek();
  }

  kerdesek() {
    for (let index = 2; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      new Tesztkerdes(element, this.#szElem, index);
    }
  }

  kever() {}
}
