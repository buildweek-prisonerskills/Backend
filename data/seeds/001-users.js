
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'KCrow', password: 'pass', facility_id: 1},
        {username: 'JSimmons', password: 'pass', facility_id: 2},
        {username: 'JTrombley', password: 'pass', facility_id: 3},
        {username: 'JAviles', password: 'pass', facility_id: 4},
        {username: 'JWood', password: 'pass', facility_id: 5},
        {username: 'BGreen', password: 'pass', facility_id: 6},
        {username: 'DHoskins', password: 'pass', facility_id: 5},
        {username: 'JFSebagh', password: 'pass', facility_id: 4},
        {username: 'JDisney', password: 'pass', facility_id: 3},
        {username: 'DBowen', password: 'pass', facility_id: 2},
        {username: 'HBlevins', password: 'pass', facility_id: 1},
        {username: 'NBallenger', password: 'pass', facility_id: 2},
        {username: 'SSmodish', password: 'pass', facility_id: 3},
        {username: 'JCNriagu', password: 'pass', facility_id: 4},
      ]);
    });
};
