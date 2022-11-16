"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginService_1 = __importDefault(require("../services/LoginService"));
const Bcrypt_1 = __importDefault(require("../../utils/Bcrypt"));
const tokenGenerator_1 = __importDefault(require("../../utils/tokenGenerator"));
class LoginController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const result = yield this.loginService.login(req.body);
            if (!result)
                throw new Error('Incorrect username or password');
            const comparePassword = yield (0, Bcrypt_1.default)(password, result.password);
            if (!comparePassword) {
                return res.status(401).json({ message: 'Incorrect username or password' });
            }
            const token = (0, tokenGenerator_1.default)(username);
            return res.status(200).json({ token });
        });
        this.loginService = new LoginService_1.default();
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map