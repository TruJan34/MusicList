// Access supertest functionality under the variable name request
const request = require('supertest');

// Top level of this test suite: the entire user API
describe('The User API', () => {
  // Specific test
  // it('Returns a list of all users', async () => {
  it('Returns a list of all users', () => {
    // Connect to the server and get a response
    // Expect that response to be a 200 and server JSON
    // const res = await request('http://localhost:3000')
    const res = request('http://localhost:3000')
      .get('/api/users/list')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].username).toBe('admin');
      });
    // These expects are jest, not supertest
    // First, expect to get a result that is an array
    // expect(Array.isArray(res.body)).toBe(true);
    // Second, expect the array to have something in it
    // expect(res.body.length).toBeGreaterThan(0);
    // expect(res.body[0].username).toBe('admin');
  });
});
