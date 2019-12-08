var assert = require('assert');
var day2 = require('../Day2');


describe('Day2', function() {
  describe('#IntCode()', function() {
    it('code 99 stops the program', function() {
      assert.deepEqual(day2.intCode("99"), [ 99 ]);
    });

    it('calculate total on 1 blocks, add only', function() {
      assert.deepEqual(day2.intCode("1,0,0,0,99"), [2,0,0,0,99]);
    });

    it('calculate total on two blocks, add only', function() {
      assert.deepEqual(day2.intCode("1,0,0,0,1,0,0,0,99"), [4,0,0,0,1,0,0,0,99]);
    });

    it('calculate total on two blocks, stop on 99', function() {
      assert.deepEqual(day2.intCode("1,0,0,0,99,0,0,0,99"), [2,0,0,0,99,0,0,0,99]);
    });

    it('calculate total on 1 block, multiply', function() {
      assert.deepEqual(day2.intCode("2,4,4,5,99,0"), [2,4,4,5,99,9801]);
    });

    it('calculate total on 2 block, multiply', function() {
      assert.deepEqual(day2.intCode("1,1,1,4,99,5,6,0,99"), [30,1,1,4,2,5,6,0,99]);
    });


  });
});
