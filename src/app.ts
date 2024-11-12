import  express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import  cookieParser from 'cookie-parser';
import prisma from './app/shared/prisma';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';


const app: Application = express();

// middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// routes
app.get('/', (req, res) => {
  console.log('get route hit')
  res.send('Hello World!')
})

app.use("/api", router)


// Global error handler
app.use(globalErrorHandler)


// Not found route
app.use((req: Request, res: Response, next: NextFunction)=>{
  res.status(404).json({
    success: false,
    message: 'Not Found',
    error: 
      {
        path: req.originalUrl,
        message: 'API Not Found'
      }
    
  })
})

export default app;

