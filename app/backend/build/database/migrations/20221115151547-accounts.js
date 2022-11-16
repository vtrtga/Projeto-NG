
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accounts', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      balance: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('accounts');
  },
};