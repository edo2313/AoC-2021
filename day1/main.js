const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
for(let i = 0; i < array.length; i++)
    array[i] = parseInt(array[i]);


//Part 1
console.log("Part 1 result: ")
var total = 0;

for (let i = 1; i < array.length; i++)
    if(array[i] > array[i-1])
        total++;

console.log(total);

//Part 2
console.log("Part 2 result: ")
let sum_array = [];
for (let i = 0; i < array.length; i++){
    let sum = 0;
    for (let j = 0; j < 3; j++){
        if(array[i+j] != undefined){
            sum+=array[i+j];
        }
    }
    sum_array.push(sum);
}

total = 0;
for (let i = 1; i < sum_array.length; i++)
    if(sum_array[i] > sum_array[i-1])
        total++;

console.log(total);