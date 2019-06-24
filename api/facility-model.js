const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findBy,
	findById
};

async function add(facility) {
	const [id] = await db('facilities').insert(facility).returning('id');
	return db('facilities')
		.select('id', 'name')
		.where({ id })
		.first();
}

function remove(id) {
	return db('facilities').where({id}).delete();
}

function find() {
	return db('facilities').select('id', 'name', 'password');
}

function findBy(filter) {
	return db('facilities').where(filter).first();
}

function findById(id) {
	return db('facilities')
		.select('id', 'name')
		.where({ id })
		.first();
}