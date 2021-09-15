async function* generatorius(a, b) {
  console.log("gen start", {a, b});
  a = yield a * 10; // sitoj eilutej issiunte 20 i dabartini next() ir sustojo; gavo sekancio next() reiksme(23) vykdo toliau
  console.log("after 1", {a, b});
  b = yield b * 20; // sitoj eilutej issiunte 60 i dabartini next() ir sustojo; gavo sekancio next() reiksme(14) vykdo toliau
  console.log("after 2", {a, b});
  return a + b; // issiunte 37 i dabartini next()
}
let g;
g = generatorius(2, 3); // ne kviecia funkcija, o sukuria specialu generatoriaus objekta
console.log(g);
console.log("gen created");
let res;
res = g.next(); // pradejo vykdyti funkcija: ivykde 2 eilute; 3 eil parsiunte { value: 20, done: false }
console.log(res);
res = g.next(23); // i 3 eilute nusiunciam 23; ivykde 3, 4 eilutes; ; 5 eil parsiunte { value: 60, done: false }
console.log(res);
res = g.next(14); // i 5 eilute nusiunciam 14; ivykde 5, 6 eilutes; 7 eil parsiunte { value: 37, done: true }
console.log(res);
res = g.next(); // funkcija jau baigta vykdyti; atgal grizta { value: undefined, done: true }
console.log(res);
res = g.next(); // funkcija jau baigta vykdyti; atgal grizta { value: undefined, done: true }
console.log(res);
