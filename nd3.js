var m = [1, 2, 3, 4, 5];
var rez1 = new Array(m.length);
for (let i = 0; i < rez1.length; i++) {
   rez1[i] = new Array(m.length);
}

//for (var i = 0; i < rez1.length; i++) {
//   console.log(m);
//   rez1[i] = m;
//   console.log(rez1);
//   m.push(m[0]);
//   m.shift();
//}

for (let i = 0; i < m.length; i++) {
   for (let j = 0; j < m.length; j++) {
      rez1[i][j] = m[(i + j) % m.length];
   }
}

// ND
console.log(rez1);
/*
1, 2, 3, 4, 5
2, 3, 4, 5, 1
3, 4, 5, 1, 2
4, 5, 1, 2, 3
5, 1, 2, 3, 4
*/

var rez2 = new Array(m.length);
for (let i = 0; i < rez2.length; i++) {
rez2[i] = new Array(m.length);
}

for (let i = 0; i < m.length; i++) {
   for (let j = 0; j < m.length; j++) {
      rez2[i][(i + j) % m.length] = m[j];
   }
}

console.log(rez2);
/*
1, 2, 3, 4, 5
5, 1, 2, 3, 4
4, 5, 1, 2, 3
3, 4, 5, 1, 2
2, 3, 4, 5, 1
*/



///
/*
i = 0
reikiaSurusiuoti.length = 12
j = 0
reikiaSurusiuoti[j] = 
reikiaSurusiuoti[j + 1] = 5
tmp = reikiaSurusiuoti[j] = 54
*/


var reikiaSurusiuoti = [54, 5, 8, 1, -1, -185, 45, 652, 1, 0, 652, -7];

for (var i = 0; i < reikiaSurusiuoti.length; i++) {
   for (var j = 0; j < reikiaSurusiuoti.length; j++) {
       if (reikiaSurusiuoti[j] > reikiaSurusiuoti[j + 1]) {
           var tmp = reikiaSurusiuoti[j];
           reikiaSurusiuoti[j] = reikiaSurusiuoti[j + 1];
           reikiaSurusiuoti[j + 1] = tmp;
       }
   }
}
console.log(reikiaSurusiuoti); // didejimo tvarka

for (var i = 0; i < reikiaSurusiuoti.length; i++) {
   for (var j = 0; j < reikiaSurusiuoti.length; j++) {
       if (reikiaSurusiuoti[j] < reikiaSurusiuoti[j + 1]) {
           var tmp = reikiaSurusiuoti[j];
           reikiaSurusiuoti[j] = reikiaSurusiuoti[j + 1];
           reikiaSurusiuoti[j + 1] = tmp;
       }
   }
}
console.log(reikiaSurusiuoti); // mazejimo tvarka