const should = require('should');
const supertest = require('supertest');
const server = require('../src/server');

describe('Starter API', function(done) {
  context('when getting /hello', function(done) {
    it('should return hello world', function(done) {
      supertest(server)
        .get('/v1/hello')
        .expect(200)
        .end(function(err, res) {
            // console.log(res.text);
            res.text.should.containEql('Hello World');
            done(err);
        })
    });
  });

  context('when getting /hello?name=John', function(done) {
    it('should return hello John', function(done) {
      supertest(server)
        .get('/v1/hello?name=John')
        .expect(200)
        .end(function(err, res) {
          res.text.should.containEql('Hello John');
          done(err);
        });
    });
  });

  context('when getting /hi', function(done) {
    it('should return not found', function(done) {
      supertest(server)
        .get('/v1/hi')
        .expect(404)
        .end(function(err, res) {
          res.text.should.containEql('Not Found');
          done(err);
        })
    })
  })
});
