const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').split("\n");


//Part 1
console.log("Part 1 result: ");

let gammaRate = '';
for (let i = 0; i < array[0].length; i++) {
    let temp = 0;
    for (let j = 0; j < array.length; j++) {
        temp += parseInt(array[j][i]);
    }
    gammaRate += (temp > array.length / 2 ? 1 : 0);
}

let epsilonRate = '';
for (let i = 0; i < array[0].length; i++) {
    epsilonRate += parseInt(gammaRate[i]) ? 0 : 1;
}

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));

//Part 2
console.log("Part 2 result: ");

let oxygen = Array.from(array);
for (let i = 0; i < oxygen[0].length && oxygen.length > 1; i++) {
    let arrOne = [];
    let arrZero = [];
    for (let j = 0; j < oxygen.length; j++) {
        if (oxygen[j][i] == '1') {
            arrOne.push(j);
        } else {
            arrZero.push(j);
        }
    }
    let temp = [];
    if (arrOne.length == arrZero.length || arrOne.length > arrZero.length) {
        for (let k = 0; k < arrOne.length; k++) {
            temp.push(oxygen[arrOne[k]]);
        }
    } else {
        for (let k = 0; k < arrZero.length; k++) {
            temp.push(oxygen[arrZero[k]]);
        }
    }
    oxygen = Array.from(temp);
}

let co = Array.from(array);
for (let i = 0; i < co[0].length && co.length > 1; i++) {
    let arrOne = [];
    let arrZero = [];
    for (let j = 0; j < co.length; j++) {
        if (co[j][i] == '1') {
            arrOne.push(j);
        } else {
            arrZero.push(j);
        }
    }
    let temp = [];
    if (arrOne.length == arrZero.length || arrOne.length > arrZero.length) {
        for (let k = 0; k < arrZero.length; k++) {
            temp.push(co[arrZero[k]]);
        }
    } else {
        for (let k = 0; k < arrOne.length; k++) {
            temp.push(co[arrOne[k]]);
        }
    }
    co = Array.from(temp);
}

console.log(parseInt(oxygen[0], 2) * parseInt(co[0], 2));