import { BelongsTo, INTEGER, Model } from 'sequelize';
import db from '.';
import Accounts from './AccountsModel';

class Transactions extends Model {
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
  }
  },
  creditedAccountId: {
    type: INTEGER,
    references: {
      model: 'accounts',
      key: 'id',
    }
  },
  
  value: INTEGER,
},{
  sequelize: db,
  modelName: 'transactions',
  timestamps: true,
});

Transactions.belongsTo(Accounts, {
  foreignKey: 'debitedAccountId',
  targetKey: 'id',
})

Transactions.belongsTo(Accounts, {
  foreignKey: 'creditedAccountId',
  targetKey: 'id',
})

export default Transactions;