
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(t) {
          t.increments('project_id').unique().notNull();
          t.integer('project_owner_id');
          t.integer('committed_student_id');
          t.string('project_name');
          t.string('project_type');
          t.text('tools');
          t.string('paid_opportunities');
          t.text('description');
          t.string('role_type');
          t.text('business_problem');
          t.timestamp('timestamp').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
