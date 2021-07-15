const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (txt) => {
            resolve(txt);
        });
    });
}

function sveikasSkaicius(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, (num) => {
            resolve(parseInt(num));
        });
    });
}

async function main() {
   var nuo = 1;
   var iki = 3;
   
   while (zp != 'X') {
      var zp = await tekstoIvedimas("Pasirink A/P/Z/X: ");
      var kp = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);

      if ((kp === 1 && zp === 'P') || (kp === 2 && zp === 'Z') || (kp === 3 && zp === 'A')) {
         console.log('Tu laimejai');
      } else if ((kp === 1 && zp === 'Z') || (kp === 2 && zp === 'A') || (kp === 3 && zp === 'P')) {
         console.log('Laimejo kompiuteris');
      } else  if ((kp === 1 && zp === 'A') || (kp === 2 && zp === 'P') || (kp === 3 && zp === 'Z')) {
         console.log('Lygiosios');
      } else {
         console.log('Blogas pasirinkimas! Pakartok!')
      }
   }
   console.log('Zaidimo pabaiga!')
 
   rl.close();
}

main();

/*
--- Random ---
var nuo = 17;
var iki = 43;
var atsitiktinis = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);
console.log(atsitiktinis);
--------------

Zmogus pasirenka A/P/Z/X
A - akmuo
P - popierius
Z - zirkles
X - pabaiga


jei ivede kazka ne tokio - vel prasom, kad pasirinktu

Kompiuteris pasirenka A/P/Z random

Akmuo laimi pries zirkles
Popierius laimi pries akmeni
Zirkles laimi pries popieriu
jei abu pasirinko ta pati - lygiosios

reikia atspausdinti:
tu laimejai
lygiosios
laimejo kompiuteris

ir vel pasirinkimas zmogui

------

programa paklausia kiek kartu zaisim (skaicius)

zaidzia comp1 vs comp2

po visu zaidimu programa atspausdina statistika:
comp1 laimejo XXXX
lygiosios XXXX
comp2 laimejo XXXX

(per abu kompiuterius)
Akmuo iskrito XXXX
popierius iskrito XXXX
zirkles iskrito XXXX

*/