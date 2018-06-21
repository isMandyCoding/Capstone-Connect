
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requested_info', function(t) {
          t.increments('request_id').unique().notNull();
          t.integer('user_id');
          t.integer('project_id');
          t.timestamp('timestamp');
      });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requested_info');
};
