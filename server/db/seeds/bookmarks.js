
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookmarks').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookmarks').insert([
        {
          user_id: 28,
          project_id: 1
        },
        {
          user_id: 28,
          project_id: 14
        },
        {
          user_id: 28,
          project_id: 3
        },
        {
          user_id: 29,
          project_id: 3
        },
        {
          user_id: 29,
          project_id: 4
        },
        {
          user_id: 29,
          project_id: 15
        },
        {
          user_id: 29,
          project_id: 10
        },
        {
          user_id: 30,
          project_id: 7
        },
        {
          user_id: 30,
          project_id: 2
        },
        {
          user_id: 30,
          project_id: 16
        }
      ]);
    });
};
