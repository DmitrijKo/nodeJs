console.log("gudriosFunkcijos.js pradzia");
const f = require("./funkcijos.cjs");
console.log("gudriosFunkcijos.js po importo");


function sumosKvadratas(a, b) {
    let suma = f.suma(a, b);
    return suma * suma;
}

module.exports = {
    sumosKvadratas
};
console.log("gudriosFunkcijos.js pabaiga");
