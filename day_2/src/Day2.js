
const intCode = (codes) => {
  let codesArray = codes.split(',').map(Number);
  console.log("codesArray", codesArray);

  else {

    for ( var i = 0; i < codesArray.length; i++ ) {
      if (codesArray[i] === 99) {
        return codesArray;
      }
      else if (codesArray[i] === 1) {
        var firstPosition = codesArray[i + 1];
        var secondPosition = codesArray[i + 2];
        var resultPosition = codesArray[i + 3];
        codesArray[resultPosition] = codesArray[firstPosition] +
                                     codesArray[secondPosition];


      }
    }
  }
  return codesArray ;
};



exports.intCode = intCode;
