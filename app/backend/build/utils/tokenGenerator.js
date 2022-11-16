"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
require('dotenv');
const secret = process.env.JWT_SECRET || 'jwt_secret';
const jwtConfig = {
    expiresIn: '24h',
    algorithm: 'HS256',
};
const tokenGenerator = (username) => {
    const token = (0, jsonwebtoken_1.sign)({ data: { username } }, secret, jwtConfig);
    return token;
};
exports.default = tokenGenerator;
//# sourceMappingURL=tokenGenerator.js.map