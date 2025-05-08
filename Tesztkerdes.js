export default class Tesztkerdes {
  #szElem;
  #obj = {};
  #index;
  #gombelem;
  constructor(obj,szElem,index) {
    this.#szElem = szElem;
    this.#obj = obj;
    this.#index = index;
    this.megjelenit();
  }

  esemenykezelo(){}

  megjelenit() {
    let html = `
            <div class="kerdes">
                <h3>${this.#obj.magyar}</h3>
                <h3>${this.#obj.mondat}</h3>
                <p>${this.#obj.alap}</p>
                <div class="valaszok">
                    <button>${this.#obj.valasztas[0]}</button>
                    <button>${this.#obj.valasztas[1]}</button>
                    <button>${this.#obj.valasztas[2]}</button>
                    <button>${this.#obj.valasztas[3]}</button>
                </div>
            </div>
        `;
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }
}
