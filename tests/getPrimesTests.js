'use strict'

//import the getprime Object from the path ../getPrime/getprime.js
const getPrimes = require('../getPrimes/getprime.js');


//Test Suite for getPrimes functions

describe("Get Primes tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return [2, 3, 5, 7, 9] for 10", function() {
      expect(getPrimes(10)).toEqual([2, 3, 5, 7, 9]);
    });

    it("should return 'Negative number or zero not accepted' for -10", function() {
      expect(getPrimes(-10)).toEqual('Negative number or zero not accepted');
    });

    it("should return 'Negative number or zero not accepted' for 0", function() {
      expect(getPrimes(0)).toEqual('Negative number or zero not accepted');
    });

    it("should return 'Wrong input' for 'string'", function() {
      expect(getPrimes('string')).toEqual('Wrong input');
    });

    it("should return '1 not prime' for 1", function() {
      expect(getPrimes(1)).toEqual('1 not prime');
    });

    it("should return 'Wrong input' for Boolean input", function() {
      expect(getPrimes(true)).toEqual('Wrong input');
    });

  });});
