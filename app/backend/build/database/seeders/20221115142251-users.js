module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        password: '$2a$06$xuEl3rKavBwWec9zCcD1aeY72wgK55UNTkdPPgVu1mldIr8gA.h2y',
        accountId: 1,
          // senha: Secretadmin123
      },
      {
        username: 'User',
        password: '$2a$06$yyqWvRObujdx9PmCQwkXCOv1JN3gVJQzr8QDm2oMc8vVM/Y6wuF/S', 
        accountId: 2,
        // senha: Secretuser123
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};