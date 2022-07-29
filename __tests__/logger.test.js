const { logger } = require('../src/middleware/logger.js');

describe('Middleware', () => {
    it('logs to the console.log', () => {
        // Set up
        jest.spyOn(console, 'log').mockImplementation();
        const req = { method: 'GET', url: '/'};
        const res = {};
        const next = () => {};

        // Action
        logger(req, res, next);


        // Assertion
        expect(console.log).toHaveBeenCalledWith('GET', '/');
    });

    it('calls next()', () => {
        // Set up
        const req = { method: 'GET', url: '/'};
        const res = {};
        const next = jest.fn();

        // Action
        logger(req, res, next);

        // Assertion
        expect(next).toHaveBeenCalled();
    })
});
