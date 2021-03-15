exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1,
          username: "tyleradmin",
          password: "tyleradmin",
          account_type: "admin",
        },
        {
          user_id: 2,
          username: "user",
          password: "user",
          account_type: "user",
        },
      ]);
    });
};
