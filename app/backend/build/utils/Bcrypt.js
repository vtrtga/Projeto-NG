"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const bcryptCompare = (reqPassword, dbPassword) => (0, bcrypt_1.compare)(reqPassword, dbPassword);
exports.default = bcryptCompare;
//# sourceMappingURL=Bcrypt.js.map