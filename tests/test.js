var expect = require('expect');
var math = require('./math.js');
var app = require('../app.js');
var request = require('supertest');


describe('adder', function () {

    it('should add two arguments', function () {
        expect(math.adder(2, 5)).toBe(7);
    });

    it('should be a number', function () {
        expect(math.adder(2, 5)).toBeA('number');
    });

})

describe('multiplyer', function () {

    it('should multiply two arguments', function () {
        expect(math.multiplyer(2, 5)).toBe(10);
    });

    it('should be a number', function () {
        expect(math.multiplyer(20, 51)).toBeA('number');
    });

})

describe('GET /', function(){
  it('respond with text/html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /text/)
      .expect(200, done);
  })
})

describe('POST /post', function(){
  it('respond with json', function(done){
    request(app)
      .post('/post')
      .send({userName: 'Kyle Hill', email: 'kyle@jogomarketing.com'})
      .set('Accept', 'application/json')
      .expect(404, done);
  })
})
