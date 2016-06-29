var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect();

var bubbleSort = require('../js/bubble-sort.js');

describe('bubbleSort', function() {
  it('should be a function', function() {
    expect(bubbleSort).to.exist;
    expect(bubbleSort).to.be.a('function');

  });

});
