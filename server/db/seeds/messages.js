exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          sender_id: 28,
          recipient_id: 2,
          subject: "Savings app",
          message: "Are you available to talk about this project on Monday?"
        },
        {
          sender_id: 2,
          recipient_id: 28,
          subject: "Re: Savings app",
          message: "Sure, let's talk at 12:30."
        },
        {
          sender_id: 28,
          recipient_id: 15,
          subject: "World peace",
          message: "Hi, I have some questions about achieving world peace. Is today a good time to go over the details?"
        },
        {
          sender_id: 15,
          recipient_id: 28,
          subject: "Re: World peace",
          message: "Sure. My number is (623) 853-7028."
        }
      ]);
    });
};
