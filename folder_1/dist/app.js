"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_route_1 = require("./todos/todo.route");
const app = (0, express_1.default)();
// Middleware to parse JSON body
app.use(express_1.default.json());
app.use('/todo', todo_route_1.todoRouter);
app.use('/todos', todo_route_1.todoRouter);
app.get('/', (req, res) => {
    res.send('Server is running...');
});
exports.default = app;
