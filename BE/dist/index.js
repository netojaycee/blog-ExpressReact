"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require('mysql');
require("dotenv/config");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mhapy',
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});
const PORT = 7979;
app.listen(PORT, () => {
    console.log('port is listening on port ' + PORT);
});
