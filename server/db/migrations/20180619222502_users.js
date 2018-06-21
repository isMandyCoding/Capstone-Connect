
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(t) {
          t.increments('user_id').unique().notNull();
          t.string('name');
          t.string('email');
          t.string('company');
          t.string('website');
          t.string('phone');
          t.string('role');
          t.boolean('is_approved');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
