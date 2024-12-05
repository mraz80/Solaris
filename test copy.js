import { getKey0, getData0 } from "./api.js";
import { getKey1, getData1 } from "./api.js";

const solen = document.querySelector(".Solen");
const merkurius = document.querySelector(".Merkurius");
const venus = document.querySelector(".Venus");
const jorden = document.querySelector(".Jorden");
const mars = document.querySelector(".Mars");
const jupiter = document.querySelector(".Jupiter");
const saturnus = document.querySelector(".Saturnus");
const uranus = document.querySelector(".Uranus");
const neptunus = document.querySelector(".Neptunus");

solen.addEventListener("mouseover", () => {
  getKey0("POST", "/keys");
});

merkurius.addEventListener("mouseover", () => {
  getKey1("POST", "/keys");
});

const displayPosition = (event) => {
  console.log(`X-Pos: ${event.x} ,Y-Pos ${event.y}`);
};

document.addEventListener("mousemove", displayPosition);
