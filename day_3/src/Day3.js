
const generateEndCoordinates = (start, input) => {

  let direction = input.slice(0,1);
  let distance = input.slice(1);
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
  wire1.forEach(function(coord1){
    wire2.forEach(function(coord2){
      if (coord1[0] === coord2[0] && coord1[1] === coord2[1]) {
        result.push(coord1);
      }
      })
    })

  return result;
}

const findShortest = (route) => {

  let lowestTotal = 9999999999;

  for (i = 0; i < route.length;i++) {

    let absVal1 = Math.abs(route[i][0])
    let absVal2 = Math.abs(route[i][1])
    let total =  absVal1 + absVal2;
    if (lowestTotal >= total && total > 0) {
      lowestTotal = total;
    }
  }
  return lowestTotal;
}


exports.findShortest = findShortest;
exports.findMatches = findMatches;
exports.generateEndCoordinates = generateEndCoordinates;
exports.generateBetweenCoordinates = generateBetweenCoordinates;
