"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// eslint-disable-next-line import/no-cycle
const AccountsModel_1 = __importDefault(require("./AccountsModel"));
const db_1 = __importDefault(require("./db"));
class Users extends sequelize_1.Model {
}
exports.default = Users;
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
        },
    },
}, {
    sequelize: db_1.default,
    modelName: 'users',
    underscored: false,
    timestamps: false,
});
Users.belongsTo(AccountsModel_1.default, {
    foreignKey: 'accountId',
    targetKey: 'id',
});
AccountsModel_1.default.hasOne(Users);
//# sourceMappingURL=UsersModel.js.map