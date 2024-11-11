import { Response } from "express"
import { json } from "stream/consumers"

const sendResponse = <T>(res: Response, jsonData: {
  statusCode: number,
  success: boolean,
  message: string,
  status: number,
  meta?: {
    page: number,
    limit: number, 
    total: number
  },
  data: T | null | undefined
}) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    meta: jsonData.meta || null || undefined,
    status: jsonData.status,
    data: jsonData.data || null || undefined,
  })
}

export default sendResponse