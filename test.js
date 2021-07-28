"use strict";

function TransportoPriemone(pavadinimas) {
    this.pavadinimas = pavadinimas;
}
TransportoPriemone.prototype.beep = function () {
    console.log(this.pavadinimas + " pypsena labai garsiai");
}

function Masina(pavadinimas, maxGreitis) {
    TransportoPriemone.call(this, pavadinimas);
    this.maxGreitis = maxGreitis;
    this.greitis = 0;
    this.kelias = 0;
}
Masina.prototype = Object.create(TransportoPriemone.prototype);
Masina.prototype.constructor = Masina;

Masina.prototype.gazas = function (kiek) {
    this.greitis += kiek;
    if (this.greitis > this.maxGreitis) {
        this.greitis = this.maxGreitis;
    }
};

Masina.prototype.stabdis = function(kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
};

Masina.prototype.vaziuojam = function () {
    this.kelias += this.greitis;
};

function SportineMasina(pavadinimas, maxGreitis) {
    Masina.call(this, pavadinimas, maxGreitis);
    this.spoileris = false;
}

SportineMasina.prototype = Object.create(Masina.prototype);
SportineMasina.prototype.constructor = SportineMasina;
SportineMasina.prototype.super = Masina.prototype;

SportineMasina.prototype.pakeiskSpoilerioPozicija = function () {
    if (this.greitis > this.maxGreitis * .6) {
        this.spoileris = true;
    } else {
        this.spoileris = false;
    }
}

SportineMasina.prototype.gazas = function (kiek) {
    if (!this.spoileris) {
        // Masina.prototype.gazas.call(this, kiek * 2);
        this.super.gazas.call(this, kiek * 2);
    } else {
        this.super.gazas.call(this, kiek);
    }
    // if (!this.spoileris) {
    //     this.greitis += kiek * 2;
    // } else {
    //     this.greitis += kiek;
    // }
    // if (this.greitis > this.maxGreitis) {
    //     this.greitis = this.maxGreitis;
    // }
}

SportineMasina.prototype.stabdis = function (kiek) {
    if (this.spoileris) {
        this.greitis -= kiek * 2;
    } else {
        this.greitis -= kiek;
    }
    if (this.greitis < 0) {
        this.greitis = 0;
    }
}

SportineMasina.prototype.beep = function () {
    this.super.beep.call(this);
    console.log("sportinis beep");
}

let porsas = new SportineMasina("Porsas", 300);

console.log(porsas);
porsas.beep();
// console.log(porsas);
// porsas.gazas(50);
// porsas.spoileris = true;
// console.log(porsas);
// porsas.stabdis(30);
// console.log(porsas);


// let zapas = new Masina("Zaporozietis", 140);

// let bmw = new Masina("BMW", 260);

// zapas.gazas(60);
// zapas.vaziuojam();
// zapas.gazas(100);
// zapas.vaziuojam();

// bmw.gazas(60);
// bmw.vaziuojam();
// bmw.gazas(100);
// bmw.vaziuojam();

// console.log(zapas);
// console.log(bmw);