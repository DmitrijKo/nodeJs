
/// === Paprasta funkcija === ///
let suma = function (a, b) {
   console.log("a", a);
   console.log("b", b);
   return a + b;
};

/// === Rodyklines funkcijos === ///
let sumaArrow = (a, b) => {
   console.log("a", a);
   console.log("b", b);
   return a + b;
};

let sumaArrowTrumpas = (a, b) => a + b;

let kvadratas = a => a * a;

let atsitiktinis = () => Math.trunc(Math.random() * 10 + 1);

console.log(suma(1, 2, 3, 4));
console.log(sumaArrow(1, 2, 3, 4));
console.log(sumaArrowTrumpas(1, 2));
console.log(kvadratas(3));
console.log(atsitiktinis());