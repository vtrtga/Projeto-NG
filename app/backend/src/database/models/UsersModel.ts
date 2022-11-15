import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Accounts from './AccountsModel';

class Users extends Model {
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
    references: {
      model: 'accounts',
      key: 'id',
    }
  },
},{
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

Users.belongsTo(Accounts, {
  foreignKey: 'accountId',
  targetKey: 'id',
})

export default Users;