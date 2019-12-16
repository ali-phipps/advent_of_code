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
    it('generate 1 x coordinate', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([0,0],[2,0]), [[0,0],[1,0],[2,0]]);
    });

    it('generate multiple x coordinates', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([0,0],[3,0]), [[0,0],[1,0],[2,0],[3,0]]);
    });

    it('generate 1 y coordinate', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([0,0],[0,2]), [[0,0],[0,1],[0,2]]);
    });

    it('generate multiple y coordinates', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([0,0],[0,3]), [[0,0],[0,1],[0,2],[0,3]]);
    });

    it('generate 1 reverse x coordinates', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([2,0],[0,0]), [[2,0],[1,0],[0,0]]);
    });

    it('generate 1 reverse y coordinates', function() {
      assert.deepEqual(day3.generateBetweenCoordinates([0,2],[0,0]), [[0,2],[0,1],[0,0]]);
    });
  });

  describe('#findMatches()', function() {
    it('1 coord per wire, no match', function() {
      assert.deepEqual(day3.findMatches([[0,1]],[[2,0]]), []);
    });

    it('1 coord per wire, match', function() {
      assert.deepEqual(day3.findMatches([[1,0]],[[1,0]]), [[1,0]]);
    });

    it('multiple coords per wire, 1 match', function() {
      assert.deepEqual(day3.findMatches([[1,0],[2,0]],[[1,0],[1,1]]), [[1,0]]);
    });
  });
});
