var assert = require('assert');
var day2 = require('../Day2');


describe('Day2', function() {
  describe('#IntCode()', function() {
    it('code 99 stops the program', function() {
      assert.equal(day2.intCode(99), 99);
    });

  });
});
