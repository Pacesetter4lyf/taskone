(function(){
  'use strict';

  describe("Get prime numbers from 0 to n: ", function() {

    describe("Case for input 0", function() {

      it("should return [] for 0", function() {
        expect(getPrimes(0)).toEqual([]);
      });

    });

    describe("Case for a negative number", function() {

      it("should return `No negative integer` for -8", function() {
        expect(getPrimes(-8)).toEqual('No negative integer');
      });

      it("should return `No negative integer` for -13", function() {
        expect(getPrimes(-13)).toEqual('No negative integer');
      });

    });

    describe("Case for positive integers", function() {

      it("should return [1,2,5] for 6", function() {
        expect(getPrimes(6)).toEqual([1,2,5]);
      });

      it("should return [1,2,5,7,11] for 13", function() {
        expect(getPrimes(13)).toEqual([1,2,5,7,11]);
      });
	  
	  it("should return [1,2,5,7,11,13,17,19] for 21", function() {
        expect(getPrimes(21)).toEqual([1,2,5,7,11,13,17,19]);
      });

    });

    describe("Case for non valid input", function() {

      it("should return 'Not a Number' for 'J'", function() {
        expect(getPrimes('J').toEqual("Not a Number");
      });
	  
	  it("should return 'Not an integer' for 10.5", function() {
        expect(getPrimes(10.5).toEqual("Not an integer");
      });
      
    });
  });
})();