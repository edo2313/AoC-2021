const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').split(",").map(Number);


//Part 1
console.log("Part 1 result: ");

let counts = {};
for (const num of array) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (let i = 0; i < 80; i++) {
    const newCounts = {};
    for (const [k, v] of Object.entries(counts)) {
        if (k == 0) {
            newCounts[6] = v;
            newCounts[8] = v;
        } else {
            newCounts[k - 1] = (newCounts[k - 1] ?? 0) + v;
        }
    }
    counts = newCounts;
}

let total = 0;
for (const [k, v] of Object.entries(counts)) {
    total += v;
}
console.log(total);

//Part 2
console.log("Part 2 result: ");

counts = {};
for (const num of array) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (let i = 0; i < 256; i++) {
    const newCounts = {};
    for (const [k, v] of Object.entries(counts)) {
        if (k == 0) {
            newCounts[6] = v;
            newCounts[8] = v;
        } else {
            newCounts[k - 1] = (newCounts[k - 1] ?? 0) + v;
        }
    }
    counts = newCounts;
}

total = 0;
for (const [k, v] of Object.entries(counts)) {
    total += v;
}
console.log(total);