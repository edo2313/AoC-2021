const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').split("\n");

//Part 1
console.log("Part 1 result: ")

let hpos = 0;
let depth = 0;
for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] == "forward") {
        hpos += parseInt(command[1]);
    }
    if (command[0] == "up") {
        depth -= parseInt(command[1]);
    }
    if (command[0] == "down") {
        depth += parseInt(command[1]);
    }
}
console.log(hpos * depth);

//Part 2
console.log("Part 2 result: ")

hpos = 0;
depth = 0;
let aim = 0;
for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] == "forward") {
        hpos += parseInt(command[1]);
        depth += aim*parseInt(command[1]);
    }
    if (command[0] == "up") {
        aim -= parseInt(command[1]);
    }
    if (command[0] == "down") {
        aim += parseInt(command[1]);
    }
}
console.log(hpos * depth);
