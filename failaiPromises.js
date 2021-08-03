const fs = require("fs/promises");

const fileNameA = "./txtFailai/a.txt";
const fileNameB = "./txtFailai/b.txt";
const fileNameC = "./txtFailai/c.txt";
let pilnasTextas = '';

fs.readFile(fileNameA, {
    encoding: "utf-8"
})
.then(
    data => {
        console.log("perskaiciau is failo " + fileNameA); 
        pilnasTextas += data;
    }
)

fs.readFile(fileNameB, {
   encoding: "utf-8"
})
.then(
   data => {
       console.log("perskaiciau is failo " + fileNameB); 
       pilnasTextas += data;
   }
)

fs.readFile(fileNameC, {
   encoding: "utf-8"
})
.then(
   data => {
       console.log("perskaiciau is failo " + fileNameC); 
       pilnasTextas += data;
       console.log('Surinktas tekstas:', pilnasTextas);
   }
)




//.catch(
//    err => {
//        console.log("klaida skaitant is failo " + fileNameA);
//        console.log(err);
//    }
//);




//fs.readFile(fileNameA, {
//    encoding: "utf-8"
//})
//.then(
//    data => {
//        console.log("perskaiciau is failo " + fileNameA);
//        pilnasTextas.push(data) 
//        console.log(pilnasTextas.toString());
//    }
//)
//.catch(
//    err => {
//        console.log("klaida skaitant is failo " + fileNameA);
//        console.log(err);
//    }
//);


/*
reikia kad i ekrana atspausdintu:
failo a.txt turini + failo b.txt + failo c.txt turini

*/