function klaiduGeneratorius() {  // kuriam nauja funkcija 'klaiduGeneratorius()'
   let sk = Math.random();  // naujas kintamasis su random skaicium
   if (sk < 0.25) {  // jeigu skaicius mazesnis uz 0.25
       throw sk;  // throw'inam (perduodam klaida) su sugeneruotu skaicium
   } else if (sk < 0.75) {  // jeigu skaicius ura nuo 0.25 iki 0.75
       throw new Error("skaicius tarp 0.25 ir 0.75: " + sk);  // throw'inam (perduodam klaida) su nauju Error objektu, kad galetume terminale atsekti is kur atejo klaida.
   }
   return sk; // jeigu random metodas sugeneruoja skaiciu didesni uz 0.75, grazinam sugeneruota skaiciu
}


try {  // 'try' tikrinam ka gaunam
   console.log("try pradzia"); // bet kuriuo atveju atspausdinam si log'a
   console.log(klaiduGeneratorius()); // jeigu gavom (throw klaida is funkcijos) mes ja atiduodam i 'catch'
   console.log("try pabaiga"); // jeigu i funkcija 'klaiduGeneratorius()' atejo (throw klaida), sio log'o nebevykdysim. kitu atveju (jeigu klaidos nebuvo), sita log'a atspausdinsim.
}
catch (err) {  // pagauna klaida ir pasideda sau i argumenta
   console.log("ivyko klaida: ", err); // spausdinam pranesima.
}
finally {  // 'finally' suveiks bet kuriuo atveju, ar buvo atejusi klaida, ar klaidos nebuvo 'try'.
   console.log("Sitas visada suveiks!!!");
}

console.log("programos pabaiga");  //  spausdinam.