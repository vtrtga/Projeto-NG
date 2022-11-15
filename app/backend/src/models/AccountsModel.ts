import { INTEGER, Model } from 'sequelize';
import db from '.';

class Accounts extends Model {
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
  balance: INTEGER,
},{
  sequelize: db,
  modelName: 'accounts',
  timestamps: true,
});

export default Accounts;