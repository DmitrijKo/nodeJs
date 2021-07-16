var lines = 15;
var columns = 30;

function tusciasLaukas() {
    // sukurem nauja masyva su eiluciu kiekiu lines
    // ir stulpeliu kiekiu colums
    var field = new Array(lines);
    for (var y = 0; y < field.length; y++) {
        field[y] = new Array(columns);
    }
    return field;
}

var field = tusciasLaukas();

// uzpildom lauka atsitiktiniu budu
for (var y = 0; y < field.length; y++) {
    for (var x = 0; x < field[y].length; x++) {
        if (Math.random() < 0.22) {
            field[y][x] = "X";
        } else {
            field[y][x] = ".";
        }
    }
}


for (var y = 0; y < field.length; y++) {
    var line = "";
    for (var x = 0; x < field[y].length; x++) {
            line += field[y][x];
    }
    console.log(line);
}
console.log("==================================");

for (var i = 1; i <= 50; i++) {
// ND
}

/*
1. atspausdinti 50 iteraciju

2. nutraukti spausdinima anksciau, jei susiformavo identiska iteracija

3. nutraukti spausdinima anksciau, jei susiformavo itracija, kuri jau buvo istorijoje
*/
