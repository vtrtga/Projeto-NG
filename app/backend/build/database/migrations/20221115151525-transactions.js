module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      debitedAccountId: Sequelize.INTEGER,
      creditedAccountId: Sequelize.INTEGER,
      value: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('transactions');
  },
};