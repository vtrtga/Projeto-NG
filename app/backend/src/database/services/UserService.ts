import * as bcrypt from 'bcrypt';
import * as Sequelize from 'sequelize';
import INewUser from '../interfaces/INewUser';
import Users from '../models/UsersModel';
import Accounts from '../models/AccountsModel';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config/config');

const sequelize = new Sequelize.Sequelize(config);

export default class UserService {
  getUser = async (username: string) => {
    const findUser = await Users.findOne({
      where: { username },
    });

    return findUser;
  };

  // eslint-disable-next-line max-lines-per-function
  create = async (body: INewUser) => {
    const { password } = body;
    const t = await sequelize.transaction();
    const hashPassword = await bcrypt.hash(password, 6);
    try {
      const newAccount = await Accounts.create({}, {
        transaction: t,
      });
      const newUser = await Users.create(
        { username: body.username, password: hashPassword, accountId: newAccount.id },
        { transaction: t },
      );

      await t.commit();

      return newUser;
    } catch (e) {
      console.log(e);

      throw e;
    }
  };
}
