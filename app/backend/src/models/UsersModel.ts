import { INTEGER, Model } from 'sequelize';
import db from '.';

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
  }
},{
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;