import { DATE, INTEGER, Model } from 'sequelize';
import db from './db';
import { Accounts } from './index';

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
    references: {
      model: 'accounts',
      key: 'id',
    },
  },
  creditedAccountId: {
    type: INTEGER,
    references: {
      model: 'accounts',
      key: 'id',
    },
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
  targetKey: 'id',
});

Transactions.belongsTo(Accounts, {
  foreignKey: 'creditedAccountId',
  targetKey: 'id',
});
