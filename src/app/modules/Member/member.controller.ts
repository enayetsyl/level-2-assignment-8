import { Request, Response } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import { MemberService } from "./member.service"



const createAMember = catchAsync( async(req: Request, res: Response) =>{
  const result = await MemberService.createAMember(req.body)

sendResponse(res, {
  statusCode: 201,
  success: true,
  message: "Member successfully created",
  status: 201,
  data: result
})
})

const getAllMembers = catchAsync(async(req:Request, res: Response) =>{
  const result = await MemberService.getAllMembers()

  sendResponse(res, {
    statusCode: 201,
    success:true,
    status: 200,
    message: "Members retrieved successfully",
    data: result
  })
  
})
const getMemberById = catchAsync(async(req:Request, res: Response) =>{
  const result = await MemberService.getMemberById(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: 200,
    status: 200,
    message: "Member retrieved successfully",
    data: result
  })
})
const updateAMember = catchAsync(async(req:Request, res: Response) =>{
  const result = await MemberService.updateAMember(req.params.id, req.body)

  sendResponse(res, {
    statusCode: 201,
    status: 200,
    success: true,
    message: "Member updated successfully",
    data: result
  })
})
const deleteAMember = catchAsync(async(req:Request, res: Response) =>{
  await MemberService.deleteAMember(req.params.id);

  sendResponse(res, {
    status:200,
    statusCode: 200,
    success:true,
    message:  "Member successfully deleted",
    data: null
  })
})




export const MemberController = {
  createAMember,
  getAllMembers,
  getMemberById,
  updateAMember,
  deleteAMember
}