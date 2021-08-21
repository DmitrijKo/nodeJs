//let tekstas = "4564818";

//let sk = 0;

//for(let i = 0; i < tekstas.length; i++) {
//   sk = sk * 10 + (tekstas.charCodeAt(i) - 48);
//}


///


let tekstas = [4, 5, 6, 4, 8, 1, 8];

let sk = 0;

for (let i = 0; i < tekstas.length; i++) {
   sk = sk * 10 + tekstas[i];
}

//console.log(sk);

//console.log(sk);

/// antras variantas ///

//let sk = 0;

//sk = Number(tekstas);

//console.log(sk);


/*
Namu darbas
parasyti funkcija, kuri gautu skaiciu (svieka, teigiama)
ir garzina teksta kuris yra gautas skaiciaus dvejetaineje sistemoje
4564818 => "10001011010011101010010"
*/

let sk1 = Number(4564818).toString(2);
//console.log(sk1);

///

function numToBinary(num) {
   let number = num;
   let rezult = "";
   while (number >= 1) {
      rezult += (Math.floor(number % 2));
      number = number / 2
   }
   return console.log(rezult.split('').reverse().join(''));
}

numToBinary(4564818);
