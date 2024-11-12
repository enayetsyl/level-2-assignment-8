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
exports.BorrowService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const borrowABook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('bookid, member id', data);
    const result = yield prisma_1.default.borrowRecord.create({ data: Object.assign(Object.assign({}, data), { borrowDate: new Date() })
    });
    return result;
});
const overdueBookList = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const overdueBooks = yield prisma_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: fourteenDaysAgo,
            },
        },
        include: {
            book: {
                select: {
                    title: true, // Fetch the book title
                },
            },
            member: {
                select: {
                    name: true, // Fetch the member name
                },
            },
        },
    });
    // Map the results to include the desired fields
    const formattedOverdueBooks = overdueBooks.map(record => ({
        borrowId: record.borrowId,
        bookTitle: record.book.title,
        borrowerName: record.member.name,
        overdueDays: Math.floor((new Date().getTime() - record.borrowDate.getTime()) / (1000 * 3600 * 24)), // Calculate overdue days
    }));
    return formattedOverdueBooks;
});
exports.BorrowService = {
    borrowABook, overdueBookList
};
