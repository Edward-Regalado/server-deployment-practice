const supertest = require('supertest');
const server = require('../src/server.js');

const request = supertest(server.app);

describe('Node Server', () => {
    it('Says Hello World', async () => {
        // set up the test so it can do a thing
        // Prepare the server
        // (see above)

        // perform an action, that does the thing
        // request the / route

    const response = await request.get('/'); // The response is a promise

    // assert or expect the result of the action
    // expect the / route to respond with hello
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello, World');
});

it('Gets Student Data', async () => {
    const response = await request.get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Tony',
      role: 'Student',
    });
  });
});
