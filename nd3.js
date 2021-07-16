var m = [1, 2, 3, 4, 5];
var rez1 = new Array(m.length);
for (let i = 0; i < rez1.length; i++) {
rez1[i] = new Array(m.length);
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
// ND
console.log(rez2);
/*
1, 2, 3, 4, 5
5, 1, 2, 3, 4
4, 5, 1, 2, 3
3, 4, 5, 1, 2
2, 3, 4, 5, 1
*/



///



var reikiaSurusiuoti = [54, 5, 8, 1, -1, -185, 45, 652, 1, 0, 652, -7];
console.log(reikiaSurusiuoti); // didejimo tvarka
console.log(reikiaSurusiuoti); // mazejimo tvarka

