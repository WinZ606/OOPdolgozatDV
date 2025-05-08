export default class TesztKerdes {
    #taroloElem;
    #adat;
    #pontokElem;
    #valaszGombok = [];
    #marValaszolt = false;
    constructor(adat, taroloElem, pontokElem) {
      this.#adat = adat;
      this.#taroloElem = taroloElem;
      this.#pontokElem = pontokElem;
      this.megjelenit();
    }
  
    megjelenit() {
      const kontener = document.createElement('div');
      kontener.classList.add('kerdes');
  
      // kérdések
      const magyarCim = document.createElement('h3'); magyarCim.textContent = this.#adat.magyar;
      const angolCim = document.createElement('h3'); angolCim.textContent = this.#adat.mondat;
      kontener.append(magyarCim, angolCim);
  
      // válaszok keverve
      const valaszokTomb = [...this.#adat.valasztas];
      for (let i = valaszokTomb.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valaszokTomb[i], valaszokTomb[j]] = [valaszokTomb[j], valaszokTomb[i]];
      }
  
      const valaszokDiv = document.createElement('div');
      valaszokDiv.classList.add('valaszok');
  
      valaszokTomb.forEach(valasz => {
        const gomb = document.createElement('button');
        gomb.textContent = valasz;
        gomb.addEventListener('click', () => this.kezeles(gomb));
        this.#valaszGombok.push(gomb);
        valaszokDiv.append(gomb);
      });
  
      kontener.append(valaszokDiv);
      this.#taroloElem.append(kontener);
    }
  
    kezeles(gomb) {
      if (this.#marValaszolt) return;
      this.#marValaszolt = true;
  
      const helyes = gomb.textContent === this.#adat.valasztas[0];
      gomb.style.backgroundColor = helyes ? 'lightgreen' : 'salmon';
  
      // letiltjuk a többi választ
      this.#valaszGombok.forEach(b => b.disabled = true);
  
      // pontszám frissítése
      const jelenlegiSzam = parseInt(this.#pontokElem.textContent.replace(/\D/g, '')) || 0;
      const ujSzam = jelenlegiSzam + (helyes ? 1 : 0);
      this.#pontokElem.textContent = `Pontjaid: ${ujSzam}`;
    }
  }