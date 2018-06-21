
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requested_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('requested_info').insert([
        {
          user_id: 28,
          project_id: 2
        },
        {
          user_id: 28,
          project_id: 15
        }
      ]);
    });
};
