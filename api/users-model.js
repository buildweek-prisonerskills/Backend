const db = require("../data/dbConfig");

module.exports = {
  add,
  update,
  remove,
  find,
  findBy,
  findById
};

async function add(user) {
  const [id] = await db("users")
    .insert(user)
    .returning("id");
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("facilities")
    .where({ id })
    .update(changes)
    .then(_ => {
      return find(id);
    });
}

function remove(id) {
  return db("users")
    .where({ id })
    .delete();
}

function find(filters) {
  if (filters) {
    return db
      .select(
        "u.id AS id",
        "u.username AS username",
        "u.password AS password",
        "f.name AS facility",
        "f.location AS location"
      )
      .from("users AS u")
	.join("facilities AS f", { "u.facility_id": "f.id" })
	.where(filters)
	.first()
  }
  return db('users')
  	.select(
		"u.id AS id",
		"u.username AS username",
		"u.password AS password",
		"f.name AS facility",
		"f.location AS location"
	    )
	    .from("users AS u")
	    .join("facilities AS f", { "u.facility_id": "f.id" })
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
