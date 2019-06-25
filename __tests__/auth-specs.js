const supertest = require('supertest');

const db = require('../auth/auth-router.js');
const server = require('../api/server.js');

describe('Auth Route /api/auth', () => {
      describe('/register', () => {
            it('should return 201 if you register an account successfully', async () => {
                  const res = await supertest(server)
                  .post('/api/auth/register')
                  .set({
                        authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNSwidXNlcm5hbWUiOiJVUk1vbSIsImlhdCI6MTU2MTQ5OTUwMywiZXhwIjoxNTYxNTg1OTAzfQ.OqCF-_MePZ0A5pNQ_lUmVV5znRueb99B2IFnFzDQA_0"
                  })
                  .send({
                        "username": "URMom",
                        "password": "pass",
                        "facility_id":
                  })
            it('')
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
                        "username": "KCrow",
                        "password": "pass"
                  })
                  expect(res.status).toBe(200)
            })
      })
})

