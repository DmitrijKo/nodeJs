"use strict";

let puodukas = {
   spalva: 'rudas',
   turis: 300,
   kiekis: 80
};

let kitasPuodukas = {
   spalva: 'baltas',
   turis: 150,
   kiekis: 0
};

//console.log(puodukas);

puodukas.kiekis += 100;
puodukas.spalva = 'zalias';
//console.log(puodukas);
//console.log(puodukas.spalva);

kitasPuodukas.kiekis += 150;
//console.log(kitasPuodukas);

let p = puodukas;
p.kiekis += 23;
delete p.kiekis;
p = kitasPuodukas;
p.kiekis = 0;
p.spalva = 'melynas'

//console.log(puodukas);
//console.log(kitasPuodukas);


///


let namas = {
   aukstai: 4,
   spalva: 'pilkas'
};

let kitasNamas = {
   aukstai: 5,
   spalva: 'raudonas'
};
//console.log(kitasNamas);

let n = kitasNamas;
n.spalva = 'geltonas';

//console.log(kitasNamas);

///

let namas1 = {
   aukstai: 4,
   spalva: 'pilkas'
};

let namas2 = {
   aukstai: 4,
   spalva: 'pilkas'
};

//console.log(namas1 == namas2);  //false

let a = namas1;
//console.log(namas1 == n);  // true
//console.log(namas2 == n);  // false

