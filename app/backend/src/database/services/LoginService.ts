import IUserLogin from "../interfaces/IUserLogin";
import Users from "../models/UsersModel";

class LoginService {
  login = async (user:IUserLogin ) => {
    const result = await Users.findOne({
      where: { username: user.username }
    })
  };
}