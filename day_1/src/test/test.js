var assert = require('assert');
var day1 = require('../Day1');


describe('Day1', function() {
  describe('#calculateFuelForFuel()', function() {
    it('0 when passed zero', function() {
      assert.equal(day1.calculateFuelForFuel(0), 0);
    });

    it('1 level of recursion', function() {
      assert.equal(day1.calculateFuelForFuel(14), 2);
    });

    it('2 levels of recursion', function() {
      assert.equal(day1.calculateFuelForFuel(21), 5);
    });

    it('5 levels of recursion', function() {
      assert.equal(day1.calculateFuelForFuel(1969), 966);
    });

    it('many (!) levels of recursion', function() {
      assert.equal(day1.calculateFuelForFuel(100756), 50346);
    });


  });
});
