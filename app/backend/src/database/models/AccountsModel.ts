import { INTEGER, Model } from 'sequelize';
import db from './db';

export default class Accounts extends Model {
  id!: number;
  balance!: number;
}

Accounts.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: INTEGER,
    defaultValue: 100,
  },
}, {
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});
