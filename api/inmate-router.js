const router = require("express").Router();

const Inmates = require("./inmate-model.js");
const { authenticate } = require("../auth/auth-middleware.js");

// /api/inmates

router
  .get("/", async (req, res) => {
    try {
      const inmates = await Inmates.find("inmates");
      res.status(200).json(inmates);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "failed to retrieve inmate profiles from the database"
      });
    }
  })
  .post("/", authenticate, async (req, res) => {
    const inmate = req.body;
    if (!inmate.name || !inmate.skills) {
      return res.status(400).json({ message: "all fields are required" });
    }
    try {
      const newInmate = await Inmates.add(inmate);
      res.status(201).json({ message: "inmate profile created" });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "failed adding inmate profile to the database" });
    }
  });

// /api/inmates/:id

router
  .get("/:id", (req, res) => {
    Inmates.findById(req.params.id)
      .then(inmate => {
        if (req.params.id) {
          res.status(200).json(inmate);
        } else {
          res
            .status(404)
            .json({
              message: "no inmate with that ID currently exists in our database"
            });
        }
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "could not retrieve inmates from our database" });
      });
  })
  .put("/:id", authenticate, async (req, res) => {
    try {
      const change = await Inmates.update(req.params.id, req.body);
      if (change) {
        res.status(200).json({ message: "update successful" });
      } else {
        res
          .status(404)
          .json({ message: "that inmate could not be found in our database" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "could not update the inmates database" });
    }
  })
  .delete("/:id", authenticate, async (req, res) => {
    try {
      const count = await Inmates.remove(req.params.id);
      if (count > 0) {
        res
          .status(200)
          .json({ message: "this inmate has been removed from the database" });
      } else {
        res
          .status(404)
          .json({ message: "that inmate could not be found in our database" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "could not remove inmate from database" });
    }
  });

module.exports = router;
