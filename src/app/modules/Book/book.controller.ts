import { Request, Response, NextFunction } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { BookService } from "./book.service"
import { setDefaultAutoSelectFamily } from "net"


const createABook = catchAsync( async(req: Request, res: Response) =>{
  const result = await BookService.createABook(req.body)

sendResponse(res, {
  statusCode: 201,
  success: true,
  message: "Book successfully created",
  status: 201,
  data: result
})
})

const getAllBooks = catchAsync(async(req:Request, res: Response) =>{
  const result = await BookService.getAllBooks()

  sendResponse(res, {
    statusCode: 201,
    success:true,
    status: 200,
    message: "Books retrieved successfully",
    data: result
  })
  
})
const getBookById = catchAsync(async(req:Request, res: Response) =>{
  const result = await BookService.getBookById(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: 200,
    status: 200,
    message: "Book retrieved successfully",
    data: result
  })
})
const updateABook = catchAsync(async(req:Request, res: Response) =>{
  const result = await BookService.updateABook(req.params.id, req.body)

  sendResponse(res, {
    statusCode: 201,
    status: 200,
    success: true,
    message: "Book updated successfully",
    data: result
  })
})
const deleteABook = catchAsync(async(req:Request, res: Response) =>{
  await BookService.deleteABook(req.params.id);

  sendResponse(res, {
    status:200,
    statusCode: 200,
    success:true,
    message:  "Book successfully deleted",
    data: null
  })
})




export const BookController = {
  createABook,
  getAllBooks,
  getBookById,
  updateABook,
  deleteABook
}