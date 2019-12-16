const day3 = require('./Day3');


let wire1 = ['R8','U5','L5','D3'];
let wire2 = ['U7','R6','D4','L4'];
let prevCoords = [0,0];
let wire1Coords = [];
let i = 0;
while (i < wire1.length) {
  let nextCoords = day3.generateEndCoordinates(prevCoords,wire1[i]);
  let betweenCoords = day3.generateBetweenCoordinates(prevCoords,nextCoords)

  betweenCoords.push(nextCoords);
  wire1Coords = wire1Coords.concat(betweenCoords);

  prevCoords = nextCoords;
  i++;
}


prevCoords = [0,0];
let wire2Coords = [];
let ii = 0;
while (ii < wire2.length) {
  let nextCoords = day3.generateEndCoordinates(prevCoords,wire2[ii]);
  let betweenCoords = day3.generateBetweenCoordinates(prevCoords,nextCoords)

  betweenCoords.push(nextCoords);
  wire2Coords = wire2Coords.concat(betweenCoords);

  prevCoords = nextCoords;
  ii++;
}
console.log(wire1Coords)
console.log(wire2Coords)
