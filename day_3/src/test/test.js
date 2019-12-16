var assert = require('assert');
var day3 = require('../Day3');

// test
// '[R8]' => [[0,8]]
describe('Day3', function() {
  describe('#generateEndCoordinates()', function() {
    it('1 input right', function() {
      assert.deepEqual(day3.generateEndCoordinates([0,0],['R8']), [[8,0]]);
    });
    it('1 input left', function() {
      assert.deepEqual(day3.generateEndCoordinates([0,0],['L8']), [[-8,0]]);
    });
    it('1 input up', function() {
      assert.deepEqual(day3.generateEndCoordinates([0,0],['U8']), [[0,8]]);
    });

    it('1 input down', function() {
      assert.deepEqual(day3.generateEndCoordinates([0,0],['D8']), [[0,-8]]);
    });

  });

  describe('#generateBetweenCoordinates()', function() {
    it(generate x coordinates', function() {
      assert.deepEqual(day3.generateEndCoordinates([0,0],[3,0]), [[1,0],[2,0]]);
    });
  });
});
