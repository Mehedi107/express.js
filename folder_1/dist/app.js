"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todo_route_1 = require("./todos/todo.route");
const app = (0, express_1.default)();
const filePath = path_1.default.resolve(__dirname, '../db/todosData.json');
// Middleware to parse JSON body
app.use(express_1.default.json());
app.use('/todo', todo_route_1.todoRouter);
exports.default = app;
