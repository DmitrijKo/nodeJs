const readline = require("readline");
const fs = require("fs/promises");


const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function inputText(msg) {
   return new Promise((resolve) => {
      rl.question(msg, (answer) => {
         resolve(answer);
      });
   });
}

function inputNumber(msg) {
   return new Promise((resolve, reject) => {
      rl.question(msg, (answer) => {
         const num = parseFloat(answer);
         if (!isNaN(num) && Number.isFinite(num)) {
            resolve(num);
         } else {
            reject(new Error(`${answer} is not a number`));
         }
      });
   });
}

function displayText() {
   console.log("1. Atspausdinti visus zmones");
   console.log("2. Prideti nauja zmogu");
   console.log("3. Istrinti zmogu");
   console.log("4. Turtuoliu sarsas");
   console.log("0. Pabaigti");
}

let zmones = [];

async function main() {
   // ND
   displayText()

   try {
      let menu = await inputNumber("Pasirink numeri: ");

      if (menu === 1) {
         let allData = await fs.readFile("zmones.json", {
            encoding: "utf-8"
         });

         let zmObj = JSON.parse(allData)

         console.log("Visu zmoniu sarasas:");

         for (let i = 0; i < zmObj.length; i++) {
            console.log(`${i + 1}. ${zmObj[i].vardas} ${zmObj[i].pavarde} ${zmObj[i].alga}`);
         }
      }

      if (menu === 2) {
         let allData = await fs.readFile("zmones.json", {
            encoding: "utf-8"
         })

         let zmObj = JSON.parse(allData)
         //console.log(zmObj);
         let vardas = await inputText("Ivesk varda: ");
         let pavarde = await inputText("Ivesk pavarde: ");
         try {
            let alga = await inputNumber("Ivesk alga: ");

            let newObj = {
               vardas,
               pavarde,
               alga
            };

            zmObj.push(newObj);

            console.log("Naujas sarasas: ");
            for (let i = 0; i < zmObj.length; i++) {
               console.log(`${i + 1}. ${zmObj[i].vardas} ${zmObj[i].pavarde} ${zmObj[i].alga}`);
            }

            try {
               await fs.writeFile("zmones.json", JSON.stringify(zmObj, null, 4), {
                  encoding: "utf-8"
               });
            } catch (err) {
               console.log("Failed to write to file", err);
            }

         } catch (err) {
            console.log("blogas skaicius", err);
         }
      }

      if (menu === 3) {
         try {
            let allData = await fs.readFile("zmones.json", {
               encoding: "utf-8"
            });
   
            let zmObj = JSON.parse(allData);

            let numeris = await inputNumber("Ivesk numeri: ");

            let delNumber = numeris - 1;
            zmObj.splice(delNumber, 1);

            console.log("Naujas sarasas: ");
            for (let i = 0; i < zmObj.length; i++) {
               console.log(`${i + 1}. ${zmObj[i].vardas} ${zmObj[i].pavarde} ${zmObj[i].alga}`);
            }

            try {
               await fs.writeFile("zmones.json", JSON.stringify(zmObj, null, 4), {
                  encoding: "utf-8"
               });
            } catch (err) {
               console.log("Failed to write to file", err);
            }

         } catch (err) {
            console.log("blogas numeris", err);
         }
      }

      if (menu === 4) {
         try {
            let allData = await fs.readFile("zmones.json", {
               encoding: "utf-8"
            });
   
            let zmObj = JSON.parse(allData);
            
            let alga = await inputNumber("Turtuolio alga: ");
            console.log("Turtuoliu sarasas:");

            zmObj.forEach(el => {
               if (el.alga > alga) {
                  console.log(el.vardas, el.pavarde, el.alga);
               }
            });
         }
         catch (err) {
            console.log("Tai ne skaicius:", err);
         }
      }

      if (menu === 0) {
         rl.close();
      }

   } catch (err) {
      throw new Error("Klaida, ivestas neteisingas skaicius", err)
   }

   rl.close();
}
main();
/*
zmoniu sarasas

vienas zmogus atrodo taip:
{
    vardas: "Jonas"
    pavarde: "Jonaitis",
    alga: 123.48
}

parodom meniu:
1. atspausdinti visus zmones
2. prideti nauja
3. istrinti zmogu
0. pabaigti

duomenys saugomi faile zmones.json
jei failo nera - programa sukuria faila pirmo pridejimo metu

1. perskaitom is zmones.json ir parodom sarasa (su numeriais - eiles numeris masyve)
jei failo nera - nieko nespausdinam

2. papraso ivesti varda, pavarde, alga
prideda nauja zmogu i sarasa (prie failo, jei nera sukuria)

3. papraso ivesti numeri (is saraso) zmogaus, kuri reikia istrinti
istrina is saraso ir perraso faila.

4. turtuoliu sarsas
papraso ivesti skaiciu
atspausdina visus zmones, kuriu alga didesne uz ivesta skaiciu

0. baigia darba

pasirinkus neegzistuojanti meniu punkta (jei ivede ne 0, 1, 2, 3, tai vel spausdinti meniu)
*/