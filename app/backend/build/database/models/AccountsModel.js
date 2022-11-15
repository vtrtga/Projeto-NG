"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const TransactionsModel_1 = __importDefault(require("./TransactionsModel"));
const UsersModel_1 = __importDefault(require("./UsersModel"));
class Accounts extends sequelize_1.Model {
}
Accounts.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: sequelize_1.INTEGER,
        defaultValue: 100,
    }
}, {
    sequelize: _1.default,
    modelName: 'accounts',
    timestamps: true,
});
Accounts.hasOne(UsersModel_1.default);
Accounts.hasMany(TransactionsModel_1.default);
exports.default = Accounts;
//# sourceMappingURL=AccountsModel.js.map