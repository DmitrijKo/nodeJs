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
   .then(data => {
      console.log("perskaiciau is failo " + fileNameA);
      pilnasTextas.push(data);
      return fs.readFile(fileNameB, {
         encoding: "utf-8"
      });
   })

   .then(data => {
      console.log("perskaiciau is failo " + fileNameB);
      pilnasTextas.push(data);
      return fs.readFile(fileNameC, {
         encoding: "utf-8"
      });
   })

   .then(data => {
      console.log("perskaiciau is failo " + fileNameC);
      pilnasTextas.push(data);
      console.log('Surinktas tekstas:', pilnasTextas.toString());
   })

   .catch(err => {
      pilnasTextas = [];
      pilnasTextas.push('Gavome klaida: ' + err);
      console.log(pilnasTextas.toString());
   })

   .finally(() => {
      console.log('Pabaiga');
   });


/// === Mandresne destytojo versija === ///
  
//let allData = "";
//const fileNames = ["a.txt", "b.txt", "c.txt"];
//let currentFile = 0;

//let resolver = data => {
//   console.log("perskaiciau is failo " + fileNames[currentFile]);
//   allData += data;
//   currentFile++;
//   if (currentFile < fileNames.length) {
//      return fs.readFile(fileNames[currentFile], {
//         encoding: "utf-8"
//      });
//   }
//};

//fs.readFile(fileNames[currentFile], {
//      encoding: "utf-8"
//   })
//   .then(resolver)
//   .then(resolver)
//   .then(resolver)
//   .catch(err => {
//      console.log("klaida skaitant is failo " + fileNames[currentFile]);
//      console.log(err);
//   })
//   .finally(
//      () => {
//         console.log(allData);
//      }
//   );