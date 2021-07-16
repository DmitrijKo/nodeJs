// atspausdinti visu lyginiu skaiciu suma (nuo 0 iki 100)
var i = 0;
var count = 0;

while (i <= 100) {
   if (i % 2 === 0) {
      count = count + i;
   }
   i++;
}

console.log(count);

///

// Daugybos lentele.
var nuo = 1;
var iki = 3;

var i = nuo;

while (i <= iki) {
   var j = nuo;
   while (j <= iki) {
      console.log(i * j);
      j = j + 1;
   }
   i = i + 1;
}