console.log("funkcijos.mjs pradzia");

function suma (a, b) {
    return a + b;
}

function atimtis (a, b) {
    return a - b;
}

function daugyba (a, b) {
    return a * b;
}

export {
    suma,
    atimtis as subtraction
};

console.log("funkcijos.mjs pabaiga");
