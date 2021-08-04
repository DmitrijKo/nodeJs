/*
reikia kad i ekrana atspausdintu:
failo a.txt turini + failo b.txt + failo c.txt turini

*/

const fs = require("fs/promises");

const fileNameA = "./txtFailai/a.txt";
const fileNameB = "./txtFailai/b.txt";
const fileNameC = "./txtFailai/c.txt";
let pilnasTextas = [];

fs.readFile(fileNameA, {
      encoding: "utf-8"
   })
   .then(
      data => {
         console.log("perskaiciau is failo " + fileNameA);
         pilnasTextas.push(data);
         return fs.readFile(fileNameB, {
            encoding: "utf-8"
         });
      }
   )

   .then(
      data => {
         console.log("perskaiciau is failo " + fileNameB);
         pilnasTextas.push(data);
         return fs.readFile(fileNameC, {
            encoding: "utf-8"
         });
      }
   )

   .then(
      data => {
         console.log("perskaiciau is failo " + fileNameC);
         pilnasTextas.push(data);
         console.log('Surinktas tekstas:', pilnasTextas.toString());
      }
   )

   .catch(
      err => {
         pilnasTextas = [];
         pilnasTextas.push('Gavome klaida ' + err);
         console.log(pilnasTextas.toString());
      }
   );