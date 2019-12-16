
const generateEndCoordinates = (start, input) => {

  let direction = input[0].charAt(0);
  let distance = input[0].charAt(1);
  coordinates = [];
  switch(direction) {
    case "R":
    coordinates.push([start[0] + distance, start[1]]);
    break;
    case "L":
    coordinates.push([start[0] - distance, start[1]]);
    break;
    case "U":
    coordinates.push([start[0], start[1] + distance]);
    break;
    case "D":
    coordinates.push([start[0], start[1] - distance]);
    break;
  }
  return coordinates;

};

exports.generateEndCoordinates = generateEndCoordinates;
exports.generateBetweenCoordinates = generateBetweenCoordinates;
