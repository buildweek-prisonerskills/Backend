
exports.up = function(knex, Promise) {
      return knex.schema
            .createTable('users', tbl => {
                  tbl.increments();
                  tbl.string('username', 100).notNullable().unique();
                  tbl.string('password').notNullable
                  tbl
                        .integer('facility_id')
                        .unsigned()
                        .notNullable()
                        .references('id')
                        .inTable('facilities')
                        .onDelete('RESTRICT')
                        .onUpdate('CASCADE')

            })
            .createTable('facilities', tbl => {
                  tbl.increments();
                  tbl.string('name', 130).notNullable().unique();
                  tbl.string('location', 230).notNullable();

            })
            .createTable('inmates', tbl => {
                  tbl.increments();
                  tbl
                        .integer('facility_id')
                        .unsigned()
                        .notNullable()
                        .references('id')
                        .inTable('facilities')
                        .onDelete('RESTRICT')
                        .onUpdate('CASCADE')
                  tbl.boolean('work_release').defaultTo(false);
                  tbl.string('skills', 400)
            })
  
};

exports.down = function(knex, Promise) {
      return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('facilities')
            .dropTableIfExists('inmates')
};
