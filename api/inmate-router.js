const router = require('express').Router();

const Inmates = require('./inmate-model.js');

// /api/inmates

router.get('/', async (req, res) => {
            try {
                  const inmates = await Inmates.find('inmates')
                  res.status(200).json(inmates)
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'failed to retrieve inmate profiles from the database'})
            }
      })
      .post('/', async (req, res) => {
            const inmate = req.body
            if(!inmate.name || !inmate.skills){
                  return res.status(400).json({message: 'all fields are required'});  
            } 
            try {
                  const newInmate = await db.add(inmate)
                  res.status(201).json({ message: 'inmate profile created'})
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'failed adding inmate profile to the database'});
            }
            
      })



module.exports = router;