// Atspausdinti masyvo elementu suma ir vidurki.
var m = [2, 5, 3, 74, 45, 3432];

let suma = 0;
let vidurkis = 0;

for (let i = 0; i < m.length; i++) {
   suma += m[i]; 
   vidurkis = suma / m.length;
}
console.log(suma);
console.log(vidurkis);