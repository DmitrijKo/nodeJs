let textas = '';
console.log("pradzia");
let p = new Promise((resolve, reject) => {
    console.log("pradedam vykdyt promisa");
    setTimeout(() => {
        if (Math.random() < 0.999) {
            resolve("OK");
        } else {
            reject("BAD");
        }
    }, 0);
    console.log("baigiam vykdyt promisa");
});

setTimeout(()=> {
    console.log("O sitas suveiks pats paskutinis");
}, 0);


let p1 = p.then(
    value => {
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("----------");
        console.log("P resolved with " + value);
        textas += value;
        return "GOOD";
    },
    err => {
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("----------");
        console.log("P rejected with " + err);
    }
);

let p2 = p1.then(value => {
    console.log("p", p);
    console.log("p1", p1);
    console.log("p2", p2);
    console.log("----------");
    console.log("P1 resolved with value " + value);
    textas += value;
    return "VERY GOOD";
});

let p3 = p2.then(value => {
   console.log("p", p);
   console.log("p1", p1);
   console.log("p2", p2);
   console.log("p3", p3);
   console.log("----------");
   console.log("P2 resolved with value " + value);
   textas += value;
   console.log('textas', textas);
});

let p4 = p3.catch(err => {
   console.log("p", p);
   console.log("p1", p1);
   console.log("p2", p2);
   console.log("p3", p3);
   console.log("p4", p4);
   console.log("----------");
   console.log("P3 resolved with value " + value);
   
});

console.log("p", p);
console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
console.log("p4", p4);

console.log("----------");

console.log("pabaiga");
