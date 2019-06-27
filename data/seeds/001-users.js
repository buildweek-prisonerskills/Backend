const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'KCrow', password: 'bcrypt.hashSync("password", 10)', facility_id: 1},
        {username: 'JSimmons', password: 'bcrypt.hashSync("password", 10)', facility_id: 2},
        {username: 'JTrombley', password: 'bcrypt.hashSync("password", 10)', facility_id: 3},
        {username: 'JAviles', password: 'bcrypt.hashSync("password", 10)', facility_id: 4},
        {username: 'JWood', password: 'bcrypt.hashSync("password", 10)', facility_id: 5},
        {username: 'BGreen', password: 'bcrypt.hashSync("password", 10)', facility_id: 6},
        {username: 'DHoskins', password: 'bcrypt.hashSync("password", 10)', facility_id: 5},
        {username: 'JFSebagh', password: 'bcrypt.hashSync("password", 10)', facility_id: 4},
        {username: 'JDisney', password: 'bcrypt.hashSync("password", 10)', facility_id: 3},
        {username: 'DBowen', password: 'bcrypt.hashSync("password", 10)', facility_id: 2},
        {username: 'HBlevins', password: 'bcrypt.hashSync("password", 10)', facility_id: 1},
        {username: 'NBallenger', password: 'bcrypt.hashSync("password", 10)', facility_id: 2},
        {username: 'SSmodish', password: 'bcrypt.hashSync("password", 10)', facility_id: 3},
        {username: 'JCNriagu', password: 'bcrypt.hashSync("password", 10)', facility_id: 4},
      ]);
    });
};
