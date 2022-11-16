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
exports.validateFields = exports.findUser = void 0;
const schemas_1 = require("../validations/schemas");
const LoginService_1 = __importDefault(require("../database/services/LoginService"));
const validateFields = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    const { error } = schemas_1.loginSchema.validate(body);
    if (error)
        return res.status(400).json({ message: 'All fields must be filled' });
    next();
});
exports.validateFields = validateFields;
const findUser = (req, res, next) => {
    const { body } = req;
    const loginService = new LoginService_1.default();
    const user = loginService.login(body);
    if (!user)
        return res.status(401).json({ message: 'Incorrect email or password' });
    next();
};
exports.findUser = findUser;
//# sourceMappingURL=loginMiddlewares.js.map