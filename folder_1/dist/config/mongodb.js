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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = exports.connectDB = exports.client = void 0;
require("dotenv/config");
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://demoTodo:baVuzued1HIK31dj@cluster0.blfnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
let db;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.client.connect();
    db = exports.client.db('demoTodoDB');
    console.log('✅ Connected to MongoDB');
});
exports.connectDB = connectDB;
const getDB = () => {
    if (!db)
        throw new Error('❌ DB not connected');
    return db;
};
exports.getDB = getDB;
