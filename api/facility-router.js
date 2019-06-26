const router = require("express").Router();

const Facilities = require("./facility-model.js");
const { authenticate } = require("../auth/auth-middleware.js");

// /api/facilities

router
  .get("/", async (req, res) => {
    try {
      const facilities = await Facilities.find("facilities");
      res.status(200).json(facilities);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "failed to retrieve facilities from the database" });
    }
  })
  .post("/", async (req, res) => {
    const facility = req.body;
    if (!facility.name || !facility.location) {
      return res.status(400).json({ message: "all fields are required" });
    }
    try {
      const newFacility = await Facilities.add(facility);
      res.status(201).json({ message: "facility created" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "failed adding facility to the database" });
    }
  });
// /api/facilities/:id

router
  .get("/:id", (req, res) => {
    Facilities.findById(req.params.id)
      .then(inmate => {
        if (req.params.id) {
          res.status(200).json(inmate);
        } else {
          res
            .status(404)
            .json({
              message: "no facility with that ID currently exists in our database"
            });
        }
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "could not retrieve facilities from our database" });
      });
  })
  .put("/:id", async (req, res) => {
    try {
      const change = await Facilities.update(req.params.id, req.body);
      if (change) {
        res.status(200).json({ message: "update successful" });
      } else {
        res
          .status(404)
          .json({ message: "that facility could not be found in our database" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "could not update the facilities database" });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const count = await Facilities.remove(req.params.id);
      if (count > 0) {
        res
          .status(200)
          .json({ message: "this facility has been removed from the database" });
      } else {
        res
          .status(404)
          .json({ message: "that facility could not be found in our database" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "could not remove facility from database" });
    }
  });

module.exports = router;
