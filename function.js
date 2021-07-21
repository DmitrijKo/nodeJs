'use strict';

function suma(a, b) {
   console.log(a + b);
}

suma(1, 2);


///===========///


function calc(veiksmas) {
   function suma(a, b) {
      return a + b;
   }

   function atimtis(a, b) {
      return a - b;
   }

   function kvadratas(a) {
      return a * a;
   }

   if (veiksmas == "sum") {
      return suma;
   } else if (veiksmas == "sub") {
      return atimtis;
   } else if (veiksmas == "sqr") {
      return kvadratas;
   }
}
console.log(calc("sqr")(5));
console.log(calc("sum")(10, 15));
console.log(calc("sub")(10, 15));


///===========///


function sudetis(a, b) {
   console.log("a:", a);
   console.log("b:", b);
   console.log("arguments:", arguments);

   let suma = 0;

   for (const r of arguments) {
      suma += r;
   }
   return suma;
};
console.log(sudetis(5, 6));
console.log(sudetis(15, 16, 17));