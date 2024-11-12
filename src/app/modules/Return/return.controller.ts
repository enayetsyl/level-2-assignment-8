import { Request, Response,  } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { ReturnService } from "./return.service"

// Controlelr for returning a book

const returnABook = catchAsync( async(req: Request, res: Response) =>{
  await ReturnService.returnABook(req.body.borrowId)

sendResponse(res, {
  statusCode: 201,
  success: true,
  message: "Book returned successfully",
  status: 200,
  data: null
})
})





export const ReturnController = {
  returnABook
}