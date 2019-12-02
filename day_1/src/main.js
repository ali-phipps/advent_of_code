const lineByLine = require('n-readlines');
const liner = new lineByLine('input.txt');

let line;
let total = 0;

while (line = liner.next()) {
    total += Math.floor((parseFloat(line.toString('ascii')) / 3)) - 2 ;
    console.log(total);
}
