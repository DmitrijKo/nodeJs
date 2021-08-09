console.log("index.js pradzia");
const gf = require("./src/guriosFunkcijos.cjs");
console.log("suimportavau guriosFunkcijos");
const f = require("./src/funkcijos.cjs");
console.log("suimportavau funkcijos");
console.log("index.js po importo");

console.log(f.suma (3, 4));
console.log("index.js pabaiga");
console.log(f.subtraction (3, 4));

console.log(gf.sumosKvadratas(1, 2));