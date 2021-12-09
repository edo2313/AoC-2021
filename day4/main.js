const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/[\r]/g, '').replace(/ +(?= )/g, '').split('\n\n');

var extraction = array.shift().split(',').map(Number);

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('\n');
    for (let j = 0; j < array[i].length; j++) {
        array[i][j] = array[i][j].trim().split(' ').map(Number);
    }
}

let arraycopy = Array.from(array);

//Part 1
console.log("Part 1 result: ");

let win;
let sum;
for (let h = 0; h < extraction.length && !win; h++) {
    for (let i = 0; i < array.length && !win; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = 0; k < array[i][j].length; k++) {
                if (array[i][j][k] == extraction[h]) {
                    array[i][j][k] += 1000;
                }
            }
        }
        for (let j = 0; j < array[i].length && !win; j++) {
            win = false;
            for (let k = 0; k < array[i][j].length; k++) {
                if (array[i][j][k] >= 1000) {
                    win = true;
                } else {
                    win = false;
                    break;
                }
            }
            if (win) {
                sum = 0;
                for (let l = 0; l < array[i].length; l++) {
                    for (let m = 0; m < array[i][l].length; m++) {
                        if (array[i][l][m] < 1000) {
                            sum += array[i][l][m];
                        }
                    }
                }
                sum *= extraction[h];
            }
        }
        for (let j = 0; j < array[i].length && !win; j++) {
            win = false;
            for (let k = 0; k < array[i][j].length; k++) {
                if (array[i][k][j] >= 1000) {
                    win = true;

                } else {
                    win = false;
                    break;
                }
            }
            if (win) {
                sum = 0;
                for (let l = 0; l < array[i].length; l++) {
                    for (let m = 0; m < array[i][l].length; m++) {
                        if (array[i][l][m] < 1000) {
                            sum += array[i][l][m];
                        }
                    }
                }
                sum *= extraction[h];
            }
        }
    }
}

console.log(sum);

//Part 2
console.log("Part 2 result: ");

win = false;
for (let h = 0; h < extraction.length && !win; h++) {
    for (let i = 0; i < arraycopy.length && !win; i++) {
        for (let j = 0; j < arraycopy[i].length; j++) {
            for (let k = 0; k < arraycopy[i][j].length; k++) {
                if (arraycopy[i][j][k] == extraction[h]) {
                    arraycopy[i][j][k] += 1000;
                }
            }
        }
        for (let j = 0; j < arraycopy[i].length && !win; j++) {
            win = false;
            for (let k = 0; k < arraycopy[i][j].length; k++) {
                if (arraycopy[i][j][k] >= 1000) {
                    win = true;
                } else {
                    win = false;
                    break;
                }
            }
        }
        for (let j = 0; j < arraycopy[i].length && !win; j++) {
            win = false;
            for (let k = 0; k < arraycopy[i][j].length; k++) {
                if (arraycopy[i][k][j] >= 1000) {
                    win = true;
                } else {
                    win = false;
                    break;
                }
            }
        }
        if (win) {
            if (arraycopy.length == 1) {
                console.log(arraycopy);
                sum = 0;
                for (let l = 0; l < arraycopy[0].length; l++) {
                    for (let m = 0; m < arraycopy[0][l].length; m++) {
                        if (arraycopy[0][l][m] < 1000) {
                            sum += arraycopy[0][l][m];
                        }
                    }
                }
                sum *= extraction[h];
            } else {
                arraycopy.splice(i, 1);
                i--;
                win = false;
            }
        }
    }
}


console.log(sum);