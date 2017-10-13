var common = require("../common");
var options = common.options;
var assert = common.assert;
var chaiHttp = require('chai-http');
var chai = require('chai');

var home = require('../../server/src/controllers/home')();

describe('Testing the home Controller', function(){
  it('home add two numbers', function(){

    assert.strictEqual(home.addNumbers(1,2), 3, 'The sum is correct');
  });
})

