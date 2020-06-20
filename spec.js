var request = require('supertest');
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./server');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 on /wrong-path', function testPath(done) {
        request(server)
            .get('/wrong-path')
            .expect(404, done);
    });
});