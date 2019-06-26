const db = require('../data/dbConfig');

module.exports = {
	add,
	update,
	remove,
	find,
	findBy,
	findById
};

async function add(inmate) {
	const [id] = await db('inmates').insert(inmate).returning('id');
	return db('inmates')
		.select('id', 'name', 'work_release', 'skills')
		.where({ id })
		.first();
}

function update(id, changes) {
	return db('inmates')
	.where({ id })
	.update(changes)
	.then(_ => {
		return find(id)
	})
}

function remove(id) {
	return db('inmates').where({id}).delete();
}

function find() {
	return db('inmates');
}

function findBy(filter) {
	return db('inmates').where(filter).first();
}

function findById(id) {
	return db('inmates')
		.select(
			'id', 
			'name', 
			'work_release', 
			'skills')
		.where({ id })
		.first();
}