var assert = require('assert');
var day3 = require('../Day3');

// test
// '[R8]' => [[0,8]]
describe('Day3', function() {
  describe('#generateCoordinates()', function() {
    it('1 input right', function() {
      assert.deepEqual(day3.generateCoordinates([0,0],['R8']), [[8,0]]);
    });
    it('1 input left', function() {
      assert.deepEqual(day3.generateCoordinates([0,0],['L8']), [[-8,0]]);
    });
    it('1 input up', function() {
      assert.deepEqual(day3.generateCoordinates([0,0],['U8']), [[0,8]]);
    });

    it('multiple inputs same type', function() {
      assert.deepEqual(day3.generateCoordinates([0,0],['U8','U2','U3']), [[0,-8]]);
    });




  });
});
