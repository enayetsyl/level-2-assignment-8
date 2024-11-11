import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";


const validateRequst = (schema: AnyZodObject) => async(req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body
    })

      return next()
  } catch (error) {
    next(error)
  }
}

export default validateRequst