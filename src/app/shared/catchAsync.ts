import { NextFunction, Request, RequestHandler, Response } from "express";

// Reuseable higher order function for try catch block

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) =>{
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export default catchAsync;