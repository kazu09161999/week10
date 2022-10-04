var assert = require("assert"); //link in assertion library
describe("Tests for function one", function() {
  describe("Multiplication 1", function() {
    it("should equal 6 when 2 multipled by 1 plus 4", function() {
      var result = 2*1+4;

      assert.equal(result, 6)
    });
  });
  describe("Multiplication 2", () => {
    it("should equal 4 when 2 multipled by 0 plus 4", () => {
      var result = 2*0+4;

      assert.equal(result, 4)
    });
  });
  describe("Multiplication 3", function() {
    it("should equal 2 when 2 multipled by -1 plus 4", function() {
      var result = 2*-1+4;

      assert.equal(result, 2)
    });
  });
});
