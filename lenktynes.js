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
      this.greitis += kiek;
      if (this.greitis > this.maxGreitis) {
          this.greitis = this.maxGreitis;
      }
   }

   stabdis(kiek) {
      this.greitis -= kiek;
      if (this.greitis < 0) {
          this.greitis = 0;
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
      if (Math.random() > .5) {
          this.spoileris = true;
      } else {
          this.spoileris = false;
      }
   }

   gazas(kiek) {
      if (!this.spoileris) {
         super.gazas(kiek * 2);
      } else {
         super.gazas(kiek);
      }
   }

   stabdis(kiek) {
      if (this.spoileris) {
         super.stabdis(kiek * 2);
      } else {
         super.stabdis(kiek);
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

let maxAtstumas = 0;
let lyderis = '';
let komentatorius = 100;

do {
   masinuMasyvas.forEach(el => {
      let nuo = -5;
      let iki = 5;
      let naujasGreitis = Math.trunc(Math.random() * (iki - nuo + 1) + nuo); // random greitis

      if (el instanceof SportineMasina) {  // spoilerio reikalai
         el.pakeiskSpoilerioPozicija();
         //console.log('Spoileris pakeite pozicija', el.pavadinimas);
      }

      if (naujasGreitis > 0) {  // gazuojam
         el.gazas(naujasGreitis);
         el.vaziuojam();
         //console.log('Pagazavo', el.pavadinimas, naujasGreitis, 'atstumas', el.atstumas);
      } else {
         naujasGreitis = -naujasGreitis;  // stabdom
         el.stabdis(naujasGreitis);
         el.vaziuojam();
         //console.log('Stabde', el.pavadinimas, naujasGreitis, 'atstumas', el.atstumas);
      }

      if (el.atstumas > maxAtstumas) {  // lyderis
         maxAtstumas = el.atstumas;
         lyderis = el.pavadinimas;
      }
   })

   if (maxAtstumas > komentatorius) {  // komentatorius
      console.log('Lyderis yra:', lyderis + ', jo nuvaziuotas atstumas yra:', maxAtstumas);
      komentatorius = komentatorius + 100;
   }

} while (maxAtstumas < 1000)

masinuMasyvas.sort((a, b) => b.atstumas - a.atstumas); // rusiavimas
masinuMasyvas.forEach(el => console.log(el.pavadinimas, el.atstumas));  // rezultatu lentele