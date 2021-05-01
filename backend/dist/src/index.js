"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = require("./routes/users");
const sequelize = new sequelize_1.Sequelize('postgresql://ml-specialist-python:ml-addict@localhost:5432/postgres');
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
const app = express_1.default();
const PORT = 3000;
app.use(body_parser_1.default.json());
app.use('/users', users_1.usersRouter);
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
