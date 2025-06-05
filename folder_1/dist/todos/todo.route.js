"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../config/mongodb");
const mongodb_2 = require("mongodb");
exports.todoRouter = express_1.default.Router();
// Save todo
exports.todoRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = req.body;
    try {
        const db = (0, mongodb_1.getDB)();
        const result = yield db.collection('todos').insertOne(newTodo);
        res.status(201).json(Object.assign(Object.assign({}, result), { message: 'Todo created' }));
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
    }
}));
// Get all todos
exports.todoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = (0, mongodb_1.getDB)();
        const todoCollection = db.collection('todos');
        const result = yield todoCollection.find().toArray();
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// Get todo by id
exports.todoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const db = (0, mongodb_1.getDB)();
        const todoCollection = db.collection('todos');
        const filter = { _id: new mongodb_2.ObjectId(id) };
        const result = yield todoCollection.findOne(filter);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// Delete todo by id
exports.todoRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const db = (0, mongodb_1.getDB)();
        const todoCollection = db.collection('todos');
        const filter = { _id: new mongodb_2.ObjectId(id) };
        const result = yield todoCollection.deleteOne(filter);
        res.status(201).json(Object.assign(Object.assign({}, result), { message: 'Successfully deleted todo' }));
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// Update todo
exports.todoRouter.patch('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description, priority, isComplete } = req.body;
    try {
        const db = (0, mongodb_1.getDB)();
        const todoCollection = db.collection('todos');
        const filter = { _id: new mongodb_2.ObjectId(id) };
        const updateDoc = {
            $set: {
                title,
                description,
                priority,
                isComplete,
            },
        };
        const result = yield todoCollection.updateOne(filter, updateDoc);
        res.status(201).json(Object.assign(Object.assign({}, result), { message: 'Successfully updated todo' }));
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
