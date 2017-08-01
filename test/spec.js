const request = require('supertest')
describe('loading express', () => {
  var server;
  beforeEach(() =>{
    server = require('../app.js')
  })
  afterEach(() => {
    server.close()
  })
  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done)
  })
  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })
})
