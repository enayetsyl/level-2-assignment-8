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
exports.MemberController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const member_service_1 = require("./member.service");
const createAMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.createAMember(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Member successfully created",
        status: 201,
        data: result
    });
}));
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.getAllMembers();
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        status: 200,
        message: "Members retrieved successfully",
        data: result
    });
}));
const getMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.getMemberById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        status: 200,
        message: "Member retrieved successfully",
        data: result
    });
}));
const updateAMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.updateAMember(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        status: 200,
        success: true,
        message: "Member updated successfully",
        data: result
    });
}));
const deleteAMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield member_service_1.MemberService.deleteAMember(req.params.id);
    (0, sendResponse_1.default)(res, {
        status: 200,
        statusCode: 200,
        success: true,
        message: "Member successfully deleted",
        data: null
    });
}));
exports.MemberController = {
    createAMember,
    getAllMembers,
    getMemberById,
    updateAMember,
    deleteAMember
};