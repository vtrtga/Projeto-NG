import { INTEGER, Model } from 'sequelize';
import db from '.';

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
  debitedAccountId: INTEGER,
  creditedAccountId: INTEGER,
  value: INTEGER,
},{
  sequelize: db,
  modelName: 'transactions',
  timestamps: true,
});

export default Transactions;