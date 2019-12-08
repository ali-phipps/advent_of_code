const lineByLine = require('n-readlines');
const liner = new lineByLine('input.txt');
const day1 = require('./Day1');

let line;
let total = 0;

while (line = liner.next()) {
    let lineBaseFuel = day1.calculateFuel(line.toString('ascii'));
    let fuelForFuel = day1.calculateFuelForFuel(lineBaseFuel);
    total += lineBaseFuel + fuelForFuel;
    console.log(total);
}
