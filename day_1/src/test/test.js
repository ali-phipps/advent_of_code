var assert = require('assert');
var day1 = require('../Day1');


describe('Day1', function() {
  describe('#calculateFuelForFuel()', function() {
    it('should return 0 when passed zero', function() {
      assert.equal(day1.calculateFuelForFuel(0), 0);
    });
  });
});
