"use strict";
/// ==== Savybiu sukurimas objektuose ==== ///

let o = {
   savybe: "reiksme"
};

o.kitaSavybe = 5;
/*
Object.defineProperty(o, "kitaSavybe", {
   enumerable: true,    
   configurable: true,                                   // <--- PAVYZDYS ---> // Property descriptor

   writable: true, ||
   value: 5        || 

   get:            ||
   set:            ||
});

/// Object.defineProperty vienu metu gali buti, arba 'writable' su 'value', arba 'get' su 'set'. 
/// Visi kartu negali buti!!!

*/
console.log(o);
console.log('-----------');


/// ======== Savybes priskirimas per statini metoda 'Object.defineProperty' ======= ///

Object.defineProperty(o, "darVienaSavybe", {
   enumerable: true, // <--- Naujai sukurtos savybes matomumas. Spausdinant mes ja matom 'true', ir nematom su 'false'. Su 'false' galim ja pasiekti tik zinant jos pavadinima "darVienaSavybe"
   configurable: true, // <--- leidzia arba draudzia manipulioti savybes savybem (enumerable, writable, configurable) arba leidzia istrinti savybe "delete o.darVienaSavybe;".
   value: "testas", // <--- uzduodam savybei reiksme.
   writable: true // <--- 'true' arba 'false' leidzia arba draudzia keisti savybes reiksme 'value'.
});
console.log(o);
console.log('-----------');


/// ==== Get'eriai ir Set'eriai objekto statini metode 'Object.defineProperty' ==== ///

let zmogus = {
   vardas: "Jonas",
   pavarde: "Jonaitis"
};

Object.defineProperty(zmogus, "pilnasVardas", {
   configurable: true,    // <--- leidzia arba draudzia manipuliuoti savybes savybem.
   enumerable: true,      // <--- matom naujai sukurta savybe "pilnasVardas".
   get: function () {     // <--- sukuriam GET'eri (tai metodas kuris negali gauti argumentu).
      let ret = "";       // <--- sukuriam kintamaji.
      if (this.vardas != undefined && this.vardas != null && typeof this.vardas == "string") { // <--- tikrinam ar 'zmogus' objekte savybes 'vardas' reiksme atitinka musu salygas.
         ret = this.vardas; // <--- jeigu taip, sios salygos reiksme priskiriam kintamajam 'ret'.
      }
      if (this.pavarde != undefined && this.pavarde != null && typeof this.pavarde == "string") { // <--- tikrinam ar 'zmogus' objekte savybes 'pavarde' reiksme atitinka musu salygas.
         if (ret != "") { // <--- jeigu 'ret' kintamajam ne tuscias stringas
            ret += " ";   // <--- 'ret' kintamajamme priskiriam tarpa
         }
         ret += this.pavarde; // <--- prie tarpo pridedam pavarde is 'zmogus' objekto 'pavarde' savybes reiksmes.
      }
      return ret; // <--- ir grazinam 'ret' reiksme, t.y tarpas ir pavarde is 'zmogus' objekto 'pavarde' savybes reiksmes.
   },
   set: function (value) { // <--- sukuriam SET'eri (tai yra metodas kuris GAUNA ARGUMENTA is naujai sukurtos savybes 'pilnasVardas').
      let parts = value.split(" "); // <--- splitinam gauta argumenta, atskiriam tarpais ir priskiriam naujai sukurtam 'parts' kintamajam.
      if (parts.length == 0) { // <--- jeigu kintamojo 'parts' ilgis lygus 0
         delete this.vardas; // <--- trinam is 'zmogus objekto' savybe 'vardas'.
         delete this.pavarde; // <--- trinam is 'zmogus objekto' savybe 'pavarde'.
      } else if (parts.length == 1) { // <--- jeigu kintamojo 'parts' ilgis lygus 1
         this.vardas = parts[0]; // <--- vardui priskiriam 'parts' 0 indekso reiksme
         delete this.pavarde; // <--- ir trinam is 'zmogus objekto' savybe 'pavarde'.
      } else if (parts.length == 2) { // <--- jeigu kintamojo 'parts' ilgis lygus 2
         this.vardas = parts[0]; // <--- vardui priskiriam 'parts' 0 indekso reiksme
         this.pavarde = parts[1]; // <--- pavarde priskiriam 'parts' 1 indekso reiksme
      } else { // <--- visais kitais atvejais
         this.pavarde = parts[parts.length - 1]; // <--- 'pavarde' priskiriam 'parts' masyvo paskutinio indeksi reiksme
         parts.pop(); // <--- is 'parts' masyvo istrinam paskutini indeksa su reiksme
         this.vardas = parts.join(" "); // <--- is likusio 'parts masyvo' darom stringa su tarpais tarp reiksmiu ir priskiriam 'vardas' savybei
      }
   }
});
console.log(zmogus);
console.log(zmogus.pilnasVardas);
zmogus.pilnasVardas = "Petras Jonas Antanas Petraitis";
console.log(zmogus);
console.log(zmogus.pilnasVardas);