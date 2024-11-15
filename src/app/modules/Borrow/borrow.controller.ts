import { Request, Response,  } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { BorrowService } from "./borrow.service"


// Controller function for borrowing a book
const borrowABook = catchAsync( async(req: Request, res: Response) =>{
  const result = await BorrowService.borrowABook(req.body)

sendResponse(res, {
  statusCode: 201,
  success: true,
  message: "Book borrowed successfully",
  status: 200,
  data: result
})
})

// Controller for getiing overdue book list
const overdueBookList = catchAsync(async(req:Request, res: Response)=>{
  
  const result = await BorrowService.overdueBookList()

  sendResponse(res, {
    status: 200,
    statusCode: 200,
    message: result.length === 0 ? "No overdue books" : "Overdue borrow list fetched",
    success: true,
    data: result

  })
})



export const BorrowController = {
  borrowABook,overdueBookList
}