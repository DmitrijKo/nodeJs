const fs = require("fs");

console.log("pradzia");

let duomenys = ":";
fs.readFile("./txtFailai/a.txt", (err, data) => {
   if (err) {
      console.log("Klaida", err);
      return;
   }
   duomenys += data;
      fs.readFile("./txtFailai/b.txt", (err, data) => {
         if (err) {
            console.log("Klaida", err);
            return;
         }
         duomenys += data;
      });
         fs.readFile("./txtFailai/c.txt", (err, data) => {
            if (err) {
               console.log("Klaida", err);
               return;
            }
            duomenys += data;
            console.log(duomenys);
         });
});


console.log("pabaiga");

/*
reikia kad i ekrana atspausdintu:
failo a.txt turini + failo b.txt turini

*/