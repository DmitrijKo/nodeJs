'use strict';

/// ==== Sena sintakse ==== ///

function Obuolys() {
   this.dydis = 10;
   this.spalva = "zalias";
   this.nokstam = function () {
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
   this.arPrinokes = function () {
      if (this.dydis >= 150 && this.spalva == "raudonas") {
         return true;
      } else {
         return false;
      }
   };
}

let o1 = new Obuolys();
let o2 = new Obuolys();

//while (!o1.arPrinokes()) {
//   o1.nokstam();
//   console.log(o1);
//}

//console.log("Valgom", o1);
//console.log("O sitas dar neprinokes", o2);


/// ==== Nauja sintakse ==== ///


class Butas {
   constructor(nr, plotas) {
      this.nr = nr;
      this.plotas = plotas;
   }
}

class Namas {
   constructor(aukstai, laiptines, spalva = "pilkas") {
      this.aukstai = aukstai;
      this.laiptines = laiptines;
      this.spalva = spalva;
      this.butai = [];
      for (let i = 1; i <= aukstai * laiptines * 3; i++) {
         this.butai.push(new Butas(i, Math.trunc(Math.random() * 100 + 20)))
      }
   }
}

let n1 = new Namas(5, 3);
let n2 = new Namas(9, 2);
let n3 = new Namas(5, 5, "zalias");
let n4 = new Namas(7, 2, "raudonas");

//console.log(n1);
//console.log(n2);
//console.log(n3);
//console.log(n4);



/// ======= Gudrus garazas CLASS SINTAKSE ========= ///
class TransportoPriemone {  // Kuriam nauja klase 'TransportoPriemone'.

    constructor(pavadinimas) {           // klase turi konstruktoriu kuris priema argumenta 'pavadinimas'.
        this.pavadinimas = pavadinimas;  // argumentas patenka i naujai sukurta klases kintamiji 'this.pavadinimas'.
    }

    beep() {                                                       // kuriam funkcija kuri ikrenta i klases objekto prototype.
        console.log(this.pavadinimas + " pypsena labai garsiai");  // funkcija grazina klases kintamaji 'this.pavadinimas' su paduotu argumentu + musu teksta.
    }
}

class Masina extends TransportoPriemone {  // Kuriam nauja klase 'Masina' ir kad sita klase paveldetu 'TransportoPriemone' prototype, mes ja sulinkinam 'EXTENDS' ir nurodom su kuo linkinam (siuo atveju su klase 'TransportoPriemone').
   
   #temp;                                   // sukuriam privacia savybe. Ja galima pasiekti tik is sios klases 'Masina' klases savybes 'kondicionerius' metodu get'eriu ir set'eriu.
    
   constructor(pavadinimas, maxGreitis) {  // klase turi konstruktoriu kuris priema argumentus 'pavadinimas' ir 'maxGreitis'.
        super(pavadinimas);                 // su sia sintakse paveldim 'TransportoPriemone' konstruktoriu. Ir nuo siol klase konstruktorius 'Masina' turi klases 'TransportoPriemone' konstruktoriaus kintamuaji 'this.pavadinimas' su jos klases paduotu argumentu.
        this.maxGreitis = maxGreitis;       // argumentas 'maxGreitis' patenka i naujai sukurta klases kintamiji 'this.maxGreitis'.
        this.greitis = 0;                   // Sukuriam nauja klases kintamiji 'greitis' su reiksme 0.
        this.kelias = 0;                    // Sukuriam nauja klases kintamiji 'kelias' su reiksme 0.
        this.#temp = 30;
    }

    get kondicionierius() {                    // sukurem klaseje 'Masina' nauja savybe 'kondicionerius' ir priskyrem jai metoda SET. 
      return this.#temp;                       // grazinam reiksme '#temp'.
    }

    set kondicionierius(value) {               // 'kondicionerius' savybei priskyrem metoda GET su galimybe gauti argumenta.
      if (value >= 16 && value <= 30) {           //  jeigu salyga atitinka, vykdom ja.
          this.#temp = value;                     //  VYKDOM LOGIKA. Pakeciam '#temp' savybe i paduota argumenta.
      }
    }

    gazas(kiek) {                              // kuriam funkcija kuri ikrenta i klases objekto prototype.
        this.greitis += kiek;                     //
        if (this.greitis > this.maxGreitis) {     //  VYKDOM LOGIKA
            this.greitis = this.maxGreitis;       //
        }
    }

    stabdis(kiek) {                            // kuriam funkcija kuri ikrenta i klases objekto prototype.
        this.greitis -= kiek;                     //
        if (this.greitis < 0) {                   //  VYKDOM LOGIKA
            this.greitis = 0;                     //
        }
    }

    vaziuojam() {                              // kuriam funkcija kuri ikrenta i klases objekto prototype.
        this.kelias += this.greitis;              //  VYKDOM LOGIKA
    }

    beep() {                                                       // kuriam funkcija kuri ikrenta i klases objekto prototype.
        console.log("Masina " + this.pavadinimas + " sako beep");
    }

    static atstumasTarpMasinu(m1, m2) {  // statinis metodas kuri galim iskviesti su klase 'Masina' pvz. Masina.atstumasTarpMasinu(porsas, bmw); 
      return m1.kelias - m2.kelias;         // grazinam rezultata.
    }
}

class SportineMasina extends Masina {  // Kuriam nauja klase 'SportineMasina' ir kad sita klase paveldetu 'TransportoPriemone' prototype, mes ja sulinkinam 'EXTENDS' ir nurodom su kuo linkinam (siuo atveju su klase 'Masina'). 

    constructor(pavadinimas, maxGreitis) {  // klase turi konstruktoriu kuris priema argumentus 'pavadinimas' ir 'maxGreitis'.
        super(pavadinimas, maxGreitis);     // su sia sintakse paveldim 'Masina' konstruktoriu. Ir nuo siol klases konstruktorius 'SportineMasina' turi klases 'Masina' konstruktoriaus kintamuosius 'this.maxGreitis', 'this.greitis', 'this.kelias', bei turi priejima prie klases 'TransportoPriemone' klases konstruktoriaus su jos klases paduotu argumentu.
        this.spoileris = false;             // Sukuriam nauja klases kintamiji 'spoileris' su reiksme false.
    }

    pakeiskSpoilerioPozicija() {                     // kuriam funkcija kuri ikrenta i klases objekto prototype.
        if (this.greitis > this.maxGreitis * .6) {      //
            this.spoileris = true;                      //
        } else {                                        //  VYKDOM LOGIKA 
            this.spoileris = false;                     //
        }
    }

    gazas(kiek) {                                    // kuriam funkcija kuri ikrenta i klases objekto prototype.
        if (!this.spoileris) {                          //
            super.gazas(kiek * 2);                      //
        } else {                                        //  VYKDOM LOGIKA
            super.gazas(kiek);                          // 
        }
    }

    stabdis(kiek) {                                  // kuriam funkcija kuri ikrenta i klases objekto prototype.
        if (this.spoileris) {                           //
            super.stabdis(kiek * 2);                    //
        } else {                                        //  VYKDOM LOGIKA
            super.stabdis(kiek);                        //
        }
    }

    beep() {                                         // kuriam funkcija kuri ikrenta i klases objekto prototype.
        super.beep();                                   //
        console.log("sportinis beep");                  //  VYKDOM LOGIKA
    }
}

let porsas = new SportineMasina("Porsas", 300);

console.log(porsas);
porsas.beep();






