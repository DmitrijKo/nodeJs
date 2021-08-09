console.log("funkcijos.js pradzia");
const gf = require("./guriosFunkcijos.cjs");

function suma (a, b) {
    return a + b;
}

function atimtis (a, b) {
    return a - b;
}

function daugyba (a, b) {
    return a * b;
}

module.exports = {
    suma,
    subtraction: atimtis
};

console.log("funkcijos.js pabaiga");
