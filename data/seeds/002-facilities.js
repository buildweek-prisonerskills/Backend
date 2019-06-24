
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('facilities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('facilities').insert([
        {name: 'Colorado State Penitentiary', location: '50 Evans Rd, Cañon City, CO 81212', available_inmates: 0},
        {name: 'USP Florence ADMAX', location: '5880 CO-67, Florence, CO 81226', available_inmates: 0},
        {name: 'Rikers Island', location: '11-11 Hazen Street, East Elmhurst, NY 11370', available_inmates: 0},
        {name: 'Attica Correctional Facility', location: '639 Exchange St, Attica, NY 14011', available_inmates: 0},
        {name: 'San Quentin State Prison', location: 'San Quentin State Prison, San Quentin, CA 94974', available_inmates: 0},
        {name: 'Leavenworth Federal Penitentiary', location: '1300 Metropolitan Ave, Leavenworth, KS 66048', available_inmates: 0},
        
      ]);
    });
};
