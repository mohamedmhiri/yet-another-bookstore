'use strict'
const should = require('should')
// const request = require('supertest')
const app = require('../index')
const assert = require('assert')
const request = require('request')
const server = app.listen(0)
const port = server.address().port
const supertest = require('supertest')(app)

describe('The World', function () {
  it('responds with JSON message <<Hello World>> at the root without Supertest', function (done) {
    request(`http://localhost:${ port }/`, function (err, response, body) {
      if (err) done(err)
      const payload = JSON.parse(body)
      assert.equal(payload.message, 'Hello World')

      done()
    })
  })

    it('responds with JSON message <<Hello World>> at the root with Supertest', function(done) {
        supertest
            .get("/")
            .expect(200)
            .expect('{"error":false,"message":"Hello World"}')
            .end(done);
    });
})
