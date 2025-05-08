import { szenvedoMondatok } from "./angol.js";
import TesztKerdesek from "./Tesztkerdesek.js";

document.addEventListener("DOMContentLoaded", () => {
    const taroloElem = document.querySelector(".tarolo");
    const pontokElem = document.querySelector(".pontok");
    pontokElem.textContent = `Pontjaid: 0`;
    new TesztKerdesek(szenvedoMondatok, taroloElem, pontokElem);
  });