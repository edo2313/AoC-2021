const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').split(",").map(Number);

//Part 1
console.log("Part 1 result: ");
const max = Math.max(...array);

let sums = [];

for (let i = 0; i <= max; i++) {
    sums[i] = 0;
    for (let j = 0; j < array.length; j++) {
        sums[i] += Math.abs(i - array[j]);
    }
}

console.log(Math.min(...sums));

//Part 2
console.log("Part 2 result: ");

sums = [];

for (let i = 0; i <= max; i++) {
    sums[i] = 0;
    for (let j = 0; j < array.length; j++) {
        sums[i] += ((Math.abs(i - array[j])) * (Math.abs(i - array[j]) + 1)) / 2;
    }
}

console.log(Math.min(...sums));