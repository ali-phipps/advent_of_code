
const generateCoordinates = (start, input) => {

 let direction = input[0].charAt(0);
 let distance = input[0].charAt(1);

 switch(direction) {
   case "R":

   return [[start[0] + distance,start[1]]];
   break;
   case "L":
   return [[start[0] - distance,start[1]]];
   break;
   case "U":
   return [[start[0],start[1] + distance]];
   case "D":
   return [[start[0],start[1] - distance]];
 }

};

exports.generateCoordinates = generateCoordinates;
