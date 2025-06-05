"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const filePath = path_1.default.resolve(__dirname, '../db/todosData.json');
// Middleware to parse JSON body
app.use(express_1.default.json());
app.get('/todos', (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync(filePath, { encoding: 'utf-8' }));
    console.log(data);
    res.send('Hello World!!!!!!!');
});
app.get('/todo/:id', (req, res) => {
    const id = req.params;
    const query = req.query;
    res.send(query);
});
app.post('/todos/create', (req, res) => {
    const data = req.body;
    res.send(data);
});
exports.default = app;
