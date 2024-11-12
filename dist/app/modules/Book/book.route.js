"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/', book_controller_1.BookController.createABook);
router.get("/", book_controller_1.BookController.getAllBooks);
router.get("/:id", book_controller_1.BookController.getBookById);
router.put("/:id", book_controller_1.BookController.updateABook);
router.delete("/:id", book_controller_1.BookController.deleteABook);
exports.BookRoutes = router;
