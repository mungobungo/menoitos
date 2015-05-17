/**
 * Created by oleg on 18.05.15.
 * Description: dummy test for editorial puposes
  */

var should = require ('should');
var assert = require('assert');

describe('Test Framework', function(){

    it('should be mocha installed and running,', function(){
        assert.equal(true, true);
    })
    it('should have library installed and running for fluent testing', function(){
        true.should.eql(true);
    })
})

