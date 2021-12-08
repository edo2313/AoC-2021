const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').split("\n").map(function (e) {
    return {
        x1: Number(e.split(' -> ')[0].split(',')[0]),
        y1: Number(e.split(' -> ')[0].split(',')[1]),
        x2: Number(e.split(' -> ')[1].split(',')[0]),
        y2: Number(e.split(' -> ')[1].split(',')[1])
    }
});

//Part 1
console.log("Part 1 result: ");

let xmax = Math.max.apply(Math, array.map(function (o) {
    return Math.max(o.x1, o.x2);
}));
let ymax = Math.max.apply(Math, array.map(function (o) {
    return Math.max(o.y1, o.y2);
}));

let matrix = [];

for (let y = 0; y <= ymax; y++) {
    matrix[y] = [];
    for (let x = 0; x <= xmax; x++) {
        matrix[y][x] = '.';
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i].x1 == array[i].x2) {
        for (let y = Math.min(array[i].y1, array[i].y2); y <= Math.max(array[i].y1, array[i].y2); y++) {
            matrix[y][array[i].x1] = matrix[y][array[i].x1] == '.' ? 1 : matrix[y][array[i].x1] + 1;
        }
    } else if (array[i].y1 == array[i].y2) {
        for (let x = Math.min(array[i].x1, array[i].x2); x <= Math.max(array[i].x1, array[i].x2); x++) {
            matrix[array[i].y1][x] = matrix[array[i].y1][x] == '.' ? 1 : matrix[array[i].y1][x] + 1;
        }
    }
}

let total = 0;
for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] != 1 && matrix[y][x] != '.') {
            total++;
        }
    }
}
console.log(total);


//Part 2
console.log("Part 2 result: ");

matrix = [];

for (let y = 0; y <= ymax; y++) {
    matrix[y] = [];
    for (let x = 0; x <= xmax; x++) {
        matrix[y][x] = '.';
    }
}

for (let i = 0; i < array.length; i++) {
    let x = array[i].x1,
        y = array[i].y1;

    if (array[i].x1 != array[i].x2 && array[i].y1 != array[i].y2 && Math.abs(array[i].x1 - array[i].x2) != Math.abs(array[i].y1 - array[i].y2)) {
        continue;
    }
    while (true) {
        matrix[y][x] = matrix[y][x] == '.' ? 1 : matrix[y][x] + 1;
        if (x == array[i].x2 && y == array[i].y2) {
            break;
        }

        if (x < array[i].x2) {
            x++;
        } else if (x > array[i].x2) {
            x--;
        }
        if (y < array[i].y2) {
            y++;
        } else if (y > array[i].y2) {
            y--;
        }
    }
}

total = 0;
for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] != 1 && matrix[y][x] != '.') {
            total++;
        }
    }
}
console.log(total);
