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



const masinuMasyvas = [
   new Masina('Volvo', 220),
   new Masina('BMW M5', 250),
   new Masina('Opel', 200),
   new Masina('Mercedes-Benz', 260),
   new Masina('Ford', 230),
   new Masina('Peugeot', 220),
   new SportineMasina('Bugatti', 350),
   new SportineMasina('Porshe', 330)
];

masinuMasyvas[7].gazas(100);
masinuMasyvas[7].gazas(-101);
masinuMasyvas[7].gazas(50);
masinuMasyvas[7].gazas(52);

console.log(masinuMasyvas[7]);