const db = require('../data/dbConfig.js');
const Facility = require('../api/facility-model');
// const supertest = require('supertest');
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
                  await add({
                        name: 'Azkaban',
                        location: '123 England Island',
                        available_inmates: '5'})

                  const facilities = await db('facilities');
                  expect(facilities).toHaveLength(1)
            })
            it('should insert provided facility', async () => {
                  let facility = {
                        name: 'Azkaban',
                        location: '123 England Island',
                        available_inmates: '5'};
                  let inserted = await add(facility);
                  expect(inserted.name).toBe(facility.name)
            })
            
      })

      describe('remove()', () => {
            it('should remove facility from facilities database', async () => {
                  await remove({facility: 'Azkaban'})

                  const facilities = await db('facilities');
                  expect(facilities).toHaveLength(0)
            })
            // it('should delete the specified facility', async () => {
            //       const facilityToRemove = await Facility.add({name: 'Azkaban',
            //       location: '123 England Island',
            //       available_inmates: '5'})
            //       const facilityList = await Facility.find()
            //       const removed = await Facility.remove({id: 7, name: 'Azkaban',
            //       location: '123 England Island',
            //       available_inmates: '5'})
            //       const newFacilityList = await Facility.find()
            //       expect(newFacilityList.length).toBeLessThan(facilityList.length)
            //       expect(facilityToRemove.name).toBe('whatever');
            //       expect(removed).toBe(true);
                  
            // })
      })
      describe('find()', () => {
            it('should return an array from the database', async () => {
            //      let res = await superteset(server).get('/api/facilities')
            //      expect(Aray.isArray(res.body)).toBe(true);
                  const facilities = await Facility.find()
                  expect(Array.isArray(facilities)).toBe(true)
            })
      })
      
})