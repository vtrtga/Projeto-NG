"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class Accounts extends sequelize_1.Model {
}
exports.default = Accounts;
Accounts.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'accounts',
            key: 'id',
        },
    },
    balance: {
        type: sequelize_1.INTEGER,
        defaultValue: 100,
    },
}, {
    sequelize: db_1.default,
    modelName: 'accounts',
    timestamps: true,
});
//# sourceMappingURL=AccountsModel.js.map