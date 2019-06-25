
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inmates').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inmates').insert([
        {name: 'Kayla Crow', work_release: true, skills: "food service, forklift operation, butchery, shipping/receiving, landscaping, woodworking", facility_id: 1},
        {name: 'Gary Ridgeway', work_release: false, skills: "food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Dennis Rader', work_release: false, skills: "laundry service, hand/machine sewing, landscaping", facility_id: 3},
        {name: 'Charles Cullen', work_release: false, skills: "health care, carpentry, woodworking, custodial", facility_id: 4},
        {name: 'John Justin Bunting', work_release: false, skills: "furniture refinishing, carpentry, painting", facility_id: 5},
        {name: 'Ivan Milat', work_release: false, skills: "landscaping, custodial", facility_id: 6},
        {name: 'Rodney Alcala', work_release: false, skills: "theater, film/television", facility_id: 1}
        
      ]);
    });
};
