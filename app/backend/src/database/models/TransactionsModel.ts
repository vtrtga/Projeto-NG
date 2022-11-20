import { DATE, INTEGER, Model } from 'sequelize';
import db from './db';
import Accounts from './AccountsModel';

export default class Transactions extends Model {
  id!: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
  value!: number;
  createdAt!: Date;
}

Transactions.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

  },
  debitedAccountId: {
    type: INTEGER,
  },
  creditedAccountId: {
    type: INTEGER,
  },
  value: INTEGER,
  createdAt: DATE,
}, {
  sequelize: db,
  modelName: 'transactions',
  timestamps: false,

});

Transactions.belongsTo(Accounts, {
  foreignKey: 'debitedAccountId',
});

Transactions.belongsTo(Accounts, {
  foreignKey: 'creditedAccountId',
});

Accounts.hasMany(Transactions, {
  foreignKey: 'id',
});
