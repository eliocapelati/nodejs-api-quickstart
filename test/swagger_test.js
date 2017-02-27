const should = require('should');
const supertest = require('supertest');
const server = require('../src/server');

describe('Swagger Documentation', function(done) {
  context('when getting /swagger.json', function(done) {
    it('should return swagger documentation', function(done) {
      supertest(server)
        .get('/swagger.json')
        .expect(200)
        .end(function(err, res) {
            res.body.should.be.json;
            done(err);
        });
    });
  });
});
