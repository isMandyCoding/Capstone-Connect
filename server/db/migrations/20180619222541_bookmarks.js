
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookmarks', function(t) {
          t.increments('bookmark_id').unique().notNull();
          t.integer('user_id');
          t.integer('project_id');
      });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookmarks');
};
