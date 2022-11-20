import { INTEGER, Model, STRING } from 'sequelize';
import Accounts from './AccountsModel';
import db from './db';

export default class Users extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: false,
  timestamps: false,
});

Users.belongsTo(Accounts, {
  foreignKey: 'accountId',
  targetKey: 'id',
});

Accounts.hasOne(Users);
