"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const AccountsModel_1 = __importDefault(require("./AccountsModel"));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    accountId: {
        type: sequelize_1.INTEGER,
        references: {
            model: 'accounts',
            key: 'id',
        }
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
Users.belongsTo(AccountsModel_1.default, {
    foreignKey: 'accountId',
    targetKey: 'id',
});
exports.default = Users;
//# sourceMappingURL=UsersModel.js.map