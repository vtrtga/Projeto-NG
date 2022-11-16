'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('transactions', [
      {
        debitedAccountId: 1,
        creditedAccountId: 2,
        value: 50,
        createdAt: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        debitedAccountId: 1,
        creditedAccountId: 2,
        value: 20, 
        createdAt: new Date('2011-08-01T19:58:51.000Z'),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};
