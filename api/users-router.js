const router = require("express").Router();

const Users = require("./users-model.js");

// /api/users
router.get("/", async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const change = await Users.update(req.params.id, req.body);
    if (change) {
      res.status(200).json({ message: "update successful" });
    } else {
      res
        .status(404)
        .json({ message: "that user could not be found in our database" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "could not update the users database" });
  }
})
.delete("/:id", async (req, res) => {
  try {
    const removed = await Users.remove(req.params.id);
    if (removed) {
      res.status(204).json({ success: "user has been removed" });
    } else {
      res
        .status(404)
        .json({ message: "no user with the specified ID currently exists" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
