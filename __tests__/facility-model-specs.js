const db = require('../data/dbConfig.js');
const server = require('../api/server.js');
const supertest = require('supertest');
const { add, update, remove, find, findInmates, findBy, findById } = require('../api/facility-model');

describe('facility model', () => {
      beforeEach(async () => {
            await db('facilities').truncate();
      });

      // it('should set environment to testing', () => {
      //       expect(process.env.DB_ENV).toBe('testing');
      // });

      describe('add()', () => {
            it('should insert facility to facilities database', async () => {
                  await add({facility: 'Azkaban'})

                  const facilities = await db('facilities');
                  expect(facilities).toHaveLength(1)
            })
            it('should insert provided facility', async () => {
                  let facility = {facility: 'Jai1'};
                  let inserted = await insert(facility);
                  expect(inserted.facility).toBe(facility.facility)
            })
            
      })

      describe('remove()', () => {
            it('should remove facility from facilities database', async () => {
                  await remove({facility: 'Azkaban'})

                  const facilities = await db('facilities');
                  expect(facilities).toHaveLength(0)
            })
            it('should delete the specified facility', async () => {
                  const facilityList = await db.get()
                  const facilityToRemove = await db.get({ 'f.name': 'whatever'})
                  const removed = await db.remove({ facility: 'whatever' })
                  const newFacilityList = await db.get()
                  expect(newFacilityList.length).toBeLessThan(facilityList.length)
                  expect(facilityToRemove.name).toBe('whatever');
                  expect(removed).toBe(true);
                  
            })
      })
      describe('find()', () => {
            it('should return an array from the database', async () => {
            //      let res = await superteset(server).get('/api/facilities')
            //      expect(Aray.isArray(res.body)).toBe(true);
                  const facilities = await db.get()
                  expect(facilities).toEqual(expect.any(Array))
            })
      })
      
})