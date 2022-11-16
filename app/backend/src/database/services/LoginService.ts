import IUserLogin from '../interfaces/IUserLogin';
import Users from '../models/UsersModel';

export default class LoginService {
  login = async (user:IUserLogin) => {
    const result = await Users.findOne({
      where: { username: user.username },
    });
    if (!result) return undefined;

    return result;
  };
}
