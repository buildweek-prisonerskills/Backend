const router = require('express').Router();

const Facilities = require('./facility-model.js');

// /api/facilities

router.get('/', async (req, res) => {
            try {
                  const facilities = await Facilities.find('facilities')
                  res.status(200).json(facilities)
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'failed to retrieve facilities from the database'})
            }
      })
      .post('/', async (req, res) => {
            const facility = req.body
            if(!facility.name || !facility.location){
                  return res.status(400).json({message: 'all fields are required'});  
            } 
            try {
                  const newFacility = await db.add(facility)
                  res.status(201).json({ message: 'facility created'})
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'failed adding facility to the database'});
            }
            
      })



module.exports = router;