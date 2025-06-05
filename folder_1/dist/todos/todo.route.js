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
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res) => {
    res.send('This is from todos Router');
});
exports.todoRouter.post('/todo/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
}));
// async (req: Request, res: Response) => {
//   const { title } = req.body;
//   const result = await collection().insertOne({ title, completed: false });
//   res.status(201).json(result.ops?.[0] || { _id: result.insertedId, title, completed: false });
// };
