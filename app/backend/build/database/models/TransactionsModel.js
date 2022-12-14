"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
// eslint-disable-next-line import/no-cycle
const AccountsModel_1 = __importDefault(require("./AccountsModel"));
class Transactions extends sequelize_1.Model {
}
exports.default = Transactions;
Transactions.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    debitedAccountId: {
        type: sequelize_1.INTEGER,
        references: {
            model: 'accounts',
            key: 'id',
        },
    },
    creditedAccountId: {
        type: sequelize_1.INTEGER,
        references: {
            model: 'accounts',
            key: 'id',
        },
    },
    value: sequelize_1.INTEGER,
    createdAt: sequelize_1.DATE,
}, {
    sequelize: db_1.default,
    modelName: 'transactions',
    timestamps: false,
});
Transactions.belongsTo(AccountsModel_1.default, {
    foreignKey: 'debitedAccountId',
    targetKey: 'id',
});
Transactions.belongsTo(AccountsModel_1.default, {
    foreignKey: 'creditedAccountId',
    targetKey: 'id',
});
AccountsModel_1.default.hasMany(Transactions);
//# sourceMappingURL=TransactionsModel.js.map