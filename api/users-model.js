const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findBy,
	findById
};

async function add(user) {
	const [id] = await db('users').insert(user).returning('id');
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first();
}

function remove(id) {
	return db('users').where({id}).delete();
}

function find() {
	return db('users').select('id', 'username', 'password', "facility_id");
}

function findBy(filter) {
	return db('users').where(filter).first();
}

function findById(id) {
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first();
}