'use strict';

/*
Masinu lenktynes
masyvas is 8 masinu (2 is ju sportines)
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
jei masina sportine, su tikimybe 50% pakeis spoilerio pozicija
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia mazejimo tvarka

komentatorius
kas 100 km reikia atspausdinti lyderio pavadinima ir nuvaziuota atstuma
*/


/// ==== LENKTYNES ==== ///
class Masina {

   constructor(pavadinimas, maxGreitis) {
      this.pavadinimas = pavadinimas;
      this.maxGreitis = maxGreitis;
      this.greitis = 0;
      this.atstumas = 0;
   }

   gazas(kiek) { 
      if (kiek > this.maxGreitis) {
         this.greitis = this.maxGreitis;
      }
      if (this.greitis + kiek < 0) {
         this.greitis = 0;
      } else {
         this.greitis += kiek;
      }
   }

   vaziuojam() {
      this.atstumas += this.greitis;
   }
}

class SportineMasina extends Masina {

   constructor(pavadinimas, maxGreitis) {
      super(pavadinimas, maxGreitis);
      this.spoileris = false;
   }

   pakeiskSpoilerioPozicija() {
      let rand = Math.random();
      if (rand >= 0.49) {
          this.spoileris = true;
      } else {
          this.spoileris = false;
      }
   }
}

let m1 = new Masina('Volvo', 220);
let m2 = new Masina('BMW M5', 250);
let m3 = new Masina('Opel', 200);
let m4 = new Masina('Mercedes-Benz', 260);
let m5 = new Masina('Ford', 230);
let m6 = new Masina('Peugeot', 220);
let m7 = new SportineMasina('Bugatti', 350);
let m8 = new SportineMasina('Porshe', 330);

let masinuMasyvas = [];

m8.gazas(100);
m8.gazas(-101);
m8.gazas(50);
m8.gazas(-52);

console.log(m8);