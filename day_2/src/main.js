const lineByLine = require('n-readlines');
const liner = new lineByLine('input.txt');
const day2 = require('./Day2');

let line = liner.next();
let total = 0;


    let code = day2.intCode(line.toString('ascii'));
    console.log(code[0]);
