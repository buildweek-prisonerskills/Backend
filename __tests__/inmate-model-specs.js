const db = require('../data/dbConfig.js');
const Inmate = require('../api/inmate-model');
// const supertest = require('supertest');
const { add, update, remove, find, findBy, findById } = require('../api/inmate-model');

describe('inmate model', () => {
      beforeEach(async () => {
            await db('inmates').truncate();
      });

      // it('should set environment to testing', () => {
      //       expect(process.env.DB_ENV).toBe('testing');
      // });

      describe('add()', () => {
            it('should insert inmate to inmates database', async () => {
                  await add({
                        name: 'Bellatrix Lestrange',
                        facility_id: 2,
                        work_release: 1,
                        skills: 'laundry service, butchery, painting'})

                  const inmates = await db('inmates');
                  expect(inmates).toHaveLength(1)
            })
            it('should insert provided inmate', async () => {
                  let inmate = {
                        name: 'Bellatrix Lestrange',
                        facility_id: 2,
                        work_release: 1,
                        skills: 'laundry service, butchery, painting'
                  };
                  let inserted = await add(inmate);
                  expect(inserted.name).toBe(inmate.name)
            })
            
      })

      describe('remove()', () => {
            it('should remove inmate from inmates database', async () => {
                  await remove({inmate: 'Azkaban'})

                  const inmates = await db('inmates');
                  expect(inmates).toHaveLength(0)
            })
            // it('should delete the specified inmate', async () => {
            //       const inmateToRemove = await inmate.add({
            //             name: 'Azkaban',
            //             location: '123 England Island',
            //             available_inmates: '5'})
            //       const inmateList = await inmate.find()
            //       const removed = await inmate.remove({
                        //    id: , 
                        //    name: 'Azkaban',
                        //    location: '123 England Island',
                        //    available_inmates: '5'})
            //       const newinmateList = await inmate.find()
            //       expect(newinmateList.length).toBeLessThan(inmateList.length)
            //       expect(inmateToRemove.name).toBe('whatever');
            //       expect(removed).toBe(true);
                  
            // })
      })
      describe('find()', () => {
            it('should return an array from the database', async () => {
            //      let res = await superteset(server).get('/api/inmates')
            //      expect(Aray.isArray(res.body)).toBe(true);
                  const inmates = await Inmate.find()
                  expect(Array.isArray(inmates)).toBe(true)
            })
      })
      
})