const lineByLine = require('n-readlines');
const liner = new lineByLine('input.txt');

let line;
let total = 0;

// while (line = liner.next()) {
//     total += calculateFuel(line.toString('ascii'));
//     console.log(total);
// }

const calculateFuelForFuel = (fuel) => {

  let fuelTotal = calculateFuel(fuel);

  if (fuelTotal <= 0) {
    return 0;
  }
  else {
    return fuelTotal += calculateFuelForFuel(fuelTotal);
  }

};

const calculateFuel = (fuel) => {
  return  Math.floor(( parseFloat( fuel ) / 3 )) - 2 ;
};

exports.calculateFuelForFuel = calculateFuelForFuel;
exports.calculateFuel = calculateFuel;
