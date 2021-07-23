'use strict';

function suma(a, b) {
   console.log(a + b);
}

//suma(1, 2);


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
//console.log(calc("sqr")(5));
//console.log(calc("sum")(10, 15));
//console.log(calc("sub")(10, 15));


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
//console.log(sudetis(5, 6));
//console.log(sudetis(15, 16, 17));


///===========///


function inc(sk) {
   sk++;
   console.log(sk);
}

let a = 2;
inc(a);
//console.log(a);


///===========///


function ipilk(x, kiek = 0) {
   x.kiekis += kiek;
}

let puodukas = {
   spalva: "rudas",
   turis: 300,
   kiekis: 0
}

ipilk(puodukas, 100);

//console.log(puodukas);


///===========///


function calc(veiksmas) {
   function suma(a, b) {
      console.log(r);
      return a + b;
   }

   function atimtis(a, b) {
      console.log(r);
      return a - b;
   }

   function kvadratas(a) {
      console.log(r);
      return a * a;
   }

   let r = Math.random();

   if (veiksmas == "sum") {
      return suma;
   } else if (veiksmas == "sub") {
      return atimtis;
   } else if (veiksmas == "sqr") {
      return kvadratas;
   }
}

let v1 = calc("sub");
let v2 = calc("sub");

//console.log(v1(32, 21));
//console.log(v2(15, 1));
//console.log(v1(10, 8));


///===========///


//function suma(a, b) {
//   console.log(r); // <--- kintomasis 'r' nepasiekiamas, nes yra deklaruotas kitoje funkcijoje.
//   return a + b;
//}

//function atimtis(a, b) {
//   console.log(r); // <--- kintomasis 'r' nepasiekiamas, nes yra deklaruotas kitoje funkcijoje.
//   return a - b;
//}

//function kvadratas(a) {
//   console.log(r); // <--- kintomasis 'r' nepasiekiamas, nes yra deklaruotas kitoje funkcijoje.
//   return a * a;
//}

//function calc(veiksmas, a, b) {
//   let r = Math.random(); // <--- bus klaida, nes nepasieksime kintamuojo 'r'.
//   return veiksmas(a, b);
//}
//console.log(calc(kvadratas, 5)); // <--- bus klaida.
//console.log(calc(suma, 5, 7));   // <--- bus klaida.


///===== Smart Object ======///


let puodukas1 = {
   spalva: "rudas",
   turis: 300,
   kiekis: 80,
   ipilk: function (kiek) {
      this.kiekis += kiek; // <--- 'this' sako, kad 'ipilk' funkcija veikia su 'puodukas' objektu.
   },
   isgerk: function (kiek) {
      this.kiekis -= kiek; // <--- 'this' sako, kad 'ipilk' funkcija veikia su 'puodukas' objektu.
   }
};

//console.log(puodukas1);
//puodukas1.ipilk(100);
//console.log(puodukas1);



///===========///



