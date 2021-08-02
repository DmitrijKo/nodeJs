console.log("pradzia");
let p = new Promise((resolve, reject) => {
    console.log("pradedam vykdyt promisa");
    setTimeout(() => {
        if (Math.random() < 0.5) {
            console.log("patvirtinam");
            resolve("OK");
        } else {
            console.log("atmetam");
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
        for (let i = 0; i < 5000000; i++) {
            for (let j = 0; j < 1000; j++) {
            }
        }
        console.log("P resolved with " + value);
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
});

console.log("p", p);
console.log("p1", p1);
console.log("p2", p2);
console.log("----------");

console.log("pabaiga");
