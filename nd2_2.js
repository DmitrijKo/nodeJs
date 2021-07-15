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
   var zk = await sveikasSkaicius("Kiek kartu zaisim: ");
   var nuo = 1;
   var iki = 3;
   var i = 1;
   var pc1Laimejo = 0;
   var pc2Laimejo = 0;
   var lygiosios = 0;
   var a = 0;
   var p = 0;
   var z = 0;

   while (i <= zk) {
      var kp1 = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);
      var kp2 = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);

      if ((kp1 === 1 && kp2 === 2) || (kp1 === 2 && kp2 === 3) || (kp1 === 3 && kp2 === 1)) {
         pc2Laimejo = pc2Laimejo + 1;
         i++;
      } else if ((kp1 === 1 && kp2 === 3) || (kp1 === 2 && kp2 === 1) || (kp1 === 3 && kp2 === 2)) {
         pc1Laimejo = pc1Laimejo + 1;
         i++;
      } else  {
         lygiosios = lygiosios + 1;
         i++;
      }

      if (kp1 === 1 || kp2 === 1) {
         a = a + 1;
      } else if (kp1 === 2 || kp2 === 2) {
         p = p + 1;
      } else {
         z = z + 1;
      }
   }
   console.log('PC1 laimejo:', pc1Laimejo);
   console.log('PC2 laimejo:', pc2Laimejo);
   console.log('Lygiosios:', lygiosios);
   console.log('Akmuo iskrito:', a);
   console.log('Popierius iskrito:', p);
   console.log('Zirkles iskrito:', z);
 
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