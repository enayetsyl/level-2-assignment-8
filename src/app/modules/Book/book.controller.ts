import { Request, Response} from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { BookService } from "./book.service"


// Controller for creating a book into db
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

// Controller for getting all books from db
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

// Controller for getting a book from db
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


// Controller for updating a book into db
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

// Controller for deleting a book from db
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