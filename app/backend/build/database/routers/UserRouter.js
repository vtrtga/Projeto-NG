"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserRouter = (0, express_1.Router)();
const userControlller = new UserController_1.default();
UserRouter.get('/', userControlller.getUser);
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map