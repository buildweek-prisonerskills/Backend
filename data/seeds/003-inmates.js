
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
        {name: 'Ivan Milat', work_release: true, skills: "landscaping, custodial", facility_id: 6},
        {name: 'Rodney Alcala', work_release: false, skills: "theater, film/television", facility_id: 1},
        {name: 'Charles Manson', work_release: false, skills: "food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Timothy McVeigh', work_release: true, skills: "laundry service, hand/machine sewing, landscaping", facility_id: 3},
        {name: 'Orenthal Simpson', work_release: false, skills: "health care, carpentry, woodworking", facility_id: 4},
        {name: 'Theodore Kaczynski', work_release: false, skills: "auto repair, furniture refinishing, carpentry, painting", facility_id: 5},
        {name: 'Ramzi Yousef', work_release: false, skills: "furniture refinishing, landscaping, custodial", facility_id: 6},
        {name: 'Paul Pernardo', work_release: true, skills: "furniture refinishing, carpentry, woodworking", facility_id: 1},
        {name: 'Karla Holmolka', work_release: false, skills: "forklift operation, landscaping, auto repair, welding, machining", facility_id: 2},
        {name: 'Mark David Chapman', work_release: false, skills: "laundry service, hand/machine sewing, landscaping", facility_id: 3},
        {name: 'Paula Denyer', work_release: false, skills: "auto repair, health care, carpentry, woodworking, custodial", facility_id: 4},
        {name: 'Eric Edgar Cooke', work_release: false, skills: "furniture refinishing, carpentry, painting", facility_id: 5},
        {name: 'Gregory Brazel', work_release: true, skills: "landscaping, custodial", facility_id: 6},
        {name: 'David Berkowitz', work_release: true, skills: "theater, landscaping, film/television", facility_id: 1},
        {name: 'Dennis Nilson', work_release: false, skills: "food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Peter Sutcliffe', work_release: false, skills: "laundry service, hand/machine sewing, landscaping", facility_id: 3},
        {name: 'Luis Garavito', work_release: true, skills: "health care, carpentry, woodworking, custodial", facility_id: 4},
        {name: 'Pedro Lopez', work_release: false, skills: "furniture refinishing, auto repair, carpentry, painting", facility_id: 5},
        {name: 'Samuel Little', work_release: false, skills: "landscaping, custodial", facility_id: 6},
        {name: 'Mikhail Popkov', work_release: true, skills: "auto repair, film/television", facility_id: 1},
        {name: 'Robert Pickton', work_release: true, skills: "food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Moses Sithole', work_release: false, skills: "landscaping", facility_id: 3},
        {name: 'John Wayne Gacy', work_release: false, skills: "carpentry, woodworking, custodial", facility_id: 4},
        {name: 'Theodore Kaczynski', work_release: false, skills: "forklift operation, auto repair, carpentry", facility_id: 5},
        {name: 'Ramzi Yousef', work_release: true, skills: "forklift operation, shipping/receiving, landscaping, health care, custodial", facility_id: 6},
        {name: 'Karl Denke', work_release: true, skills: "auto repair, film/television", facility_id: 1},
        {name: 'Juan Vallejo Corona', work_release: true, skills: "forklift operation, shipping/receiving, food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Ronald Dominique', work_release: true, skills: "health care, landscaping", facility_id: 3},
        {name: 'Patrick Kearney', work_release: false, skills: "carpentry, woodworking, custodial", facility_id: 4},
        {name: 'Larry Eyler', work_release: false, skills: "auto repair, carpentry, painting", facility_id: 5},
        {name: 'Georgia Tann', work_release: false, skills: "welding, landscaping, custodial", facility_id: 6},
        {name: 'Randall Woodfield', work_release: true, skills: "forklift operation, shipping/receiving, auto repair", facility_id: 1},
        {name: 'Umesh Reddy', work_release: true, skills: "food service, auto repair, welding, machining", facility_id: 2},
        {name: 'Robert Lee Yates', work_release: false, skills: "forklift operation, welding, landscaping", facility_id: 3},
        {name: 'Robert Hansen', work_release: false, skills: "carpentry, woodworking, custodial", facility_id: 4},
        {name: 'Carl Watts', work_release: false, skills: "forklift operation, auto repair", facility_id: 5},
        {name: 'Arthur Shawcross', work_release: false, skills: "landscaping, custodial", facility_id: 6},
        {name: 'Belle Gunness', work_release: false, skills: "forklift operation, shipping/receiving", facility_id: 1},
        {name: 'Kaspars Petrovs', work_release: true, skills: "welding, machining", facility_id: 2},
        {name: 'Richard Ramirez', work_release: false, skills: "landscaping", facility_id: 3},
        {name: 'Joseph James DeAngelo', work_release: false, skills: "custodial", facility_id: 4},
        {name: 'Herbert Mullin', work_release: false, skills: "forklift operation, auto repair", facility_id: 5},
        {name: 'William Suff', work_release: false, skills: "landscaping, custodial", facility_id: 6},
        
        
      ]);
    });
};
