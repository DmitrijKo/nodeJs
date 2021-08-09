console.log("index.js pradzia");
// const gf = require("./src/guriosFunkcijos.cjs");
import * as gf from "./src/guriosFunkcijos.cjs";

console.log("suimportavau guriosFunkcijos");

// const f = require("./src/funkcijos.cjs");
import { subtraction as minusas, suma } from "./src/funkcijos.mjs";

console.log("suimportavau funkcijos");
console.log("index.js po importo");

console.log(suma(3, 4));
console.log("index.js pabaiga");
console.log(minusas(3, 4));

console.log(gf.sumosKvadratas(1, 2));
