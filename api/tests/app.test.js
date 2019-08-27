const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('it should respond 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});