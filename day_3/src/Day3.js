
const generateEndCoordinates = (start, input) => {

  let direction = input[0].charAt(0);
  let distance = input[0].charAt(1);
  let coordinates = [];
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

const generateBetweenCoordinates = (start, end) => {
  let output = [];
  if (start[1] == end[1]) {
    if (end[0] > start[0]) {
      for (var i = start[0]; i <= end[0]; i++){
        output.push([i,start[1]]);
      }

    } else {
      for (var i = start[0]; i >= end[0]; i--){
        output.push([i,start[1]]);
      }
    }
  } else {

    if (end[1] > start[1] ) {
      for (var i = start[1]; i <= end[1]; i++){
        output.push([start[0],i]);
      }
    } else {
      for (var i = start[1]; i >= end[1]; i--){
        output.push([start[0],i]);
      }
    }
  }

  return output;
};

const findMatches = (wire1,wire2) => {

}



exports.findMatches = findMatches;
exports.generateEndCoordinates = generateEndCoordinates;
exports.generateBetweenCoordinates = generateBetweenCoordinates;
