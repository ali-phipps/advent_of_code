
const generateEndCoordinates = (start, input) => {

  let direction = input.charAt(0);
  let distance = input.charAt(1);
  let coordinates = [];
  switch(direction) {
    case "R":
    coordinates.push(start[0] + parseInt(distance));
    coordinates.push(start[1]);
    break;
    case "L":
    coordinates.push(start[0] - parseInt(distance));
    coordinates.push(start[1]);
    break;
    case "U":
    coordinates.push(start[0]);
    coordinates.push(start[1] + parseInt(distance));
    break;
    case "D":
    coordinates.push(start[0]);
    coordinates.push(start[1] - parseInt(distance));
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
  let result =  [];
  let i = 0;
  while (i < wire1.length) {
  if (wire1[i][0] === wire2[i][0] && wire1[i][1] === wire2[i][1]) {
    result.push(wire1[i]);
  }
  i++;
}
  return result;
}

const findShortest = (route) => {

  let lowestTotal = route[0][0] + route[0][1];
  i = 1;

  while (i < route.length){
    let total = route[1][0] + route[1][1];

    if (lowestTotal >= total) {
      lowestTotal = total;
    }
    i++;
  }
  return lowestTotal;
}


exports.findShortest = findShortest;
exports.findMatches = findMatches;
exports.generateEndCoordinates = generateEndCoordinates;
exports.generateBetweenCoordinates = generateBetweenCoordinates;
