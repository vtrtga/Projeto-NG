import * as bcrypt from 'bcrypt';
import * as Sequelize from 'sequelize';
import INewUser from '../interfaces/INewUser';
import Users from '../models/UsersModel';
import Accounts from '../models/AccountsModel';
import IBalance from '../interfaces/IBalance';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config/config');

// const sequelize = new Sequelize.Sequelize(config);

export default class UserService {
  getUser = async (username: string) => {
    const findUser = await Users.findOne({
      where: { username },
    });

    return findUser;
  };

  // eslint-disable-next-line max-lines-per-function
  create = async (body: INewUser) => {
    const sequelize = new Sequelize.Sequelize(config);
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
      const userInfo = {
        id: newUser.id,
        username: newUser.username,
        accountId: newAccount.id,
        balance: newAccount.balance,
      };

      return userInfo;
    } catch (e) {
      console.log(e);

      throw e;
    }
  };

  checkBalance = async (id: number): Promise<IBalance> => {
    const userBalance: Users | null = await Users.findOne({
      where: { id },
      attributes: [],
      include: { model: Accounts, attributes: ['balance'] },
      // raw: true,
    });
    const balance = userBalance?.dataValues.account.dataValues;
    return balance;
  };
}
