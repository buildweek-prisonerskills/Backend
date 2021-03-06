const db = require('../data/dbConfig');

module.exports = {
	add,
	update,
	remove,
	find,
	findInmates,
	findBy,
	findById
};

async function add(facility) {
	const [id] = await db('facilities').insert(facility).returning('id');
	return db('facilities')
		.select('id', 'name', 'location', 'available_inmates')
		.where({ id })
		.first();
}

function update(id, changes) {
	return db('facilities')
	.where({ id })
	.update(changes)
	.then(_=> {
		return find(id)
	})
}

function remove(id) {
	return db('facilities').where({id}).delete();
}

function find() {
	return db('facilities');
}

function findInmates(id) {
	return db('facilities')
	.innerJoin('inmates', function() {this.on('facilities.id', '=', 'inmates.facility_id')})
	.where({ 'facility_id': id })
}

function findBy(filter) {
	return db('facilities').where(filter).first();
}

function findById(id) {
	return db('facilities')
		.select(
			'id', 
			'name', 
			'location', 
			'available_inmates')
		.where({ id })
		.first();
}