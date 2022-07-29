const supertest = require('supertest');
const server = require('../src/server.js');

const request = supertest(server.app);

describe('car', () => {
    it('creates a car', async () => {
        
    })
});