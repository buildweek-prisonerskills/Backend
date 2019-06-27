const supertest = require('supertest');
const db = require('../data/dbConfig.js');
const Auth = require('../auth/auth-router.js');
const server = require('../api/server.js');

describe('Auth Route /api/auth', () => {
      beforeEach(async () => {
            await db('users').truncate();
      });

      describe('/register', () => {
            it('should return 201 if you register an account successfully', async () => {
                  const newUser = {
                        username: "name",
                        password: "pass",
                        facility_id: 2
                  };
                
                  const res = await supertest(server)
                  .post('/api/auth/register')
                  .set({
                        authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNiwidXNlcm5hbWUiOiJuYW1lIiwiaWF0IjoxNTYxNjY2MTMyLCJleHAiOjE1NjE3NTI1MzJ9._4cziGhfIqcVByR0P7z3FUwJ5pk8FLZAwn3XTBBTBIM"
                  })
                  .send(newUser)
                  expect(res.status).toBe(201)
            })
            // it('')
            
      })
      describe('/login', () => {
            it('should return status 401 if you try to log in without a token (without registering)', async () => {
                  const res = await supertest(server)
                  .post('/api/auth/login')
                  .send({
                        "username": "username",
                        "password": "password"
                  })
                  expect(res.status).toBe(401)
            })
            it('should return status 200 if valid credentials are provided', async () => {
                  const res = await supertest(server)
                  .post('/api/auth/login')
                  .send({
                        "username": "name",
                        "password": "pass"
                  })
                  expect(res.status).toBe(200)
            })
      })
})

