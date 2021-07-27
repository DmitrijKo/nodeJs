"use strict";

function Obuolys() {
   this.dydis = 10;
   this.spalva = "zalias";
};

Obuolys.prototype.nokstam = function () {
   if (this.dydis < 150) {
      this.dydis += Math.trunc(Math.random() * 80 + 20);
   } else {
      if (this.spalva == "zalias") {
         this.spalva = "geltonas";
      } else if (this.spalva == "geltonas") {
         this.spalva = "raudonas";
      }
   }
};

Obuolys.prototype.arPrinokes = function () {
   if (this.dydis >= 150 && this.spalva == "raudonas") {
      return true;
   } else {
      return false;
   }
};

let o1 = new Obuolys();
let o2 = new Obuolys();

//console.log(o1);
//console.log(o2);

while (!o1.arPrinokes()) {
   o1.nokstam();
   console.log(o1);
}

//console.log("Valgom", o1);
//console.log("O sitas dar neprinokes", o2);







/// ======= NAUJAS PVZ ========= ///

function Masina(pavadinimas, maxGreitis) {    // Sukuriam konstruktoriu 'Masina' su argumentais 'pavadinimas', 'maxGreitis'
   this.pavadinimas = pavadinimas;            // ir savybem 'pavadinimas'<--(i kuri isirasys atgumentas 'pavadinimas'),
   this.maxGreitis = maxGreitis;              // 'maxGreitis'<--(i kuri isirasys atgumentas 'maxGreitis'), 'greitis' ir 'kelias'.
   this.greitis = 0;
   this.kelias = 0;
}

Masina.prototype.gazas = function (kiek) {    // 'Masina' prototype sukuriam metoda 'gazas' su paduodamu argumentu (kiek).
   this.greitis += kiek;                          //
   if (this.greitis > this.maxGreitis) {          //   ATLIEKAM LOGIKA
      this.greitis = this.maxGreitis;             // 
   }
};

Masina.prototype.stabdis = function (kiek) {  // 'Masina' prototype sukuriam metoda 'stabdis' su paduodamu argumentu (kiek).
   this.greitis -= kiek;                          //        
   if (this.greitis < 0) {                        //   ATLIEKAM LOGIKA
      this.greitis = 0;                           //
   }
};

Masina.prototype.vaziuojam = function () {   // 'Masina' prototype sukuriam metoda 'vaziuojam'.
   this.kelias += this.greitis;                  //   ATLIEKAM LOGIKA
};

function SportineMasina(pavadinimas, maxGreitis) {  // Sukuriam konstruktoriu 'SportineMasina' su argumentais 'pavadinimas', 'maxGreitis'
   Masina.call(this, pavadinimas, maxGreitis);      // Kad nekartoti 'Masina' savybiu, sukuriam skoupa 'Masina' ir jos savybes su 'this' suguldom i 'SportineMasina' sukurta objekta.
   this.spoileris = false;                          // Sukuriam 'SportineMasina' paildoma savybe 'spoileris'
}

// Kad nekurti naujai ir nesikartoti su prototype savybem, kopijuojam visas funkcijas is 'Masina' prototype 

SportineMasina.prototype = Object.create(Masina.prototype); // Kopijuojam visus metodus is 'Masina' prototype i naujai sukurta objekta ir ji priskiriam 'SportineMasina' prototype.
SportineMasina.prototype.constructor = SportineMasina;      // Sukuriam 'SportineMasina' protorype konstruktoriu ir pririsam ji prie 'SportineMasina'.

SportineMasina.prototype.pakeiskSpoilerioPozicija = function () { // Sukuriam nauja metoda 'pakeiskSpoilerioPozicija' 'SportineMasina' prototype.
   if (this.greitis > this.maxGreitis * .6) {                        //
      this.spoileris = true;                                         //
   } else {                                                          //   ATLIEKAM LOGIKA 
      this.spoileris = false;                                        //
   }
}

let parsas = new SportineMasina('Porsas', 300); // Sukuriam kintamaji ir i ji irasom 'SportineMasina' savybes su paduotais argumentais, bei 'Masina' savybem.