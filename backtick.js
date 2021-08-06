let vardas = "Jonas";
let amzius = 48;

function gimimoPaskaiciavimas(amzius) {
   return 2021 - amzius;
}

let s = `pirma ${vardas} \u5dEF eilute
antra eilute ${amzius}
trecia eilute ${gimimoPaskaiciavimas(amzius)}`;

let ss = "pirma " + vardas + " eilute\nantra eilute " + amzius + "\ntrecia eilute " + gimimoPaskaiciavimas(amzius);

console.log(s);
console.log("--");
console.log(ss);