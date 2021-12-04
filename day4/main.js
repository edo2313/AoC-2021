const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').replace(/ +(?= )/g, '').split('\n\n');

var extraction = array.shift().split(',').map(Number);
console.log(extraction);

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('\n');
    for (let j = 0; j < array[i].length; j++) {
        array[i][j] = array[i][j].trim().split(' ').map(Number);
    }
}

console.log(array[0]);

//Part 1
console.log("Part 1 result: ");