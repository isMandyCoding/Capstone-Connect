
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(t) {
          t.increments('message_id').unique().notNull();
          t.integer('sender_id');
          t.integer('recipient_id');
          t.string('subject');
          t.string('message');
          t.timestamp('timestamp').defaultTo(knex.fn.now());
      });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
