const lineByLine = require('n-readlines');
const liner = new lineByLine('input.txt');
const day2 = require('./Day2');

let line = liner.next();
let total = 0;
let program = line.toString('ascii').split(",").map(Number);
let loopOutput = [];


  let i = 0;
  let j = 0;

  while (i < 100  ) {
    while (j < 100) {
      let loopOutput = day2.intCode(i,j);
       if (loopOutput === 19690720) {
         console.log(loopOutput);
         console.log('i',i);
         console.log('j',j);
         break;}
       j++;
    }
    i++;
    j = 0;
  }
