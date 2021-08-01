let rand = Math.random();
//console.log(rand);

let nuo = -5;
let iki = 5;
let rand2 = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);
//console.log(rand2);

//console.log(100 - 100 == true);     

let spoileris = false;
//let rand1 = Math.random();

   function pakeiskSpoilerioPozicija() {
      
      if (Math.random() > .5) {
          spoileris = true;
      } else {
          spoileris = false;
      }
   }

   //pakeiskSpoilerioPozicija();
   //console.log(spoileris);

   let greitis = -5;

   naujasgreiti = -greitis;

   console.log(naujasgreiti);

