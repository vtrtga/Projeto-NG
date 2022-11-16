"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginMiddlewares_1 = require("../../middlewares/loginMiddlewares");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const { login } = new LoginController_1.default();
const loginRouter = (0, express_1.Router)();
loginRouter.post('/', loginMiddlewares_1.validateFields, loginMiddlewares_1.findUser, login);
exports.default = loginRouter;
//# sourceMappingURL=LoginRouter.js.map